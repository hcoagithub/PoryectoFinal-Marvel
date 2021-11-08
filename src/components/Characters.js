import { useEffect, useState } from "react";
import Tarjeta from "./Tarjeta";

const publicKey = "717e7fb169d62efa1e9102699e7fe070";
const privateKey = "4eea785b2512dd527b5bfc9691e288cca1195287";
const hash = "4a7f1a926a0b4fb3c8de3cfa02a8af6d";
const ts = 1;

const urlData = `?ts=${ts}&apikey=${publicKey}&hash=${hash}`;

const Characters = () => {
  const [characters, setCharacters] = useState(null);

  const consulta = async (func) => {
      try{
        const res = await fetch(
            `https://gateway.marvel.com/v1/public/characters${urlData}` + `&limit=100`
          );
          const personajes = await res.json();
          func(personajes.data.results);
      }catch(e){
        console.log(e)
      }
    
  };

  useEffect(() => {
    consulta(setCharacters);
  }, []);

  console.log(!!characters && characters.length);
  console.log(!!characters && characters[0].resourceURI);
  return (
    <>
      <div className="container" style={{backgroundImage: `url("./img/wallhaven-gj8grq.jpg"`}}>
        <div className="row">
          {!!characters &&
            characters.map((val, index) => {
              return (
                <div className="col" key={index}>
                  <Tarjeta hero={val} />
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default Characters;
