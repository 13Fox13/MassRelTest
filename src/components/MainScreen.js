import React, { Component } from "react";
import { Text, View } from "react-native";
import Header from "./Header";
import ItemList from "./ItemList"

export default class MainScreen extends Component {

  render() {

    return (
      <View>
        <Header />
        <ItemList />
        <ItemList />
        <ItemList />
        <ItemList />
        <ItemList />
      </View>
    );
  }
}
