/*
 * TasksScreen
 */
import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableHighlight
} from 'react-native';

import TasksHeader from './../components/TasksHeader.js';
import Task from './../components/TaskList.js';


export default class TasksScreen extends Component<Props>{

  constructor(props){
    super(props);

    this.state = {
      tasks: [
        { id: 1, title: 'Comprar Leche', completed: false },
        { id: 2, title: 'Sacar la basura', completed: false },
        { id: 3, title: 'Lava los platos', completed: false },
        { id: 4, title: 'Organizar la peda', completed: false },
        { id: 5, title: 'Soportar la cruda', completed: false },
        { id: 6, title: 'Netflix and Chill', completed: false }
      ]
    }

  }

  updateTask(targetedId){
    //Copiar el estado
    let currentTask = [...this.state.tasks];

    //Verificar el ID del que quiero cambiar
    let taskToBeUpdated = currentTask.find( task=>task.id === targetedId );
    //Checar en que estado esta y cambiarlo
    taskToBeUpdated.completed = !taskToBeUpdated.completed;
    //Actualizar el estado
    this.setState( {task: currentTask} );
  }

  calculateTaskToBeCompleted(){
    let count = 0;
    this.state.tasks.forEach(task =>{
      if(!task.completed){
        count++;
      }
    } );
    return count;
  }
  renderTask(){
    return (
      this.state.tasks.map( (task) => {
        return(
            <Task key={task.id} task={task} updateTask={this.updateTask.bind(this)}/>
        )
      } )
    )
}


render(){
  return (
    <View style={ styles.container }>
      <TasksHeader toBeCompleted={this.calculateTaskToBeCompleted()}/>
      <ScrollView style={ styles.tasksContainer }>{this.renderTask()}</ScrollView>
      <TouchableHighlight style={styles.addTaskbutton}>
        <Image style={styles.plusIcon} source={require('./../images/icon-plus.png')}/>
      </TouchableHighlight>
    </View>
  )
}

}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  tasksContainer: {
    backgroundColor: 'white',
    flex: 1
  },
  addTaskbutton:{
    backgroundColor: '#ED184A',
    width:66,
    height:66,
    borderRadius:33,
    position: 'absolute',
    bottom:20,
    right:15,
    alignItems:'center',
    justifyContent:'center'
  },
  plusIcon:{
    width:30,
    height:30
  }

});
