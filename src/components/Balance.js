import React from "react";

const Balance = ({ time, interest, totalInterest, amount, interestInterval, compoundInterval }) => {
	const finalList = [];			
	let initialInterest= (interest / 100);	
	let initialAmount=amount;

	if(interestInterval === "yearly")
	{
		initialInterest /= 12;
	}
	
	if(compoundInterval === "yearly")
	{
		for (let i = 1; i <= time; i++) {		
			interest = initialInterest *initialAmount;	
			amount = amount + interest;
			if(i%12 === 0){
				initialAmount = amount;
			}	
			totalInterest += interest;
			finalList.push(
				<li>
					{i} {interest.toFixed(2)} {totalInterest.toFixed(2)} {amount.toFixed(2)}
				</li>			
			);
		}
	} else {
		for (let i = 1; i <= time; i++) {		
			interest = initialInterest *amount;		
			totalInterest += interest;
			amount = amount + interest;
			finalList.push(
				<li>
					{i} {interest.toFixed(2)} {totalInterest.toFixed(2)} {amount.toFixed(2)}
				</li>			
			);
		}
	}

	return finalList;
};

export default Balance;
