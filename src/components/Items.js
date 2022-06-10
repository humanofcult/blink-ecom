import React, { Component } from 'react'
import { Space, Button } from 'antd';
import Item from './Item'

export class Items extends Component {
  render() {
    return (
      <main>
        <Space size={[30,20]} wrap>
          {this.props.items.map(el => (
                <Item key={el.id} item={el} onAdd={this.props.onAdd}/>
            ))}
        </Space>
      </main>
    )
  }
}

export default Items