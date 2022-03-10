import { useState } from 'react';

function Locations(){
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch("https://testapi.photodino.de/cities/")
          .then(res => res.json())
          .then(
            (result) => {
              setIsLoaded(true);
              setItems(items.json);
              console.log('result', items.json)
            },
            // Remarque : il faut gérer les erreurs ici plutôt que dans
            // un bloc catch() afin que nous n’avalions pas les exceptions
            // dues à de véritables bugs dans les composants.
            (error) => {
              setIsLoaded(true);
              setError(error);
            }
          )
      }, [])
    
      if (error) {
        return <div>Erreur : {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Chargement...</div>;
      } else {
        <div className = "App" style={{justifyContent: 'center', textAlign: 'justify', backgroundColor: 'red', display: 'inline-block'}}>
        {
            items.map((item) => ( 
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
    </div>
      }
}

export default Locations;