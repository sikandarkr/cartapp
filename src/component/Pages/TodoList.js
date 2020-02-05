import React from 'react';
import {Grid, Row,Container,Col} from 'react-bootstrap';
import {addTodo,deleteTodo} from '../../redux/actions/todoAction';
import TodoItem from '../Pages/TodoItem';
import {connect} from 'react-redux'
class  TodoList extends React.Component {
    deleteHandler =(id) =>{
            this.props.Delete(id);
    }
  render(){
      console.log("your todo items....", this.props.todos);
    return (
      <div className="App">
        {
            this.props.todos?this.props.todos.todos.map((item,j)=><TodoItem key={item.id} task={item.text} itemClicked={() => this.deleteHandler(item.id)} />):null
        }
      </div>
    );
  }
}
const mapStateToProps = (state) => {
    return {
      todos:state.todo,
    }
}
function mapDispatchToProps(dispatch) {
  return({
      Add: (data) => {dispatch(addTodo(data))},
      Delete:(id)=>{dispatch(deleteTodo(id))}
  })
}
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);


