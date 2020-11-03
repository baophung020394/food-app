import React, { useState, useEffect } from 'react'

function Hook() {
    const [fullName, setFullName] = useState({ name: 'name', familyName: 'family' });
    const [title, setTitle] = useState('useEffect() in Hooks');
    // const [count, setCount] = useState({ number: 0 });

    function handleCoClick() {
        setFullName({ name: 'Bao om', familyName:'Van la Fullhouse'})
        // setCount({ number: count.number + 1})
    }

    useEffect(() => {
        console.log('useEffect has been called!');
        setFullName({name: 'Bao Map', familyName: 'Fullhouse'})
        // setCount({ number: 10 })
    }, [])
    
    return (
        <div>
            <h1>Title: {title}</h1>
            <h3>Name: {fullName.name}</h3>
            <h3>Family Name: {fullName.familyName}</h3>
            {/* <h3>{count.number}</h3> */}
            <button onClick={handleCoClick}>Click cai doi ten na</button>
        </div>
    )
}

export default Hook
