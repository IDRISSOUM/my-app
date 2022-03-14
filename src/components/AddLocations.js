import { useState, useEffect } from "react";

function SEND ()  {
    const [name, setName] = useState("");
    const [rent, setRent] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [coordinates, setCoordinates] = useState("");
    const [street_number, setStreetnumber] = useState("");
    const [street_name, setStreetName] = useState("");
    const [postal_code, postalCode] = useState("");
    const [status, setStatus] = useState("");
    const [city, setCity] = useState([]);
    const [select, setSelect] = useState();


useEffect(() => { 
    getData();
    
    }, [])
    const url = "https://testapi.photodino.de/cities/"
    
    const getData = () => {
        fetch(url)
        .then(response => {
            return response.json()
        })
        .then(data => {
            console.log('DATAAAAAA', data);
            setCity(data);
        }).catch(error =>{console.log('error', error.message)})
    }

    const postEvent = (e) => {
        e.preventDefault();
        const data = {
            name: name,
            rent: rent,
            email: email,
            phone: phone,
            coordinates: coordinates,
            street_number: street_number,
            street_name: street_name,
            postal_code: postal_code,
            status: status,
            city: select
        }
        const url = "https://testapi.photodino.de/locations/"
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
            // if(response.ok){
                
            // }
            }).catch(error =>{
                console.log('Error', error)
                
            
            })
        }

      const selectChoice = function(e) {
            e.preventDefault();
            setSelect(e.target.value)
        }
       

        // console.log('WWWWWW', city)

        return(
            
            <div class="container">
                <form onSubmit={postEvent} className="form-group shadow-sm p-3 mb-5 bg-body rounded">
                    <h1 style={{justifyContent: 'center', textAlign: 'center', fontWeight: 'bold', fontSize: 45}}>Create New Location</h1>
                    <div class="row jumbotron shadow-sm p-3 mb-5 bg-body rounded">
                        <div class="col-md-6 shadow-sm p-3 mb-5 bg-body rounded">
                            <label  for="name">Name</label>
                            <input type="text" value={name}  placeholder="Name" class="form-control" onChange={(e) => setName(e.target.value)}/>
                        </div>

                        <div class="col-md-6 shadow-sm p-3 mb-5 bg-body rounded">
                            <label  for="rent">Rent</label>
                            <input type="text" value={rent}  placeholder="Rent" class="form-control" onChange={(e) => setRent(e.target.value)}/>
                        </div>

                        <div class="col-md-6 shadow-sm p-3 mb-5 bg-body rounded">
                            <label  for="email">Email</label>
                            <input type="email" value={email}  placeholder="johndoe@joecorp.de" class="form-control" onChange={(e) => setEmail(e.target.value)}/>
                        </div>

                        <div class="col-md-6 shadow-sm p-3 mb-5 bg-body rounded">
                            <label  for="phone">Phone</label>
                            <input type="tel" value={phone} placeholder="+49 (012) 308" class="form-control" onChange={(e) => setPhone(e.target.value)} />
                        </div>

                        <div class="col-md-6 shadow-sm p-3 mb-5 bg-body rounded">
                            <label  for="coord"><span> Coordinates</span>
                            </label>
                            <input type="text" class="form-control" value={coordinates} placeholder="49.045,10.442" onChange={(e) => setCoordinates(e.target.value)}/>
                        </div>

                        <div class="col-md-6 shadow-sm p-3 mb-5 bg-body rounded">
                            <label  for="street"><span > Street Number</span>
                            </label>
                            <input type="text" class="form-control" value={street_number}  placeholder="Street Number" onChange={(e) => setStreetnumber(e.target.value)}/>
                        </div>

                        <div class="col-md-6 shadow-sm p-3 mb-5 bg-body rounded">
                            <label  for="street"><span > Street Name</span>
                            </label>
                            <input type="text" class="form-control" value={street_name} placeholder="street name" onChange={(e) => setStreetName(e.target.value)}/>
                        </div>

                        <div class="col-md-2 shadow-sm p-3 mb-5 bg-body rounded">
                            <label  for="code"><span > Code Postal</span>
                            </label>
                            <input type="text" class="form-control" value={postal_code} placeholder="code postal" onChange={(e) => postalCode(e.target.value)}/>
                        </div>

                        <div class="col-md-4 shadow-sm p-3 mb-5 bg-body rounded">
                            <label  for="status"><span > Status</span>
                            </label>
                            <input type="text" class="form-control" value={status} placeholder="status" onChange={(e) => setStatus(e.target.value)}/>
                        </div>

                        <div class="col-md-4 shadow-sm p-3 mb-5 bg-body rounded">
                            <label for="sel1" class="form-label">Select city:</label>
                            <select class="form-select" id="sel1"  placeholder="Select City" onChange={selectChoice}>
                            {city.map(item => {  
                                    return (
                                    <option key={item.id} value={item.id}>
                                        {item.name}
                                    </option>
                                    );
                                    })} 
                            </select>
                        </div>

                        <div class="col-md-12 shadow-sm p-3 mb-5 bg-body rounded" style={{textAlign:'center',}}>
                            <button class="btn btn-primary" type="submit">Create</button>
                        </div>
                    </div>
                </form>
            </div>
               
            
        );
}

export default SEND;