import React, { Component } from 'react'

export class SliderItem extends Component {
  render() {
    return (
      <div className='sliderItem'>
        <img src={"./img/" + this.props.item.img} alt={this.props.item.title}/>
      </div>
    )
  }
}

export default SliderItem