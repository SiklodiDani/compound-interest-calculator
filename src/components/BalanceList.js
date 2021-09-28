import React from "react";
import Balance from "./Balance";

const BalanceList = ({balance}) => {    

	return (
		<div>
			<ul>
				{balance.map((bal) => (                    
					<Balance                        
						month={bal.month}
						interest={bal.interest}
						totalInterest={bal.totalInterest}
						amount={bal.amount}                                               
					/>
				))}
			</ul>
		</div>
	);
};

export default BalanceList;