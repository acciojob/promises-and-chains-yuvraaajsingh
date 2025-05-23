//your JS code here. If required.
function doSomething() {
  let age = document.getElementById("age").value;
  let name = document.getElementById("name").value;

  if (age == "" || name == "") {
    alert("Please enter valid details");
  }

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (age > 18) {
        resolve("Welcome, . You can vote.");
      } else {
        reject("Oh sorry . You aren't old enough.");
      }
    }, 1000);
  });
}