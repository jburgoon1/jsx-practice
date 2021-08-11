const Person = ({name, age, hobbies}) =>{
    return (<div>
        <h1>Name: {name} Age: {age}</h1>
        <p>Learn more about this person!</p>
    <h3>{age<18 ? "You must be 18":"please go vote"}</h3>
    <ul>
    {hobbies.map(h => <li>{h}</li>)}
    </ul>
    </div>)
    
}