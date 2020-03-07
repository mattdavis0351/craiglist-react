import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { useLists } from "../hooks"

console.log(useLists)
export default props => {
  const [listings, setListings] = useState([])

  useEffect(() => {
    useLists(props.match.params.id).then(data => {
      setListings(data)
    })

    useLists().then(data => setListings(data))
  }, [props.match.params])

  return (
    <div className="homeContainer">
      <div className="catergories">
        {listings.map(listings => (
          <div className="list" key={listings.id}>
            <Link className="listingTitle">{listings.name}</Link>
          </div>
        ))}
      </div>
      <div className="rSideBar">
        <React.Fragment></React.Fragment>
      </div>
    </div>
  )
}
