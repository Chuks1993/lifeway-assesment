import React, { useState } from 'react'

import { getProfiles} from 'modules/api'
import { MainLayout } from 'modules/layout'
import { Button, Profile } from 'modules/component'
import { Profiles } from 'modules/Types'

import './index.scss'

const Landing: React.FC = () => {
	const [profile, setProfile] = useState<Array<Profiles | any>>([])
	const [text, setText] = useState('')


	const callProfile = async (text) => {
		let response = await getProfiles(text)
		setProfile(response.results)
		setText('')
	}

	const handleInputChange = event => {
		setText(event.target.value);
	};

	return (
		<MainLayout>
			<div className="banner">
				<div className="content">
					<h3>Discover Star Wars</h3>
					<h1>Every Character. <br /> Every Story</h1>
				</div>
			</div>
			<div className="profile-section">
				<div className="user-input">
					<input type="text" onChange={handleInputChange} value={text} placeholder="Luke"></input>
					<Button title='Search' btnFunction={() => callProfile(text)}/>
				</div>
				<h2>Profile</h2>
				<div className="profiles">
					{profile.map(({name, height, mass, hair_color, birth_year, films, species, starships}) => { 
						return(
							<Profile
								key={name}
								name={name}
								height={height}
								mass={mass}
								hair_color={hair_color}
								birth_year={birth_year}
								species={species}
								films={films}
								starships={starships}
							/>
						)
					}
					)}
				</div>
			</div>

		</MainLayout>
	)

}

export default Landing