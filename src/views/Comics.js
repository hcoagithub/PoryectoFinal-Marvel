import { useEffect, useState } from "react";
import CardComics from "../components/CardComics";


const Comics = () => {
    const [ respApi, setRespApi ] = useState([])

    useEffect(() => {
        callApi();
    }, [])

    const callApi = async()=>{
        const url = "https://gateway.marvel.com:443/v1/public/comics?ts=1&apikey=cd5c716a317a3db8ddcaa694fedd8b78&hash=8f0d51c4409adfa4a68a275e449a2dc8"
        await fetch(url)
            .then(response => response.json())
            .then(data => {
                console.log("data aqui", data.data.results)
                setRespApi(data.data.results)
            })
            .catch(e=>{
                console.log("error consulta comics", e)
            })
    }

    return (
        <>
            <div className="container">
                <div className="row">

                    {
                        respApi.length >= 1 && respApi.map((obj) => {
                            console.log("obj.thumbnail.path", obj.thumbnail)
                                return (
                                    <div className="col-sm-4 py-3" key={obj.id}>
                                        <CardComics
                                            title={obj.title}
                                            description={obj.description}
                                            fotoChica={`${obj.thumbnail.path}.${obj.thumbnail.extension}`}
                                            id={obj.id}
                                        />
                                    </div>
                                )

                            }
                        )



                    }



                </div>
            </div>
        </>
    )
}
export default Comics;
