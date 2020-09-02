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

    const renderIcon = (complete, onClick) => {
        if (complete) {
            return (<i class="check circle outline icon" onClick={onClick}></i>)
        }
        else {
            return (<i class="circle outline icon" onClick={onClick}/>)
        }
    }

    return (
        <List>
            {items.map(item => {

                const itemClass = classnames('todo-list-item', {
                    ['todo-list-item-checked']: item.complete
                })

                return (                    
                    <List.Item key={item.id} className={itemClass}> 
                        {renderIcon(item.complete, () => completeItem(item.id))}
                        
                        {item.text}
                        
                        <i class="close icon" onClick={() => deleteItem(item.id)}></i>
                    </List.Item>
                )
            })}
        </List>
    )
}