import React from 'react'
import './index.scss'

const Button = ({ title, btnFunction }) => {
	return (
		<button className='button' onClick={btnFunction}>
			{title}
		</button>
	)
}

export default Button