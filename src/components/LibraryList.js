import React, { Component } from 'react'
import { connect } from 'react-redux'

class LibraryList extends Component {
    render() {
        return null
    }
}

const mapStateToProps = state => {
    console.log('state', state)
}

export default connect(mapStateToProps)(LibraryList)
