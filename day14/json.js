// let obj={
//     name:"bhavani yeshashvi",
//     id:632,
//     branch:"cse",
//     batch:2022
// }
// console.log(obj);
// let obj1=JSON.stringify(obj)
// console.log(obj1);
// let obj2=JSON.parse(obj1)
// console.log(obj2);

window.fetch("data.json")
.then((data)=>data.json())
.then((res)=>{
    res.map((x)=> {
        console.log(x);
        console.log(x.name);
        console.log(x.id);
        document.body.innerHTML+=`<h1>${x}</h1>`
         document.body.innerHTML+=`<h1>${x.name}</h1>`
          document.body.innerHTML+=`<h1>${x.id}</h1>`
    })
})