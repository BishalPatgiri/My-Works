function navbar(){
    return `<a href="index.html">Search Receipe</a>
    <a href="getrec.html">Receipe of the day</a>
    <a href="random.html">Show random Receipes</a>`
}

export default navbar;


let getData=async (url)=>{
    let data=await fetch(url)
    let data1=await data.json()
    // console.log()
    return data1.meals
}

let append=(data,container)=>{
    
    data.forEach((el)=>{

    let div=document.createElement("div")
    div.setAttribute("id","content")

    let image=document.createElement("img");
    image.src=el.strMealThumb

    let name=document.createElement("h2")
    name.innerText=el.strMeal

    let area=document.createElement("p")
    area.innerText="Area"+" - "+el.strArea

    let cate=document.createElement("p")
    cate.innerText="Category"+" - "+el.strCategory

    let ingri=document.createElement("p")
    ingri.innerText="Receipe"+" - "+el.strIngredient1+","+el.strIngredient2+","+el.strIngredient3+","+el.strIngredient4+","+el.strIngredient5+","+el.strIngredient6;

    div.append(image,name,area,cate,ingri)
    container.append(div)
    })
}

export {getData,append};