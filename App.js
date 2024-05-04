import { StyleSheet,  View, FlatList } from 'react-native';
import { useState } from 'react';
import Todoitem from './components/TodoItem';
import Todoinput from './components/TodoInput';
export default function App() {
  const [todolist, setTodoList] = useState([]);

  
  function submitTodo(enteredText){
    if(enteredText){
      setTodoList([...todolist,{text:enteredText,id: Math.random().toString()}]);

    }
  }

  function deleteHandler(id){
    setTodoList(todolist.filter(todo => todo.id != id) )
  }
  return (
    <View style={styles.container}>
     <Todoinput submitTodo={submitTodo} />
     <FlatList style={styles.todoList} data={todolist}  renderItem={(todoitem) => {
      return (
        <Todoitem todoitem={todoitem}  onDelete={deleteHandler} />
      )
     }} />
     {/* <ScrollView>
      {
        todolist.map((todo) => <Text style={styles.todo} key={todo}>{todo}</Text>)
      }
     </ScrollView> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop:30,
    paddingHorizontal:10
  },
  todoList:{
    height: '85%'
  },
  
});
