import { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";

const ExpenseInput = () => {
  const [expenseAmount, setExpenseAmount] = useState(0);
  const handleTextChange = (expenseAmount) => {
    setExpenseAmount(expenseAmount);
  };
  return (
    <View style={{ padding: 10 }}>
      <Text>$</Text>
      <TextInput
        style={{ height: 40 }}
        placeholder="Enter a new expense"
        onChageText={handleTextChange}
        defaultValue={String(expenseAmount)}
      />
      <Button title="Submit" />
    </View>
  );
};

export { ExpenseInput };
