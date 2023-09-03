import { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";
import { ExpenseType } from "./components/ExpenseType";
import { ExpenseDateInput } from "./components/ExpenseDateInput";

const ExpenseInput = (props) => {
  const [expenseType, setExpenseType] = useState("");
  const [expenseCategory, setExpenseCategory] = useState("");
  const [expenseConcept, setExpenseConcept] = useState("");
  const [expenseAmount, setExpenseAmount] = useState("");
  const [expenseDate, setExpenseDate] = useState(
    new Intl.DateTimeFormat().format(new Date())
  );

  const handlePress = () => {
    props.onNewExpense({
      type: expenseType,
      category: expenseCategory,
      concept: expenseConcept,
      amount: expenseAmount,
      date: expenseDate,
    });
  };

  return (
    <View style={styles.container}>
      <ExpenseType value={expenseType} onChangeText={setExpenseType} />
      <TextInput
        style={styles.input}
        placeholder="Enter expense name"
        onChangeText={setExpenseCategory}
        value={expenseCategory}
        blurOnSubmit={false}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter expense concept"
        onChangeText={setExpenseConcept}
        value={expenseConcept}
        blurOnSubmit={false}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter expense amount"
        onChangeText={setExpenseAmount}
        value={expenseAmount}
        keyboardType="numeric"
      />
      <ExpenseDateInput
        style={styles.input}
        value={expenseDate}
        onChangeText={setExpenseDate}
      />
      <Button title="Add" onPress={handlePress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 10 },
  input: { height: 45, borderWidth: 1, padding: 10, marginVertical: 10 },
});

export { ExpenseInput };
