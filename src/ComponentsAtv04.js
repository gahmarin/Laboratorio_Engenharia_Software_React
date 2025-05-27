import { useState} from 'react';
import { sculptureList } from "./data1.js";
import Clock from './Clock.js';
import './ComponentsAtv04.css';

export function Gallery() {
    const [index, setIndex] = useState(0);
    const [showMore, setShowMore]= useState(false);

    function handleNextClick() {
    setIndex(index + 1);
    }

    function handleMoreClick(){
        setShowMore(!showMore);
    }

let sculpture = sculptureList[index];
return (
    <>
        <button onClick={handleClick}>
            Next
        </button>
        <h2>
            <i>{sculpture.name} </i>
            by {sculpture.artist}
        </h2>
        <h3>
            ({index + 1} of {sculptureList.length})
        </h3>
        <button onClick={handleMoreClick}>
            {showMore ? 'Hide' : 'Show'} details
        </button>
        {showMore && <p>{sculpture.description}</p>}
        <img
            src={sculpture.url}
            alt={sculpture.alt}
        />
    </>
    );
}




export function BucketList() {
  const [myList, setMyList] = useState(initialList);
  const [yourList, setYourList] = useState(
    initialList
  );

  let nextId = 3;
const initialList = [
  { id: 0, title: 'Big Bellies', seen: false },
  { id: 1, title: 'Lunar Landscape', seen: false },
  { id: 2, title: 'Terracotta Army', seen: true },
];

  function handleToggleMyList(artworkId, nextSeen) {
    setMyList(myList.map(artwork =>
      artwork.id === artworkId
        ? { ...artwork, seen: nextSeen }
        : artwork
    ));
  }

  function handleToggleYourList(artworkId, nextSeen) {
    setYourList(yourList.map(artwork =>
      artwork.id === artworkId
        ? { ...artwork, seen: nextSeen }
        : artwork
    ));
  }

  return (
    <>
      <h1>Art Bucket List</h1>
      <h2>My list of art to see:</h2>
      <ItemList
        artworks={myList}
        onToggle={handleToggleMyList}
      />
      <h2>Your list of art to see:</h2>
      <ItemList
        artworks={yourList}
        onToggle={handleToggleYourList}
      />
    </>
  );
}

function ItemList({ artworks, onToggle }) {
  return (
    <ul>
      {artworks.map(artwork => (
        <li key={artwork.id}>
          <label>
            <input
              type="checkbox"
              checked={artwork.seen}
              onChange={e => {
                onToggle(
                  artwork.id,
                  e.target.checked
                );
              }}
            />
            {artwork.title}
          </label>
        </li>
      ))}
    </ul>
  );
}

export function Clock({ time }) {
    return (
        <>
            <h1>{time}</h1>
        </>
    )
}

function useTime() {
    const [time, setTime] = useState(() => new Date());
    useEffect(() => {
        const id = setInterval(() => {
            setTime(new Date());
        }, 1000);
        return () => clearInterval(id);
    }, []);
    return time;
}

export function ClockApp() {
    const time = useTime();
    return (
        <>
            <h1>Clock App</h1>
            <Clock time={time.toLocaleTimeString()}/>
        </>
    )
}

export function Counter() {
    const [number, setNumber] = useState(0);

    return (
        <>
            <h1>{number}</h1>
            <button onClick={() => {
                setNumber(number + 5);
                setTimeout(() => {
                    alert(number);
                }, 3000);
            }}>+5</button>
        </>
    )
}

let initialCounters = [
    0, 0, 0
  ];
  
  export function CounterList() {
    const [counters, setCounters] = useState(
      initialCounters
    );
  
    function handleIncrementClick(index) {
      const nextCounters = counters.map((c, i) => {
        if (i === index) {
          // Increment the clicked counter
          return c + 1;
        } else {
          // The rest haven't changed
          return c;
        }
      });
      setCounters(nextCounters);
    }
  
    return (
      <ul>
        {counters.map((counter, i) => (
          <li key={i}>
            {counter}
            <button onClick={() => {
              handleIncrementClick(i);
            }}>+1</button>
          </li>
        ))}
      </ul>
    );
  }

  export function Gallery1() {
    return (
        <section>
            <h1>Inspiring Sculptures</h1>
            <Image />
            <Image />
            <Image />
        </section>
    )
}

function Image() {
    return (
        <img
            src="https://i.imgur.com/RCwLEoQm.jpg"
            alt="'Moai' by Unknown Artist"
        />
    )
}

export function Form() {
  const [to, setTo] = useState('Alice');
  const [message, setMessage] = useState('Hello');

  function handleSubmit(e) {
      e.preventDefault();
      setTimeout(() => {
          alert(`You said ${message} to ${to}`);
      }, 5000);
  }

  return (
      <form onSubmit={handleSubmit}>
          <label>
              To:{' '}
              <select
                  value={to}
                  onChange={e => setTo(e.target.value)}>
                      <option value='Alice'>Alice</option>
                      <option value='Bob'>Bob</option>
                  </select>
          </label>
          <textarea
          placeholder='Message'
          value={message}
          onChange={e => setMessage(e.target.value)}
          />
          <button type='submit'>Send</button>
      </form>
  );
}

export function Form2() {
  const [person, setPerson] = useState({
    firstName: 'Barbara',
    lastName: 'Hepworth',
    email: 'bhepworth@sculpture.com'
  });

  function handleFirstNameChange(e) {
    person.firstName = e.target.value;
  }

  function handleLastNameChange(e) {
    person.lastName = e.target.value;
  }

  function handleEmailChange(e) {
    person.email = e.target.value;
  }

  return (
    <>
      <label>
        First name:
        <input
          value={person.firstName}
          onChange={handleFirstNameChange}
        />
      </label>
      <label>
        Last name:
        <input
          value={person.lastName}
          onChange={handleLastNameChange}
        />
      </label>
      <label>
        Email:
        <input
          value={person.email}
          onChange={handleEmailChange}
        />
      </label>
      <p>
        {person.firstName}{' '}
        {person.lastName}{' '}
        ({person.email})
      </p>
    </>
  );
}

export function Form3() {
  const [person, setPerson] = useState({
      name: 'Niki de Saint Phalle',
      artwork: {
          title: 'Blue Nana',
          city: 'Hamburg',
          image: 'https://i.imgur.com/Sd1AgUOm.jpg'
      }
  });
  function handleNameChange(e){
      setPerson({
          ...person,
          name: e.target.value
      });
  }
  function handleTitleChange(e){
      setPerson({
          ...person,
          artwork: {
              ...person.artwork,
              title: e.target.value
          }
      });
  }
  function handleCityChange(e){
      setPerson({
          ...person,
          artwork: {
              ...person.artwork,
              city: e.target.value
          }
      });
  }
  function handleImageChange(e){
      setPerson({
          ...person,
          artwork: {
              ...person.artwork,
              image: e.target.value
          }
      });
  }

  return(
      <>
          <label>
              Name:
              <input value={person.name} onChange={handleNameChange}/>
          </label>
          <label>
              Title:
              <input value={person.title} onChange={handleTitleChange}/>
          </label>
          <label>
              City:
              <input value={person.City} onChange={handleCityChange}/>
          </label>
          <label>
              Image:
              <input value={person.image} onChange={handleImageChange}/>
          </label>
          <p>
              <i>{person.artwork.title}</i>{' by '}{person.name}<br/>(located in {person.artwork.city})
          </p>
          <img
              src={person.artwork.image}
              alt={person.artwork.title}
          />
      </>
  )
}



export function List() {
  const [name, setName] = useState('');
  const [artists, setArtists] = useState([]);
  let nextId = 0;

  return (
    <>
      <h1>Inspiring sculptors:</h1>
      <input
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <button onClick={() => {
        setArtists([
          ...artists,
          {
            id: nextId++,
            name: name,
          }
        ]);
        setName('');
      }}>Add</button>
      <ul>
        {artists.map(artist => (
          <li key={artist.id}>{artist.name}</li>
        ))}
      </ul>
    </>
  );
}

let initialArtists = [
  { id: 0, name: 'Marta Colvin Andrade' },
  { id: 1, name: 'Lamidi Olonade Fakeye' },
  { id: 2, name: 'Louise Nevelson' },
];

export function List2() {
  const [artists, setArtists] = useState(
    initialArtists
  );

  return (
    <>
      <h1>Inspiring sculptors:</h1>
      <ul>
        {artists.map(artist => (
          <li key={artist.id}>
            {artist.name}{' '}
            <button onClick={() => {
              setArtists(
                artists.filter(a =>
                  a.id !== artist.id
                )
              );
            }}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}



export function List3() {
  const [name, setName] = useState('');
  const [artists, setArtists] = useState(
    initialArtists
  );

  let nextId = 3;
const initialArtists = [
  { id: 0, name: 'Marta Colvin Andrade' },
  { id: 1, name: 'Lamidi Olonade Fakeye' },
  { id: 2, name: 'Louise Nevelson' },
];

  function handleClick() {
    const insertAt = 1; // Could be any index
    const nextArtists = [
      // Items before the insertion point:
      ...artists.slice(0, insertAt),
      // New item:
      { id: nextId++, name: name },
      // Items after the insertion point:
      ...artists.slice(insertAt)
    ];
    setArtists(nextArtists);
    setName('');
  }

  return (
    <>
      <h1>Inspiring sculptors:</h1>
      <input
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <button onClick={handleClick}>
        Insert
      </button>
      <ul>
        {artists.map(artist => (
          <li key={artist.id}>{artist.name}</li>
        ))}
      </ul>
    </>
  );
}

export function List4() {
  const [list, setList] = useState(initialList);

  function handleClick() {
    const nextList = [...list];
    nextList.reverse();
    setList(nextList);
  }

  return (
    <>
      <button onClick={handleClick}>
        Reverse
      </button>
      <ul>
        {list.map(artwork => (
          <li key={artwork.id}>{artwork.title}</li>
        ))}
      </ul>
    </>
  );
}

export function MovingDot() {
  const [position, setPosition ] = useState({
      x: 0,
      y: 0
  });
  return(
      <div onPointerMove={e=> {
              setPosition({
                  x: e.clientX,
                  y: e.clientY
              });
          }}
          style={{
              position:'relative',
              width: '100vw',
              height: '100vh'
          }}>
          <div style={{
              position:'absolute',
              backgroundColor: 'red',
              borderRadius: '50%',
              transform: `translate(${position.x}px, ${position.y}px)`,
              left: -10,
              top: -10,
              width: 20,
              height: 20,
          }} />
      </div>
  );
}

let initialShapes = [
  { id: 0, type: 'circle', x: 50, y: 100 },
  { id: 1, type: 'square', x: 150, y: 100 },
  { id: 2, type: 'circle', x: 250, y: 100 },
];

export function ShapeEditor() {
  const [shapes, setShapes] = useState(
      initialShapes
  );
  
  function handleClick() {
      const nextShapes = shapes.map(shape => {
          if (shape.type === 'square') {
              return shape;
          } else {
              return {
                  ...shape,
                  y: shape.y + 50,
              };
          }
      });
      setShapes(nextShapes);
  }

  function handleReset() {
      setShapes(initialShapes);
  }

  return (
      <>
          <button onClick={handleClick}>
              Move circles down!
          </button>
          <button onClick={handleReset} style={{ marginLeft: 10 }}>
              Resetar círculos
          </button>
          <div style={{
              position: 'relative',
              width: 320,
              height: 200,
              border: '1px solid #ccc',
              marginTop: 20
          }}>
              {shapes.map(shape => (
                  <div
                      key={shape.id}
                      style={{
                          background: 'purple',
                          position: 'absolute',
                          left: shape.x,
                          top: shape.y,
                          borderRadius:
                              shape.type === 'circle'
                                  ? '50%' : '',
                          width: 20,
                          height: 20,
                      }}
                  />
              ))}
          </div>
      </>
  );
}

function Button({ onClick, children}) {
  return (
      <button onClick={e => {
          e.stopPropagation();
          onClick();
      }}>
          {children}
      </button>
  );
}

export function Toolbar() {
  return (
      <div className="Toolbar" onClick={() =>{
          alert('You clicked on the toolbar!');
      }}>
          <Button onClick={() => alert('Playing!')}>
              Play Movie
          </Button>
          <Button onClick={() => alert('Uploading!')}>
              Upload Image
          </Button>
      </div>
  );
}

export default function ComponentsAtv04() {
  return (
    <section className='Gallery'>
      <Gallery />
      <BucketList />
      <Clock />
      <ClockApp />
      <Counter />
      <CounterList />
      <Gallery1 />
      <Form />
      <Form2 />
      <Form3 />
      <List />
      <List2 />
      <List3 />
      <List4 />
      <MovingDot />
      <ShapeEditor />
      <Toolbar />
    </section>
  );
}