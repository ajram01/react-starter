import {useState} from 'react';
import {ResultsTable} from "./ResultsTable.jsx";

export function Calculator() {

    const [initInvest, setInitInvest] = useState(0);
    const [annualInvest, setAnnualInvest] = useState(0);
    const [expectedReturn, setExpectedReturn] = useState(0);
    const [duration, setDuration] = useState(0);

    function handleInvest(e){
        console.log(initInvest);
        const rawValue = e.target.value;
        setInitInvest(Number(rawValue));
    }

    function handleAnnualInvest(e){
        console.log(annualInvest);
        const rawValue = e.target.value;
        setAnnualInvest(Number(rawValue));
    }

    function handleReturn(e){
        console.log(expectedReturn);
        const rawValue = e.target.value;
        setExpectedReturn(Number(rawValue));
    }

    function handleDuration(e){
        console.log(duration);
        const rawValue = e.target.value;
        setDuration(rawValue);
    }

    return (
        <>
            <div id="user-input">
            <div className="input-group">
                <div>
                    <label>Initial Investment</label>
                    <input type="number" value={initInvest} onChange={handleInvest}/>
                </div>
                <div>
                    <label>Annual Investment</label>
                    <input type="number" value={annualInvest} onChange={handleAnnualInvest}/>
                </div>
            </div>
            <div className="input-group">
                <div>
                    <label>Expected Return</label>
                    <input type="number" value={expectedReturn} onChange={handleReturn}/>
                </div>
                <div>
                    <label>Duration</label>
                    <input type="number" value={duration} onChange={handleDuration}/>
                </div>
            </div>
            </div>
            <ResultsTable initInvest={initInvest} annualInvest={annualInvest} expectedReturn={expectedReturn} duration={duration}/>/
        </>
    );
}