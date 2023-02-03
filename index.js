function scratchauth() {
  var scratch = "https://scratch.mit.edu/";
  fetch(scratch)
    .then(res => res.text())
    .then(text => {
      var content = text;
    })
    .catch(err => console.error(err));
    this.icon = function() {
      return content.querySelector(".profile-icon").src;
    }
    this.username = function() {
      return content.querySelector(".profile-name").innerHTML;
    }
    return this;
}