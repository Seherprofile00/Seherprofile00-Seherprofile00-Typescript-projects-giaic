import inquirer from "inquirer";
import chalk from "chalk";
import { TIMEOUT } from "dns";

console.log(chalk.bold.bgCyan.blackBright(`WELCOME TO THE QUIZ`));


const ready_question= await inquirer.prompt([{
    name:"o",
    type:"list",
    message:"ARE U READY FOR QUIZ?",
    choices:["yess","no"]
}])
// setTimeout(ready_question,2000)

if( ready_question.o==="yess" ){
    console.log(chalk.bold.cyanBright`enter into the quizz`);
    
}else{console.log(` kindly be ready for quizz`);
}

const quiz:{
    question_1:string,
    question_2:string,
    question_3:string,
    question_4:string,
    question_5:string,
}=await inquirer.prompt([
    {
    name:"question_1",
    type:"list",
    message:"Q1- What does tsc stands for? ",
    choices:["Typescript configuration","Typescript compiler","Typescript config","Typescript code"]
},
{
    name:"question_2",
    type:"list",
    message:" Q2_ Which of the following file extension is used by typescript to store source code?",
    choices:[".js","tsd","ts","tsc"]
}, {
    name:"question_3",
    type:"list",
    message:"Q3_ Typescript is used to generate which type of code? ",
    choices:["C++","JavaScript","Java","CoffeeScript"]
}, {
    name:"question_4",
    type:"list",
    message:"What is base types of all types in Typescript? ",
    choices:["void","string","number","any","never"]
}, {
    name:"question_5",
    type:"list",
    message:" console.log(`hey`)=_____________",
    choices:["hey","`hey`","error","`heyy`"]
}


])


let score:number=0;

switch(quiz.question_1){
    case"Typescript compiler":
    console.log(`Q1_ correct`);
    ++ score;
    break;
    default:
    console.log(`Q1_ incoorect`);
    
    
}

switch(quiz.question_2){
    case"ts":
    console.log(`Q2_ correct`);
    ++ score;
    break;
    default:
    console.log(`Q2_ incoorect`);
    
    
}

switch(quiz.question_3){
    case"JavaScript":
    console.log(`Q3_ correct`);
    ++ score;
    break;
    default:
    console.log(`Q3_ incoorect`);
    
    
}
switch(quiz.question_4){
    case"any":
    console.log(`Q4_ correct`);
    ++ score;
    break;
    default:
    console.log(`Q4_ incoorect`);
    
    
}
switch(quiz.question_5){
    case"hey":
    console.log(`Q5_ correct`);
    ++ score;
    break;
    default:
    console.log(`Q5_ incoorect`);
    
    
}
console.log(`score:`, score);







