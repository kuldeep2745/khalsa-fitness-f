import React, {useContext} from 'react';
import { Button, Modal, Alert } from "react-bootstrap";
import Cookies from "universal-cookie";
import { Link } from "react-router-dom";
import { MyContext } from '../../MyContext';

const cookies = new Cookies();
const token = cookies.get("TOKEN");

const Header = () => {
  const { isAdmin } = useContext(MyContext);

  const logout = () => {
    cookies.remove("TOKEN", { path: "/" });
    window.location.href = "/";
  };

  const removeToken = () => {
    cookies.remove("TOKEN", { path: "/" });
  };

  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <Button style={{marginRight:"10px"}} class="navbar-brand" type="submit" variant="danger" onClick={() => logout()}>
        Logout
      </Button>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        {isAdmin ? (
          <div>
            <Button class="navbar-brand" type="submit" variant="danger">
      <Link style={{color: "white", textDecoration: 'none'}} onClick={() => removeToken()} to="/">User Login</Link>
      </Button>
          </div>
        ) : (
          <div>
            <Button class="navbar-brand" type="submit" variant="danger">
      <Link style={{color: "white", textDecoration: 'none'}} onClick={() => removeToken()} to="/manager">Manager Login</Link>
      </Button>
          </div>
        )}
      </div>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Header
