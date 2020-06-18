import React, {Component} from 'react'

export default class NewItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      description: '',
      location: '',
      imageURL: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  handleSubmit(event) {
    e
    event.preventDefault()
    if (
      this.state.name.length < 1 ||
      this.state.description.length < 1 ||
      this.state.location.length < 1 ||
      this.state.imageURL < 1
    ) {
      window.alert('PLEASE COMPLETE')
    }
    this.setState({
      name: '',
      description: '',
      location: '',
      imageURL: ''
    })
  }

  render() {
    return (
      <form
        onSubmit={() => {
          this.props.addItem(this.state), this.handleSubmit
        }}
      >
        <label>
          Name:
          <input
            type="text"
            name="name"
            onChange={this.handleChange}
            value={this.state.firstName}
          />
        </label>

        <label>
          Description:
          <input
            type="text"
            name="description"
            onChange={this.handleChange}
            value={this.state.lastName}
          />
        </label>

        <label>
          Location Page:
          <input
            type="text"
            name="location"
            onChange={this.handleChange}
            value={this.state.email}
          />
        </label>

        <label>
          Image URL:
          <input
            type="text"
            name="imageURL"
            onChange={this.handleChange}
            value={this.state.email}
          />
        </label>

        <button type="submit">Submit</button>
      </form>
    )
  }
}
