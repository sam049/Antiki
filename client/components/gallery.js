import axios from 'axios'
import React, {Component} from 'react'
import SingleItem from './singleItem'

export default class Gallery extends Component {
  constructor() {
    super()
    this.state = {
      items: [],
      isAdmin: false
    }
  }
  async componentDidMount() {
    const {data} = await axios.get('/api/items')
    const user = await axios.get('/auth/me')
    this.setState({
      items: data.filter(item => item.location === 'gallery'),
      isAdmin: user.data.isAdmin
    })
    console.log('.......state', this.state)
    console.log('user', user.data)
  }
  render() {
    console.log('state', this.state)
    return (
      <div>
        <h1>hello</h1>
        {this.state.items.map(item => (
          <div key={item.id}>
            <SingleItem
              id={item.id}
              name={item.name}
              description={item.description}
              imageUrl={item.imageURL}
              status={item.status}
              isAdmin={this.state.isAdmin}
            />
          </div>
        ))}
      </div>
    )
  }
}
