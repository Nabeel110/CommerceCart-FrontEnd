import React from "react";
import { TouchableOpacity, View, Dimensions, SafeAreaView } from "react-native";
import ProductCard from "./ProductCard";

const { width } = Dimensions.get("window");
const ProductList = (props) => {
  const { item, navigation } = props;
  return (
    <SafeAreaView>
      <TouchableOpacity
        style={{ width: "50%" }}
        onPress={() => navigation.navigate("Product Detail", { item: item })}
      >
        <View style={{ width: width / 2, backgroundColor: "gainsboro" }}>
          <ProductCard {...item} />
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default ProductList;
