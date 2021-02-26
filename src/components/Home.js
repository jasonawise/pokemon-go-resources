import React, { useState } from 'react'
import { MobileView } from './Styled'
import { formatApiData, getApiResponse } from './utils'
// import PropTypes from 'prop-types';

// TODO these need to be env vars
const endpoint = `https://pokemon-go1.p.rapidapi.com/possible_ditto_pokemon.json`
const headers = {
  'x-rapidapi-key': process.env.REACT_APP_RAPID_API_KEY,
  'x-rapidapi-host': `pokemon-go1.p.rapidapi.com`,
}

const Home = ( props ) => {
  const [ apiData, setApiData ] = useState( [] )
  const handleClick = async () => {
    const data = await getApiResponse( endpoint, headers )
    const formatedData = formatApiData( data )
    setApiData( formatedData )
  }

  return (
    <MobileView>
      <h1 className="text-xl">Go Poke Go</h1>

      <button className="border rounded-md py-2 px-4 bg-primary" type="button" onClick={handleClick}>
        See Ditto
      </button>
      <ul>
        {apiData.map( ( data, key ) => (
          <li key={key}>{data}</li>
        ) )}
      </ul>
    </MobileView>
  )
}

// Home.propTypes = {};

export default Home
