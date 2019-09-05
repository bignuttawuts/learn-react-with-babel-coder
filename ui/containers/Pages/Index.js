import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import fetch from 'isomorphic-fetch'
import { PAGES_ENDPOINT } from '../../constants/endpoints'
import Pages from '../../components/Pages/Index'
import { loadPages } from '../../actions/page'

class PagesContainer extends Component {
    // state = {
    //     pages: []
    // }

    static propTypes = {
        pages: PropTypes.array.isRequired,
        onLoadPages: PropTypes.func.isRequired
    }

    onReloadPages = () => {
        this.props.onLoadPages()
        // fetch(PAGES_ENDPOINT)
        //     .then((response) => response.json())
        //     .then((pages) => this.setState({ pages }));
    }

    componentDidMount() {
        this.onReloadPages();
    }

    componentWillUpdate(nextProps, nextState) {
        console.log('container set state');
    }

    shouldComponentUpdate(nextProps, nextState) {
        return this.props.pages !== nextProps.pages;
    }

    render() {
        // เรียกใช้ Presentational Component
        return <Pages pages={this.props.pages}
            onReloadPages={this.onReloadPages} />
    }
}

const mapStateToProps = (state) => ({
    pages: state.pages
})

const mapDispatchToProps = (dispatch) => ({
    onLoadPages() {
        dispatch(loadPages())
    }
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(PagesContainer)