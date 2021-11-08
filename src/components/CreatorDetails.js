import { useEffect, useState } from "react";
import { useParams } from "react-router";




const CreadorDetalle = () => {
    const { id } = useParams()
    const [creadordetallecom, setCreadorDetalleCom] = useState([])
    const [creadordetalleser, setCreadorDetalleSer] = useState([])
    const [creadordetalleeve, setCreadorDetalleEve] = useState([])
    const [creadordetallesto, setCreadorDetalleSto] = useState([])

    useEffect(() => {
        getCreadorDetalleCom()
        getCreadorDetalleSer()
        getCreadorDetalleEve()
        getCreadorDetalleSto()

    }, [])



    const getCreadorDetalleCom = () => {
        fetch(`https://gateway.marvel.com:443/v1/public/creators/${id}/comics?ts=1&apikey=cd5c716a317a3db8ddcaa694fedd8b78&hash=8f0d51c4409adfa4a68a275e449a2dc8`, {
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
                setCreadorDetalleCom(data.data.results)
            }).catch((error) => {
                console.log(error)
            })
    }


    const getCreadorDetalleSer = () => {
        fetch(`https://gateway.marvel.com:443/v1/public/creators/${id}/series?ts=1&apikey=cd5c716a317a3db8ddcaa694fedd8b78&hash=8f0d51c4409adfa4a68a275e449a2dc8`, {
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
                setCreadorDetalleSer(data.data.results)
            }).catch((error) => {
                console.log(error)
            })
    }


    const getCreadorDetalleEve = () => {
        fetch(`https://gateway.marvel.com:443/v1/public/creators/${id}/events?ts=1&apikey=cd5c716a317a3db8ddcaa694fedd8b78&hash=8f0d51c4409adfa4a68a275e449a2dc8`, {
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
                setCreadorDetalleEve(data.data.results)
            }).catch((error) => {
                console.log(error)
            })
    }


    const getCreadorDetalleSto = () => {
        fetch(`https://gateway.marvel.com:443/v1/public/creators/${id}/stories?ts=1&apikey=cd5c716a317a3db8ddcaa694fedd8b78&hash=8f0d51c4409adfa4a68a275e449a2dc8`, {
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
                setCreadorDetalleSto(data.data.results)
            }).catch((error) => {
                console.log(error)
            })
    }



    return (
        <>
            <div className="container">
                <h1>Detalle de Creador</h1>

                <div>

                    <div className="row">
                        <h1>Comics</h1>
                        <div className="row row-cols-1 row-cols-md-3 flex-nowrap overflow-auto mb-4">

                            {
                                creadordetallecom.length > 0 ?
                                    creadordetallecom.map(com => {
                                        return (
                                            <div className="card  m-2 p-2 " id="cardp">
                                                <div className="card-body m-2 p-2">
                                                    <img src={`${com.thumbnail.path}.${com.thumbnail.extension}`} className="img" alt="" />
                                                    <h5 className="card-title mt-2">{com.title}</h5>


                                                </div>
                                            </div>

                                        )

                                    }) : <div>No se existe detalle.</div>
                            }

                        </div>



                        <h1>Series</h1>
                        <div className="row row-cols-1 row-cols-md-3 flex-nowrap overflow-auto mb-4">

                            {
                                creadordetalleser.length > 0 ?
                                    creadordetalleser.map(ser => {
                                        return (
                                            <div className="card  m-2 p-2 " id="cardp">
                                                <div className="card-body m-2 p-2">
                                                    <img src={`${ser.thumbnail.path}.${ser.thumbnail.extension}`} className="img" alt="" />
                                                    <h5 className="card-title mt-2">{ser.title}</h5>


                                                </div>
                                            </div>

                                        )

                                    }) : <div>No se existe detalle.</div>
                            }

                        </div>

                        <h1>Events</h1>
                        <div className="row row-cols-1 row-cols-md-3 flex-nowrap overflow-auto mb-4">

                            {
                                creadordetalleeve.length > 0 ?
                                    creadordetalleeve.map(eve => {
                                        return (
                                            <div className="card  m-2 p-2 " id="cardp">
                                                <div className="card-body m-2 p-2">
                                                    <img src={`${eve.thumbnail.path}.${eve.thumbnail.extension}`} className="img" alt="" />
                                                    <h5 className="card-title mt-2">{eve.title}</h5>


                                                </div>
                                            </div>

                                        )

                                    }) : <div>No se existe detalle.</div>
                            }

                        </div>


                        <h1>Stories</h1>
                        <div className="row row-cols-1 row-cols-md-3 flex-nowrap overflow-auto mb-4">

                            {
                                creadordetallesto.length > 0 ?
                                    creadordetallesto.map(sto => {
                                        return (
                                            <div className="card  m-2 p-2 " id="cardpsto">
                                                <div className="card-body m-2 p-2">
                                                        <h1>Titulo: <br/>
                                                        <small>"{sto.title}"</small></h1>


                                                </div>
                                            </div>

                                        )

                                    }) : <div>No se existe detalle.</div>
                            }

                        </div>










                    </div>
                </div>

            </div>




        </>
    )


}
export default CreadorDetalle;