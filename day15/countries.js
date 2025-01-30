// let demo=async()=>{
// let data=await window.fetch("countries.json")
// console.log(data);
// let res=await data.json()
// console.log(res);
// res.map((x)=>{
//     console.log(x)
//     console.log(x.countries)
//     let select=document.getElementById("select")
//     console.log(select)
//     select.innerHTML+=`<option value=${x.country}>${x.country}</option>`
//     let demo1=document.getElementById("demo1")
//     console.log(demo1);
//     demo1.innerHTML+=`<option value=${x.country}>${x.country}</option>`
// })
// }
// demo()


let btn = document.getElementById("btn");
console.log(btn);

btn.onclick = () => {
    let search = document.getElementById("search").value; // Get the value from the search box
    console.log(search);
    let page = 30;
    window.fetch(`https://pixabay.com/api/?key=48516866-0ce6970757966a5d11e94837d&q=${search}&image_type=photo&pretty=true&per_page=${page}`)
    .then((data) => data.json())
    .then((res) => {
        console.log(res);
        console.log(res.hits);

        let div = document.getElementById("div");
        console.log(div);
        
        div.innerHTML = "";

        res.hits.map((x) => {
            console.log(x);
            let img = document.createElement("img");
            img.src = x.previewURL;
            div.appendChild(img);
        });
    })
    .catch((error) => {
        console.error("Error fetching images:", error);
    });
};
