import React from 'react';
import Title from './Title'
function TitleBar() {
    const list=[
        {
            title:"Finance",
            description:"Accounting and finance professionals must have excellent analytical ability"
        }
        ,
        {
            title:"Corporate",
            description:"Corporate Position means a director, officer and/or fiduciary of the Company or of any other corporation, trust, employee benefit plan. "
        }
    ]
    console.log(list)
    return ( list.map((item,i)=>{
        return(
            <Title
            card={item}
            key={i}
            />
        );
    }) );
}

export default TitleBar;