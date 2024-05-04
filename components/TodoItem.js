import { StyleSheet,Text,Pressable } from "react-native";

const todoitem = (props) => {

    function deleteHandler(){
        props.onDelete(props.todoitem.item.id)
    }

    return ( 
        <Pressable onPress={deleteHandler}>
    <Text style={styles.todo} key={props.todoitem.index}>{props.todoitem.item.text}</Text>
    </Pressable> );
}
 
export default todoitem;


const styles = StyleSheet.create({
    todo:{
        marginVertical: 5,
        borderWidth: 1,
        padding: 5,
        textAlign: 'center',
        backgroundColor: '#765dee',
        color: 'white',
        borderRadius: 200,
        fontSize: 15
      }
})