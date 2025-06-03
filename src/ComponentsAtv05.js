import { useState } from 'react';
import './ComponentsAtv05.css';

export function Accordion() {
    const [activeIndex, setActiveIndex] = useState(0);

    return(
        <>
            <h2>Almaty, Kazakhstan</h2>
            <Panel title="About" isActive={activeIndex === 0} onShow={()=>setActiveIndex(0)}>
                With a population of about 2 million, Almaty is Kazakhstan's largest city.
                From 1929 to 1997, it was its capital city.
            </Panel>
            <Panel title="Etymology" isActive={activeIndex === 1} onShow={()=>setActiveIndex(1)}>
                The name comes from <span lang="kk-KZ">алма</span> the Kazakh word for "apple" and is
                often translated as "full of apples". In fact, the region surrounding Almaty is thought
                to be ancestral home of the apple, and the wild <i lang="la">Malus sieversii</i>
                is considered a likely candidate for the ancestor of the modern domestic apple.
            </Panel>
        </>
    );
}

function Panel({
    title,
    children,
    isActive,
    onShow
}) {
    return(
        <section className='panel'>
            <h3>{title}</h3>
            {isActive ? (<p>{children}</p>):(<button onClick={onShow}>Show</button>)}
        </section>
    )
}

export function Chat({ contact }) {
    const [text, setText] = useState('');

    return (
        <section className='chat'>
            <textarea value={text} placeholder={'Chat to ' + contact.name} onChange={e=>setText(e.target.value)}/>
            <br />
            <button>Send to {contact.email}</button>
        </section>
    );
}

export function ContactList({selectedContact, contacts = [], onSelect}) {
    return(
        <section className="contact-list">
            <ul>
                {contacts.map(contact => 
                    <li key={contact.email}>
                        <button onClick={() => {
                            onSelect(contact);
                        }}>{contact.name}</button>
                    </li>
                )}
            </ul>
        </section>
    );
}


export function FormTicket() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [fullName, setFullName] = useState('');

    function handleFirstNameChange(e) {
        setFirstName(e.target.value);
        setFullName(e.target.value + ' ' + lastName);
    }
    function handleLastNameChange(e) {
        setLastName(e.target.value);
        setFullName(firstName + ' ' + e.target.value);
    }

    return (
        <>
            <h2>Let's check you in</h2>
            <label>First Name: {' '}</label>
            <input value={firstName} onChange={handleFirstNameChange}/>
            <label>Last Name: {' '}</label>
            <input value={lastName} onChange={handleLastNameChange}/>
            <br/>
            <p>Your ticket will be issued to: <b>{fullName}</b></p>
        </>
    );
}

export function FormQuiz() {
    const [answer, setAnswer] = useState('');
    const [error, setError] = useState(null);
    const [status, setStatus] = useState('Typing!');

    if(status === 'sucess') {
        return <h1>That's right!</h1>
    }

    async function handleSubmit(e) {
        e.preventDefault();
        setStatus('Submitting');
        try{
            await submitForm(answer);
            setStatus('sucess');
        } catch(err) {
            setStatus('Typing!');
            setError(err);
        }
    }

    function handleTextareaChange(e) {
        setAnswer(e.target.value);
    }

    return(
        <>
            <h2>City Quiz!</h2>
            <p>In wich city is there a billboard that turn air into drinkable water?</p>
            <form onSubmit={handleSubmit}>
                <textarea value={answer} onChange={handleTextareaChange} disabled={status === 'submitting'} /><br />
                <button disabled={answer.length === 0 || status === 'submitting'}>Submit</button>
                {error !== null && <p className='Error'>{error.message}</p>}
            </form>
        </>
    );
}

function submitForm(answer) {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            let shouldError = answer.toLowerCase() !== 'lima'
            if (shouldError) {
                reject(new Error('Try again!'));
            } else {
                resolve();
            }
        }, 1500);
    });
}

export function Messenger() {
    const [to, setTo] = useState(contacts[0]);
    return(
        <div>
            <ContactList contacts={contacts} selectedContact={to} onSelect={contact => setTo(contact)}/>
            <Chat key={to.email} contact={to}/>
        </div>
    );
}

const contacts = [
    {name: 'Taylor', email: 'taylor@mail.com'},
    {name: 'Alice', email: 'alice@mail.com'},
    {name: 'Bob', email: 'bob@mail.com'}
];

export default function ComponentsAtv05() {
    return (
      <section className='Attach'>
        <Accordion />
        <Chat contact={{ name: 'Alice', email: 'alice@mail.com' }} />
        <ContactList />
        <FormQuiz />
        <FormTicket />
        <Messenger />
        </section>
    );
}