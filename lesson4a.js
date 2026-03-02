// funtions with parameters
function greet(name){
     
     
     console.log("Hello", name);
     

}
greet("Trevis")
greet("Joe")

function favorite_county(counties){
     console.log(`favourite county is,${counties}`)
}

favorite_county("Mombasa")
favorite_county("Kisumu")
favorite_county("Nairobi")

function add(num1,num2){
     let sum=num1+num2
     console.log(`The sum is, ${sum}`)

}
add(num1=12,num2=22)
add(num1=50,num2=500)

function subtract(num1,num2){
     let subtraction=num1-num2
     console.log(`The answer is, ${subtraction}`)

}
subtract(num1=12,num2=22)
subtract(num1=1000,num2=500)


function modulus(num1,num2){
     let modulus=num1%num2
     console.log(`The modulus is, ${modulus}`)

}
modulus(num1=42,num2=22)



function division(num1,num2){
     let division=num1/num2
     console.log(`The division is, ${division}`)

}
division(num1=12,num2=22)

function simple_interest(principal,rate,time){
    let simple_interest=principal*rate/100*time
     console.log(`The simple_interest is, ${simple_interest}`)
}
simple_interest(principal=30000,rate=8,time=4)
function bmi(weight,height){
     
     bodymassindex=weight/height**2
     console.log(`the bmi is, ${bodymassindex}`);
     
}
bmi(weight=5, height=6.5)
