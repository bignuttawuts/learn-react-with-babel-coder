import { createStore, applyMiddleware } from 'redux'
import rootReducer from '../reducers'

// Middleware ตัวนี้ละฮะที่เขามาแทรกกลางระหว่างสองเรา
// สังเกตการสร้าง middleware ใน Redux ให้ดีนะครับ
// มันช่างเป็นฟังก์ชันซ้อนฟังก์ชันซะจริง
// จำรูปแบบไว้ง่ายๆว่า store => next => action
const thunk = (store) => (next) => (action) =>
  // ถ้า action เป็น function เราก็ยัดเยียด dispatch เข้าไปเลย
  // ในที่นี้เราส่งทั้ง dispatch และ getState เข้าไป
  // ในส่วนของ action เราต้องการใช้แค่ dispatch เราก็เลยไม่อ้างถึง getState
  typeof action === 'function' ?
    action(store.dispatch, store.getState) :
    // แต่ถ้าใน action creator เราไม่ได้ประกาศว่า (dispatch) => {...}
    // ก็คือไม่ได้ประกาศคืนค่ากลับเป็นฟังก์ชัน
    // เราก็เรียกมันทำงานซะเลย โดยไม่ส่ง dispatch กับ getState ไปให้
    next(action)

export default () => {
  // ประกาศ middlewares เป็นอาร์เรย์ซะก่อน
  // ที่ทำเช่นนี้เพราะในอนาคตเราอาจได้ใช้ middleware ตัวอื่นอีก
  // เราสามารถเพิ่มทีหลังเข้าไปในอาร์เรย์นี้ได้
  const middlewares = [thunk]
  const store = createStore(
    rootReducer,
    // จะใช้ middleware อะไรก็ยัดเยียดเข้าไปใน applyMiddleware ซะเลย
    applyMiddleware(...middlewares)
  )

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      System.import('../reducers').then(nextRootReducer =>
        store.replaceReducer(nextRootReducer.default)
      )
    })
  }

  return store
}