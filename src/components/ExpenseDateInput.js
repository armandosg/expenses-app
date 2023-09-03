import { TextInput } from "react-native";

const ExpenseDateInput = (props) => {
  return (
    <TextInput
      style={props.style}
      placeholder="Enter expense date"
      onChangeText={props.onChangeText}
      value={props.value}
      keyboardType="numeric"
      maxLength={8}
      autoCorrect={false}
    />
  );
};

export { ExpenseDateInput };
