import React, { Component } from 'react';
import { Image, Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export class ModalComponent extends Component {
  constructor(props) {
    super(props);
  }
  render() {
      console.log("this.props=>>>",this.props.showModal);


    return (
      <Modal visible={this.props.showModal} transparent={true} statusBarTranslucent={true} animationType='slide'>
        <View style={styles.modalContainer}>
          <View style={styles.contentContainer}>
            <Image source={require('../Images/warning.jpg')} style={styles.image} />
            <Text style={styles.title}>Are You Sure?</Text>
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.deleteButton} onPress={() => {this.props.deleteItem()}}>
                <Text style={styles.deleteText}>DeleteField</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.deleteButton} onPress={() => {this.props.hideModal()}}>
                <Text style={styles.deleteText}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',

  },
  contentContainer: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 20,
    alignItems: 'center',
    elevation: 6,
    shadowColor: 'black',
    shadowOffset: {
      height: 2,
      width: 2,
    },
  },
  image: {
    height: 80,
    resizeMode: 'contain',
    marginBottom: 16,
  },
  title: {
    fontSize: 20,
    marginBottom: 16,
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  deleteButton: {
    backgroundColor: '#FF6347',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 5,
  },
  deleteText: {
    color: 'white',
    fontSize: 16,
  },
});
