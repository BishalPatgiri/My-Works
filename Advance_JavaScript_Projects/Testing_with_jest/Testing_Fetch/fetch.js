const url=`https://fakestoreapi.com/products`
let getData=async()=>{

    let data=await fetch(url)
    let data1=await data.json()
    return data1
}

export default getData