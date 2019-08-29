# learn-react-with-babel-coder

day 1
- init project
    Dependencies
    - React
    - Webpack ใช้รวบรวมไฟล์ .js .css .png ในโปรเจ็คทั้งหมดให้เป็นไฟล์ .js ไฟล์เดียว
    - Loader (babel-loader css-loader style-loader sass-loader)
        ใช้แปลง JSX, ES2015 และ SCSS ให้เป็น ES5 และ CSS ที่บราวเซอร์ทั่วไปเข้าใจ (ทำงานร่วมกับ Webpack)
    - webpack-dev-server ใช้รัน localhost เพื่อเป็น server ที่ serv ไฟล์ html (ใช้สำหรับตอน development ไม่เกี่ยวกับ production เพราะ prod ก็คือ server ของ prod)
    - autoprefixer เติม vendor prefix css เพื่อให้ css ใช้งานได้ทุกบราวเซอร์ (เช่น -webkit-animation)
    - Local CSS ทำให้ใช้ CSS ได้โดยที่ไม่กระทบ Component อื่น (config สำหรับ css-loader นะ)

day 2.1
- config historyApiFallback: true เพื่อกรณีที่เข้า pages อื่นๆ จะหาหน้าไม่เจอ จะให้มันกลับไปหา bundle.js จะได้ไปใช้ config route.js เพื่อหาให้

day 2.2
- call api
- make concept presentation/container component
    - presentation component ทำหน้าที่ render อย่างเดียว ไม่มี state เป็นของตัวเอง รับ props จากชาวบ้านไป render อย่างเดียว
    - container component มี fuction fetch และ มี state ไว้แก้ไข เมื่อแก้ไขจนพอใจก็ส่งไปให้ presentation render ให้
    - presentation component จะ render html <div>, <table>
    - container component จะ render presentation component
