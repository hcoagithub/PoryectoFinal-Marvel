import { BrowserRouter, Switch, Route} from "react-router-dom";
import Navbar from './components/Navbar';
import NotFound from './views/NotFound';
import Home from './views/Home'
import injectContext from "./Store/appContext";
import Creadores from "./components/Creator";

import CreadorDetalle from "./components/CreatorDetails";


const Main=()=>{

  return(

<BrowserRouter>
<Navbar />
<Switch>
<Route exact path="/Creator" component={Creadores}/>
<Route exact path="/CreatorDetails/:id" component={CreadorDetalle}/>
  <Route exact paht="/" component={Home}/>
  <Route component={NotFound}/>


</Switch>
</BrowserRouter>

  )}

  export default injectContext(Main);
