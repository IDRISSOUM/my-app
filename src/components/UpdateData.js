import React, {useState} from 'react'
import { Button } from 'react-bootstrap'

export default function UpdateData(props) {
    const [name, setName] = useState("");
    const [code, setCode] = useState("");
    const [message, setMessage] = useState("");

    const updateCities = (id) => {
        const data = {
            name: name,
            code: code,
        }
        const url = "https://testapi.photodino.de/cities/"+id+"/"
        fetch(url, {
            method: 'PUT',
            body: JSON.stringify(data),
        })
        .then(response => {
            console.log("response", response)
            // eslint-disable-next-line eqeqeq
            if(response.ok){
                setMessage("success update")
            } else {
                console.log("error update")
            }
        }).catch(error =>{
            setMessage("error update")
            
        })
    }
  return (
    <div>
        <form onSubmit={updateCities}>
            <input
            id="sendForm"
            type="text"
            value={name}
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
            />
            <input
            type="text"
            value={code}
            placeholder="Code"
            onChange={(e) => setCode(e.target.value)}
            />
            <button  onClick={() => updateCities(props.item.id)} type="submit" class="buttonForm"><span>Edit</span></button>
            <div className="messageForm">{message ? <p>{message}</p> : null}</div>
        </form>
    </div>
  )
}
