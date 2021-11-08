import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const Creadores = () => {

    const [creadores, setCreadores] = useState([])

    useEffect(() => {
        getCreadores()

    }, [])


    const getCreadores = () => {
        fetch("https://gateway.marvel.com:443/v1/public/creators?ts=1&apikey=cd5c716a317a3db8ddcaa694fedd8b78&hash=8f0d51c4409adfa4a68a275e449a2dc8", {
            method: "GET",
            //body: JSON.stringify([]),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((res) => {
                console.log(res.ok);
                console.log(res.status);
                return res.json()
            })
            .then((data) => {
                console.log(data.data.results)
                setCreadores(data.data.results)
            }).catch((error) => {
                console.log(error)
            })
    }



    return (
        <>

            <div className="container">

                <h1 className="pt-2">Creadores</h1>
                <div className="row ">
                    {creadores.map(crea => (

                        /**row-cols-1 row-cols-md-3 flex-nowrap overflow-auto mb-4 */
                        <div className="card  m-2 p-2 col-md-3" id="cardp" key={crea.id}>
                            <div className="card-body m-2 p-2">
                                <img src={`${crea.thumbnail.path}.${crea.thumbnail.extension}`} className="img" alt="" />
                                <h5 className="card-title mt-2">{crea.firstName}<br />
                                    {crea.middleName}</h5>
                                <br />

                                <Link to={`/CreatorDetails/${crea.id}`} className="btn btn-light text-primary border-primary bg-white" >Learn more!</Link>

                            </div>
                        </div>


                    ))}
                </div>




            </div>

        </>
    )


}
export default Creadores;