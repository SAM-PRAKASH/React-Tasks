var s1 = document.getElementsByTagName('h3')[0];
s1.style.fontSize = "larger"

let timeout;

function myFunction() {
  timeout = setTimeout(alertFunc, 1000);
}

function alertFunc() {
  alert("Please Contact through email - ssamprakash96@gmail.com");
  const myTimeout = setTimeout(myGreeting, 1000);

                function myGreeting() {
                    document.getElementById("demo").innerHTML = "Thank You"
                }
}


