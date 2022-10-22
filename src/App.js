import './App.css'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import { useAuthContext } from './hooks/useAuthContext'

import Login from './pages/Login/Login'
import Home from './pages/Home/Home'
import Signup from './pages/Signup/Signup'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Bom from './pages/BOM/Bom'
import Mrp from './pages/MRP/Mrp'
import Inventories from './pages/Inventories/Inventories'

function App() {

  const {user, authIsReady} = useAuthContext()

  return (
    <div className="App">

      {authIsReady && ( <BrowserRouter> 
        {user && <Sidebar />}
       <div className="container">
        <Navbar/>
            <Switch>
             <Route exact path="/">
                {!user && <Redirect to="/login" />}
                {user && <Home />}
              </Route>
           
              <Route path="/login">
                 {user && <Redirect to="/" /> }
                 {!user && <Login /> }
              </Route>
              <Route path="/signup">
                 {user && user.displayName && <Redirect to="/" /> }
                 {!user && <Signup /> }
              </Route>
              <Route path="/bom">
                <Bom />
              </Route>
              <Route path="/mrp">
                <Mrp />
              </Route>
              <Route path="/raktár">
                <Inventories />
              </Route>
            </Switch>
     
          </div>
      </BrowserRouter>
      )}
      </div>
  );
}

export default App
