function doSomething() {
  let age = document.getElementById("age").value;
  let name = document.getElementById("name").value;

  if (age == "" || name == "") {
    alert("Please enter valid details");
  }

  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (age > 18) {
        resolve();
      } else {
        reject();
      }
    }, 1000);
  }).then(function(){
    console.log("Welcome, . You can vote.")
  }).catch(function(data){
    console.log("Oh sorry . You aren't old enough.");
    
  })