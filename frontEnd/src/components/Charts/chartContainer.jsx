import React from 'react';
import Example from './charts'
import Piec from './piechart';
import PieNew from './piechartnew'
import './container.css'
function Container() {
    return (<div className='exmclss'>
    <Example/>
    <PieNew/>
    </div>  );
}

export default Container;