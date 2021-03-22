import React from 'react'

const Header = ({ title }) => {
    return (
        <div>
            Task tracker {title}
        </div>
    )
}

Header.defaultProps = {
    title: 'default props'
}

export default Header
