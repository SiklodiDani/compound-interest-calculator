import React from "react";
import Balance from "./Balance";

const BalanceList = ({balance}) => {    

	return (
		<div >
			{balance.map((bal, i) => (
				<Balance
					key={i}
					time={bal.time}
					interest={bal.interest}
					totalInterest={bal.totalInterest}
					amount={bal.amount}
					interestInterval={bal.interestInterval}
					compoundInterval={bal.compoundInterval}
					depositAmount={bal.depositAmount}
					depositInterval={bal.depositInterval}
					totalDeposits={bal.totalDeposits}
				/>
			))}
		</div>
	);
};

export default BalanceList;