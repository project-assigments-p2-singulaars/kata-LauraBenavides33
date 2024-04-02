// Calculadora del area de un cuadrado
// 1. Cuando los valores son int y son iguales, es decir , forman un cuadrado, imprime "Fizz"
// 2. Cuando los valores son int y numeros diferentes y, por lo tanto, no forman un cuadrado, imprime "Buzz"
// 3. Cuando los números son negativos, zero o no tienen un valor, imprime "FizzBuzz"

function CalculadoraAreaCuadrado(number,number2){
    if(number === number2 && (number&&number2)/1){
        return "Son enteros e iguales"
    } else if(number !== number2&& (number&&number2)/1){
        return "No son enteros ni iguales"
    } else if ((number||number2)<=0||(number||number2)===null){
        return "Los numeros son enteros pero son zero, negativos o no tienen valor"
    } return number,number2
}

module.exports ={CalculadoraAreaCuadrado}