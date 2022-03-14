import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import {FaListAlt, FaCheckSquare, FaPlusSquare, FaTrash} from 'react-icons/fa';
import {  Link, Outlet,useNavigate, useParams } from "react-router-dom";

function Cities(){
    let navigate = useNavigate();
    const url = "https://testapi.photodino.de/cities/"
    const [data, setData] = useState([]);

useEffect(() => { 
    getData();
    }, [])
    const getData = () => {
        fetch(url)
        .then(response => response.json())
        .then(json => {setData(json);}).catch(error =>{console.log('Error', error.message)})
    }

    const deleteCities = (id) => {
    const url = "https://testapi.photodino.de/cities/"+id+"/"
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
    <h1 className="d-flex justify-content-center">List of city</h1>
    <div className="d-flex justify-content-around">
        <table id="customers1">
            <tr>
                <th>Name</th>
                <th>Locations</th>
                <th>Date and Time</th>
            </tr>
                {data.map((item) => {
                    return (
                        <tr key={item.id}>
                            <td>{item.name}</td>
                            <td>{item.locations}</td>
                            <td>{item.time_added}</td>
                            <td><Button onClick={() => deleteCities(item.id)} className="btn btn-outline-dark bg-light"><span><FaTrash /></span></Button></td>
                        <td><Button onClick={() => navigate(`/${item.id}`)}><span>Edit</span></Button></td>
                        </tr>
                        );
                    })}
        </table>
    </div>
    <div class="d-flex p-2 justify-content-center"> 
        <Button onClick={() => navigate('/add-cities')} className="btn btn-outline-dark bg-light"><span><FaPlusSquare /></span></Button>
    </div>
    </>
    )
}

export default Cities;