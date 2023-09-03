import { View } from "react-native";
import { ExpenseInput } from "./src/ExpenseInput";
import { ExpensesList } from "./src/components/ExpensesList";
import { useState } from "react";

const DATA = [
  {
    id: "1",
    type: "Variable",
    category: "Ropa",
    concept: "Pantalon",
    amount: 700,
    date: new Intl.DateTimeFormat().format(new Date()),
  },
  {
    id: "2",
    type: "Fijo",
    category: "Hogar",
    concept: "Internet",
    amount: 500,
    date: new Intl.DateTimeFormat().format(new Date()),
  },
  {
    id: "3",
    type: "Variable",
    category: "Entretenimiento",
    concept: "Netflix",
    amount: 300,
    date: new Intl.DateTimeFormat().format(new Date()),
  },
  {
    id: "4",
    type: "Fijo",
    category: "Hogar",
    concept: "Luz",
    amount: 1000,
    date: new Intl.DateTimeFormat().format(new Date()),
  },
];

export default function App() {
  const [data, setData] = useState(DATA);

  const handleNewExpense = (newExpense) => {
    setData((previousData) => [
      ...previousData,
      { id: Math.random(), ...newExpense },
    ]);
  };

  return (
    <View>
      <ExpenseInput onNewExpense={handleNewExpense} />
      <ExpensesList data={data} />
    </View>
  );
}
