import React from 'react';
import { List } from 'semantic-ui-react';
import {TodoItem} from './TodoItem'

export const TodoList = ({items, onItemUpdate, onItemDelete}) => {
    
    const completeItem = async id => {
        console.log('Complete: '+id)

        const resp = await fetch('/api/todo/'+id, {
            method: 'PUT'
        })

        if (resp.ok) {
            onItemUpdate()
        }
    }
    
    const deleteItem = async id => {
        console.log('Delete: '+id)
        
        const resp = await fetch('/api/todo/'+id, {
            method: 'DELETE'
        })

        if (resp.ok) 
            onItemDelete()
    }

    return (
        <List>
            {items.map(item => {
                return (                    
                    <TodoItem 
                        key={item.id}
                        id={item.id}
                        text={item.text} 
                        complete={item.complete} 
                        onUpdate={() => completeItem(item.id)} 
                        onDelete={() => deleteItem(item.id)} />
                )
            })}
        </List>
    )
}