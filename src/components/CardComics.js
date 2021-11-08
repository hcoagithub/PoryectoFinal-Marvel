import PropType from "prop-types";
import { Link } from "react-router-dom";

const CardComics = ({ title,description,fotoChica, id, Url }) => {
let styleTextLong = {
    fontSize: "13px",
    textOverflow: 'ellipsis',
    maxHeight: "100px",
    wordWrap: 'break-word',
    overFlow: 'hidden',
    whiteSpace: 'nowrap'
}
    return (
        <div className="card" style={{minWidth: 350}}>
            <img src={fotoChica} style={{height:250}} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 style={{fontSize:20}} className="card-title sm-3">{title}</h5>
                <div style={styleTextLong} className="card-text">
                 
                </div>
                <Link
                    to={{
                        pathname: `/Comics/${id}`,
                        state: {
                            title: title,
                            description: description,
                            foto: fotoChica
                        }}}
                    className="btn btn-primary">
                    Mas Informacion
                </Link><br/>
            </div>
        </div>
    )

}
CardComics.PropType = {
    description: PropType.string,
    title: PropType.string,
    id:PropType.number,
    Url: PropType.string,
    fotoChica:PropType.string,
}

export default CardComics;
