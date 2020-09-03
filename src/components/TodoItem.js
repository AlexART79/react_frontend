import React from 'react';
import { List } from 'semantic-ui-react';
import classnames from 'classnames'


export const TodoItem = ({id, complete, text, onUpdate, onDelete}) => {    
    const itemClass = classnames('todo-list-item', {
        ['todo-list-item-checked']: complete
    })

    const renderIcon = (complete, onClick) => {
        if (complete) {
            return (<i className="check circle outline icon" onClick={onClick}></i>)
        }
        else {
            return (<i className="circle outline icon" onClick={onClick}/>)
        }
    }

    return (                    
        <List.Item key={id} className={itemClass}> 
            {renderIcon(complete, onUpdate)}            
            {text}            
            <i className="close icon" onClick={onDelete}></i>
        </List.Item>
    )
}
