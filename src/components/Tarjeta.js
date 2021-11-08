import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import "./Tarjeta.css";

const Tarjeta = ({ hero }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div>{console.log("Hero: ", hero)}</div>

      <div className="card m-3" style={{ borderRadius: "15px" }}>
        <img
          style={{
            borderTopLeftRadius: "15px",
            borderTopRightRadius: "15px",
          }}
          src={
            hero.thumbnail.path +
            "/portrait_xlarge" +
            "." +
            hero.thumbnail.extension
          }
          className="card-img-top"
          alt="super-hero-image"
        />
        <div className="card-body">
          <h3 className="card-title">{hero.name}</h3>
          <Button variant="primary container" onClick={handleShow}>
            Details
          </Button>
        </div>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Body>
          <div>
            <div>
              <h4>Comics:</h4>
              <ul>
                {hero.comics.items.map((val, index) => {
                  return <li key={index}>{val.name}</li>;
                })}
              </ul>
            </div>

            <div>
              <h4>Events:</h4>
              <ul>{hero.events.items.map((val, index)=>{
                return(
                  <li key={index}>{val.name}</li>
                )
              })}</ul>
            </div>

            <div>
              <h4>Stories:</h4>
              <ul>
                {hero.stories.items.map((val, index) => {
                  return <li key={index}>{val.name}</li>;
                })}
              </ul>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Tarjeta;