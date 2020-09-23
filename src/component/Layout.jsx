import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './Layout.css'

export default class Layout extends Component {
    static propTypes = {
        prop: PropTypes
    }

    render() {
        return (
            <div className='root_dom'>
                <div className='contaniner'></div>
                <div className='contaniner'></div>
                <div className='contaniner'></div>
                <div className='contaniner'></div>
                <div className='contaniner'></div>
                <div className='contaniner'></div>
                <div className='contaniner'></div>
            </div>
        )
    }
}
