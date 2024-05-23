import { useNavigate } from "react-router-dom";


function NotFound() {
  const navigate=useNavigate();
  function handleBackHomeClick(){
    navigate('/')
  }
  return ( <div className="container text-center mt-5 " style={{ height:500}}>
    <h1>Uh Oh!!</h1>
    <h1>The page you requested is not found</h1>
    <button className="btn btn-dark mt-5" onClick={handleBackHomeClick}>Back Home</button>

  </div> );
}

export default NotFound;