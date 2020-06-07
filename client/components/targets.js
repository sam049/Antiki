import axios from 'axios'
import React, {Component} from 'react'
import SingleItem from './singleItem'

export default class Admin extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: []
    }
  }
  // const filteredArray = {this.state.items.filter(item => (
  //         item.location === "targets"
  //    ))}

  async componentDidMount() {
    const {data} = await axios.get('/api/items')
    this.setState({
      items: data.filter(item => item.location === 'targets')
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
            />
          </div>
        ))}
      </div>
    )
  }
}
