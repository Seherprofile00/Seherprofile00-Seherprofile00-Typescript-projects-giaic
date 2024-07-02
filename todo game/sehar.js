var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import inquirer from "inquirer";
let todos = ["sehar"];
function createtodo(todos) {
    return __awaiter(this, void 0, void 0, function* () {
        let wellcome = console.log("Hey... Wellcome to the todo list app");
        let operation = yield inquirer.prompt({
            type: "list",
            name: "operator",
            message: "what u want to o?",
            choices: ["add", "view", "upate", "elete"]
        });
        if (operation.operator === "add") {
            let add = yield inquirer.prompt({
                type: "input",
                name: "additems",
                message: "please add items"
            });
            todos.push(add.additems);
            console.log(todos);
        }
        if (operation.operator === "view") {
            console.log(todos);
        }
        if (operation.operator === "upate") {
            let upate = yield inquirer.prompt({
                type: "list",
                name: "upateitems",
                message: "select items to upate",
                choices: todos
            });
        }
        let update2 = yield inquirer.prompt({
            type: "input",
            name: "upateitems2",
            message: "select items to upate",
        });
        let newtoos = todos.filter(val => val != upate.upateitems);
        todos = [...newtoos, update2.upateitems2];
    });
}
createtodo(todos);
