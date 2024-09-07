import React, { useState } from 'react'
import '../styles/bottomWidget.css'
import { RiQuestionLine, RiArrowLeftLine, RiArrowRightLine, RiAddLine } from '@remixicon/react'
import Grid from './Grid'

function BottomWidget() {
  const [imageCount, setImageCount] = useState(4)
  const [images, setImages] = useState([
    'https://images.unsplash.com/photo-1725568297106-80334d2f7be5?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  ]);

  const scrollLeft = () => {
    const scroller = document.querySelector('.bw-image-container')
    scroller.scrollBy({ left: -120, behavior: 'smooth' })
  }
  const scrollRight = () => {
    const scroller = document.querySelector('.bw-image-container')
    scroller.scrollBy({ left: 120, behavior: 'smooth' })
  }

  const addImage = () => {
    setImageCount(prev => prev + 1)
    setImages((prevImages) => [
      ...prevImages,
      'https://images.unsplash.com/photo-1725568297106-80334d2f7be5?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    ]);
  }


  return (
    <div className='bottom-widget'>
      <div className="bw-left">
        <RiQuestionLine className='icon' />
        <Grid />
      </div>
      <div className="bw-right">
        <div className="buttons-container">
          <div className="layer-1">
            <div className="gallery">Gallery</div>
            <div className="layer-2">
              <button className="add-image" onClick={() => addImage()}><RiAddLine className='add' />ADD IMAGE</button>
              <div className="layer-3">
                <button className='arrow-button' onClick={() => scrollLeft()}><RiArrowLeftLine className="arrow" /></button>
                <button className='arrow-button' onClick={() => scrollRight()}><RiArrowRightLine className="arrow" /></button>
              </div>
            </div>
          </div>
        </div>
        <div className="bw-image-container">

          <div className="scroller" id='scroller' style={{ width: `${(7 + .68) * imageCount - .5}rem` }}>

            <img key={1} src='https://images.unsplash.com/photo-1725568297106-80334d2f7be5?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt="Image" className='image' />
            <img key={2} src='https://images.unsplash.com/photo-1725568297106-80334d2f7be5?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt="Image" className='image' />
            <img key={3} src='https://images.unsplash.com/photo-1725568297106-80334d2f7be5?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt="Image" className='image' />

            {images.map((url, index) => (
              <img key={index} src={url} alt="Image" className='image' />
            ))}

          </div>
        </div>
      </div>
    </div>
  )
}

export default BottomWidget
