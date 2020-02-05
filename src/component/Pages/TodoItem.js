import React from 'react';
import {Grid, Row,Container,Col} from 'react-bootstrap';
import {FaTimes} from 'react-icons/fa';
class  TodoItem extends React.Component {
  state ={
    title:""
  }
  handleChange = (e) =>{
    console.log("works.....");
      this.setState({
        title: e.target.value
      })
  }
  onSubmit =(e) =>{
    e.preventDefault();
    this.props.Add(this.state.title);
    this.setState({
      title:""
    })
  }
  render(){
    return (
      <Row>
          <div className="task">
                <p className="task">{this.props.task}</p> <span className="delete-icon"><FaTimes  onClick={this.props.itemClicked}/></span> 
          </div>
      </Row>
    );
  }
}
export default TodoItem;


