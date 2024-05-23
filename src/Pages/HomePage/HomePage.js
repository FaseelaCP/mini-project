import banner1 from '../../assets/banner1.jpg'
import banner2 from '../../assets/banner2.jpg'
import banner3 from '../../assets/banner3.jpg'
import './HomePage.css'
import { useState,useEffect, useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import CategoryContext from '../../Contexts/CategoryContext'
import ProductCard from '../../Components/Product Card/ProductCard'
import ProductList from '../../Components/ProductList/ProductList'
import { NavLink } from 'react-router-dom'


function HomePage() {
 
  
  const categoryParams=useContext(CategoryContext);
  console.log("cat params:", categoryParams)
   return(<>

  {/* Categories */}

  <div className="navbar navbar-expand-lg ">
  <div className="container-fluid ">
   
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse all-categories " id="navbarNavDropdown">
      <ul className="navbar-nav">
      <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            All categories
          </a>
          <ul className="dropdown-menu ">   
    {categoryParams?.categories?.data?.map((category) => (
      <li key={category.id}>
        <Link to={'/category/'+category.name} className='dropdown-item'> 
      {category.name}
    </Link>
      </li>
      
    ))}
    </ul>
    </li>
    <li className='nav-item ms-5 ' id='free-delivery'>
      Shop your favourites!!
      Free Delivery for orders above 1000!!! <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-truck" viewBox="0 0 16 16">
  <path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5zm1.294 7.456A2 2 0 0 1 4.732 11h5.536a2 2 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456M12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2"/>
</svg>
    </li>
              
      
      </ul>
    </div>
  </div>
</div>


  
{/* Banner */}
  <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={banner1} className="d-block w-100" alt="..."/>
     
    </div>
    <div className="carousel-item">
      <img src={banner2} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={banner3} className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
   
{/* Banner End! */}

{/* Card Groups */}


  <div className='container mt-5 mb-5 border border-0'>
  <div className="card-group border border-0">
  {categoryParams?.categories?.data?.map((category) => (
    
      <div className="card border border-0">
        <Link to={'/category/'+category.name}><img src={category.assets[0].url} className="card-img-top rounded-circle" alt="..." /></Link>
        <div className="card-body">
          <Link to={'/category/'+category.name} className="card-title">{category.name}</Link>
        </div>
      </div>
   
  ))}
</div>
  </div>


<div>
<div className='container text-center'>
  <h1 >Featured Products</h1>
  </div>
  <div>
    <ProductList  />
  </div>
  </div>
  </>  );
}
export default HomePage


  
  




