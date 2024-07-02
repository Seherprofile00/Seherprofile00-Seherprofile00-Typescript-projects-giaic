#! /usr/bin/env node
import inquirer from "inquirer";




console.log(`NICE TO MEET YOU`);
let cquestion_no1=await inquirer.prompt({

    name:"question 1",
    message:"press enter for moving further"

}
)
console.log(cquestion_no1);



let cquestion_no2=await inquirer.prompt({

               name:"question 2",
               message:"what is your name"

}
)
console.log(cquestion_no2);




const answer= await inquirer.prompt([
    
    {message:"Enter first number.",type:"number",name:"firstNumber"},
{message:"Enter second number.",type:"number",name:"secondNumber"},
{message:"select one of the operator to perform operation",
type:"list",
name:"operator",
choices:["Addition","subtraction","Multiplications","division"]} ]);






if(answer.operator==="Addition"){

    console.log(answer.firstNumber+answer.secondNumber)
}
else if(answer.operator==="subtraction"){

    console.log(answer.firstnumber-answer.secondNumber)
}
else  if(answer.operator==="Multiplications"){

    console.log(answer.firstnumber*answer.secondNumber)
}
else if (answer.operator==="division"){

    console.log(answer.firstnumber/answer.secondNumber)
}
else ("plese select valid operator")




