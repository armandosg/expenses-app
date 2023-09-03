import { Text } from "react-native";

const ExpensesListTotal = (props) => {
  return (
    <Text
      style={{ fontSize: "1.3rem", textAlign: "center" }}
    >{`Total $${props.total.toFixed(2)}`}</Text>
  );
};

export { ExpensesListTotal };
