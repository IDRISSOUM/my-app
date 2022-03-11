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
              name: 'Benin',
              locations: [],
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
            console.log("response", response)
            // eslint-disable-next-line eqeqeq
            if(response.ok){
                  alert("success")
              }
          }).catch(error =>{
              console.log('erreur', error)
              
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