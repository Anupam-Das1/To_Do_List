import React from 'react'
import useToggleState from './hooks/useToggleState'
import EditForm from './EditForm'
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"
import CheckBox from "@material-ui/core/Checkbox"
import IconButton from "@material-ui/core/IconButton"
import DeleteIcon from "@material-ui/icons/Delete"
import EditIcon from "@material-ui/icons/Edit"
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction"
function To_do({task, completed, removeTodo,editTodo, id,toggleTodo}) {
    const [isEditing, toggle] = useToggleState(false)
    return (
        <ListItem style={{height: "64px"}}>
            { isEditing ? (<EditForm editTodo={editTodo} toggleEditForm={toggle} task={task} id={id}/>) : (
                <>
            <CheckBox checked={completed} onClick={()=>toggleTodo(id)} />
            <ListItemText style={{textDecoration: completed ? "line-through" : "none"}}>
                {task}
            </ListItemText>
            <ListItemSecondaryAction>
                <IconButton aria-label='Delete' onClick={()=>removeTodo(id)}> <DeleteIcon /></IconButton>
                <IconButton aria-label='Edit' onClick={toggle}> <EditIcon /> </IconButton>
            </ListItemSecondaryAction>
                </>
            )}
        </ListItem>
    )
}
export default To_do;