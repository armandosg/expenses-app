import { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

const ExpenseInput = () => {
  const [expenseType, setExpenseType] = useState("");
  const [expenseCategory, setExpenseCategory] = useState("");
  const [expenseConcept, setExpenseConcept] = useState("");
  const [expenseAmount, setExpenseAmount] = useState("");

  const handlePress = () => {
    console.log("Expense type", expenseType);
    console.log("Expense category", expenseCategory);
    console.log("Expense concept", expenseConcept);
    console.log("Expense amount", expenseAmount);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter expense type"
        onChangeText={setExpenseType}
        value={expenseType}
        blurOnSubmit={false}
      />
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
      <Button title="Add" onPress={handlePress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 10 },
  input: { height: 45, borderWidth: 1, padding: 10, marginVertical: 10 },
});

export { ExpenseInput };
