import React, {useState} from 'react'

export default function UpdateData() {
    const [name, setName] = useState("");
    const [code, setCode] = useState("");

    const updateCities = () => {
        const data = {
            name: name,
            code: code,
        }
        const url = "https://testapi.photodino.de/cities/"
        fetch(url, {
            method: 'PUT',
            body: JSON.stringify(data),
        })
        .then(response => {
            console.log("response", response)
            // eslint-disable-next-line eqeqeq
            if(response.ok){
                console.log('update success')
            } else {
                console.log("error update")
            }
        }).catch(error =>{
            console.log('Error', error.message)
            
        })
    }
  return (

    <div className="container">
    <form onSubmit={updateCities} className="form-group">
        <h1 style={{justifyContent: 'center', textAlign: 'center', fontWeight: 'bold', fontSize: 45}}>Update City</h1>
        <div class="row jumbotron justify-content-center shadow-box-example z-depth-5 p-0 shadow-sm p-3 mb-5 bg-body rounded">

            <div class="col-md-4 shadow-sm p-3 mb-5 bg-body rounded">
                <label  for="name">Name</label>
                <input type="text" value={name}  placeholder="Name" class="form-control" onChange={(e) => setName(e.target.value)}/>
            </div>

            <div class="col-md-2 shadow-sm p-3 mb-5 bg-body rounded">
                <label  for="code">Code</label>
                <input type="text" value={code}  placeholder="6590" class="form-control" onChange={(e) => setCode(e.target.value)}/>
            </div>

            <div class="col-md-8 shadow-sm p-3 mb-5 bg-body rounded" style={{textAlign:'center', marginTop: -40}}>
            <button  onClick={() => updateCities()} type="submit" class="btn btn-primary"><span>Edit</span></button>
            </div>

        </div>
    </form>
    </div>
  )
}
