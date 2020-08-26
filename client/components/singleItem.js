import React from 'react'
import axios from 'axios'

export default function SingleItem(props) {
  console.log('>>>>>', props.isAdmin)
  return (
    <div>
      {props.name + ' '}
      {props.description}
      <img src={props.imageUrl} className="img" />
      {props.isAdmin ? (
        <button
          onClick={() => {
            axios.delete(`/api/items/${props.id}`)
          }}
        >
          {' '}
          X
        </button>
      ) : null}
    </div>
  )
}
