// import { getMyReadingBooks } from '../api.js'

// export function loadBooks () {
//   return async function (dispatch, getState) {
//     const books = await getMyReadingBooks()
//     return dispatch({
//       type: 'saveBooks',
//       payload: books
//     })
//   }
// }

// action creator
export function addBook (bookName) {
  return {
    type: 'ADD_BOOK',
    payload: { name: bookName }
  }
}

// action
export const getBooks = {
  type: 'ADD_BOOKS',
  payload: [
    { name: 'book name 1' }
  ]
}

// bound action creator that automatically dispatches
// export const boundAddBook = bookName => dispatch(addBook(bookName))
