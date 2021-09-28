import React from "react";

const Form = ({initialBalance, setInitialBalance, interestRate, setInterestRate, years, setYears, months, setMonths, balance, setBalance}) => {
    
    const calculateAmount = (e) => {
        e.preventDefault();        
        setBalance([
            ...balance,
			{time: years*12+months, interest: interestRate*initialBalance/100, totalInterest: interestRate*initialBalance/100, amount: initialBalance},
        ]);
    }

    return (
        <form>
            <input type="number" placeholder="initialBalance" value={initialBalance} onChange={e => setInitialBalance(+e.target.value)} />
            <input type="number" placeholder="interestRate" value={interestRate} onChange={e => setInterestRate(+e.target.value)} />
            <input type="number" placeholder="years" value={years} onChange={e => setYears(+e.target.value)} />
            <input type="number" placeholder="months" value={months} onChange={e => setMonths(+e.target.value)} />
            <button onClick={calculateAmount} type="submit"/>
            
        </form>
    );
}

export default Form;