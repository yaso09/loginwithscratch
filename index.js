function loginwithscratch(username) {
    if(fetch("https://scratch.mit.edu").then(src => console.log(src)).search(username) > 0) {
        return "Opened with " + username + " account";
    }
    else console.error("User not found!");
}