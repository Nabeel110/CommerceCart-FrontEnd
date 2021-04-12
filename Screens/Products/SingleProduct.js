import React, { useState, useEffect } from "react";
import {
  View,
  Image,
  StyleSheet,
  Text,
  ScrollView,
  Button,
  Alert,
} from "react-native";
import { Left, Right, Container, H1 } from "native-base";
const SingleProduct = (props) => {
  const [item, setItem] = useState(props.route.params.item);
  const [availability, setAvailability] = useState("");

  return (
    <Container style={styles.container}>
      <ScrollView style={{ marginBottom: 80, padding: 5 }}>
        <View>
          <Image
            source={{
              uri: item.image
                ? item.image
                : "https://cdn.pixabay.com/photo/2012/04/01/17/29/box-23649_960_720.png",
            }}
            resizeMode="contain"
            style={styles.image}
          />
        </View>
        <View style={styles.contentContainer}>
          <H1 style={styles.contentHeader}>{item.name}</H1>
          <Text style={styles.contentText}>{item.brand}</Text>
        </View>
        {/* {TODO Description, Rich Description and Availability} */}
      </ScrollView>
      <View style={styles.bottomContainer}>
        <Left>
          <Text style={styles.priceText}>PKR {item.price}</Text>
        </Left>
      </View>
      <View>
        <Button
          style={styles.CartBtn}
          title="Add to Cart"
          color="black"
          onPress={() => alert("Simple Button pressed")}
        ></Button>
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
    height: "100%",
  },
  imageContainer: {
    backgroundColor: "white",
    padding: 0,
  },
  image: {
    width: "100%",
    height: 250,
  },
  contentContainer: {
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  contentHeader: {
    fontWeight: "bold",
    marginBottom: 20,
  },
  contentHeader: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
  },
  bottomContainer: {
    flexDirection: "row",
    position: "absolute",
    bottom: 20,
    left: 0,
    backgroundColor: "white",
  },
  priceText: {
    fontSize: 24,
    margin: 20,
    color: "red",
  },
  CartBtn: {
    marginBottom: 5,
    paddingVertical: 20,
    borderWidth: 1,
    width: 200,
  },
});

export default SingleProduct;
