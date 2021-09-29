import React from "react";

const Balance = ({ time, interest, totalInterest, amount, interestInterval }) => {
	const finalList = [];			
	let initialInterest= (interest / 100).toFixed(2);	

	if(interestInterval === "yearly")
	{
		initialInterest /= 12;
	}

	for (let i = 1; i <= time; i++) {
		console.log(initialInterest);
		interest = initialInterest *amount;
		console.log(interest);
		totalInterest += interest;
		amount = amount + interest;
		finalList.push(
			<li>
				{i} {interest.toFixed(2)} {totalInterest.toFixed(2)} {amount.toFixed(2)}
			</li>			
		);
	}
	return finalList;
};

export default Balance;
