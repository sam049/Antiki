import React, {Component} from 'react'
import axios from 'axios'
import NewItem from './newItem'

export default class Admin extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      description: '',
      location: '',
      imageURL: ''
    }
    this.addItem = this.addItem.bind(this)
  }

  async addItem(item) {
    try {
      const {data} = await axios.post('/api/items', item)
    } catch (error) {
      next(error)
    }
  }

  render() {
    console.log('this', this)
    return (
      <div>
        <h1> admin page</h1>
        <NewItem addItem={this.addItem} />
      </div>
    )
  }
}
