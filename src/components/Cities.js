import { useEffect, useState } from 'react';

function Cities(){
    const url = "https://testapi.photodino.de/cities/"
    const [data, setData] = useState([]);

    useEffect(() => { 
        fetch(url, {
            header: {

            }
        } )
          .then(response => response.json())
          .then(json => {
                console.log('bdbvbdibd', json)
              setData(json);
            }).catch(error =>{
                console.log('jvcgugvu', error)
            })
          
      }, [])


      const postEvent = () => {
          const data = {
              name: 'Ivory Cost',
              locations: [10, 20, 30, 40],
          }
        const url =  data.id ? "https://testapi.photodino.de/cities/"+data.id : "https://testapi.photodino.de/cities/"
        fetch(url, {
            method:data.id ? 'POST' : 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        .then(response => {
            console.log("response", response)
            // eslint-disable-next-line eqeqeq
            if(response == 200){
                  alert("success")
              }
          }).catch(error =>{
              console.log('jvcgugvu', error)
              
          })
      }
      return (
        <div className = "App" style={{justifyContent: 'center', textAlign: 'justify', backgroundColor: 'red', display: 'inline-block'}}>
                    <div>
                        <table>
                            <thead> 
                                <tr>
                                    <th>Name</th>
                                    <th>Locations</th>
                                    <th style={{alignItems: 'right', color: 'white'}}>Added</th>
                                </tr>
                            </thead>

                            <tbody> 
                            {data.map((item) => {
                                return (
                                    <tr key={item.id}>
                                    <td>{item.name}</td>
                                    <td>{item.locations}</td>
                                    <td>{item.time_added}</td>
                                </tr>
                                )
                            })}
                               
                            </tbody>

                        </table>
                    </div>
        <button onClick={postEvent}>Submit</button>
    </div>
      )
}

export default Cities;