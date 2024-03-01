
import './App.css';
import Contact from './Compenents/Contact';
import Footer from './Compenents/Footer';
// import Form from './Compenents/Form';
// import FakeImageGenerator from './Compenents/Faker';
import Main from './Compenents/Main';
import Navbar from './Compenents/navbar';

function  App(){
    return (<>
    <Navbar/>
    <Main/>
    <Contact />
    <Footer/>
    {/* <Form/> */}
     </>
  );
}

export default App;
