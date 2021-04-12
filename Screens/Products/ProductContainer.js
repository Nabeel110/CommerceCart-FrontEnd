import React, { useState, useCallback } from "react";
import {
  View,
  StyleSheet,
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  ScrollView,
  Dimensions,
} from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import { Container, Header, Icon, Item, Input, Text } from "native-base";
import baseURL from "../../assets/Common/baseURL";
import axios from "axios";

import SearchProducts from "./SearchProducts";
import Banner from "../Shared/Banner";
import ProductList from "./ProductList";
import CategoryFilter from "./CategoryFilter";
//Imprting JSON Dummy Data

var { height } = Dimensions.get("window");

const ProductContainer = (props) => {
  const [products, setProducts] = useState([]);
  const [productsFiltered, setProductsFiltered] = useState([]);
  const [focus, setFocus] = useState();
  const [categories, setCategories] = useState([]);
  const [productsCtg, setProductsCtg] = useState([]);
  const [active, setActive] = useState();
  const [initialState, setInitialState] = useState([]);
  const [loading, setLoading] = useState(true);

  useFocusEffect(
    useCallback(() => {
      setFocus(false);
      setActive(-1);

      // fetch Products
      axios
        .get(`${baseURL}products`)
        .then((res) => {
          // console.log(res.data.body.data);
          setProducts(res.data.body.data);
          setProductsFiltered(res.data.body.data);
          setProductsCtg(res.data.body.data);
          setInitialState(res.data.body.data);
          setLoading(false);
        })
        .catch((err) => {
          console.log("Products API call ERROR" + err);
        });

      //Fetch Categories
      axios
        .get(`${baseURL}categories`)
        .then((res) => {
          setCategories(res.data.body.data);
        })
        .catch((err) => {
          console.log("Categories API call ERROR" + err);
        });
      return () => {
        setProducts([]);
        setProductsFiltered([]);
        setFocus();
        setCategories([]);
        setActive();
        setInitialState([]);
      };
    }, [])
  );

  const searchProduct = (text) => {
    setProductsFiltered(
      products.filter((item) =>
        item.name.toLowerCase().includes(text.toLowerCase())
      )
    );
  };

  const openList = () => {
    setFocus(true);
  };

  const onBlur = () => {
    setFocus(false);
  };

  //categories
  const changeCategory = (ctg) => {
    {
      ctg == "all"
        ? (setProductsCtg(initialState), setActive(true))
        : [
            setProductsCtg(
              products.filter((item) => item.category._id == ctg),
              setActive(true)
            ),
          ];
    }
  };

  return (
    <>
      {!loading ? (
        <Container>
          <Header searchBar rounded>
            <Item>
              <Icon name="ios-search" />
              <Input
                placeholder="Search"
                onFocus={openList}
                onChangeText={(text) => searchProduct(text)}
              />
              {focus ? <Icon onPress={onBlur} name="ios-close" /> : null}
            </Item>
          </Header>
          {focus == true ? (
            <View>
              <SearchProducts
                productsFiltered={productsFiltered}
                navigation={props.navigation}
              />
            </View>
          ) : (
            <ScrollView>
              <View>
                <View>
                  <Banner />
                </View>
                <View>
                  <CategoryFilter
                    categories={categories}
                    categoryFilter={changeCategory}
                    productsCtg={productsCtg}
                    active={active}
                    setActive={setActive}
                  />
                </View>
                {productsCtg.length > 0 ? (
                  <View style={styles.listContainer}>
                    {productsCtg.map((item) => {
                      return (
                        <ProductList
                          key={item.id}
                          item={item}
                          navigation={props.navigation}
                        />
                      );
                    })}
                  </View>
                ) : (
                  <View style={([styles.center], { height: height / 2 })}>
                    <Text>No Products found</Text>
                  </View>
                )}
                {/* <Text>Product Container</Text> */}
              </View>
            </ScrollView>
          )}
        </Container>
      ) : (
        <Container style={([styles.center], { backgroundColor: "f2f2f2" })}>
          <ActivityIndicator
            style={styles.center}
            size="large"
            color="orange"
          />
        </Container>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexWrap: "wrap",
    backgroundColor: "gainsboro",
  },
  listContainer: {
    height: height + 500,
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-start",
    flexWrap: "wrap",
    backgroundColor: "gainsboro",
  },
  center: {
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ProductContainer;
