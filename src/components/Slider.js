import React, { Component } from 'react';
import SliderItem from './SliderItem';
import { Carousel } from 'antd';



function slideChanger()
{
  let dotContainer = document.getElementsByClassName("slick-dots");

  let containedLists = dotContainer[0].children;

  for (let i = 0; i < containedLists.length; i++) {
    
    if(containedLists[i].classList.contains("slick-active"))
    {
      containedLists[i + 1].classList.add("slick-active");
      containedLists[i].classList.remove("slick-active");
      break
    }

  }
}


export class Slider extends Component {
  render() {
    return (
      <div className='slideContainer'>
        <div className='controllers'>
          <div className='slideController leftSlide'></div>
          <div className='slideController rightSlide'></div>
        </div>
    <Carousel className='slider' autoplay>
      {this.props.items.map(el => (
        <SliderItem key={el.id} item={el}/>
      ))}
    </Carousel>
  </div>
    )
  }
}

export default Slider