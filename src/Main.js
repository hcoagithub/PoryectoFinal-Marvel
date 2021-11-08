import { BrowserRouter, Route, Switch } from "react-router-dom";
import Characters from "./components/Characters";
import Creadores from "./components/Creator";
import CreadorDetalle from "./components/CreatorDetails";
import Navbar from './components/Navbar';
import injectContext from "./Store/appContext";
import Comics from './views/Comics';
import DetalleComics from './views/DetalleComics';
import Home from './views/Home';
import NotFound from './views/NotFound';


const Main=()=>{

  return(

<BrowserRouter>
<Navbar />
<Switch>
<Route exact path="/Creator" component={Creadores}/>
<Route exact path="/CreatorDetails/:id" component={CreadorDetalle}/>
<Route exact path="/Characters" component={Characters}/>
<Route exact path="/Comics/:product_id" component={DetalleComics} />
<Route exact  path="/comics" component={Comics} />
            
  <Route exact paht="/" component={Home}/>
  <Route component={NotFound}/>


</Switch>
</BrowserRouter>

  )}

  export default injectContext(Main);
