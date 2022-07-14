import './App.css';
import React from 'react';
import Header from './components/organisms/header/header';
import Footer from './components/organisms/footer/footer';
import LoginForm from './components/organisms/loginForm/loginForm';
import { Routes, Route } from "react-router-dom"
import Home from './components/organisms/home/home';
import RegisterForm from './components/organisms/registerForm/registerForm';
import ProductDetailed from './components/organisms/productDetailed/productDetailed';
import BookingTemplate from './components/organisms/bookingTemplate/bookingTemplate';
import BookingSuccessful from './components/organisms/bookingSuccessful/bookingSuccessful'
import CreateProductTemplate from './components/organisms/createProductTemplate/createProductTemplate';
import { CallApi } from './util/apiCall';
import { URL } from './resources/const/url';
import NothingHere from './components/organisms/nothingHere/nothingHere';

function App() {
  const [isLogged,setIsLogged] = React.useState(false)
  const [needLogg, setNeedLogg] = React.useState(false);
  const [typeUser, setTypeUser] = React.useState(null);

  React.useEffect(()=> {
    if (isLogged) {
      CallApi(`${URL}/users/get/${window.sessionStorage.getItem("user")}`)
      .then((data) => {
        setTypeUser(data.id_role.name)
      })
    }else(setTypeUser(null))
  },[isLogged])

  return (
    <div className="App">
      <Header isLogged={isLogged} setIsLogged={setIsLogged} role={typeUser}/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<LoginForm setIsLogged={setIsLogged} logged={isLogged} needLogg={needLogg} setNeedLogg={setNeedLogg}/>}/>
          <Route path='/register' element={<RegisterForm setIsLogged={setIsLogged} isLogged={isLogged} setNeedLogg={setNeedLogg}/>}/>
          <Route path='/product/:id' element={<ProductDetailed logged={isLogged} setNeedLogg={setNeedLogg}/>}/>
          <Route path='/product/:id/booking' element={<BookingTemplate logged={isLogged}/>}/>
          <Route path='/successful' element={<BookingSuccessful text={"ok"}>Su reserva se ha realizadon con éxito</BookingSuccessful>}/> 
          {typeUser && <Route path='/create/product' element={<CreateProductTemplate/>}/>}
          {typeUser && <Route path='/create/product/successful' element={<BookingSuccessful text={"Volver"}>Tu propiedad se ha creado con éxito</BookingSuccessful>}/>}
          <Route path='*' element={<NothingHere/>}/>
        </Routes>
      <Footer/>
    </div>
  );
}

export default App;
