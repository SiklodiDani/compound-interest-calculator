import React from "react";
import Balance from "./Balance";

const BalanceList = ({balance}) => {    

	return (
		<div>
			<ul>
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
			</ul>
		</div>
	);
};

export default BalanceList;