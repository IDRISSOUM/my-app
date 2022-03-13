/* eslint-disable no-unreachable */
/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable react/style-prop-object */
import React, { useState, useEffect } from "react";
import DatePicker from 'react-datepicker';

function SENDEVENTS ()  {
    const [locations, setLocations] = useState([]);
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [event_date, setEventdate] = useState(new Date());
    const [message, setMessage] = useState("");


    useEffect(() => { 
        getData();
        
        }, [])
    const url = "https://testapi.photodino.de/locations/"
    
    const getData = () => {
        fetch(url)
        .then(response => {
            return response.json()

        })
        .then(json => {
            console.log(json);
            setLocations(json);
        }).catch(error =>{console.log('error', error.message)})
    }
    


    
    const formatDate = (date) => {
        let d = new Date(date);
        let month = (d.getMonth() + 1).toString().padStart(2, '0');
        let day = d.getDate().toString().padStart(2, '0');
        let year = d.getFullYear();
        return [year, month, day].join('-');
      }
    
    const postEvent = (e) => {
        e.preventDefault();
        const data = {
            locations: locations,
            name: name,
            description: description,
            event_date: event_date
        }
        const url = "https://testapi.photodino.de/events/"
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
        console.log('jjjj', locations)
        return(
            <div>
                <form onSubmit={postEvent}>
                    <label for="company">Locations</label>
                    <select className="form-control slct" name="state" value={locations} onChange={(e) =>  setLocations(e.target.value)}>
                        {locations.map((e, key) => {  
                            return <option key={key + e} value={e.id}>{e.name}</option>;
                            })}
                    </select>  

                    <label for="fname">Name</label>
                    <input type="text" id="fname" value={name}  placeholder="Name" onChange={(e) => setName(e.target.value)} />

                    <label for="description">Description</label>
                    <textarea type="text" id="lname" value={description} placeholder="Description" onChange={(e) => setDescription(e.target.value)} style={{height:200, resize: 'none'}}></textarea>

                    <label for="date">Date</label>
                    <input  
                    type="text" 
                    id="lname" 
                    value={event_date}  
                    placeholder="Date" 
                    onChange={(e) => setEventdate(e.target.value)} />
                    
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
}

export default SENDEVENTS;