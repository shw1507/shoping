import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav} from 'react-bootstrap'
import { useState } from "react";
import data from "./data";
import Card from "./Card";
import { Routes, Route, Link } from 'react-router-dom'

function App() {

  let [shoes,setShoes] = useState(data);

  return (
    <div className="App">
       <Navbar bg="lignt" variant="lignt">
        <Container>
          <Navbar.Brand href="#home">shoeShop</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#cart">Cart</Nav.Link>
            </Nav>
        </Container>
      </Navbar>
      <div className="main-bg"></div>
      <div className="container" />
        <div className="row">
          {
            shoes.map((a, i)=>{
              return(
                <Card shoes={shoes[i]} i={i} />
              )
            })
          }
        </div>
    </div>
      
  );
}

export default App;
