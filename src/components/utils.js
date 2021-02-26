export const getApiResponse = async ( url, header ) => {
  try {
    const response = await fetch( url, {
      method: `GET`,
      headers: header,
    } )

    const json = await response.json()

    return json
  } catch ( error ) {
    // eslint-disable-next-line no-console
    console.error( error )
  }
}

export const formatApiData = ( data ) => Object.keys( data ).map( ( value ) => data[value].name )
