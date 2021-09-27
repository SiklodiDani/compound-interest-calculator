import React, {useState} from "react";
import './App.css';

import Form from "./components/Form";

function App() {

  const [initialBalance, setInitialBalance] = useState();
  const [interestRate, setInterestRate] = useState();
  const [timePeriod, setTimePeriod] = useState();  
  const [balance, setBalance] = useState();

  return (
		<div className="App">
			<header className="App-header">
				<h1>Compound Interest Calculator</h1>
				<Form
					initialBalance={initialBalance}
					setInitialBalance={setInitialBalance}
          interestRate={interestRate}
          setInterestRate={setInterestRate}
          timePeriod={timePeriod}
          setTimePeriod={setTimePeriod}
          balance={balance}
          setBalance={setBalance}
				/>
			</header>
		</div>
	);
}

export default App;
