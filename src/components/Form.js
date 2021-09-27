import React from "react";

const Form = ({initialBalance, setInitialBalance, interestRate, setInterestRate, timePeriod, setTimePeriod, balance, setBalance}) => {
    
    const calculateAmount = (e) => {
        e.preventDefault();
        setBalance(initialBalance*(Math.pow(1+interestRate,timePeriod)-1));
    }

    return (
        <form>
            <input type="number" value={initialBalance} onChange={e => setInitialBalance(+e.target.value)} />
            <input type="number" value={interestRate} onChange={e => setInterestRate(+e.target.value)} />
            <input type="number" value={timePeriod} onChange={e => setTimePeriod(+e.target.value)} />
            <button onClick={calculateAmount} type="submit"/>
            <h2>{balance}</h2>
        </form>
    );
}

export default Form;