import { useState } from "react";

function SEND ()  {
    const [name, setName] = useState("");
    const [code, setCode] = useState("");
    const [message, setMessage] = useState("");

    const postEvent = (e) => {
        e.preventDefault();
        const data = {
            name: name,
            code: code
        }
        const url = "https://testapi.photodino.de/cities/"
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        .then(response => {
            console.log("response", response);
            // eslint-disable-next-line eqeqeq
            if(response.ok){
                setName("")
            }
            }).catch(error =>{
                console.log('erreur', error)
                
            })
        }

        return(
            <div>
                <form onSubmit={postEvent}>
                    <input
                    id="sendForm"
                    type="text"
                    value={name}
                    placeholder="Name"
                    onChange={(e) => setName(e.target.value)}
                    />

                    <input
                    id="sendForm"
                    type="number"
                    value={code}
                    placeholder="Code"
                    onChange={(e) => setCode(e.target.value)}
                    />
                    
                    <button class="buttonForm" type="submit">Create</button>
                </form>
                <div className="messageForm">{message ? <p>{message}</p> : null}</div>
            </div>
        );
}

export default SEND;