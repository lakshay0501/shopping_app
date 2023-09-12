import React, { useState } from 'react'
import "./Products.scss"
import List from '../../Components/List/List';
import { useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
const Products = () => {

    const catId = parseInt(useParams().id);
    const [maxPrice,setMaxPrice] = useState(1000);
    const [sort,setSort] = useState("asc");
    const [SelectedSubCats,setSelectedSubCats] = useState([])

    const {data,loading,error} = useFetch(
      `/sub-categories?[filters][categories][id][$eq]=${catId}`
      );

    const handleChange = (e) => {
      const value = e.target.value;
      const isChecked = e.target.checked;

      setSelectedSubCats(
         isChecked ? [...SelectedSubCats,value]
         : SelectedSubCats.filter((item)=> item!=value)
      );
    }

   //  const setSort = (sortOrder) => {
   //    this.products.sort((a, b) => {
   //      return sortOrder==="asc" ? a.price < b.price ? a.price > b.price;
   //    });
   // }

   //  console.log(SelectedSubCats)

    return (
        <div className='products'>
           <div className="left">
               <div className="filterItem">
                  <h2>Product Categories</h2>
                  
                  {data?.map((item)=>(
                     <div className="inputItem" key={item.id}>
                        <input type="checkbox" id={item.id} value={item.id} onChange={handleChange}/>
                        <label htmlFor={item.id}>{item.attributes.title}</label>
                     </div>
                  ))}
               </div>
               <div className="filterItem">
                  <h2>Filter by price</h2>
                  <div className="inputItem">
                     <span>0</span>
                     <input type="range" min={0} max={100000} onChange={(e)=>setMaxPrice(e.target.value)}/>
                     <span>{maxPrice}</span>
                  </div>
               </div>
               <div className="filterItem">
                  <h2>Sort By</h2>
                  <div className="inputItem">
                     <input type="radio" name="price" id="asc" value="asc" onChange={(e)=>setSort("asc")}/>
                     <label htmlFor="asc">Price (Lowest first)</label>
                  </div>
                  <div className="inputItem">
                     <input type="radio" name="price" id="desc" value="desc" onChange={(e)=>setSort("desc")}/>
                     <label htmlFor="desc">Price (Highest first)</label>
                  </div>
               </div>
           </div>
           <div className="right">
              <img className="catImg" src="https://images.pexels.com/photos/17244623/pexels-photo-17244623/free-photo-of-wood-city-landscape-nature.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
              <List catId={catId} maxPrice={maxPrice} sort={sort} subCats={SelectedSubCats}/>
           </div>
        
        </div>
    )
}

export default Products;