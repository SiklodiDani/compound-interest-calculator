import React from "react";

const Form = ({
	initialBalance,
	setInitialBalance,
	interestRate,
	setInterestRate,
	years,
	setYears,
	months,
	setMonths,
	balance,
	setBalance,
	interestInterval,
	setInterestInterval,
    compoundInterval,
    setCompoundInterval
}) => {
	const calculateAmount = (e) => {
		e.preventDefault();
		balance = [];
		setBalance([
			...balance,
			{
				time: years * 12 + months,
				interest: interestRate,
				totalInterest: 0,
				amount: initialBalance,
				interestInterval: interestInterval,
                compoundInterval: compoundInterval
			},
		]);
	};

	const InterestIntervalHandler = (e) => {
		setInterestInterval(e.target.value);
	};

    const CompoundIntervalHandler = (e) => {
        setCompoundInterval(e.target.value);
    }

	return (
		<form>
			<div>
				<input
					type="number"
					placeholder="initialBalance"
					value={initialBalance}
					onChange={(e) => setInitialBalance(+e.target.value)}
					className="initialBalance-input"
				/>
			</div>
			<div>
				<input
					type="number"
					placeholder="interestRate"
					value={interestRate}
					onChange={(e) => setInterestRate(+e.target.value)}
					className="interestRate-input"
				/>
				<select onChange={InterestIntervalHandler} name="interestInterval">
					<option value="yearly">Yearly</option>
					<option value="monthly">Monthly </option>
				</select>
			</div>
			<div>
				<input
					type="number"
					placeholder="years"
					value={years}
					onChange={(e) => setYears(+e.target.value)}
				/>
				<input
					type="number"
					placeholder="months"
					value={months}
					onChange={(e) => setMonths(+e.target.value)}
				/>
			</div>
			<div className="select">
				<select onChange={CompoundIntervalHandler} name="compoundInterval">
					<option value="yearly">Yearly</option>
					<option value="semiannually">Semiannually</option>
					<option value="quarterly">Quarterly</option>
					<option value="monthly">Monthly </option>
				</select>
			</div>
			<button
				onClick={calculateAmount}
				type="submit"
				className="calculate-button"
			>
				Calculate
			</button>
		</form>
	);
};

export default Form;