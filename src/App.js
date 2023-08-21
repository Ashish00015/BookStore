import { Route, Routes, BrowserRouter, Link } from "react-router-dom";
import './App.css';
import { Home } from "./components/Home";
import { ContactUs } from "./components/ContactUs";
import { NotFound } from "./components/NotFound";
// import BookStore from "./BookStore.jpg"
import Book from "./components/Book"
import { Categories } from "./components/Categories"
// import { Button } from "@mui/material";
import { SIGN_UP } from "./logInOut/SIGN_UP";
// import ShoppingCartTwoToneIcon from '@mui/icons-material/ShoppingCartTwoTone';
import { Cart } from "./components/Cart"
import SIGN_IN from "./logInOut/SIGN_IN";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    // <BrowserRouter>
    //   <nav style={{
    //     display: 'flex',
    //     border: '2px solid black',

    //     backgroundColor: 'rgb(0, 0, 0)'
    //   }}>

    //     <div>
    //       <ul className="ulList" >
    //         <li> <Link className="link" to="/"> Home</Link></li>
    //         <li> </li>
    //         <li><Link className="link" to="/book"> Book </Link></li>
    //         <li><Link className="link" to="/categories"> Categories </Link></li>
    //         <li> <Link className="link" to="/ContactUs">Contact Us</Link></li>
    //         <form className="SearchNav" style={{
    //           display: "flex",
    //           paddingLeft: "29vw",
    //           columnGap: 6,
    //           height: 30,
    //           marginTop: -5
    //         }}>

    //           <input style={{
    //             marginLeft: '7.5vw'
    //           }} type="search" placeholder="Search Book " aria-label="Search" />
    //           <Button variant="contained" placeholder="">Search</Button>

    //           <div className="navrightcorner ">
    //           <Link className="link" to="/SIGN_UP"> Sign Up</Link></div>
    //         </form>
    //       </ul>
    //     </div>

    //   </nav>
    //   <Routes>
    //     <Route path="/" element={<Home />} />
    //     <Route path="/signup" element={<SIGN_UP />} />
    //     <Route path="/ContactUs" element={<ContactUs />} />
    //     <Route path="*" element={<NotFound />} />
    //     <Route path="/book" element={<Book />} />
    //     <Route path="/categories" element={<Categories />} />

    //   </Routes>
    // </BrowserRouter>
    <BrowserRouter>
      <ToastContainer />
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark pt-o pb-0 fixed-top" >


        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav pt-o pb-0">
            <li> <Link className="link" to="/"> Home</Link></li>
            <li><Link className="link" to="/book"> Book </Link></li>
            <li><Link className="link" to="/categories"> Categories </Link></li>
            <li> <Link className="link" to="/ContactUs">Contact Us</Link></li>
            {/* <li> <Link className="link" to="/signin">Sign In</Link></li> */}
            <li><Link className="link " to="/signin" style={{
              position: " absolute",
              left: "89%"
            }}> Sign In</Link></li>
            <li><Link className="link " to="/cart" style={{
              position: " absolute",
              left: "95%"
            }}>
              {/* <ShoppingCartTwoToneIcon/>  */}
              cart
            </Link></li>
          </ul>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SIGN_UP />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/book" element={<Book />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/signin" element={<SIGN_IN />} />

      </Routes>

    </BrowserRouter>

  );
}

export default App;
