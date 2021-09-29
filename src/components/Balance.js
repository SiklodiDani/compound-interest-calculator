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
	}
	const YearsBreakdown = () => {
		setProjectionBreakdown(12);
	}

	finalList.push(
		<li>
			<button onClick={MonthsBreakdown} type="submit" />
			<button onClick={YearsBreakdown} type="submit" />
		</li>
	);

	if (interestInterval === "yearly") {
		initialInterest /= 12;
	}

	switch(compoundInterval) {
		case "yearly":
			compInterval=12;
			break;
		case "semiannually":
			compInterval=6;
			break;
		case "quarterly":
			compInterval=3;
			break;
		default:
			compInterval=1;
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
				<li>
					{i / projectionBreakdown} {interest.toFixed(2)}{" "}
					{totalInterest.toFixed(2)} {amount.toFixed(2)}
				</li>
			);
		}
	}

	return finalList;
};

export default Balance;
