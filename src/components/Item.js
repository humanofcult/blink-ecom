import React, { Component } from 'react'
import { Button, Space} from 'antd';
import {ShoppingCartOutlined, HeartOutlined} from '@ant-design/icons';

export class Item extends Component {
  render() {
    return (
        <div className='item'>
            <div className='imgContainer'>
              <img src={"./img/" + this.props.item.img} alt={this.props.item.title}/>
            </div>
            <div className='otherInfoAndCartAdder'>
              <div className='itemOtherInfo'>
                <h2>{this.props.item.title}</h2>
                <p>{this.props.item.category}</p>
                <b>{this.props.item.price} $</b>
              </div>
              <div className='addToCart'>
                <Space size={[30,0]}>
                  <Button type='primary' ghost shape='circle' size='middle' style={{border:"none"}} icon={<ShoppingCartOutlined style={{color: "white", fontSize: "1.8rem"}} onClick={() => this.props.onAdd(this.props.item)} />}></Button>
                  <Button type='primary' ghost shape='circle' size='middle' style={{border:"none"}} icon={<HeartOutlined style={{color: "white", fontSize: "1.5rem"}} />}></Button>
                </Space>
              </div>
            </div>
        </div>
    )
  }
}

export default Item