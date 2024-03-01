import SignUp from './signUp';
import { useState } from 'react';
function Navbar(){
  const [isComponentVisible,setCommponentVisiblity] = useState(false);
  const executeComponent = ()=>{
    let execute = isComponentVisible===false?true:false;
    setCommponentVisiblity(execute)
  }
return <>   
  <nav className="navbar navbar-expand-lg p-3 navbar-light bg-primary">

  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto ml-4">
      <li className="nav-item active">
        <a className="nav-link text active" href="#">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="active nav-link" href="#">About</a>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link active dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Service
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="#">Male</a>
          <a className="dropdown-item" href="#">Female</a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="#">Products</a>
        </div>
      </li>
      <li className="nav-item">
        <a className="nav-link active" href="#">Contact</a>
      </li>
    </ul>
    <div id='logo'>
    <a id='logoname' className="navbar-brand text-white  font-weight-bold text-lg" href="#">Gift-Gallery</a>
    <img src='./Images/cup.jpg' id='image' width='70px' height='70px' alt='icon'/>
    </div>
    <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-success my-2 my-sm-0" type="submit">Search</button>
    </form>
    <div className='row dark d-flex justify-content-center align-content-center ml-4' id='login'>
      <div className='col-md-6'>
        <button onClick={executeComponent} className="btn btn-dark text-white font-weight-bold hover" id="signUp">SignUp</button>
      </div>
      <div className="col-md-6">
        <button className="text-white btn btn-dark font-weight-bold" id="signIn">SignIn</button>
      </div>
    </div>
  </div>
</nav>
{ isComponentVisible && <SignUp />}
</>
}

export default Navbar;