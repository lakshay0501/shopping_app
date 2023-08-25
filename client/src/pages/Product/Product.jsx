import react from 'react'
import { useState } from 'react';
import "./Product.scss"
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import BalanceIcon from "@mui/icons-material/Balance";
const Product = () => {

    const [selectedImg,setSelectedImg] = useState(0);

    const [quantity,setQuantity] = useState(1);
    
    const images = [
        "https://images.pexels.com/photos/4355702/pexels-photo-4355702.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/2899937/pexels-photo-2899937.jpeg?auto=compress&cs=tinysrgb&w=600"
    ]

    return (
       <div className='product'>
          <div className="left">
            <div className="images">
                <img src={images[0]} alt="" onClick={e=>setSelectedImg(0)}/>
                <img src={images[1]} alt="" onClick={e=>setSelectedImg(1)}/>
            </div>
            <div className="mainImg">
                <img src={images[selectedImg]} alt="" />
            </div>
          </div>
          <div className="right">
            <h1>Title</h1>
            <span className='price'>199 rupees</span>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing 
                elit. Minima ad animi voluptas eaque consectetur,
                 adipisci porro? Cum cupiditate tempora 
                 voluptatum ullam quasi illo aliquam, 
                 veritatis nihil quisquam? Deleniti, repellat 
                 distinctio?
            </p>
            <div className="quantity">
                <button onClick={e=>setQuantity(quantity>1 ? quantity-1:quantity)}>-</button>
                {quantity}
                <button onClick={e=>setQuantity(quantity+1)}>+</button>
            </div>
            <button className="add">
              <AddShoppingCartIcon/> ADD TO CART
            </button>
            <div className="links">
                <div className="item">
                   <FavoriteBorderIcon/> ADD TO WISHLIST
                </div>
                <div className="item">
                    <BalanceIcon/> ADD TO COMPARE
                </div>
            </div>
            <div className="info">
                <span>Vendor: Polo</span>
                <span>Product Type: T-Shirt</span>
                <span>Tag: T-Shirt, Women, Top</span>
            </div>
            <hr />
            <div className="info">
                <span>DESCRIPTION</span>
                <hr />
                <span>ADDITIONAL INFORMATION</span>
                <hr />
                <span>FAQ</span>
            </div>
          </div>
       </div>
    )
}

export default Product;