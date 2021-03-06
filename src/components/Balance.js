import React, {useState} from "react";
import './Balance.css';


const Balance = ({
	time,
	interest,
	totalInterest,
	amount,
	interestInterval,
	compoundInterval,
	depositAmount,
	depositInterval,
	totalDeposits
}) => {
	const [projectionBreakdown, setProjectionBreakdown] = useState(1);
	const finalList = [];
	interest = Number(interest);
	depositAmount = Number(depositAmount);
	amount = Number(amount);
	totalDeposits = Number(totalDeposits);
	let initialInterest = interest / 100;
	let initialAmount = amount;
	let compInterval;
	let depInterval;

	const MonthsBreakdown = () => {
		setProjectionBreakdown(1);
	};
	const YearsBreakdown = () => {
		setProjectionBreakdown(12);
	};

	if (interestInterval === "yearly") {
		initialInterest /= 12;
	}

	switch (depositInterval) {
		case "yearly":
			depInterval = 12;
			break;
		case "semiannually":
			depInterval = 6;
			break;
		case "quarterly":
			depInterval = 3;
			break;
		default:
			depInterval = 1;
			break;
	}

	switch (compoundInterval) {
		case "yearly":
			compInterval = 12;
			break;
		case "semiannually":
			compInterval = 6;
			break;
		case "quarterly":
			compInterval = 3;
			break;
		default:
			compInterval = 1;
			break;
	}

	for (let i = 1; i <= time; i++) {
		console.log(time);
		interest = initialInterest * initialAmount;
		amount = amount + interest;
		totalInterest += interest;

		if (i % depInterval === 0) {
			initialAmount += depositAmount;
			amount += depositAmount;
			totalDeposits += depositAmount;
		}

		if (i % compInterval === 0) {
			initialAmount = amount;
		}

		if (i % projectionBreakdown === 0) {
			finalList.push(
				<tr key={i}>
					<td>{i / projectionBreakdown}</td>
					<td> {interest.toFixed(2)}</td>
					<td> {totalDeposits.toFixed(2)}</td>
					<td>{totalInterest.toFixed(2)}</td>
					<td>{amount.toFixed(2)}</td>
				</tr>
			);
		}
	}

	return (
		<div>
			<div className="balances-buttons">
				<h3>Projection breakdown:</h3>
				<button onClick={MonthsBreakdown} type="submit">
					Months
				</button>
				<button onClick={YearsBreakdown} type="submit">
					Years
				</button>
			</div>
			<div className="balances-container">
				<table className="balances-table">
					<thead>
						<tr>
							<th>Period</th>
							<th>Interest</th>
							<th>Total Deposits</th>
							<th>Total Interest</th>
							<th>Total Balance</th>
						</tr>
					</thead>
					<tbody>{finalList}</tbody>
				</table>
			</div>
		</div>
	);
};

export default Balance;
