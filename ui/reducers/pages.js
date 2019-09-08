const initialState = []

export default (state = initialState, action) => {
  switch(action.type) {
    case 'LOAD_PAGES_SUCCESS':
      //return action.pages
      return action.payload
    // เมื่อโหลดวิกิมาเพจเดียวก็ให้สถานะของแอพพลิเคชันเรามีเพจเดียว
    case 'LOAD_PAGE_SUCCESS':
      return [action.payload]
    default:
      return state
  }
}

export const getPageById = (state, id) => (
  state.pages.find((page) => page.id === +id) || { title: '', content: '' }
)
