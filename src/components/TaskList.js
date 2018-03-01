import React, {Component} from 'react';
import{
View,
Image,
Text,
StyleSheet,
TouchableHighlight
} from 'react-native';

export default class TaskList extends Component{
constructor(props){
super(props);

}



render(){
    const {title,completed,id}=this.props.task;
    const icon = completed ? require('./../images/icon-checked.png') : require('./../images/icon-circle.png');

    return(
      <TouchableHighlight onPress={ ()=>{ this.props.updateTask(id)}} style={styles.container}>
        <View style={styles.taskContainer}>
            <Image style={styles.taskIcon} source={icon}/>
            <Text style={completed ? styles.taskTextCompleted : styles.taskText}>{title}</Text>
        </View>
      </TouchableHighlight>
    )
  }
}


const styles = StyleSheet.create({
  container:{
    height:60
  },
  taskIcon: {
    height: 25,
    width: 25,
    marginRight: 15
  },
  taskText: {
    fontSize: 21
  },
  taskTextCompleted:{
    fontSize:21,
    color: '#A4A4A4'
  },
  taskContainer: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    flexDirection: 'row',
    padding: 10,
    borderStyle: 'solid',
    borderBottomWidth: 2,
    borderColor: '#E7E7E7'
  }
});
