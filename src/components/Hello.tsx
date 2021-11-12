import React from 'react'
interface Props{
    name?:string;
}

export default function Hello({name}:Props) {
    return (
        <div>
            <h1>Hello {name}</h1>
        </div>
    )
}
