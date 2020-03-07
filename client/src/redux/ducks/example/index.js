// 1. imports
import { useEffect } from "react"
import axios from "axios"
import { useSelector, useDispatch } from "react-redux"

// 2. action definitions
const GET_CATERGORIES = "catergories/GET_CATERGORIES"

// 3. initial state
const initialState = {
  listings: []
}

// 4. reducer
export default (state = initialState, action) => {
  switch (action.type) {
    case GET_CATERGORIES:
      return {
        ...state,
        listings: action.payload
      }

    default:
      return state
  }
}

// 5. action creators
export function getLists() {
  return new Promise((resolve, reject) => {
    axios
      .get("/api/catergories")
      .then(resp => {
        resolve(resp.data)
        console.log(resp.data)
      })
      .catch(e => {
        reject()
      })
  })
}

// 6. custom hook
export function useLists() {
  const dispatch = useDispatch()
  const listings = useSelector(appState => appState.listingState.listings)

  useEffect(() => {
    dispatch(getLists())
  }, [dispatch])
  return { listings }
}
