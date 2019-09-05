import fetch from 'isomorphic-fetch'
import { PAGES_ENDPOINT } from '../constants/endpoints'

export const loadPages = () => {
  // เมื่อเรียก loadPages จะคืนค่ากลับเป็นฟังก์ชันที่รับ dispatch เข้ามา
  return (dispatch) => {
    // ก่อนอื่นเมื่อเรียก loadPages ก็ให้สร้าง action เพื่อบอกว่ากำลังโหลดนะ
    dispatch({
      type: 'LOAD_PAGES_REQUEST'
    })

    fetch(PAGES_ENDPOINT)
      .then((response) => response.json())
      .then(
        // เมื่อโหลดเสร็จแล้วก็สร้าง action เพื่อบอกว่าสำเร็จแล้ว
        // พร้อมส่ง pages วิ่งเข้าไปใน reducer
        (pages) => dispatch({
          type: 'LOAD_PAGES_SUCCESS',
          pages
        }),
        // หากเกิดข้อผิดพลาด ใช้ action ตัวนี้
        (error) => dispatch({
          type: 'LOAD_PAGES_FAILURE'
        })
      )
  }
}
