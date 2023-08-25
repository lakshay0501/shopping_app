import React from 'react'
import "./Categories.scss";
import { Link } from 'react-router-dom';
const Categories = () => {
  return (
    <div className='categories'>
      <div className="col">
        <div className="row">
            <img src="https://images.pexels.com/photos/3317434/pexels-photo-3317434.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" />
            <button>
                <Link className="link" to="/products/1">Sale</Link>
            </button>
        </div>
        <div className="row">
        <img src="https://images.pexels.com/photos/4611700/pexels-photo-4611700.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
            <button>
                <Link className="link" to="/products/1">Men</Link>
            </button>
        </div>
      </div>
      <div className="col">
        <div className="row">
        <img src="https://images.pexels.com/photos/4132363/pexels-photo-4132363.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
            <button>
                <Link className="link" to="/products/1">Women</Link>
            </button>
        </div>
      </div>
      <div className="col col-l">
        <div className="row">
            <div className="col">
                <div className="row">
                   <img src="https://images.pexels.com/photos/15502161/pexels-photo-15502161/free-photo-of-model-wearing-a-turquoise-satin-dress-posing-on-a-forest-road-in-winter-at-dusk.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                    <button>
                        <Link className="link" to="/products/1">New Season</Link>
                    </button>
                </div>
            </div>
            <div className="col">
                <div className="row">
                <img src="https://images.pexels.com/photos/325527/pexels-photo-325527.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                    <button>
                        <Link className="link" to="/products/1">Accessories</Link>
                    </button>
                </div>
            </div>
        </div>
        <div className="row">
            <img src="https://images.pexels.com/photos/5214139/pexels-photo-5214139.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                    <button>
                        <Link className="link" to="/products/1">Shoes</Link>
                    </button>
        </div>
      </div>
    </div>
  )
}

export default Categories
