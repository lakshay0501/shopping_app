import React from 'react'
import "./Cart.scss"
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
const Cart = () => {

  const data = [
    {
        id:1,
        img: "https://images.pexels.com/photos/1055691/pexels-photo-1055691.jpeg?auto=compress&cs=tinysrgb&w=600",
        img2:"https://images.pexels.com/photos/2235071/pexels-photo-2235071.jpeg?auto=compress&cs=tinysrgb&w=600",
        title: "LONG DRESS",
        isNew:true,
        oldPrice:700,
        price:650,
        desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi magni veniam laudantium perspiciatis hic adipisci quidem aperiam. Eos nisi fugiat nemo iure dolore quo mollitia facere incidunt enim, deleniti laudantium?"
    },
    {
        id:2,
        img:"https://images.pexels.com/photos/2173357/pexels-photo-2173357.jpeg?auto=compress&cs=tinysrgb&w=600",
        img2: "https://images.pexels.com/photos/1055691/pexels-photo-1055691.jpeg?auto=compress&cs=tinysrgb&w=60",
        title: "Dress for girls",
        isNew:true,
        oldPrice:500,
        price:350,
        desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi magni veniam laudantium perspiciatis hic adipisci quidem aperiam. Eos nisi fugiat nemo iure dolore quo mollitia facere incidunt enim, deleniti laudantium?"
    }
  ];

  return (
    <div className='cart'>
       <h1>Products in your cart</h1>
        {data.map((item)=> (
           <div className="item" key={item.id}>
              <img src={item.img} alt="" />
              <div className="details">
                <h1>{item.title}</h1>
                <p>{item.desc.substring(0,100)}</p>
                <div className='price'>{item.price} rupees</div>
              </div>
              <DeleteOutlineIcon className='delete'/>
           </div>
        ))}
        <div className="total">
            <span>SUBTOTAL:</span>
            <span>1000 rupees</span>
        </div>
        <button>PROCEED TO CHECKOUT</button>
        <span className='reset'>Reset Cart</span>
    </div>
  )
}

export default Cart; 
