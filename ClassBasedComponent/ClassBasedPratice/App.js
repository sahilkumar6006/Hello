import React, {Component} from 'react';
import ShowModal, {ModalComponent} from './Components/ModalComponent';
import {
  Text,
  View,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  TextInput,
  SafeAreaView,
  Alert,
  ScrollView,
  Pressable,
  Modal,
} from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      objItem: [],
      name: '',
      class: '',
      rollNo: '',
      isVisible: 'false',
      ModalIsVisible: false,
      selectedItemIndex: null,
    };
  }

  tapOnAdd = () => {
    if (
      this.state.name == '' ||
      this.state.class == '' ||
      this.state.rollNo == ''
    ) {
      Alert.alert('Enter Details');
    } else {
      let tempObj = {
        name: this.state.name,
        class: this.state.class,
        rollNo: this.state.rollNo,
        serialNo: this.state.objItem.length + 1,
      };
      let tempList = [...this.state.objItem];
      tempList.push(tempObj);
      this.setState({objItem: tempList, name: '', class: '', rollNo: ''});
    }
  };

  tapOnDelete = index => {
    this.setState({
      ModalIsVisible:true,
      selectedItemIndex: index,
    });
    return;
    
    let tempList = [...this.state.objItem];
    tempList.splice(index, 1);
    this.setState({objItem: tempList});
  };

  deleteItem = () => {
    let tempList = [...this.state.objItem];
    tempList.splice(this.state.selectedItemIndex, 1);
     
    this.setState({
      objItem: tempList,
      ModalIsVisible: false,
      selectedItemIndex: null,
    });
  };
  tapOnShowList = () => {
    this.setState({isVisible: !this.state.isVisible});
  };
  renderItem = ({item, index}) => {
    return (
      <View style={styles.listContainer}>
        <Text style={styles.txtoflist}>{index + 1}</Text>
        <Text style={styles.txtoflist}>{item.name}</Text>
        <Text style={styles.txtoflist}>{item.class}</Text>
        <Text style={styles.txtoflist}>{item.rollNo}</Text>
        <Pressable
          onPress={() => this.tapOnDelete({index})}
          style={styles.txtoflist}>
          <Text>Delete</Text>
        </Pressable>
      </View>
    );
  };

  render() {
    return (
      <SafeAreaView>
        <ScrollView keyboardShouldPersistTaps="handled">
          {this.state.ModalIsVisible && (
            <ModalComponent
              showModal={this.state.ModalIsVisible}
              hideModal={() =>
                this.setState({
                  ModalIsVisible: false,
                  selectedItemIndex: null,
                })
              }
              deleteItem={() => this.deleteItem()}
            />
          )}
          <View style={styles.rootContainer}>
            <Text style={styles.headertxt}>
              Welcome to Class Based Component
            </Text>
            <TextInput
              value={this.state.name}
              placeholder="Name"
              style={styles.txtInput}
              onChangeText={val =>
                this.setState({
                  name: val,
                })
              }
            />
            <TextInput
              placeholder="Class"
              style={styles.txtInput}
              value={this.state.class}
              onChangeText={val =>
                this.setState({
                  class: val,
                })
              }
            />
            <TextInput
              placeholder="Rollno"
              keyboardType="numeric"
              style={styles.txtInput}
              value={this.state.rollNo}
              onChangeText={val =>
                this.setState({
                  rollNo: val,
                })
              }
            />

            <TouchableOpacity
              onPress={() => this.tapOnAdd()}
              style={styles.Addbtn}>
              <Text style={styles.addTxt}>Add</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => this.tapOnShowList()}
              style={styles.showListbtn}>
              <Text style={styles.showtxt}>Show List</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
        {this.state.isVisible && (
          <FlatList
            ListHeaderComponent={() => (
              <View style={styles.listContainer}>
                <Text>Sno</Text>
                <Text>Name</Text>
                <Text>Class</Text>
                <Text>Rollno</Text>
                <Text>Delete/Edit</Text>
              </View>
            )}
            extraData={this.state.objItem}
            data={this.state.objItem}
            renderItem={this.renderItem}
            keyExtractor={(item, index) => `${index}`}
          />
        )}
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  rootContainer: {
    height: 'Max-height',
  },
  headertxt: {
    fontSize: 20,
    color: '#2C3335',
    marginBottom: 20,
    marginTop: 8,
    alignSelf: 'center',
  },
  Addbtn: {
    height: 60,
    width: 200,
    backgroundColor: '#01CBC6',
    alignSelf: 'center',
    marginBottom: 16,
    justifyContent: 'center',
    borderRadius: 8,
  },
  txtInput: {
    borderWidth: 0.5,
    marginBottom: 16,
    marginHorizontal: 20,
    padding: 12,
    borderRadius: 6,
  },
  addTxt: {
    textAlignVertical: 'center',
    textAlign: 'center',
  },
  listContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    borderWidth: 0.2,
    elevation: 3,
    backgroundColor: '#F5BCBA',
    marginHorizontal: 20,
    marginBottom: 8,
    borderRadius: 6,
    padding: 8,
    height: 60,
    alignItems: 'center',
  },
  txtoflist: {
    fontSize: 16,
  },
  showListbtn: {
    height: 60,
    width: 200,
    backgroundColor: '#01CBC6',
    alignSelf: 'center',
    marginBottom: 16,
    borderRadius: 8,
    justifyContent: 'center',
  },
  showtxt: {
    textAlign: 'center',
  },
});
