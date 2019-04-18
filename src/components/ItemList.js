import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import Service from "../services/Service";
import ErrorIndicator from "./ErrorIndicator";

export default class ItemList extends Component {

  service = new Service();

  state = {
    item: {},
    error: false
  };

  componentDidMount() {
    this.updateItem();
    this.interval = setInterval(this.updateItem, 10000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  onItemLoaded = item => {
    this.setState({
      item,
      error: false
    });
  };

  onError = err => {
    this.setState({
      error: true
    });
  };

  updateItem = () => {
    const id = Math.floor(Math.random() * 10 + 2);
    this.service
      .getAllItems(id)
      .then(this.onItemLoaded)
      .catch(this.onError);
  };

  render() {

    const { item, error } = this.state;

    const errorMessage = error ? <ErrorIndicator /> : null;
    const content = !error ? <ItemView item={item} /> : null;

    return (
      <View style={styles.container}>
        {errorMessage}
        {content}
      </View>
    );
  }
}

const ItemView = ({ item }) => {
  const { name, description } = item;

  return (
    <React.Fragment>
      <View style={styles.containerInfo}>
        <Text style={styles.textInfoTitle}>{name}</Text>
        <View style={styles.containerInfoText}>
          <Text style={styles.textInfo}>News: </Text>
          <Text style={styles.textInfo}>{description}</Text>
        </View>
      </View>
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    margin: 10,
    padding: 10,
    borderRadius: 5,
    backgroundColor: "#FFF"
  },
  containerInfo: {
    margin: 0,
    paddingTop: 1,
    paddingLeft: 0.5,
    borderRadius: 3
  },
  textInfoTitle: {
    fontSize: 23,
    color: "#444",
    paddingLeft: 10,
    paddingBottom: 10
  },
  containerInfoText: {
    flexDirection: "row",
    padding: 0.25,
    marginRight: 0.5,
    marginLeft: 25,
    borderTopWidth: 0.2,
    borderColor: "#999"
  },
  textInfo: {
    fontSize: 15,
    color: "white",
    marginRight: 6,
    padding: 3
  }
});
