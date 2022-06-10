import React, {useState, Component} from 'react'
import Order from './Order';
import { Space, Button, Switch, Badge, Popover } from 'antd';
import {UserOutlined, FrownOutlined, ShoppingFilled, ShoppingOutlined, BulbFilled, BulbOutlined} from '@ant-design/icons';

export default function Header(props) {

  const content = (
    props.orders.map(el => (
    <Order key={el.id} orderItem={el}/>
  )));

  const emptyContent = (
    <h2 style={{textAlign:"center"}}>Cart is empty <br /> <FrownOutlined/></h2>
  )

  function cartCheck()
  {
    if(props.orders.length > 0)
    {
      return content;
    }
    else
    {
      return emptyContent;
    }
  }

  return (

    <header>
        <Space className='navbar' size={[100,0]} align="center">
          <img src="./img/logo.svg" alt="logo" />
          <Space className='navbarButtons' size={[50,0]}>
            <Button type='primary' ghost shape='circle' size='middle' style={{border:"solid 1.5px white"}} icon={<UserOutlined style={{color: "white", fontSize: "1rem"}} />}></Button>
            <Badge count={props.orders.length}>
              <Popover className='popover' placement='bottom' content={cartCheck} trigger="click" title="YOUR SHOPPING CART">
                <Button type='primary' ghost shape='circle' size='middle' style={{border:"solid 1.5px white"}} icon={<ShoppingOutlined style={{color: "white", fontSize: "1.2rem"}} /> }></Button>
              </Popover>
            </Badge>
            <Switch className='switch'
              checkedChildren={<BulbOutlined/>}
              unCheckedChildren={<BulbFilled/>}
              defaultChecked
            />
          </Space>
        </Space>
        {/* <button id="burger">&#9776</button> */}
    </header>
  )
}
