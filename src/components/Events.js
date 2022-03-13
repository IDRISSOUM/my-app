import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap'
import {FaListAlt, FaCheckSquare, FaPlusSquare, FaTrash} from 'react-icons/fa';
import {  Link, Outlet,useNavigate, useParams } from "react-router-dom";


function Events(){
    let navigate = useNavigate();
    const url = "https://testapi.photodino.de/events/"
    const [data, setData] = useState([]);

    useEffect(() => { 
        getData();
        }, [])
        const getData = () => {
            fetch(url)
            .then(response => response.json())
            .then(json => {setData(json);}).catch(error =>{console.log('error', error.message)})
        }


    const deleteCities = (id) => {
    const url = "https://testapi.photodino.de/events/"+id+"/"
    fetch(url, {
        method: 'DELETE',
        body: JSON.stringify(data),
    })
    .then(response => {
        console.log("response", response)
        getData();
        // eslint-disable-next-line eqeqeq
        if(response.ok){
            console.log("success delete")
        } else {
            console.log("error delete")
        }
    }).catch(error =>{
        console.log('erreur', error)
        
    })
}
      return (
        <>
        <header/>
        <h1 className="d-flex justify-content-center">List of Events</h1>
        <div class="d-flex justify-content-around">
            <table id="customers">
                    <tr>
                        <th>Name</th>
                    </tr>
                    
                    {data.map((item) => {
                        return (
                            <tr key={item.id}>
                                <td>{item.name}</td>
                                <td><Button onClick={() => deleteCities(item.id)} className="btn btn-outline-dark bg-light"><span><FaTrash /></span></Button></td>
                                {/* <td><Button onClick={() => navigate('/add-events')}><span>Edit</span></Button></td> */}
                            </tr>
                            );
                        })}
            </table>
        </div>
        <div class="d-flex p-2 justify-content-center"> 
            <Button onClick={() => navigate('/add-events')} className="btn btn-outline-dark bg-light"><span><FaPlusSquare /></span> </Button>
        </div>
        </>
      )
}

export default Events;