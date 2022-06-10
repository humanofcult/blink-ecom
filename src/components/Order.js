import React, { Component } from 'react'
import { Space, Button } from 'antd';
import {CloseOutlined} from '@ant-design/icons';

export class Order extends Component {
  render() {
    return (
        <div className='orderItem'>
          <Space>
            <div className='orderItemImageContainer'>
              <img src={"./img/" + this.props.orderItem.img} alt={this.props.orderItem.title} />
            </div>
            <div className='titleAndPrice'>
              <h3>{this.props.orderItem.title}</h3>
              <b>{this.props.orderItem.price} $</b>
            </div>
            <Button type='primary' ghost size='small' style={{border:"solid 1.5px #333333", borderRadius:"25%", position:"absolute", right:"10%"}} icon={<CloseOutlined style={{color: "#333333", fontSize: "0.7rem"}} />}></Button>
          </Space>
        </div>
    )
  }
}

export default Order