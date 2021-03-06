import axios from 'axios'
import React, {Component} from 'react'
import SingleItem from './singleItem'

export default class Targets extends Component {
  constructor() {
    super()
    this.state = {
      items: [],
      isAdmin: false
    }
  }
  // const filteredArray = {this.state.items.filter(item => (
  //         item.location === "targets"
  //    ))}

  async componentDidMount() {
    const {data} = await axios.get('/api/items')
    const user = await axios.get('/auth/me')
    this.setState({
      items: data.filter(item => item.location === 'targets'),
      isAdmin: user.data.isAdmin
    })
    console.log('data', data)
    console.log('.......', this.state)
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
