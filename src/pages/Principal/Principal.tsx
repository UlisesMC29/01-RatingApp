// import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../Principal/principal.css';

export let numberSelect = 0;

export const Principal = () => {

    numberSelect = 0;

    const navigate = useNavigate();

    //-LISTADO DE FUNCIONES DE CADA OPCION

    const op1 = () => {
        return (
            numberSelect = 1,
            document.getElementById('btn1')?.classList.add('btn-li'),
            document.getElementById('btn2')?.classList.remove('btn-li'),
            document.getElementById('btn3')?.classList.remove('btn-li'),
            document.getElementById('btn4')?.classList.remove('btn-li'),
            document.getElementById('btn5')?.classList.remove('btn-li')
        )
    }

    const op2 = () => {
        return (
            numberSelect = 2,


            document.getElementById('btn2')?.classList.add('btn-li'),
            document.getElementById('btn1')?.classList.remove('btn-li'),
            document.getElementById('btn3')?.classList.remove('btn-li'),
            document.getElementById('btn4')?.classList.remove('btn-li'),
            document.getElementById('btn5')?.classList.remove('btn-li')

        )
    }

    const op3 = () => {
        return (
            numberSelect = 3,
            document.getElementById('btn3')?.classList.add('btn-li'),
            document.getElementById('btn1')?.classList.remove('btn-li'),
            document.getElementById('btn2')?.classList.remove('btn-li'),
            document.getElementById('btn4')?.classList.remove('btn-li'),
            document.getElementById('btn5')?.classList.remove('btn-li')

        )
    }

    const op4 = () => {
        return (
            numberSelect = 4,
            document.getElementById('btn4')?.classList.add('btn-li'),
            document.getElementById('btn1')?.classList.remove('btn-li'),
            document.getElementById('btn3')?.classList.remove('btn-li'),
            document.getElementById('btn2')?.classList.remove('btn-li'),
            document.getElementById('btn5')?.classList.remove('btn-li')

        )
    }

    const op5 = () => {
        return (
            numberSelect = 5,
            document.getElementById('btn5')?.classList.add('btn-li'),
            document.getElementById('btn1')?.classList.remove('btn-li'),
            document.getElementById('btn3')?.classList.remove('btn-li'),
            document.getElementById('btn4')?.classList.remove('btn-li'),
            document.getElementById('btn2')?.classList.remove('btn-li')
        )
    }
    //------------------------------------

    const selectionNum = () => {
        return navigate("/selection")
    }


    return (



        <div className="container-principal">
            <div className='container-minicard'>
                <div className='miniCard'>
                    <div className='star-image'>
                        <img className='star' src="src\images\estrella.png" alt="imagen de la estrella" />
                    </div>
                    <div className='text-container'>
                        <h1 className='title-how'>How did we do?</h1>
                        <p className='text-content'>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
                        <ul className='numbers-list'>
                            <li id='btn1' className='' onClick={op1}>1</li>
                            <li id='btn2' className='' onClick={op2}>2</li>
                            <li id='btn3' className='' onClick={op3}>3</li>
                            <li id='btn4' className='' onClick={op4}>4</li>
                            <li id='btn5' className='' onClick={op5}>5</li>
                        </ul>
                        <button onClick={selectionNum}>SUBMIT</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

