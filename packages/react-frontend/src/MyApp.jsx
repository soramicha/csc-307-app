import React, {useState} from "react"
import Table from "./Table"
import Form from "./Form";

function MyApp() {
    const [characters, setCharacters] = useState([])

    // we will get a certain index
    function removeCharacter(index) {
        // we will retrieve all the characters that don't fit the index
        const updated = characters.filter((character, i) => {
            return i !== index;
        });
        setCharacters(updated);
    }

    // we use the ES6 spread operator
    function updateList(person) {
        // in setCharacters, there will be a list of current charactors + new person we added
        setCharacters([...characters, person]);
      }

    return (
        <div className="container">
        <Table characterData={characters} removeCharacter={removeCharacter}/>
        <Form handleSubmit={updateList}/>
        </div>
    );
}

export default MyApp