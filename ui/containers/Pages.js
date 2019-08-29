import React, { Component } from 'react'
import fetch from 'isomorphic-fetch'
// import Pages ที่เป็น Presentational Component มาจากโมดูล components
import  Pages  from '../components/Pages'

export default class PagesContainer extends Component {
  state = {
    pages: []
  }

  // PagesContainer เป็น Container Component
  // มันมีสมองเลยรู้จักวิธีการดึงข้อมูลจากเซิร์ฟเวอร์
  componentDidMount() {
    fetch('http://127.0.0.1:5000/api/v1/pages')
      .then((response) => response.json())
      .then((pages) => this.setState({ pages }))
  }

  render() {
    // เรียกใช้ Presentational Component
    return <Pages pages={this.state.pages} />
  }
}
