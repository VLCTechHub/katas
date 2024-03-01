package com.github.jobosk.romannumber;

import com.github.jobosk.romannumber.service.RomanNumberService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.context.annotation.Import;

import static org.junit.jupiter.api.Assertions.assertEquals;

@Import({
        RomanNumberService.class
})
@SpringBootTest
public class RomanNumberTest {

    @Autowired
    RomanNumberService service;

    @Test
    public void getRoman_when1_isOk() {
        assertEquals("I", service.getRoman(1));
    }

    @Test
    public void getRoman_when2_isOk() {
        assertEquals("II", service.getRoman(2));
    }

    @Test
    public void getRoman_when4_isOk() {
        assertEquals("IV", service.getRoman(4));
    }

    @Test
    public void getRoman_when5_isOk() {
        assertEquals("V", service.getRoman(5));
    }

    @Test
    public void getRoman_when6_isOk() {
        assertEquals("VI", service.getRoman(6));
    }

    @Test
    public void getRoman_when9_isOk() {
        assertEquals("IX", service.getRoman(9));
    }

    @Test
    public void getRoman_when10_isOk() {
        assertEquals("X", service.getRoman(10));
    }

    @Test
    public void getRoman_when11_isOk() {
        assertEquals("XI", service.getRoman(11));
    }

    @Test
    public void getRoman_when14_isOk() {
        assertEquals("XIV", service.getRoman(14));
    }

    @Test
    public void getRoman_when15_isOk() {
        assertEquals("XV", service.getRoman(15));
    }

    @Test
    public void getRoman_when16_isOk() {
        assertEquals("XVI", service.getRoman(16));
    }

    @Test
    public void getRoman_when19_isOk() {
        assertEquals("XIX", service.getRoman(19));
    }

    @Test
    public void getRoman_when20_isOk() {
        assertEquals("XX", service.getRoman(20));
    }

    @Test
    public void getRoman_when50_isOk() {
        assertEquals("L", service.getRoman(50));
    }

    @Test
    public void getRoman_when100_isOk() {
        assertEquals("C", service.getRoman(100));
    }

    @Test
    public void getRoman_when400_isOk() {
        assertEquals("CD", service.getRoman(400));
    }

    @Test
    public void getRoman_when500_isOk() {
        assertEquals("D", service.getRoman(500));
    }

    @Test
    public void getRoman_when900_isOk() {
        assertEquals("CM", service.getRoman(900));
    }

    @Test
    public void getRoman_when1000_isOk() {
        assertEquals("M", service.getRoman(1000));
    }
}

