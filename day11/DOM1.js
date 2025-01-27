let c=document.getElementsByTagName("p")
console.log(c);
console.log(c[1]);
c[1].style.color="pink"
c[1].textContent="training session"
let d=document.getElementsByName("main")
console.log(d);
console.log(d[1]);
d[1].style.backgroundColor="skyblue"

//document .querySelector
// we have to pass value with a css symbol
//will return reference of first-element
let e=document.querySelector("#main1")
console.log(e);
let e1=document.querySelector(".demo1")
console.log(e1);
//document.querySelectorAll
//we have to pass values with css symbol
//will return reference in a node list 
let f=document.querySelectorAll("#main1")
console.log(f);
let f1=document.querySelectorAll(".demo1")
