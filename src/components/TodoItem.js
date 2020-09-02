import React, {useEffect, useState} from 'react';
import { List, Header } from 'semantic-ui-react';
import classnames from 'classnames'


export const TodoItem = (id, complete, text, onUpdate, onDelete) => {    
    const itemClass = classnames('todo-list-item', {
        ['todo-list-item-checked']: complete
    })

    const renderIcon = (complete, onClick) => {
        if (complete) {
            return (<i class="check circle outline icon" onClick={onClick}></i>)
        }
        else {
            return (<i class="circle outline icon" onClick={onClick}/>)
        }
    }

    return (                    
        <List.Item key={id} className={itemClass}> 
            {renderIcon(complete, () => onUpdate(id))}
            
            {text}
            
            <i class="close icon" onClick={() => onDelete(id)}></i>
        </List.Item>
    )
}
