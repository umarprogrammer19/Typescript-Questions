// 32. Checking Usernames: Do the following to create a program that simulates 
// how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.
// • Make another list of five usernames called new_users. 
// Make sure one or two of the new usernames are also in the current_users list.
// • Loop through the new_users list to see if each new username has already been used. 
// If it has, print a message that the person will need to enter a
// new username. If a username has not been used, 
// print a message saying that the username is available.

// • Make a list of five or more usernames called current_users.

let current_users: string[] = ["john", "alice", "mary", "alice", "jenny"];
// • Make another list of five usernames called new_users. 
let new_users: string[] = ["peter", "john", "jerry", "alice", "susan"];
// • Loop through the new_users
for (let new_user of new_users) {
    // If it has, print a message that the person will need to enter a
    // new username. If a username has not been used,
    if (current_users.includes(new_user)) {
        console.log(`The username ${new_user} is already taken. please enter a new username.`);
    } else {
        // If a username has not been used, 
        // print a message saying that the username is available.
        console.log(`The username ${new_user} is available.`);
    }
}