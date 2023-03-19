import React, {useReducer} from "react";
import {Container} from "reactstrap";
import TodoContext from "./Context/context";
import Todoreducer from "./Context/todoreducer";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import Todoform from  "./Components/todoform"
import Todolist from "./Components/totolist";

const App= () => {
    const [todos, dispatch] = useReducer(Todoreducer, []);
    return (
        <TodoContext.Provider value={{todos, dispatch}}>
            <Container fluid>
          
            <img
    alt="Sample"
    src="https://picsum.photos/300/200" className=" mx-auto d-block image"
  />
<h1>
    Todo Application
</h1>
<Todoform />
<Todolist />
            </Container>

        </TodoContext.Provider>
    )
}

export default App;