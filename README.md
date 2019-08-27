"# learn-react-with-babel-coder" 

Dependencies
- React
- Webpack ใช้รวบรวมไฟล์ .js .css .png ในโปรเจ็คทั้งหมดให้เป็นไฟล์ .js ไฟล์เดียว
- Loader (babel-loader css-loader style-loader sass-loader)
    ใช้แปลง JSX, ES2015 และ SCSS ให้เป็น ES5 และ CSS ที่บราวเซอร์ทั่วไปเข้าใจ (ทำงานร่วมกับ Webpack)
- webpack-dev-server ใช้รัน localhost เพื่อเป็น server ที่ serv ไฟล์ html (ใช้สำหรับตอน development ไม่เกี่ยวกับ production เพราะ prod ก็คือ server ของ prod)
- autoprefixer เติม vendor prefix css เพื่อให้ css ใช้งานได้ทุกบราวเซอร์ (เช่น -webkit-animation)
