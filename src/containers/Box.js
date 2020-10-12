import React,{Component, Fragment} from 'react'
import Title from '../components/Title'
import ListOfFilms from './ListOfFilms'
import More from '../components/More'

export default class Box extends Component {
    render(){
        
        return (

            <Fragment>

            <Title></Title>
            <ListOfFilms/>
            <More/>

            </Fragment>
        )
       
    }
}


