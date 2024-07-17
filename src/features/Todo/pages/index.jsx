import React, { useState } from 'react';
import TodoList from '../components/TodoList/pages';

TodoFeature.propTypes = {

};

function TodoFeature(props) {
    const inittodoList = [
        {
            id: 1,
            title: 'eat',
            status: 'new',
        },
        {
            id: 2,
            title: 'sleep',
            status: 'completed',

        },
        {
            id: 3,
            title: 'Code',
            status: 'new',
        },
    ];

    const [todoList, setTodoList] = useState(inittodoList);

    const handleTodoClick = (todo, idx) => {

        console.log(todo, idx);
    }
    return (
        <div>
            <h3>Todo List</h3>
            <TodoList todoList={todoList} onTodoClick={handleTodoClick} />
        </div>
    );
}

export default TodoFeature;