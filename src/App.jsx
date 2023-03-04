import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import './App.scss';
import { v4 as uuidv4 } from 'uuid';

function App() {

    const [vardas, setVardas] = useState('');
    const [pavarde, setPavarde] = useState('');
    const [bornMetai, setBornMetai] = useState(0);
    const [metai, setMetai] = useState(0);
    const [myList, setMyList] = useState([]);

    const doVardas = e => {
        setVardas(e.target.value);
    }

    const doPavarde = e => {
        setPavarde(e.target.value);
    }

    const doBornMetai = e => {
        setBornMetai(e.target.value);
    }

    const doMetai = e => {
        setMetai(e.target.value);
    }

    const addMy = () => {
        setMyList(w => [...w,
        {
            id: uuidv4(),
            vardas,
            pavarde,
            bornMetai,
            metai,
        }
        ]);
        setVardas('');
        setPavarde('');
        setBornMetai(0);
        setMetai(0);
    }

    const del = id => {
        setMyList(w => w.filter(w => id !== w.id));
    }

    return (
        <div className="App">
            <header className="App-header">
                <div className="card">
                    <div className="card-header">
                        <h2>My data</h2>
                    </div>
                    <ul className="list-group list-group-flush"> {
                            myList.map((a, i) =>
                                <li key={i} className="list-group-item"
                                    style={{ color: a.color }}>
                                    'Aš esu '{a.vardas} {a.pavarde}'. Man yra '<b>{a.metai-a.bornMetai}</b> 'metai(ų).'
                                </li>)
                        }
                    </ul>
                    <div className="m-3">
                        <label className="form-label">Enter your name</label>
                        <input type="text" className="form-control" onChange={doVardas} value={vardas} />
                    </div>
                    <div className="m-3">
                        <label className="form-label">Enter your surname</label>
                        <input type="text" className="form-control" onChange={doPavarde} value={pavarde} />
                    </div>
                    <div className="m-3">
                        <label className="form-label">Enter your born year</label>
                        <input type="text" className="form-control" onChange={doBornMetai} value={bornMetai} />
                    </div>
                    <div className="m-3">
                        <label className="form-label">Enter today's year</label>
                        <input type="text" className="form-control" onChange={doMetai} value={metai} />
                    </div>
                        <button type="button" className="btn btn-outline-success m-4" onClick={addMy}>add</button>
                    </div>
            </header>
        </div>
    );
}

export default App;