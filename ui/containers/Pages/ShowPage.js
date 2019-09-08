import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getPageById } from '../../reducers/pages'
import { loadPage } from '../../actions/page'
import ShowPage from '../../components/Pages/ShowPage'

class ShowPageContainer extends Component {
  state = {
    page: {
      title: '',
      content: ''
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.props.page !== nextProps.page;
  }

  componentDidMount() {
    const { onLoadPage, match } = this.props
    const { id } = match.params
    console.log(match)
    // โหลดเพจตาม ID ที่ปรากฎบน URL
    onLoadPage(id)
  }

  render() {
    const { id, title, content } = this.props.page

    return <ShowPage
      id={id}
      title={title}
      content={content} />
  }
}

const mapStateToProps = (state, ownProps) => ({
  // เลือกเพจด้วย ID
  page: getPageById(state, ownProps.match.params.id)
})

export default connect(
  mapStateToProps,
  { onLoadPage: loadPage }
)(ShowPageContainer)
