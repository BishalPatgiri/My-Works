import navbar from "../components/navbar.js"
import append from "../components/container.js"

import "../styles/style.css"

import axios from "axios"

let navbar_div=document.getElementById("navbar")
navbar_div.innerHTML=navbar()

let fetchData=async()=>{

    let data1=await axios.get("https://fakestoreapi.com/products")
    console.log(data1.data)
    append(data1.data)
}

fetchData()



