import { TextInput, StyleSheet, View, Text } from "react-native";

const ExpenseType = (props) => {
  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="Enter expense type"
        onChangeText={props.onChangeText}
        value={props.value}
        blurOnSubmit={false}
      />
      {!props.isValid && (
        <Text style={{ color: "red" }}>
          {"Type should be one of these values: Variable or Fijo"}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  input: { height: 45, borderWidth: 1, padding: 10, marginVertical: 10 },
});

export { ExpenseType };
