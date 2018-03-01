import React, {Component} from 'react';
import{
View,
Image,
Text,
StyleSheet,
ImageBackground
} from 'react-native';

export default class TasksHeader extends Component{
constructor(props){
super(props);

}

generateDate(){

  const daysOfTheWeek = ['Domingo','Lunes','Martes','Miercoles','Jueves','Viernes','Sabado'],
    months =['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];


   const currentDate = new Date(),
    day = daysOfTheWeek[currentDate.getDay()],
    month = months[currentDate.getMonth()],
    year = currentDate.getFullYear(),
    date = currentDate.getDate();


   return `${day} ${date} de ${month} ${year}`.toUpperCase();

}

render(){
   return(
     <View style={ styles.container }>
       <ImageBackground style={styles.backgroundImage} source={require('./../images/tasks-bg.jpg')}>
         <Image style={styles.userAvatar} source={require('./../images/user-avatar.png')}/>
         <Text style={styles.pendingTasksText}>{this.props.toBeCompleted} Pendientes</Text>
         <Text style={styles.dateText}>{this.generateDate()}</Text>
       </ImageBackground>
     </View>
   )
 }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage:{
    flex:1,
    justifyContent: 'center',
    alignItems:'center'
  },
  userAvatar: {
    height: 130,
    width: 130,
    borderRadius: 65
  },
  pendingTasksText: {
    marginTop: 25,
    fontSize: 36,
    color: 'white'
  },
  dateText: {
    marginTop: 8,
    fontSize: 16,
    color: '#A0A0A0'
  }
})
