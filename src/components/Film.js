import React from 'react'

export default function Film(props) {
    return (
        <li>
            <a href={props.url} > {props.title} </a>
        </li>
    )
}

