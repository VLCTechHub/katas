#include <99-bottles.h>

const char *verseFmt =
  "%d bottles of beer on the wall, \
%d bottles of beer. Take one down and pass it around, \
%d bottle%s of beer on the wall.";

const char *oneBottleVerseFmt = "1 bottle of beer on the wall, \
1 bottle of beer. Take it down and pass it around, \
no more bottles of beer on the wall.";

const char *zeroBottlesVerseFmt = "No more bottles of beer on the wall, \
no more bottles of beer. Go to the store and buy some more, \
99 bottles of beer on the wall.";

struct StringWithLength {
  char *ptr;
  size_t length;

  StringWithLength(size_t len) : length(len) {
    this->ptr = new char[this->length];
    memset(this->ptr, 0, this->length);
  }

  ~StringWithLength() {
    delete[] this->ptr;
  }
};

static void formatZeroBottles(char *ptr, size_t length, int numBottles, int remainingBottles) {
  snprintf(ptr, length, "%s", zeroBottlesVerseFmt);
}

static void formatOneBottle(char *ptr, size_t length, int numBottles, int remainingBottles) {
  snprintf(ptr, length, "%s", oneBottleVerseFmt);
}

static void formatBottles(char *ptr, size_t length, int numBottles, int remainingBottles) {
  auto pluralBottles = remainingBottles == 1 ? "" : "s";
  snprintf(
    ptr,
    length,
    verseFmt,
    numBottles,
    numBottles,
    remainingBottles,
    pluralBottles
  );
}

static void (*formatVerse[])(char *, size_t, int, int) = {
  [0] = formatZeroBottles,
  [1] = formatOneBottle,
  [2 ... 99] = formatBottles
};

static std::string buildVerse(int numBottles, int remainingBottles) {
  StringWithLength versePtr(strlen(verseFmt) + 32);

  formatVerse[numBottles](
    versePtr.ptr,
    versePtr.length,
    numBottles,
    remainingBottles
  );

  std::string verse(versePtr.ptr);

  return verse;
}

Verse Bottles_BuildVerse(int numBottles) {
  auto remainingBottles = numBottles - 1;

  Verse result = {
    .remainingBottles = remainingBottles,
    .verse = buildVerse(numBottles, remainingBottles)
  };

  return result;
}

std::string Bottles_Sing(int numBottles) {
  std::string fullSong;

  do {
    Verse verse = Bottles_BuildVerse(numBottles);
    fullSong += verse.verse + "\n\n";
    numBottles = verse.remainingBottles;
  } while (numBottles >= 0);

  return fullSong;
}

