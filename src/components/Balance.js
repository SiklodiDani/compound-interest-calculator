import React from "react";

const Balance = ({ time, interest, totalInterest, amount }) => {
	const finalList = [];			
	const initialInterest = interest / 100;

	for (let i = 1; i <= time; i++) {
		amount = amount + interest;
		finalList.push(
			<li>
				{i} {interest.toFixed(2)} {totalInterest.toFixed(2)} {amount.toFixed(2)}
			</li>
		);
		interest = initialInterest * amount;
		totalInterest += interest;
	}
	return finalList;
};

export default Balance;
