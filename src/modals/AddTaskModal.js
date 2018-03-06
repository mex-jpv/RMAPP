/**
 * AddTasksModal
 *
 */

import React, { Component } from 'react';

import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableHighlight,
  TextInput
} from 'react-native';


export default class AddTaskModal extends Component<Props> {

  constructor(props){
    super(props);
    this.state = {
      taskTitle: ''
    }
  }

  render() {
   return (
     <View style={styles.wrapper}>
       <View style={styles.container}>
         <View style={styles.header}>
           <Image style={styles.logo} source={require('./../images/remindMe-logo.png')}/>
         </View>
         <View style={styles.body}>
           <Text style={styles.addText}>Agregar Tarea</Text>
           <TextInput
             onChangeText={ ( text )=>{ this.setState({ taskTitle: text })  } }
             style={styles.input}/>
           <TouchableHighlight style={styles.acceptButton} onPress={ ()=>{ this.props.addTask( this.state.taskTitle ) } }>
             <Text style={styles.buttonAcceptText}>AGREGAR</Text>
           </TouchableHighlight>
           <TouchableHighlight  style={styles.cancelButton} onPress={ ()=>{ this.props.hideModal() } }>
             <Text  style={styles.buttonCancelText}>CANCELAR</Text>
           </TouchableHighlight>
         </View>
       </View>
     </View>
   );
 }
}


const styles = StyleSheet.create({
  header:{
    backgroundColor: 'rgb(237,24,74)',
    height:195,
    alignItems: 'center'
  },
  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0, .35)'
  },
  container: {
    height: 479,
    width: 325,
    backgroundColor: 'white'
  },
  logo: {
    width: 288,
    height: 65,
    marginTop: 57,
  },
  body:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  input: {
    fontSize: 25,
    width: 276,
    textAlign: 'center'
  },
  addText:{
    fontSize: 14,
    color: '#A0A0A0',
    marginTop: 5
  },
  acceptButton: {
    height: 50,
    width: 280,
    padding: 15,
    borderStyle: 'solid',
    borderWidth: 2,
    borderColor: 'rgb(237,24,74)',
    borderRadius: 27,
    backgroundColor: 'rgb(237,24,74)',
    marginTop: 16,
  },
  cancelButton: {
    height: 50,
    width: 280,
    padding: 15,
    borderStyle: 'solid',
    borderWidth: 2,
    borderColor: 'rgb(237,24,74)',
    borderRadius: 27,
    marginTop: 16,
  },
  buttonAcceptText: {
    color: 'white',
    fontSize: 19,
    textAlign: 'center'
  },
  buttonCancelText: {
    color: 'rgb(237,24,74)',
    fontSize: 19,
    textAlign: 'center'
  }

});
