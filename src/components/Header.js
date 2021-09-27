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
      <nav className=" py-2 py-sm-3 px-sm-1 bg-primary color-white">
        
        <div className=" row w-100 align-items-center m-0">

            <Link className="col-4 col-md-1" to="/">
                <img src={svg} width="100" className="text-white color-white "  alt=""/>
            </Link>
           
            <div 
            // style={{width:'60%'}} 
            className="d-none d-md-block col-md-7 col-lg-8" style={{paddingLeft: 50}}>
                <div className="d-flex align-items-center ">
                <input className="form-control w-100" type="search" aria-label="Search"/>
                <button className="btn btn-warning rounded-0 rounded-end " style={{ marginLeft: -12 }}type="submit">
                    <i className="bi bi-search" />
                </button>
                </div>
            </div>

              <ul className="text-white col-8 col-md-4 col-lg-3 list-unstyled d-flex justify-content-between  justify-content-sm-evenly">

                <li className="">
                  <Link className=" py-0" to={!user && "login"}>
                    <div onClick={handleAuthentication} className="text-white text-decoration-none">
                      <span style={{fontSize: 10}} className="d-block ">
                          Hello {user?.email}
                      </span>
                    <span style={{fontSize: 13}} className="mt-0 pt-0">{user ? 'Signout': "Sign in"}</span>
                    </div>
                  </Link>
                </li>
                <li className=" mx-2 mx-lg-0">
                  <a className=" py-0 text-white text-decoration-none" aria-current="page" href="#d">
                      <span style={{fontSize: 10}} className="d-block ">
                          Returns
                      </span>
                    <span style={{fontSize: 13}} className="mt-0 pt-0">& Orders</span>
                  </a>
                </li>
                <li className=" ">
                  <a className=" py-0 text-white text-decoration-none" aria-current="page" href="#d">
                      <span style={{fontSize: 10}} className="d-block ">
                          Your
                      </span>
                    <span style={{fontSize: 13}} className="mt-0 pt-0">Prime</span>
                  </a>
                </li>
                <li className="">
                    <Link className=" fs-4 p-0 ms-2 text-white text-decoration-none" to="checkout">
                        <i className="bi bi-cart" ></i>
                        <span className="ms-2 fs-5">{basket?.length}</span>
                    </Link>
                </li>
               
              </ul>

              <div 
            // style={{width:'60%'}} 
            className="d-md-none mb-2">
                <div className="d-flex align-items-center ">
                <input className="form-control w-100" type="search" aria-label="Search"/>
                <button className="btn btn-warning rounded-0 rounded-end " style={{ marginLeft: -12 }}type="submit">
                    <i className="bi bi-search" />
                </button>
                </div>
            </div>
              
        </div>
      </nav>

    </div>
  );
};

export default Header;
