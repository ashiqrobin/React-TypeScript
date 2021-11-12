import React, {ReactElement, ReactNode} from 'react'

// interface Props<ListItem>{
//     items: ListItem[];
//     render: (item:ListItem)=>ReactNode;
     
// }

export default function Ls<ListItem >({items,render}:{
    items: ListItem[];
    render: (item:ListItem)=>ReactNode;
}){
    return (
        <ul>
            {items.map((item,index)=>(
                <li key={index}>{render(item)}</li>
            ))}
        </ul>
    )
}
