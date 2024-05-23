import { Link, NavLink } from "react-router-dom";
import logo from '../../assets/logo.PNG'
import './Header.css'
import { useState,useContext } from "react";
import CartContext from "../../Contexts/CartContext";

function Header(props) {
  const [searchText,setSearchText]=useState('')

  const {cartid}=useContext(CartContext)

  const onSearchTextChange=($event)=>{
    setSearchText($event.target.value)
  }

  const onSearchClick=()=>{
    props.handleSearchClick(searchText)
  }

  return (  
   < div className="header   ">

      <div className=" navbar navbar-expand-lg  ">
  <div className="container-fluid d-flex justify-content-around">
    
    <Link to='/' href='/' className="navbar-brand">
       <img className="d-inline-block align-text-top" src={logo} alt="logo" width="auto" height="50"/>
   </Link>
   <Link to='/' className="nav-link brand-name "  href="/">Spinneys</Link>
   
   <form className="d-flex" role="search">
    <Link to={'/search'}>
   <div className="input-group">
      
      <input type="search" className="form-control pe-5 " placeholder="What are you looking for?" aria-label="Search" aria-describedby="basic-addon1" style={{width:350}} onChange={onSearchTextChange}/>
      <span className="input-group-text" id="basic-addon1"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16" role="button" onClick={onSearchClick}>
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
</svg></span>
    </div>
    </Link>
        </form>
        <div className="d-flex">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse " id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item ">
          <NavLink className="me-2 nav-link header-links" to={'/login'}>Login
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="20" fill="white" className="bi bi-person" viewBox="0 0 16 16">
  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"/>
</svg></NavLink>
         
        </li>   
        <li className="nav-item">
  <NavLink className="ms-4 me-2 nav-link header-links" to={'/cart/'+cartid}>Cart
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="20" fill="white" className="bi bi-cart3" viewBox="0 0 16 16">
      <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l.84 4.479 9.144-.459L13.89 4zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
    </svg>
  </NavLink>
</li>

       
      </ul>
     
    </div>
    </div>


  </div>
</div>



    </div>
  );
}

export default Header;