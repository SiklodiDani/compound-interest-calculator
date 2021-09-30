import React from "react";
import { useState } from "react/cjs/react.development";

const Balance = ({
	time,
	interest,
	totalInterest,
	amount,
	interestInterval,
	compoundInterval,
}) => {
	const [projectionBreakdown, setProjectionBreakdown] = useState(1);
	const finalList = [];
	let initialInterest = interest / 100;
	let initialAmount = amount;
	let compInterval;

	const MonthsBreakdown = () => {
		setProjectionBreakdown(1);
	};
	const YearsBreakdown = () => {
		setProjectionBreakdown(12);
	};

	if (interestInterval === "yearly") {
		initialInterest /= 12;
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
		interest = initialInterest * initialAmount;
		amount = amount + interest;
		if (i % compInterval === 0) {
			initialAmount = amount;
		}
		totalInterest += interest;
		if (i % projectionBreakdown === 0) {
			finalList.push(
				<tr>
					<td>{i / projectionBreakdown}</td>
					<td> {interest.toFixed(2)}</td>
					<td>{totalInterest.toFixed(2)}</td>
					<td>{amount.toFixed(2)}</td>
				</tr>
			);
		}
	}

	return (
		<div className="balances-container">
			<button onClick={MonthsBreakdown} type="submit" />
			<button onClick={YearsBreakdown} type="submit" />
			
			<table className="balances-table" >
				<thead>
					<tr>
						<th>Month</th>
						<th>Interest</th>
						<th>Total Interest</th>
						<th>Total Balance</th>
					</tr>
				</thead>
				<tbody>
					{finalList}
				</tbody>
			</table>
			
		</div>
	);
};

export default Balance;
