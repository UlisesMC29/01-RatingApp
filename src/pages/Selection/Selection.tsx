// import React from 'react'
import '../Selection/selection.css';

export const Selection = () => {

    return (
        <div className="container-principal">
            <div className='miniCard'>
                <div className='star-image'>
                    <img className='star' src="src\images\estrella.png" alt="imagen de la estrella" />
                </div>
                <div className='text-container'>
                    {/* <h1 className='title-how'>Than You!</h1> */}
                    <p className='text-content'>We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!</p>

                </div>
            </div>
        </div>
    );
}

