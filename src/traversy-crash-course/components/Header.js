import React from 'react'
import PropTypes from 'prop-types'

const Header = ({ title }) => {
    return (
        <header>
            <h1>{title}</h1>
            <button>Add</button>
        </header>
    )
}

Header.defaultProps = {
    title: 'default props'
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Header
