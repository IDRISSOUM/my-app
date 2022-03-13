import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap'
import {FaListAlt, FaCheckSquare, FaPlusSquare, FaTrash} from 'react-icons/fa';
import {  Link, Outlet,useNavigate, useParams } from "react-router-dom";

function Locations(){
  let navigate = useNavigate();
    const url = "https://testapi.photodino.de/locations/"
    const [data, setData] = useState([]);

    useEffect(() => { 
      getData();
      }, [])
      const getData = () => {
          fetch(url)
          .then(response => response.json())
          .then(json => {setData(json);}).catch(error =>{console.log('error', error.message)})
      }

      const putEvent = (id) => {
        const data = {
            name: 'Benin',
            locations: [],
        }
      const url = "https://testapi.photodino.de/locations/"+id
      fetch(url, {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
      })
      .then(response => {
          console.log("response", response)
          // eslint-disable-next-line eqeqeq
          if(response.ok){
                alert("success")
            }
        }).catch(error =>{
            console.log('erreur', error)
            
        })
    }

    const deleteCities = (id) => {
      const url = "https://testapi.photodino.de/locations/"+id+"/"
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
        <div class="d-flex justify-content-around">
            <table id="customers2">
                  <tr>
                    <th>Name</th>
                    <th>Locations</th>
                    <th>Rent</th>
                    <th>Phone</th>
                    <th>Coordinates</th>
                    <th>Street Number</th>
                    <th>Street Name</th>
                    <th>Code Postal</th>
                    <th>Status</th>
                    <th>City Name</th>
                  </tr>
                    {data.map((item) => {
                        return (
                            <tr key={item.id}>
                                <td>{item.name}</td>
                                <td>{item.locations}</td>
                                <td>{item.rent}</td>
                                <td>{item.email}</td>
                                <td>{item.phone}</td>
                                <td>{item.coordinates}</td>                                    
                                <td>{item.street_number}</td>                                    
                                <td>{item.street_name}</td>                                    
                                <td>{item.postal_code}</td>                                    
                                <td>{item.status}</td>                                    
                                <td>{item.city}</td>
                                <td><Button onClick={() => deleteCities(item.id)} className="btn btn-outline-dark bg-light"><span><FaTrash /></span></Button></td>
                                {/* <td><Button onClick={() => navigate('/:id')}><span>Edit</span></Button></td> */}
                            </tr>
                            );
                        })}
            </table>
        </div>
        <div class="d-flex p-2 justify-content-center"> 
            <Button onClick={() => navigate('/add-locations')} className="btn btn-outline-dark bg-light"><span><FaPlusSquare /></span> </Button>
        </div>
        </>
      )
}

export default Locations;