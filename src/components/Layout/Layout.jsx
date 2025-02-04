import React from 'react'
import PropTypes from 'prop-types'
import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'

const Layout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    )
}

Layout.propTypes = {}

export default Layout