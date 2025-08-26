import './clock.css';
import React, {useState, useEffect} from 'react';

function Clock(){

    const [time, setTime] = useState(new Date());

    useEffect( () =>{
        const interval = setInterval(()=>{
            setTime(new Date());
        }, 1000);
        
        return () => clearInterval(interval);
    },[]);


    return(

        <div className='container'>

            {/*time*/}
            <h2 className="text">Digital clock ⏰</h2>
            <p className='time'>{time.toLocaleTimeString()}</p>


            {/*day*/}
            <p className="day">{days[time.getDay()]}</p>

            {/*date*/}
            <p className="date">{time.toLocaleDateString()}</p>


        </div>

        
    );

}


const days =["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];


export default Clock;