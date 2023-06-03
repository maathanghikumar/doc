// import './card.css'
// import { useState,useEffect } from 'react'
// import axios from 'axios'
// import Card from 'react-bootstrap/Card';

// const Card =(props)=>{
//     console.log('1')
//     const[name,setName]=useState([])
  
//     const updateName=(value)=>{
//         if(value='js'){
//             setName()
//         }
//     }
//     const greeting ='react';
//     console.log("props",props)
//     useEffect(()=>{
//         const apidata=getAPI
//     })
//     return(
//         <>
//         <h1>I am card {props.name} {name}</h1>
//         <button OnClick={()=>setName('js')}>
//             name update
//         </button>
//         </>
//     )
// }
// export default Card;
// import './card.css'
// import { useState } from "react";
// const Card=(Props)=>
// {
//     //const greeting='welcome to anjac';
//     const [name,setName]=useState('sivakasi')
//     }
//     const updateName=(value)=>{setName(value)}
//     return(
//         <>
//      I am maathanghi from  {name} {Props.name} 
//      <br></br>
//      <button onClick={()=> setName('madurai')}>default name
//      </button>
//      <br></br>
//      <button onClick={()=> updateName('chennai')}>update name
//      </button>
     
//      </>
//     )
// }
// export default Card;
import axios from "axios"
import { useState } from "react"
const Card=(props)=>{
    const[name,setName]=useState([])
    const GetData=async()=>{
        const data=await axios.get('https://jsonplaceholder.typicode.com/posts')
        console.log('data',data.data)
        setName(data.data)
    }
    return(
        <>
        <button onClick={()=>GetData()}>get data</button>
{
    name.map((value)=>{ return<p>{value.title}</p>})
}
      
      <input type="text"onChange={(e)=>console.log(e.target.value)} />
       </>
    )
}
export default Card 