import { describe, expect, it, beforeAll } from "vitest";
import { JSDOM } from "jsdom";
import {fizzbuzz} from "../src/css-js/fizzbuzz";

describe('FizzBuzz', () => {
    it('should return exist function "fizzbuzz',()=>{
        expect(fizzbuzz).toBeDefined();
    });

    it('should print Fizz when the numbers are the same value and int',()=>{
        const number=6;
        const number2=6;
        const sut = fizzbuzz(number,number2)
        expect(sut).toBe("Fizz")
    })

    it('should print Buzz when the numbers arent the same value and int',()=>{
        const number=15;
        const number2=7;
        const sut = fizzbuzz(number,number2)
        expect(sut).toBe("Buzz")
    })

    it('should print FizzBuzz when the numbers arent valid(null or negative)',()=>{
        const number=null;
        const number2=-8;
        const sut = fizzbuzz(number,number2)
        expect(sut).toBe("FizzBuzz")
    })


    
    
});