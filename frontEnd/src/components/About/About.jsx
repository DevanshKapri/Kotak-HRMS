import React from 'react';
import './About.css'
import image from '../../../src/Assest/ImageAbout.png'
function About() {
    return ( <>
    <div className='container'>
        <div className='image'>
            <img src={image} />
        </div>
        <div className='Text'>
        <h1 className='aboutHead'>Some Good Title For The Project</h1>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam sed nostrum nemo quo! Officiis esse dolor reiciendis minus pariatur. Assumenda.
        </div>
    </div>

    </> );
}

export default About;