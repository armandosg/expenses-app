import { View, Text, FlatList, StyleSheet } from "react-native";

const ExpenseItem = (props) => {
  return (
    <View style={styles.item}>
      <Text style={styles.itemText}>{props.item.type}</Text>
      <Text style={styles.itemText}>{props.item.category}</Text>
      <Text style={styles.itemText}>{props.item.concept}</Text>
      <Text style={styles.itemText}>{props.item.amount}</Text>
      <Text style={styles.itemText}>{props.item.date}</Text>
    </View>
  );
};

const ExpensesList = (props) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={props.data}
        renderItem={(item) => <ExpenseItem item={item.item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
  },
  item: {
    flexDirection: "row",
    backgroundColor: "#ccc",
    marginTop: 5,
  },
  itemText: {
    padding: 5,
  },
});

export { ExpensesList };
