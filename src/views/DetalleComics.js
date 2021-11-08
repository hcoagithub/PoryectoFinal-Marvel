import { useEffect } from "react";
import { useHistory, useLocation, useParams } from "react-router-dom";

const DetalleComics = (props) => {

    const navigate = useHistory()
    const {product_id} = useParams();
    const location = useLocation()

    useEffect(() => {
        
    }, [product_id])

    if (location.state === undefined) {
        return (
            <div>
                Lo siento no hay data
                <button className=" col-md-4 btn btn-warning"
                        onClick={navigate.goBack}>
                    Regresar
                </button>
            </div>
        )
    }

    return (

        <div style={{marginTop:25}} className="container d-flex justify-content-center">
                            <div className="col-md-4 me-4">
                                <img src={ location.state.foto }
                                     className="card-img-top img-fluid rounded-start me-4" alt="..."/>
                            </div>
                            <div className="col-md-7">
                                <div className="card-body">
                                    <h5 className="card-title">{ location.state.title }</h5>
                                    <p className="card-text">
                                        { location.state.description }
                                    </p>
                                    <p className="card-text">
                                    </p>
                                </div>
                                <button className=" col-md-4 btn btn-warning"
                                        onClick={navigate.goBack}>
                                    Regresar
                                </button>


                            </div>
                        </div>
    
    )
}
export default DetalleComics;
