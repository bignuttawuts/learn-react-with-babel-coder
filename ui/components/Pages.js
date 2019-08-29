
import React, { Component, PropTypes } from 'react'
import Page from './Page'

class Pages extends Component {

    static propTypes = {
        pages: PropTypes.array.isRequired,
        onReloadPages: PropTypes.func.isRequired
    }

    render() {
        const { pages, onReloadPages } = this.props
        return (
            <div>
                <button
                    className='button'
                    onClick={() => onReloadPages()}>
                    Reload Pages
                </button>
                <hr />
                <table className='table'>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Title</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            pages.map((page) => (
                                <Page
                                    key={page.id}
                                    id={page.id}
                                    title={page.title} />
                            ))
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Pages
