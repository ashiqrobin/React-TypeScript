import React, { ReactElement, ReactNode } from 'react'

const defaultContainerProps = {
    heading: <h1>My heading</h1>
} 

export const Container = ({heading, children}:
    {children:ReactNode} & typeof defaultContainerProps):ReactElement => {
    return (
        <div>
            <p>{heading}</p>
            {children}
        </div>
    );
    
}


Container.defaultProps = defaultContainerProps;