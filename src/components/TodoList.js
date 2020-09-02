import React, {useEffect, useState} from 'react';
import classnames from 'classnames'
import { List } from 'semantic-ui-react';
import {TodoItem} from './TodoItem'

export const TodoList = ({items, onNewItem, onItemUpdate, onItemDelete}) => {

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

        onItemDelete()
    }

    return (
        <List>
            {items.map(item => {
                return (                    
                    <TodoItem 
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