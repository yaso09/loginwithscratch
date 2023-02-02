function loginwithscratch(username) {
    if(document.querySelector(".profile-name").innerHTML.search(username) > 0) {
        return "Loginned with " + username + " account";
    }
    else console.error("Not loginned with " + username + "!");
}