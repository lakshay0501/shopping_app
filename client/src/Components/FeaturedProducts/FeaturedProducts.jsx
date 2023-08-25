import React from 'react'
import "./FeaturedProducts.scss"
import Card from "../Card/Card"


const FeaturedProducts = ({type}) => {

   const data = [
    {
        id:1,
        img: "https://images.pexels.com/photos/1055691/pexels-photo-1055691.jpeg?auto=compress&cs=tinysrgb&w=600",
        img2:"https://images.pexels.com/photos/2235071/pexels-photo-2235071.jpeg?auto=compress&cs=tinysrgb&w=600",
        title: "LONG DRESS",
        isNew:true,
        oldPrice:700,
        price:650,
    },
    {
        id:2,
        img:"https://images.pexels.com/photos/2173357/pexels-photo-2173357.jpeg?auto=compress&cs=tinysrgb&w=600",
        img2: "https://images.pexels.com/photos/1055691/pexels-photo-1055691.jpeg?auto=compress&cs=tinysrgb&w=60",
        title: "Dress for girls",
        isNew:true,
        oldPrice:500,
        price:350,
    },
    {
        id:3,
        img:"https://images.pexels.com/photos/2173357/pexels-photo-2173357.jpeg?auto=compress&cs=tinysrgb&w=600",
        img2: "https://images.pexels.com/photos/1055691/pexels-photo-1055691.jpeg?auto=compress&cs=tinysrgb&w=60",
        title: "Good dresses",
        isNew:false,
        oldPrice:500,
        price:350,
    },
    {
        id:4,
        img:"https://images.pexels.com/photos/2173357/pexels-photo-2173357.jpeg?auto=compress&cs=tinysrgb&w=600",
        img2: "https://images.pexels.com/photos/1055691/pexels-photo-1055691.jpeg?auto=compress&cs=tinysrgb&w=60",
        title: "Dress for smart girls",
        isNew:true,
        oldPrice:500,
        price:350,
    }
   ]
    
  return (
    <div className='featuredProducts'>
       
       <div className="top">
        <h1>{type} products</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam quae illo provident nihil doloribus et ex adipisci tenetur libero maxime? Explicabo assumenda hic, beatae et molestias enim odio similique dolorum!</p>
       </div>
       <div className="bottom">
            {data.map(item=>{
                return <Card item={item} key={item.id}/>
            })}
            {/* <Card item={data[0]} key={data[0].id}/> */}

       </div>
    </div>
  )
}

export default FeaturedProducts
