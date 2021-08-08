import Expenses from "./components/Expenses";
import "./App.css";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    {
      id: "e2",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 13),
    },
    {
      id: "e3",
      title: "Car Club",
      amount: 394.67,
      date: new Date(2022, 10, 19),
    },
    {
      id: "e4",
      title: "Car Race",
      amount: 594.67,
      date: new Date(2023, 11, 30),
    },
  ];

  return (
    <div>
      <h2>Lets get started!</h2>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
