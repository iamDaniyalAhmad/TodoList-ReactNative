import { View,TextInput,Button,StyleSheet } from "react-native";
import { useState } from "react";
const todoinput = (props) => {
    
  const [enteredText,setEnteredText] = useState('');
  function takeinput(e){
    setEnteredText(e)
  }
  function onPress (){
    props.submitTodo(enteredText)
    setEnteredText('');
  }
    return ( 
        <View style={styles.inputSection}>
      <TextInput  style={styles.input} onChangeText={takeinput} value={enteredText} placeholder='Enter your Todo....'/>
      <Button color={'#765dee'} title='Add Todo' onPress={onPress}/>
     </View>
     );
}
 
export default todoinput;

const styles = StyleSheet.create({
    inputSection:{
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginTop:10,
        borderBottomWidth:1,
        borderBottomColor:'#cccccc',
        paddingBottom:20,
        marginBottom:20
      },
      input:{
        borderWidth:1,
        borderColor:'#cccccc',
        width:'75%',
        marginRight:5,
        padding:5,
        color: '#765dee'
      }
})