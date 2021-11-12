import React, { ReactElement, ReactNode } from 'react'

interface Props{
    children ?: ReactNode
}

export default function Child({children}:Props):ReactElement {
    return (
        <div>
            <h2>Hi {children}</h2>
        </div>
    )
}
