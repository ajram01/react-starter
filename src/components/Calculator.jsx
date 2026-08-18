import {useState} from 'react';

export function Calculator() {

    const [initInvest, setInitInvest] = useState(0);
    const [annualInvest, setAnnualInvest] = useState(0);
    const [expectedReturn, setExpectedReturn] = useState(0);
    const [duration, setDuration] = useState(0);

    function handleInvest(e){
        setInitInvest(e.target.value);
    }

    function handleAnnualInvest(e){
        setAnnualInvest(e.target.value);
    }

    function handleReturn(e){
        setExpectedReturn(e.target.value);
    }

    function handleDuration(e){
        setDuration(e.target.value);
    }

    return (
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
    );
}