let salary=0
if(salary<=5999){
     console.log("Monthly contribution is 150.00")
}
else if(salary>6000 && salary<=7999){
     console.log("Monthly contribution is 300.00")
}

else if(salary>8000 && salary<=11999){
     console.log("Monthly contribution is 400.00")
}
 
else if(salary>12000 && salary<=14999){
     console.log("Monthly contribution is 500.00")
}
else if(salary>15000 && salary<=19999){
     console.log("Monthl contribution is 600.00")
}
else if(salary>20000 && salary<=24999){
     console.log("Monthly contribution is 750.00")
}
else if(salary>25000 && salary<=29999){
     console.log("Monthly contribution is 850.00")
}
else if(salary>30000 && salary<=49999){
     console.log("Monthly contribution is 1000.00")
}
else if(salary>50000 && salary<=99999){
     console.log("Monthly contribution is 1500.00")
}
else if(salary>=100000){
     console.log("Your monthly contribution is 2000.00")
}

else {
     console.log("You cannot contribute");
     
}
