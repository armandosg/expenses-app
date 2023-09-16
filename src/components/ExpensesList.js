import { View, Text, FlatList } from "react-native";

const ExpenseItem = (props) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 10,
        borderBottomWidth: 1,
      }}
    >
      <View>
        <Text style={{ fontSize: "1.2rem", padding: 2 }}>
          {props.item.concept}
        </Text>
        <Text style={{ padding: 2 }}>{`Tipo: ${props.item.type}`}</Text>
        <Text
          style={{ padding: 2 }}
        >{`Categoria: ${props.item.category}`}</Text>
        <Text style={{ padding: 2 }}>{props.item.date}</Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "flex-end",
        }}
      >
        <Text style={{ fontSize: "1.2rem", padding: 2 }}>
          {`$${props.item.amount.toFixed(2)}`}
        </Text>
      </View>
    </View>
  );
};

const ExpensesList = (props) => {
  return (
    <View>
      <FlatList
        data={props.data}
        renderItem={(item) => <ExpenseItem item={item.item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};
export { ExpensesList };
