import React, {useState, useEffect} from 'react'
import './index.scss'
import {callSWAPI} from 'modules/api'

interface ProfileProps {
	name: string
	height: string
	mass: string
	hair_color: string
	birth_year: string
	species: string[]
	films: string[]
	starships: string[]
}

const Profile: React.FC<ProfileProps> = ({name, height, mass, hair_color, birth_year, species, films, starships}) => {
	const [filmList, setFilmList] = useState<any>([])
	const [speciesList, setSpeciesList] = useState<any>([])
	const [starshipList, setStarshipList] = useState<any>([])

	useEffect(() => {
		addProfileArray()
	}, [])

	const addProfileArray = async () => {
		films.map(async (url) => {
			let res = await callSWAPI(url)
			setFilmList(prevFilms => [...prevFilms, res.title])
		})

		species.map(async (url) => {
			let res = await callSWAPI(url)
			setSpeciesList(prevSpecies => [...prevSpecies, res.name])
		})

		starships.map(async (url) => {
			let res = await callSWAPI(url)
			setStarshipList(prevStarships => [...prevStarships, res.name])
		})
	}
	return (
		<div className="profile">
			<h3>{name}</h3>
			<hr/>
			<p className="info">
				<strong>Height: </strong>{height}<br/>
				<strong>Weight: </strong>{mass}<br/>
				<strong>Hair Color: </strong>{hair_color}<br/>
				<strong>Date of Birth: </strong>{birth_year}
			</p>
			<h4>Movies</h4>
			{filmList.map((item, index) => <p key={index}>{item}</p>)}
			<h4>Species</h4>
			{speciesList.map((item, index) => <p key={index}>{item}</p>)}
			<h4>Starships</h4>
			{starshipList.map((item, index) => <p key={index}>{item}</p>)}
		</div>
	)
}

export default Profile