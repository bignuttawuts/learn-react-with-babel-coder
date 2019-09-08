import fetch from 'isomorphic-fetch'
import { CALL_API } from 'redux-api-middleware'
import { PAGES_ENDPOINT } from '../constants/endpoints'

// export const loadPages = () => {
//   // เมื่อเรียก loadPages จะคืนค่ากลับเป็นฟังก์ชันที่รับ dispatch เข้ามา
//   return (dispatch) => {
//     // ก่อนอื่นเมื่อเรียก loadPages ก็ให้สร้าง action เพื่อบอกว่ากำลังโหลดนะ
//     dispatch({
//       type: 'LOAD_PAGES_REQUEST'
//     })

//     fetch(PAGES_ENDPOINT)
//       .then((response) => response.json())
//       .then(
//         // เมื่อโหลดเสร็จแล้วก็สร้าง action เพื่อบอกว่าสำเร็จแล้ว
//         // พร้อมส่ง pages วิ่งเข้าไปใน reducer
//         (pages) => dispatch({
//           type: 'LOAD_PAGES_SUCCESS',
//           pages
//         }),
//         // หากเกิดข้อผิดพลาด ใช้ action ตัวนี้
//         (error) => dispatch({
//           type: 'LOAD_PAGES_FAILURE'
//         })
//       )
//   }
// }

export const loadPages = () => ({
  // ต้องมี Symbol ตัวนี้เพื่อบอกให้ redux-api-middleware รับทราบ
  // ว่าสิ่งที่อยู่ในนี้มันควรเป็นผู้จัดการ
  // หากปราศจาก Symbol ตัวนี้
  // redux-api-middleware จะเมินเฉยไม่สนใจ
  [CALL_API]: {
    endpoint: PAGES_ENDPOINT,
    method: 'GET',
    types: ['LOAD_PAGES_REQUEST', 'LOAD_PAGES_SUCCESS', 'LOAD_PAGES_FAILURE']
  }
})

export const loadPage = (id) => ({
  [CALL_API]: {
    endpoint: `${PAGES_ENDPOINT}/${id}`,
    method: 'GET',
    types: ['LOAD_PAGE_REQUEST', 'LOAD_PAGE_SUCCESS', 'LOAD_PAGE_FAILURE']
  }
})

export const createPage = (values) => ({
  [CALL_API]: {
    endpoint: PAGES_ENDPOINT,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify(values),
    types: ['CREATE_PAGE_REQUEST', 'CREATE_PAGE_SUCCESS', 'CREATE_PAGE_FAILURE']
  }
})
