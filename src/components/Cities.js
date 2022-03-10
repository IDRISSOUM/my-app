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

    var date = new Date().toJSON();

      const postEvent = () => {
          const data = {
              id: "9",
              name: 'BenTest',
              locations: [],
              time_added: date,
          }
        const url =  data.id ? "https://testapi.photodino.de/cities/"+data.id : "https://testapi.photodino.de/cities/"
        fetch(url, {
            method:data.id ? 'POST' : 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify(data),
        })
        .then(response => {
            console.log("response", response)
          }).catch(error =>{
              console.log('jvcgugvu', error)
            //   if(response.state === 200){
            //       alert("success")
            //   }
          })
      }
      return (
        <div className = "App" style={{justifyContent: 'center', textAlign: 'justify', backgroundColor: 'red', display: 'inline-block'}}>
        {
            data.map((item) => ( 
                    <div>
                        <table key={item.id}>
                            <caption>Custamer Partner</caption>
                            <thead> 
                                <tr>
                                    <th>Name</th>
                                    <th>Locations</th>
                                    <th style={{alignItems: 'right', color: 'white'}}>Added</th>
                                </tr>
                            </thead>

                            <tbody> 
                                <tr>
                                    <td>{item.name}</td>
                                    <td>{item.locations}</td>
                                    <td>{item.time_added}</td>
                                </tr>
                            </tbody>

                        </table>
                    </div>
            ))
        }
        <button onClick={postEvent}>Submit</button>
    </div>
      )
}

export default Cities;