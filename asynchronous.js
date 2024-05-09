

// Asynchronous Function Assignment
// Write an asynchronous function that accepts a message string and a delay time in milliseconds. 
// The function should log the message to the console after the specified delay time.




async function  delayedlog(
    message,delayed
){
    await new Promise( 
        resolve=>setTimeout(
            resolve,console.log(message)
        )
    );
}
delayedlog("Hello a bright day",2000)


// You have an array of user IDs and a function getUserData(id) that returns a Promise with user data when given a user ID. 
// Write an asynchronous function that fetches and logs the data 
// for each user ID one by one, in sequence.


async function fetchuserDatasequentially(userids){
for(const userid of userids) ;
}
try{
    const userData=await
    getuserData(userid);
    console.log(userData);
}


catch(error){
    console.log({error});
    console.log(error )
    `fetching user data for userid${userid}`;
}




// You have an asynchronous function performTask() that returns a Promise. 
// The Promise resolves if the task is successful and rejects if 
// there's an error. Write a function that calls performTask() and logs a custom success message
//  if the task is successful, and a custom error message if there's an error.

 async function performTask(){

 }

 async function executeTask(){
    try{
        await performTask();
        console.log("Task was successful")
     }catch(error){
        console.error
        ("error occured during task execution",error);
     }

 }

 
    executeTask()


   
//     Retry Logic:
// Scenario:
// Write a function unstableTask that:

// 1.Accepts a taskName and failureProbability (a number between 0 and 1).
// 2. Returns a Promise that:
// Resolves immediately with a success message if a randomly generated number is greater than failureProbability.
// Rejects immediately with a failure message if a randomly generated number is less than or equal to failureProbability.

function unstableTask(taskName, failureProbability) {

    const randomNumber = Math.random();

    
    return new Promise((resolve, reject) => {
        if (randomNumber > failureProbability) {
            resolve(` ${taskName} completed.`);
        } else {
            reject(` ${taskName} not completed.`);
        }
    });
}


// Write another function executeWithRetry that:

// Accepts a taskName, retries, and failureProbability.
// Uses a retry mechanism to attempt the unstableTask up to retries times.
// Logs whether the task succeeded or failed after all attempts.



function executeWithRetry(taskName, retries, failureProbability) {

    const executeAndLog = async (attempt) => {
        console.log(`Attempt ${attempt}: Executing unstableTask for ${taskName}`);
        try {
            const result = await unstableTask(taskName, failureProbability);
            console.log(result);
            return true;
        } catch (error) {
            console.log(error);
            return false; 
        }
    };

    
    let success = false;
    for (let i = 1; i <= retries; i++) {
        success =  executeAndLog(i);
        if (success) break; 
    }


    if (success) {
        console.log(` ${taskName} succeeded after ${retries} trials.`);
    } else {
        console.log(` ${taskName} failed after ${retries} trials.`);
    }
}