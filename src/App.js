import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav} from 'react-bootstrap'
import { useState } from "react";
import data from "./data";

function App() {

  let [shoes,setShoes] = useState(data);

  return (
    <div className="App">
       <Navbar bg="lignt" variant="lignt">
        <Container>
          <Navbar.Brand href="#home">shoeShop</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#features">Features</Nav.Link>
            </Nav>
        </Container>
      </Navbar>
      <div className="main-bg"></div>
      <div className="container" />
        <div className="row">
          <div className="col-md-4">
            <img src="/shoes1.jpg" alt="shoes" style={{width: "80%"}}/>
            <h4>{shoes[0].title}</h4>
            <p>상품설명</p>
          </div>
          <div className="col-md-4">
            <img src="/shoes2.jpg" alt="shoes" style={{width: "80%"}}/>
            <h4>상품명</h4>
            <p>상품설명</p>
          </div>
          <div className="col-md-4">
            <img src="/shoes3.jpg" alt="shoes" style={{width: "80%"}}/>
            <h4>상품명</h4>
            <p>상품설명</p>
          </div>
        </div>
      </div>
  );
}

export default App;
