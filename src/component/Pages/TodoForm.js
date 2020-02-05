import React from 'react';
import {Grid, Row,Container,Col} from 'react-bootstrap';
import {addTodo} from '../../redux/actions/todoAction';
import {connect} from 'react-redux'
class  TodoForm extends React.Component {
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
      <div className="App">
          <input className="input-field" type="text" name="fname" placeholder="Title..."  value={this.state.title} onChange={this.handleChange}/>
          <button  onClick={this.onSubmit}> Add</button>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return({
      Add: (data) => {dispatch(addTodo(data))}
  })
}
export default connect(null, mapDispatchToProps)(TodoForm);


