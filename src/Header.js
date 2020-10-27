import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import Logo from './Logo'
import Toggle from './Inputs/Toggle/Toggle'
import {DarkMode} from './App'

const Header = (props) => {
	const theme = useContext(DarkMode)
	
	return (
		<header className={`header ${theme}`}>
			<Logo />
			<Toggle 
				checked={props.darkMode}
				useLabels
				labels={{off: 'light', on: 'dark'}}
				onChange={props.toggleDarkMode}
				className={props.darkMode ? 'dark-black' : ''}
			/>
		</header>
	)
}

Header.defaultProps = {
	
}

Header.propTypes = {
	
}

export default Header