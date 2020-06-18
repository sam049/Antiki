import React from 'react'
import {render} from 'enzyme'

export default function SingleItem(props) {
  return (
    <div>
      {props.name + ' '}
      {props.description}
      <img src={props.imageUrl} className="img" />
    </div>
  )
}
