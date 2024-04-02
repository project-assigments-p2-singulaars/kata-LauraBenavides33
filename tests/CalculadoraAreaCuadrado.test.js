import { describe, expect, it, beforeAll } from "vitest";
import {CalculadoraAreaCuadrado as CalculadoraAreaCuadrado} from "../src/css-js/CalculadoraAreaCuadrado";

describe('CalculadoraAreaCuadrado', () => {
    it('should return exist function "CalculadoraAreaCuadrado"',()=>{
        expect(CalculadoraAreaCuadrado).toBeDefined();
    });

    it('should print when the numbers are the same value and int',()=>{
        const number=6;
        const number2=6;
        const sut = CalculadoraAreaCuadrado(number,number2)
        expect(sut).toBe("Son enteros e iguales")
    })

    it('should print when the numbers arent the same value and int',()=>{
        const number=15;
        const number2=6;
        const sut = CalculadoraAreaCuadrado(number,number2)
        expect(sut).toBe("No son enteros ni iguales")
    })

    it('should print when the numbers arent valid(null or negative)',()=>{
        const number=null;
        const number2=-4;
        const sut = CalculadoraAreaCuadrado(number,number2)
        expect(sut).toBe("Los numeros son enteros pero son zero, negativos o no tienen valor")
    })


    
    
});