import { useState } from "react";
import { View, TextInput, Button, StyleSheet, Text } from "react-native";
import { ExpenseType } from "./components/ExpenseType";
import { ExpenseDateInput } from "./components/ExpenseDateInput";
import {
  typeSchema,
  amountSchema,
  dateSchema,
  conceptSchema,
  categorySchema,
} from "./schemas";

const ExpenseInput = (props) => {
  const [expenseType, setExpenseType] = useState("");
  const [expenseTypeIsValid, setExpenseTypeIsValid] = useState(true);
  const [expenseCategory, setExpenseCategory] = useState("");
  const [expenseCategoryIsValid, setExpenseCategoryIsValid] = useState(true);
  const [expenseConcept, setExpenseConcept] = useState("");
  const [expenseConceptIsValid, setExpenseConceptIsValid] = useState(true);
  const [expenseAmount, setExpenseAmount] = useState("");
  const [expenseAmountIsValid, setExpenseAmountIsValid] = useState(true);
  const [expenseDate, setExpenseDate] = useState(
    new Intl.DateTimeFormat("en-US", {
      day: "2-digit",
      month: "2-digit",
      year: "2-digit",
    }).format(new Date())
  );
  const [expenseDateIsValid, setExpenseDateIsValid] = useState(true);

  const handlePress = () => {
    const parseType = typeSchema.safeParse(expenseType);
    const parseAmount = amountSchema.safeParse(expenseAmount);
    const parseDate = dateSchema.safeParse(expenseDate);
    const parseConcept = conceptSchema.safeParse(expenseConcept);
    const parseCategory = categorySchema.safeParse(expenseCategory);
    setExpenseTypeIsValid(parseType.success);
    setExpenseAmountIsValid(parseAmount.success);
    setExpenseDateIsValid(parseDate.success);
    setExpenseConceptIsValid(parseConcept.success);
    setExpenseCategoryIsValid(parseCategory.success);
    if (
      !parseType.success ||
      !parseAmount.success ||
      !parseDate.success ||
      !parseConcept.success ||
      !parseConcept.success ||
      !parseCategory.success
    ) {
      return;
    }

    props.onNewExpense({
      type: expenseType,
      category: expenseCategory,
      concept: expenseConcept,
      amount: Number(expenseAmount),
      date: expenseDate,
    });
  };

  return (
    <View style={styles.container}>
      <ExpenseType
        value={expenseType}
        onChangeText={setExpenseType}
        isValid={expenseTypeIsValid}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter expense category"
        onChangeText={setExpenseCategory}
        value={expenseCategory}
        blurOnSubmit={false}
      />
      {!expenseCategoryIsValid && (
        <Text style={{ color: "red" }}>{"Category should be a string"}</Text>
      )}
      <TextInput
        style={styles.input}
        placeholder="Enter expense concept"
        onChangeText={setExpenseConcept}
        value={expenseConcept}
        blurOnSubmit={false}
      />
      {!expenseConceptIsValid && (
        <Text style={{ color: "red" }}>{"Concept should be a string"}</Text>
      )}
      <TextInput
        style={styles.input}
        placeholder="Enter expense amount"
        onChangeText={setExpenseAmount}
        value={expenseAmount}
        keyboardType="numeric"
      />
      {!expenseAmountIsValid && (
        <Text style={{ color: "red" }}>{"Amount should be a number"}</Text>
      )}
      <ExpenseDateInput
        style={styles.input}
        value={expenseDate}
        onChangeText={setExpenseDate}
      />
      {!expenseDateIsValid && (
        <Text style={{ color: "red" }}>{"Date should be a date"}</Text>
      )}
      <Button title="Add" onPress={handlePress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 10 },
  input: { height: 45, borderWidth: 1, padding: 10, marginVertical: 10 },
});

export { ExpenseInput };
