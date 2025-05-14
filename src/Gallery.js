
import React from 'react';

export function Article() {
    return (
        <article>
            <h1>My First Component</h1>
            <ol>
                <li>Components: UI Building Blocks</li>
                <li>Defining a Component</li>
                <li>Using a Component</li>
            </ol>
        </article>
    );
}

export function Profile() {
    return (
        <img
            src="https://i.imgur.com/QIrZWGIs.jpg"
            alt="Alan L. Hart"
        />
    );
}

export function Profile1() {
    return (
        <img
            src="https://i.imgur.com/MK3eW3As.jpg"
            alt="Katherine Johnson"
        />
    );
}

export function HedyTodos() {
    return (
        <>
            <h1>Hedy Lamarr's Todos</h1>
            <img
                src="https://i.imgur.com/yXOvdOSs.jpg"
                alt="Hedy Lamarr"
                className="photo"
            />
            <ul>
                <li>Invent new traffic lights</li>
                <li>Rehearse a movie scene</li>
                <li>Improve the spectrum technology</li>
            </ul>
        </>
    );
}

export function Avatar() {
    const avatar = "https://i.imgur.com/7vQD0fPs.jpg";
    const description = "Gregorio Y. Zara";
    return (
        <img
            className="avatar"
            src={avatar}
            alt={description}
        />
    );
}

export function TodoList() {
    const name = 'Gregorio Y. Zara';
    return (
        <h1>{name}'s To Do List</h1>
    );
}



export function TodoListD() {
    const today = new Date();

    function formatDate(date) {
        return new Intl.DateTimeFormat(
            'en-US',
            { weekday: 'long' }
        ).format(date);
    }

    return (
        <h1>To Do List for {formatDate(today)}</h1>
    )
}

export default function Gallery() {
    return (
        <section>
            <h1>Amazing scientists</h1>
            <Article />
            <Profile />
            <Profile1 />
            <HedyTodos />
            <Avatar />
            <TodoList />
            <TodoListD />
        </section>
    );
}
