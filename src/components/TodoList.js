import React from 'react';
import { List } from 'semantic-ui-react';
import {TodoItem} from './TodoItem'

export const TodoList = ({items, onItemUpdate, onItemDelete}) => {
    const apiHost = process.env.API_HOST ? process.env.API_HOST : '127.0.0.1'
    const apiEndpoint = 'http://'+apiHost+':5000/api/todo'

    const completeItem = async id => {
        console.log('Complete: '+id)

        const resp = await fetch(apiEndpoint+'/'+id, {
            method: 'PUT'
        })

        if (resp.ok) {
            onItemUpdate()
        }
    }
    
    const deleteItem = async id => {
        console.log('Delete: '+id)
        
        const resp = await fetch(apiEndpoint+'/'+id, {
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