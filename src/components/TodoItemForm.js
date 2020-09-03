import React, { useState} from 'react';
import { Form, Input, Button } from 'semantic-ui-react';

export const TodoItemForm = ({onNewItem}) => {    

    const [itemText, setText] = useState('')

    return (
        <div>
            <Form>
                <Form.Field>
                    <Input 
                        value={itemText} 
                        placeholder="What you're gona do?..." 
                        onChange={e => setText(e.target.value)} />
                </Form.Field>
                <Form.Field>
                    <Button onClick={                        
                        async () => {
                            const item = {text: itemText}          
                            
                            console.log(JSON.stringify(item))
                            
                            const resp = await fetch('/api/todo', {
                                method: 'POST',
                                headers: {
                                    'Content-Type': 'application/json'
                                },
                                body: JSON.stringify(item)
                            })

                            if (resp.ok) {
                                onNewItem(item)
                                setText('')
                            }
                        }
                    }>Submit new todo</Button>
                </Form.Field>

            </Form>
        </div>
    )

}