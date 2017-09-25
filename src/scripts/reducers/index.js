import { combineReducers } from 'redux'
import images from './details/images'
import books from './details/books'

const reducers = {
  books,
  images
}

export default  combineReducers(reducers)
