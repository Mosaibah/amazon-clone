import Header from "./components/Header";
import Home from "./components/Home";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Checkout from "./components/Checkout";
import Login from "./components/Login";
import {useEffect} from 'react'
import {auth} from './firebase'
import { useStateValue } from "./StateProvider";

function App() {
  const [{}, dispatch] = useStateValue()

  useEffect(() => {
    // will only runs once when the component loads

    auth.onAuthStateChanged(authUser => {
      console.log('the user is', authUser)

      if (authUser){
        // the user just logged in/ the user was lgged in
        dispatch({
          type: 'SET_USER',
          payload: authUser
        })

      }else{
        // the use is logged out
        dispatch({
          type: "SET_USER",
          payload: null
        })
      }
    })
   
  }, [])

  return (
    <div>
     <Router>
        
        <Switch>
          <Route path="/checkout">
          <Header/>
            <Checkout/>
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
          <Header/>
            <Home />
          </Route>
        </Switch>
    </Router>
    </div>
  );
}

export default App;
