import React, { useState } from 'react'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import "./Slider.scss"
const Slider = () => {

  const [currentSlide,setCurrentSlide] = useState(0);

  const data = [
    "https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZmFzaGlvbnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80",
    "https://media.istockphoto.com/id/108329358/photo/blonde-woman-in-wild-patterned-dress.jpg?s=612x612&w=0&k=20&c=tSrU_HjEw3s5r9GUIWS2EBnNkBnBHX7VswmkEoMZ0As=",
    "https://media.istockphoto.com/id/96256332/photo/crouching-tiger.jpg?s=612x612&w=0&k=20&c=4NLPnsblxt8xp5xmJ30GBTd38OGXvmxjnCCSLtIARNU="
  ];

  const prevSlide = () => {
     setCurrentSlide(currentSlide===0 ? 2 : currentSlide - 1);
  }

  const nextSlide = () => {
     setCurrentSlide(currentSlide==2 ? 0 : currentSlide + 1);
  }

  return (
    <div className='slider'>
       <div className="container" style={{transform:`translateX(-${currentSlide*100}vw)`}}>
         <img src={data[0]} alt="" />
         <img src={data[1]} alt="" />
         <img src={data[2]} alt="" />
       </div>
       <div className="icons">
        <div className="icon" onClick={prevSlide}>
            <KeyboardArrowLeftIcon/>
        </div>
        <div className="icon" onClick={nextSlide}>
            <KeyboardArrowRightIcon/>
        </div>
       </div>
    </div>
  )
}

export default Slider
