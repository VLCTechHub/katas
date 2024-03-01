package com.github.jobosk.romannumber.service;

import org.springframework.data.util.Pair;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RomanNumberService {

    final List<Pair<String, String>> replaces = List.of(
            Pair.of("IIII", "IV")
            , Pair.of("IVI", "V")
            , Pair.of("VIV", "IX")
            , Pair.of("IXI", "X")
            , Pair.of("XXXXX", "L")
            , Pair.of("LL", "C")
            , Pair.of("CCCC", "CD")
            , Pair.of("CDC", "D")
            , Pair.of("DCD", "CM")
            , Pair.of("CMC", "M")
    );

    public String getRoman(final int arabicNumber) {
        String result = "";
        for (int i = 1; i <= arabicNumber; i++) {
            result += "I";
            result = applyReplaces(result, replaces);
        }
        return result;
    }

    private String applyReplaces(String result, final List<Pair<String, String>> replaces) {
        for (final Pair<String, String> replace : replaces) {
            result = result.replace(replace.getFirst(), replace.getSecond());
        }
        return result;
    }
}
