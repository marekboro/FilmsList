import React, {Fragment } from 'react'
import Film from '../components/Film'

export default function ListOfFilms(props){
    const filmNodes = props.films.map(film => {
        return <Film key={film.id} url={film.url} title={film.name}>  </Film>
    });
    
    return (
            <Fragment>
            <ul>
            {filmNodes}
            </ul>
            </Fragment>
    )
    
}