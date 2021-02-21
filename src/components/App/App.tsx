import React from 'react';
import Timer from '../Timer/Timer';
import './App.css';
import {configNotification} from '../../firebase';

function App(){
    configNotification()
    return(
        <div className='container'>
            <Timer />
        </div>



    )
};


export default App;