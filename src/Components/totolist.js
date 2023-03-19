import React, {useContext} from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import { FaCheck } from "react-icons/fa";
import TodoContext from "../Context/context";
import { REMOVE_TODO } from "../Context/action.types";

const Todolist = () => {
    const {todos, dispatch} = useContext(TodoContext);
    return (
        <ListGroup className="mt-5 items">
{todos.map(todo => (
    <ListGroupItem key={todo.id}>
{todo.todoStr}
<span className="float-end" >
    <FaCheck onClick={() => {
    dispatch({
        type: REMOVE_TODO,
        payload: todo.id
    })
}}> </FaCheck>
</span>
    </ListGroupItem>
))}

        </ListGroup>

    )
}

export default Todolist;