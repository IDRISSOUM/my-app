import { useState } from "react";

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
    const [city, setCity] = useState("");


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
            city: city
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
            if(response.ok){
                setName("")
            }
            }).catch(error =>{
                console.log('erreur', error)
                
            })
        }

        return(
            
            <form onSubmit={postEvent}>
                <div class="form-row">
                    <div class="form-group col-lg-6" id="div_name">
                        <label class="col-form-label" for="name">Name</label>
                        <input type="text" value={name}  placeholder="Name" class="hbb_text_box form-control" onChange={(e) => setName(e.target.value)}/>
                    </div>

                    <div class="form-group col-lg-6" id="div_rent">
                        <label class="col-form-label" for="rent">Rent</label>
                        <input type="text" value={rent}  placeholder="Rent" class="hbb_text_box form-control" onChange={(e) => setRent(e.target.value)}/>
                    </div>
                    
                    <div class="w-100"/>
                    <div class="form-group col-lg-6" id="div_email">
                        <label class="col-form-label" for="email">Email</label>
                        <input type="email" value={email}  placeholder="johndoe@joecorp.de" class="hbb_text_box form-control" onChange={(e) => setEmail(e.target.value)}/>
                    </div>

                    <div class="form-group col-lg-6" id="div_phone">
                        <label class="col-form-label" for="phone">Phone</label>
                        <input type="tel" value={phone} placeholder="+49 (012) 308" onChange={(e) => setPhone(e.target.value)} />
                    </div>

                    <div class="form-group col-lg-6 div_street_coord">
                        <label class="col-form-label" for="coord"><span class="d-none d-md-inline"> Coordinates</span>
                        </label>
                        <input type="text" class="hbb_text_box form-control" value={coordinates} placeholder="49.045,10.442" onChange={(e) => setCoordinates(e.target.value)}/>
                    </div>

                    <div class="w-100"/>
                    <div class="form-group col-lg-6 div_street_number">
                        <label class="col-form-label" for="street"><span class="d-none d-md-inline"> Street Number</span>
                        </label>
                        <input type="number" class="hbb_text_box form-control" value={street_number}  placeholder="Street Number" onChange={(e) => setStreetnumber(e.target.value)}/>
                    </div>

                    <div class="w-100"/>
                    <div class="form-group col-lg-6 div_street_name">
                        <label class="col-form-label" for="street"><span class="d-none d-md-inline"> Street Name</span>
                        </label>
                        <input type="text" class="hbb_text_box form-control" value={street_name} placeholder="street name" onChange={(e) => setStreetName(e.target.value)}/>
                    </div>

                    <div class="form-group col-lg-6 div_coord">
                        <label class="col-form-label" for="code"><span class="d-none d-md-inline"> Code Postal</span>
                        </label>
                        <input type="number" class="hbb_text_box form-control" value={postal_code} placeholder="code postal" onChange={(e) => postalCode(e.target.value)}/>
                    </div>

                    <div class="form-group col-lg-6 div_status">
                        <label class="col-form-label" for="status"><span class="d-none d-md-inline"> Status</span>
                        </label>
                        <input type="text" class="hbb_text_box form-control" value={status} placeholder="status" onChange={(e) => setStatus(e.target.value)}/>
                    </div>

                    <div class="form-group d-none col-lg-6 div_city">
                        <label class="col-form-label" for="city"><span class="d-none d-md-inline"> City</span>
                        </label>
                        <input type="number" class="hbb_text_box form-control" value={city} placeholder="City" onChange={(e) => setCity(e.target.value)}/>
                    </div>

                    <button class="buttonForm" type="submit">Create</button>
                    </div>
                     {/* <div className="messageForm">{message ? <p>{message}</p> : null}</div> */}
                </form>
               
            
        );
}

export default SEND;