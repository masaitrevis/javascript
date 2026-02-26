let salary=500000

if(salary>=0 && salary<=3000){
     console.log("Tax rate is 10%");
     
}

else if(salary>=30001 && salary<=60000){
     console.log("Tax rate is 15%");
     
}

else if(salary>=60001 && salary<=100000){
     console.log("Tax rate is 20%");
     
}

else if(salary>100001){
     console.log("Tax rate is 25%");
     
}

else {
     console.log("Invalid");
     
}