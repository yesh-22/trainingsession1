/*function demo(){
    console.log("hello world");
}
let a=document.getElementById("demo1")
console.log(a);
a.onclick=function(g){
    console.log(g);
    let res=Math.round(Math.random()*10000).toString(16)
    console.log(res);
    document.body.style.backgroundColor=`#${res}`
}
let b=document.getElementById("demo2")
console.log(b);
let c=window.prompt("enter any color name:")
demo2.innerHTML=c
//mouse event
/*demo2.onmouseover=()=>{
    document.body.style.backgroundColor=`${c}`
    document.body.style.transition="ease all 3s"
}
    

/*demo2.onmouseleave=()=>{
    document.body.style.backgroundColor=`${c}`
    document.body.style.transition="ease all 3s"
}
    */

/* demo2.ondblclick=()=>{
    document.body.style.backgroundColor=`${c}`
    document.body.style.transition="ease all 3s"
}
    */
   let d=document.getElementById("demo4")
   console.log(d)
   d.addEventListener("click",()=>{
    let e=document.getElementById("demo3").value
    console.log(e);
    let speech=new SpeechSynthesisUtterance
    console.log(speech)
    speech.text=e
    speechSynthesis.speak(speech);
   })