/* eslint-disable no-unreachable */
/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable react/style-prop-object */
import React, { useState, useEffect } from "react";
import moment from 'moment'

function SENDEVENTS ()  {
    const [locations, setLocations] = useState([]);
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [event_date, setEventdate] = useState();
    const [selectlocations, setSelectLocations] = useState();


    useEffect(() => { 
        getData();
        
        }, [])
    const url = "https://testapi.photodino.de/locations/"
    const getData = () => {
        fetch(url)
        .then(response => {
            return response.json()
        })
        .then(data => {
            console.log('DATAAAA', data);
            setLocations(data);
        }).catch(error =>{console.log('error', error.message)})
    }

    const postEvent = (e) => {
        e.preventDefault();
        const values = {
            location: selectlocations,
            name: name,
            description: description,
            event_date: moment(event_date).format('YYYY-MM-DD')
        }
        const url = "https://testapi.photodino.de/events/"
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(values),
        })
        .then(response => {
            console.log("Response", response);
            }).catch(error =>{
                console.log('Error', error)
                
            })
        }

        const choiceLocations = function(e) {
            e.preventDefault();
            setSelectLocations(e.target.value)
        }

        console.log('jjjj', locations)
        return(
            <div className="container">
                <form onSubmit={postEvent} className="form-group">
                    <h1 style={{justifyContent: 'center', textAlign: 'center', fontWeight: 'bold', fontSize: 45}}>Create New Events</h1>
                    <div class="row jumbotron justify-content-center shadow-box-example z-depth-5 p-0 shadow-sm p-3 mb-5 bg-body rounded">

                        <div class="col-md-4 shadow-sm p-3 mb-5 bg-body rounded">
                            <label  for="name">Name</label>
                            <input type="text" value={name}  placeholder="Name" class="form-control" onChange={(e) => setName(e.target.value)}/>
                        </div>

                        <div class="col-md-4 shadow-sm p-3 mb-5 bg-body rounded">
                            <label  for="date">Date</label>
                            <input type="date" value={event_date}  placeholder="2022-02-13" class="form-control" onChange={(e) => setEventdate(e.target.value)}/>
                        </div>

                        <div class="col-md-6 shadow-sm p-3 mb-5 bg-body rounded">
                            <label  for="description">Description</label>
                            <textarea type="text" id="lname" value={description} placeholder="Description" onChange={(e) => setDescription(e.target.value)} style={{height:200, resize: 'none'}}></textarea>
                        </div>

                        <div class="col-md-2 shadow-sm p-3 mb-5 bg-body rounded">
                            <label for="sel1" class="form-label">Select location:</label>
                            <select class="form-select" id="sel2"  placeholder="Select location" onChange={choiceLocations}>
                                {locations.map(item => {  
                                    return (
                                    <option key={item.id} value={item.id}>
                                        {item.name}
                                    </option>)})}
                            </select>
                        </div>

                        <div class="col-md-12 shadow-sm p-3 mb-5 bg-body rounded" style={{textAlign:'center', marginTop: -40}}>
                            <button class="btn btn-primary" type="submit">Create</button>
                        </div>

                    </div>
                </form>
            </div>
        );
}

export default SENDEVENTS;