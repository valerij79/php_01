import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';
import './App.scss';
import Gone10 from './Components/005/Gone10';



function App() {

    const [count, setCount] = useState(0);
    const [stars, setStars] = useState('');

    useEffect(() => {
        console.log('App born');
    }, []);



    useEffect(() => {
        console.log('count changed', count);
        console.log(stars);
        setStars(''.padStart(count, '*'));

    }, [count, stars]);



    const add = _ => {
        setCount(c => c + 1);
        // setStars(''.padStart(count, '*'));
    }

    const rem = _ => {
        setCount(c => c - 1);
        // setStars(''.padStart(count, '*'));
    }



    return (
        <div className="App">
            <header className="App-header">
                {
                    count < 11 ? <Gone10 /> : null
                }
                <h1>{count}</h1>
                <h2>{stars}</h2>
                <button type="button" className="btn btn-outline-danger m-4" onClick={add}>add</button>
                <button type="button" className="btn btn-outline-danger m-4" onClick={rem}>rem</button>
            </header>
        </div>
    );
}
function getRandomIntInclusive(min, max) {
         min = Math.ceil(min);
         max = Math.floor(max);
         return Math.floor(Math.random() * (max - min + 1) + min);
     }
const arr = [];

 for(let i = 10; i >= 1; i--) {
    arr.push(getRandomIntInclusive(120, 220));
 }
 console.log(arr);

 
export default App;