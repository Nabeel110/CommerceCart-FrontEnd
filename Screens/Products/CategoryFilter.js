import React from "react";
import {
  TouchableOpacity,
  View,
  StyleSheet,
  Dimensions,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { ListItem, Badge, Text, Item } from "native-base";
const CategoryFilter = (props) => {
  return (
    <ScrollView
      bounces={true}
      horizontal={true}
      style={{ backgroundColor: "#f2f2f2" }}
    >
      <ListItem style={{ margin: 0, padding: 0, borderRadius: 0 }}>
        <TouchableOpacity
          key={1}
          onPress={() => {
            props.categoryFilter("all"), props.setActive(-1);
          }}
        >
          <Badge
            style={[
              styles.center,
              { margin: 5 },
              props.active == -1 ? styles.active : styles.inactive,
            ]}
          >
            <Text style={{ color: "white" }}>All</Text>
          </Badge>
        </TouchableOpacity>
        {props.categories.map((ctg) => (
          <TouchableOpacity
            key={ctg.id}
            onPress={() => {
              props.categoryFilter(ctg.id);
              props.setActive(props.categories.indexOf(ctg));
            }}
          >
            <Badge
              style={[
                styles.center,
                { margin: 5 },
                props.active == props.categories.indexOf(ctg)
                  ? styles.active
                  : styles.inactive,
              ]}
            >
              <Text style={{ color: "white" }}>{ctg.name}</Text>
            </Badge>
          </TouchableOpacity>
        ))}
      </ListItem>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  center: {
    justifyContent: "center",
    alignItems: "center",
  },
  active: {
    backgroundColor: "#03bafc",
  },
  inactive: {
    backgroundColor: "#a0e1eb",
  },
});
export default CategoryFilter;
