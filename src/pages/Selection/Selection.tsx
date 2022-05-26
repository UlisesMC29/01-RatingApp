// import React from 'react'
import '../Selection/selection.css';
import { numberSelect } from '../Principal/principal';

export const Selection = () => {

    return (
        <div className="container-principal">
            <div className='miniCard'>
                <div className='image'>
                    <img className='phone-img' src="src\images\phone.jpg" alt="imagen del telefono" />
                </div>
                <div className='text-container'>
                    <p className='msg-select'>You selected {numberSelect} put of 5</p>
                    <h1 className='title-how'>Than You!</h1>
                    <p className='text-content'>We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!</p>

                </div>
            </div>
        </div>
    );
}

