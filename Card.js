import React from 'react';

export default function Card(props){
    // props.title, props.content
    return (
        <div class="Card">
            <button type="button">delete</button>
            {/* <h3>First card</h3>
            <p>lorem ipsum</p> */}
            <h3>{props.title}</h3>
            <p>{props.content}</p>
        </div>
    )
}
