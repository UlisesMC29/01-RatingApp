// import React from 'react';
import '../Principal/principal.css';

export const Principal = () => {

    return (
        <div className="container-principal">
            <div className='miniCard'>
                <div className='star-image'>
                    <img className='star' src="src\images\estrella.png" alt="imagen de la estrella" />
                </div>
                <div className='text-container'>
                    <h1 className='title-how'>How did we do?</h1>
                    <p className='text-content'>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
                    <ul className='numbers-list'>
                        <li className='one'>1</li>
                        <li>2</li>
                        <li>3</li>
                        <li>4</li>
                        <li>5</li>
                    </ul>
                    <button>SUBMIT</button>
                </div>
            </div>
        </div>
    );
}

