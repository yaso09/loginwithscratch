function loginwithscratch(username) {
    var save = document.body.innerHTML;
    var scratch = "https://scratch.mit.edu";
    let content = fetch(scratch)
        .then(res => res.text())
        .then(text => {
            console.log(text);
        })
        .catch(err => console.log(err));
    document.body.innerHTML = content;
    if(document.querySelector(".profile-name").innerHTML.search(username) > 0) {
        console.log("Loginned with " + username + " account");
        return true;
    }
    else { 
        console.error("Not loginned with " + username + "!");
        return false;
    }
    document.body.innerHTML = save;
}