 import React, {useState, useContext} from "react";
 import TodoContext from "../Context/context";
 import {Input, InputGroup, Button, Form, FormGroup, Label} from "reactstrap";
 import { ADD_TODO } from "../Context/action.types";
 import {v4} from "uuid";
 import { ToastContainer, toast } from 'react-toastify';
 import 'react-toastify/dist/ReactToastify.css';
  const Todoform = () => {
      const [todoStr, setTodoStr]= useState("");
     const {dispatch} = useContext(TodoContext);
const notify = ()=> toast("Add some thing")

     const todoSubmit = e => {
 e.preventDefault();
 
     if(todoStr=== "")
     {
         return  notify();
         
     }

     const todo ={
         todoStr,
         id: v4()
    };
     dispatch({
         type: ADD_TODO,
         payload: todo
    });
     setTodoStr("");
};

    return(
     <Form onSubmit={todoSubmit}>
        <ToastContainer position="bottom-center"/>
        <FormGroup>
            <Label style={{color: "Yellow"}}>
                Todo
            </Label>
            <InputGroup>
            <Input
            type="text"
            name="todo"
            id="todo"
            placeholder="Enter your Todo"
            value={todoStr}
            onChange={e => setTodoStr(e.target.value)}
          />
          <Button color="danger"
          >
              Add
          </Button>
          </InputGroup> 
        </FormGroup>
     </Form>   
    )
 }

 export default Todoform;


