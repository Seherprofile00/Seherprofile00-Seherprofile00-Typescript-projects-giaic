import inquirer from "inquirer";

let todos:string[]=["PAKORA"]

async function createtodo(todos:string[]){
    
    do{

    let wellcome=console.log("Hey... Wellcome to the todo list app")
    let operation=await inquirer.prompt({

type:"list",
name:"operator",
message:"what u want to o?",
choices:["add","view","upate","elete"]

    })

if(operation.operator==="add"){
    let add=await inquirer.prompt({
        type:"input",
        name:"additems",
        message:"please add items"
        
    })
    todos.push(add.additems)
    console.log(todos)
}

if(operation.operator==="view"){
    console.log(todos);
}

if(operation.operator==="upate"){

    let upate=await inquirer.prompt({

        type:"list",
        name:"upateitems",
        message:"select items to upate",
        choices:todos
        
            },
            
            
        
        )
let update2=await inquirer.prompt({
    type:"input",
    name:"upateitems2",
    message:"select items to upate",
})

    let newtoos=todos.filter(val=>val !=upate.upateitems)
    todos=[...newtoos,update2.upateitems2]
}
if(operation.operator==="delete")
{let remove=await inquirer.prompt({

    type:"list",
    name:"removeitems",
    message:"select items to delete",
    choices:todos
    })}
}
while(true)
    


}
    createtodo(todos)