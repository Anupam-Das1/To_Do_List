import React, { useState, useEffect } from 'react'
import TodoForm from './TodoForm'
import Paper from "@material-ui/core/Paper"
import AppBar from "@material-ui/core/AppBar"
import ToolBar from "@material-ui/core/Toolbar"
import TodoList from './TodoList'
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import uuid from 'react-uuid'

function ToDo() {
    const initialTodos=JSON.parse(window.localStorage.getItem("todos") || "[]")
    // const initialTodos=[
    //     {id: 1, task:"do cp", completed: false},
    //     {id: 2, task:"do devlopment", completed: false},
    //     {id: 3, task:"go to gym", completed: true},
    // ]
    const [todos,setTodos]=useState(initialTodos) 

    useEffect(()=>{
        window.localStorage.setItem("todos", JSON.stringify(todos))
    }, [todos])

    const addTodo = newTodo => {
        setTodos([...todos, {id: uuid(),task: newTodo, completed: false}])
    }
    const removeTodo= todoId => {
        // filter out remove todo
        const updatedTodos = todos.filter(todo => todo.id !== todoId);
        // call set todo with new todo array
        setTodos(updatedTodos);
    }
    const toggleTodo = todoId => {
        const updatedTodos = todos.map(todo =>
            todo.id===todoId ? {...todo, completed: !todo.completed} : todo
        )
        setTodos(updatedTodos)
    }
    const editTodo = (todoId,newTask) => {
        const updatedTodos = todos.map(todo =>
            todo.id===todoId ? {...todo, task: newTask} : todo
        )
        setTodos(updatedTodos)
    }

    return (
        <Paper
            style={{
                padding: 0,
                margin: 0,
                height: "100vh",
                backgroundColor: "#faf3e0",
            }}
            elevation={0}
        >
            <AppBar color="primary" position='static' style={{height: "64px", backgroundColor: "teal"}}>
                <ToolBar color="inherit">Todo With Hooks</ToolBar>
            </AppBar>
            <Grid container justify='center' style={{marginTop: "1rem", }} >
                <Grid item xs={11} md={6} lg={4}>
                    <TodoForm  addTodo={addTodo} />
                    <TodoList todos={todos} 
                        removeTodo={removeTodo}
                        toggleTodo={toggleTodo}
                        editTodo={editTodo}
                    />
                </Grid>
            </Grid>
        </Paper>
    )
}

export default ToDo ;