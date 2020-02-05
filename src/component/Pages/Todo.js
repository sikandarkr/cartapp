import React from 'react';
import TodoForm from './TodoForm';
import {Grid, Row,Container,Col} from 'react-bootstrap';
import TodoList from '../Pages/TodoList';
class  Todo extends React.Component {
 
  render(){
    return (
      <Container>
          <Row className="heading-title">
            <Col></Col>
            <Col> <h2 >My To Do List</h2> </Col>
            <Col></Col>
          </Row>
          <Row> 
              <Col><TodoForm/></Col>
          </Row>
          <Row>
              <Col className="todo-item"><TodoList/></Col>
          </Row>
      </Container>
    );
  }
}
export default Todo;
