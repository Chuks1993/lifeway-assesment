

export interface Profiles {
	name: string
	height: string
	mass: string
	hair_color: string
	birth_year: string
	film: FilmContent[]
	species: SpeciesContent[]
	starship: StarShipContent[]
}

interface FilmContent {
	title: string
}

interface SpeciesContent {
	name: string
}

interface StarShipContent {
	name: string
}