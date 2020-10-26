import React from 'react'
import PropTypes from 'prop-types'
import Logo from './Logo'

const Header = (props) => {
	
	return (
		<header className='header'>
			<Logo />
		</header>
	)
}

Header.defaultProps = {
	
}

Header.propTypes = {
	
}

export default Header