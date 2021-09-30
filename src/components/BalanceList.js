import React from "react";
import Balance from "./Balance";

const BalanceList = ({balance}) => {    

	return (
		<div >
			{balance.map((bal) => (
				<Balance
					time={bal.time}
					interest={bal.interest}
					totalInterest={bal.totalInterest}
					amount={bal.amount}
					interestInterval={bal.interestInterval}
					compoundInterval={bal.compoundInterval}
				/>
			))}
		</div>
	);
};

export default BalanceList;