#pragma once
#include <string>

struct Verse {
  int remainingBottles;
  std::string verse;
};

Verse Bottles_BuildVerse(int numBottles);

std::string Bottles_Sing(int numBottles);