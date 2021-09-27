import React from "react";
import { Link } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import svg from "./Amazon_logo.svg";
// import { AiOutlineSearch } from "react-icons/bs";
import {auth} from '../firebase'

const Header = () => {
    const [{basket, user}, dispatch] = useStateValue()

    const handleAuthentication = () => {
      if(user){
        auth.signOut()
      }
    }

  return (
    <div>
      <nav className="navbar navbar-expand-sm navbar-dark bg-primary">
        <div className=" d-flex justify-content-between w-100 mx-3">

            <Link className="navbar-brand" to="/">
                <img src={svg} width="100" className="text-white color-white "  alt=""/>
            </Link>
           
            <div style={{width:'60%'}}>
                <div className="d-flex align-items-center ">
                <input className="form-control w-100" type="search" aria-label="Search"/>
                <button className="btn btn-warning rounded-0 rounded-end " style={{ marginLeft: -12 }}type="submit">
                    <i className="bi bi-search" />
                </button>
                </div>
            </div>


              <ul className="navbar-nav">

                <li className="nav-item">
                  <Link className="nav-link active py-0 " to={!user && "login"}>
                    <div onClick={handleAuthentication}>
                      <span style={{fontSize: 10}} className="d-block ">
                          Hello {user?.email}
                      </span>
                    <span className="mt-0 pt-0">{user ? 'Signout': "Sign in"}</span>
                    </div>
                  </Link>
                </li>
                <li className="nav-item ">
                  <a className="nav-link active py-0 " aria-current="page" href="#d">
                      <span style={{fontSize: 10}} className="d-block ">
                          Returns
                      </span>
                    <span className="mt-0 pt-0">& Orders</span>
                  </a>
                </li>
                <li className="nav-item ">
                  <a className="nav-link active py-0 " aria-current="page" href="#d">
                      <span style={{fontSize: 10}} className="d-block ">
                          Your
                      </span>
                    <span className="mt-0 pt-0">Prime</span>
                  </a>
                </li>
                <li className="nav-item">
                    <Link className="nav-link active fs-4 p-0 ms-2 " to="checkout">
                        <i className="bi bi-cart" ></i>
                        <span className="ms-2 fs-5">{basket?.length}</span>
                    </Link>
                </li>
               
              </ul>
        </div>
      </nav>

    </div>
  );
};

export default Header;
