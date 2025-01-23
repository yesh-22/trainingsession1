console.log(window)
console.log(window.document)
console.log(typeof document)
console.log(document.URL)
console.log(document.doctype)
console.log(document.head)
console.log(document.title)

document.title="amazon"
console.log(document.body)
let link=document.links
console.log(link)
for(let i=0;i<link.length;i++){
    console.log(i)

link[i].className="main"
link[i].href="https://www.youtube.com"
link[i].target="_blank"
}
//in-direct access(metods in dom)
//1)document.getElementById("value")
//2)document.getElementsByClassName("value")
//3)document.getElementsByTagName("value")
//4)document.getElementsByName("value")
//5)document.querySelector("value")
//6)document.querySelectorAll("value")
let a=document.getElementById("main")
console.log(a);
console.log(a.textContent);
a.textContent="batch 6"
console.log(a.textContent);
a.style.backgroundColor="lavender"
a.style.textAlign="center"
a.style.color="white"
a.style.border="solid"
let b=document.getElementsByClassName("demo1")
console.log(b)
console.log(b[0]);
console.log(b.textContent)
b[0].style.backgroundColor="pink"
b[0].style.textAlign="center"
console.log(b[1]);
b[1].style.backgroundColor="skyblue"
b[1].style.textAlign="center"

