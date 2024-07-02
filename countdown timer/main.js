import inquirer from "inquirer";
import { differenceInSeconds } from "date-fns";
import { setInterval } from "timers/promises";
const res = await inquirer.prompt([{
        name: 'User_Input',
        type: "number",
        message: "PLEASE ENTER THE AMOUNT OF SECONDS",
        validate: (input) => {
            if (isNaN(input)) {
                return "PLEASE ENTER VALID NUMBER";
            }
            else if (input > 60) {
                return "SECONDS MUST BE LESS THAN 60";
            }
            else {
                return true;
            }
        }
    }
]);
let input = res.User_Input;
function startTime(val) {
    const intTime = new Date().setSeconds(new Date().getSeconds() + val);
    const intervalTime = new Date(intTime);
    setInterval((() => {
        const currTime = new Date(intTime);
        const timeDiff = differenceInSeconds(intervalTime, currTime);
        if (timeDiff <= 0) {
            console.log("timer has expired");
            process.exit();
        }
        const min = Math.floor((timeDiff % (3600 * 24)) / 3600);
        const sec = Math.floor(timeDiff % 60);
        console.log(`${min.toString().padStart(2, "0")}:${sec}`);
    }), 1000);
}
startTime(input);
