import React, {useState} from "react";
import './App.css';

import Form from "./components/Form";
import BalanceList from "./components/BalanceList";

function App() {

  const [initialBalance, setInitialBalance] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [years, setYears] = useState(""); 
  const [months, setMonths] = useState("");   
  const [balance, setBalance] = useState([]);

  return (
		<div className="App">
			<header className="App-header">
				<h1>Compound Interest Calculator</h1>
				<Form
					initialBalance={initialBalance}
					setInitialBalance={setInitialBalance}
          interestRate={interestRate}
          setInterestRate={setInterestRate}
          years={years}
          setYears={setYears}
          months={months}
          setMonths={setMonths}
          balance={balance}
          setBalance={setBalance}
				/>
        <BalanceList 
          balance={balance}
        />
			</header>
		</div>
	);
}

export default App;
