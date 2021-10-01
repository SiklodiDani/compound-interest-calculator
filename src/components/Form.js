import React from "react";
import './Form.css';

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
	setCompoundInterval,
	depositAmount,
	setDepositAmount,
	depositInterval,
	setDepositInterval
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
				compoundInterval: compoundInterval,
				depositAmount: depositAmount,
				totalDeposits: depositAmount,
				depositInterval: depositInterval
			}
		]);
	};

	const InterestIntervalHandler = (e) => {
		setInterestInterval(e.target.value);
	};

	const CompoundIntervalHandler = (e) => {
		setCompoundInterval(e.target.value);
	};

	const DepositIntervalHandler = (e) => {
		setDepositInterval(e.target.value);
	};

	return (
		<form>
			<div>
				<label>
					Initial Balance:
					<input
						type="number"
						value={initialBalance}
						onChange={(e) => setInitialBalance(e.target.value)}
						className="initialBalance-input"
					/>
				</label>
			</div>
			<div>
				<label>
					Interest Rate:
					<input
						type="number"
						value={interestRate}
						onChange={(e) => setInterestRate(e.target.value)}
						className="interestRate-input"
					/>
					<select onChange={InterestIntervalHandler}>
						<option value="yearly">Yearly</option>
						<option value="monthly">Monthly </option>
					</select>
				</label>
			</div>
			<div>
				<label>
					Years:
					<input
						className="interestYears-input"
						type="number"
						value={years}
						onChange={(e) => setYears(e.target.value)}
					/>
				</label>
				<label>
					Months:
					<input
						className="interestMonths-input"
						type="number"
						value={months}
						onChange={(e) => setMonths(e.target.value)}
					/>
				</label>
			</div>
			<div className="select">
				<label>
					Compound Interval:
					<select onChange={CompoundIntervalHandler} >
						<option value="yearly">Yearly</option>
						<option value="semiannually">Semiannually</option>
						<option value="quarterly">Quarterly</option>
						<option value="monthly">Monthly </option>
					</select>
				</label>
			</div>
			<div>
				<label>
					Deposit Amount:
					<input
					className="depositAmount-input"
					type="number"
					value={depositAmount}
					onChange={(e) => setDepositAmount(e.target.value)}
					 />
					 <select onChange={DepositIntervalHandler} >
						<option value="yearly">Yearly</option>
						<option value="semiannually">Semiannually</option>
						<option value="quarterly">Quarterly</option>
						<option value="monthly">Monthly </option>
					</select>
				</label>
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
