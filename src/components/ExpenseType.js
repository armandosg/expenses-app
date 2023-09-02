import { TextInput, StyleSheet } from "react-native";

const ExpenseType = (props) => {
  return (
    <TextInput
      style={styles.input}
      placeholder="Enter expense type"
      onChangeText={props.onChangeText}
      value={props.value}
      blurOnSubmit={false}
    />
  );
};

const styles = StyleSheet.create({
  input: { height: 45, borderWidth: 1, padding: 10, marginVertical: 10 },
});

export { ExpenseType };
