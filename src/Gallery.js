import { getImageUrl } from "./utils";
import { people } from "./data";
import React from 'react';
import './Gallery.css';


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

export function Profile1() {
    return (
        <img
            src="https://i.imgur.com/QIrZWGIs.jpg"
            alt="Alan L. Hart"
        />
    );
}

export function Profile2() {
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

function Avatar({person, size}) {
    return( 
        <img
            className="avatar"
            src={getImageUrl(person)}
            alt={person.name}
            width={size}
            height={size}
        />
    );
}

export function Profile(){
    return(
        <>
            <h3>Profile</h3>
            <Avatar
                size={100}
                person={{name: 'Katsuko Saruhashi', imageId: 'YfeOqp2'}}
            />
            <Avatar
                size={100}
                person={{name: 'Aklilu Lemma', imageId: 'OKS67lh'}}
            />
            <Avatar
                size={100}
                person={{name: 'Lin Lanying', imageId: '1bX5QH6'}}
            />
        </>
    )
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

export function List() {
    const peoples = people.filter(person => person.profession);
    const listItems = peoples.map(person => {
        return <li key={person.id}>
            <img
                src={getImageUrl(person)}
                alt={person.name}
            />
            <p>
                <b>{person.name}:</b>
                {' '+person.profession+' '}
                known for {person.accomplishment}
            </p>
        </li>
    });
    return <ol>{listItems}</ol>
}

function Item({ name, isPacked}) {
    let itemContent = name;
    if(isPacked) {
        itemContent = (<del>{name+'✔'}</del>)
    }
    return (
        <li className="item">
            {itemContent}
        </li>
    )
}

export function PackingList(){
    return(
        <section>
            <h2>Sally Rede's Packing List</h2>
            <ul>
                <Item isPacked={true} name="Space Suit" />
                <Item isPacked={true} name="Helmet with a golden leaf" />
                <Item isPacked={false} name="Photo of Tam" />
            </ul>
        </section>
    )
}

function Recipe({ drinkers}) {
    return (
        <ol>
            <li>Boil {drinkers} cups of water.</li>
            <li>Add {drinkers} spoons of tea and {0.5 * drinkers} spoons</li>
            <li>Add {0.5 * drinkers} cups of milk to boil and sugar to taste</li>
        </ol>
    );
}

export function PrepareMode() {
    return(
        <section>
            <h2>Spiced Chai Recipe</h2>
            <h3>For two</h3>
            <Recipe drinkers={2} />
            <h3>For a gathering</h3>
            <Recipe drinkers={4} />
        </section>
    );
}

function Cup({ guest }) {
    return <p>Tea cup for guest #{guest}</p>
}

// export default function TeaSet(){
//     return(
//         <>
//             <h2>Tea Set</h2>
//             <Cup guest={1}/>
//             <Cup guest={2}/>
//             <Cup guest={3}/>
//         </>
//     )
// }
export function TeaSet(){
    let cups = [];
    for (let i = 1; i <= 6; i++) {
        cups.push(<Cup key={i} guest={i} />);
    }
    return cups;
}

export default function Gallery() {
    return (
        <section className= "Gallery">
            <h1>Amazing scientists</h1>
            <Article />
            <Profile1 />
            <Profile2 />
            <Profile />
            <HedyTodos />
            <Avatar person ={{name: "Percy Lavon Julian", imageId: "IOjWm71"}} size={80} />
            <PackingList />
            <TodoList />
            <TodoListD />
            <List /> 
            <PrepareMode />
            <TeaSet />
        </section>
    );
}
