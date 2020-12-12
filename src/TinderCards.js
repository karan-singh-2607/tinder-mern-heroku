import React, { useState, useEffect } from 'react';
import TinderCard from 'react-tinder-card';
import './TinderCards.css';
import axios from './axios'

export const TinderCards = () => {
    const [people, setPeople] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const req = await axios.get('/tinder/cards');
            setPeople(req.data);
        }
        fetchData();
        return () => {

        }
    }, [])
    console.log(people)
    const swiped = (direction, nameToDelete) => {
        console.log('removing: ' + nameToDelete)
    };
    const outOfFrame = (name) => {
        console.log(name + 'left the cd ')
    };
    return (
        <div className='Swipe__Cards'>
            <div className="SwipeCards__Container">
                {people.map((person) => (
                    <TinderCard className="swipe__cards" key={person.name} preventSwipe={['up', 'down']} onSwipe={(dir) => swiped(dir, person.name)} onCardLeftScreen={() => outOfFrame(person.name)}>
                        <div style={{ backgroundImage: `url(${person.imgUrl})` }} className='SwipeCards__Persons'>
                            <h3>{person.name}</h3>
                        </div>
                    </TinderCard>


                ))}
            </div>

        </div >
    )
}
