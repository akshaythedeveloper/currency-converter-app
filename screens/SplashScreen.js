import React from "react";
import { StyleSheet, View, Text, Image, BackHandler } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { MainScreen } from "./MainScreen";

export default class SplashScreen extends React.Component {
  constructor(props) {
    super(props);
    setTimeout(() => {
      this.props.navigation.navigate("MainScreen");
    }, 2000);
  }

  render() {
    return (
      <View style={styles.container}>
        <LinearGradient
          colors={["#2BC0E4", "#EAECC6"]}
          style={styles.container}
        >
          <View>
            <Image
              source={require("../assets/currency.png")}
              style={{ height: 80, width: 80, marginBottom: 20 }}
            />
          </View>
          <Text style={{ fontSize: 25, color: "black", fontWeight: "bold" }}>
            Currency Converter
          </Text>
        </LinearGradient>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
});
