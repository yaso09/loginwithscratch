function loginwithscratch(username) {
    var fs = require("fs");
    var scratch = fs.readFile("https://scratch.mit.edu");
    if(document.querySelector(".profile-name").innerHTML.search(username) > 0) {
      console.log("Loginned with " + username + " account");
      return true;
    }
    else { 
      console.error("Not loginned with " + username + "!");
      return false;
    }
}