function append(data){
    document.getElementById("container").innerHTML=""
    data.forEach(ele => {
        let div=document.createElement("div")

        let image=document.createElement("img")
        image.src=ele.image

        let title=document.createElement("h2")
        title.innerText=ele.title

        let cate=document.createElement("p")
        cate.innerText=ele.category

        let price=document.createElement("p")
        price.innerText=ele.price

        div.append(image,title,cate,price)
        document.getElementById("container").append(div)

    });

} 

export default append
