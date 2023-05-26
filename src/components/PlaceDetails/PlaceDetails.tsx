import React from 'react'

function PlaceDetails({place}:any) {
  const {name} = place
  return (
    <div>{name}</div>
  )
}


export default PlaceDetails