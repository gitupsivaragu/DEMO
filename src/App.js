import logo from './icons/logo.jpg';
//import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Home  from './components/Home.js'
import Contact  from './components/Contact.js'
import Orders  from './components/Orders.js'
import './App.css';
import { Component } from 'react';

class App extends Component{


   constructor(prop)
   {
    super()

    this.state={
      Home:'Home',
      Contact:'Contact',
      Orders:'orders'
    }
    this.state.pagename="Home";
    this.Routerlinkpage = this.Routerlinkpage.bind(this);



   }
   Routerlinkpage(props)
   {
    this.setState({pagename:props.target.title})
    }
    renderElement(){
      if(this.state.pagename === 'Contact')
         return (<Contact/>);
         if(this.state.pagename === 'orders')
         return (<Orders/>);
      return  (<Home/>);
    }
    
   
  render(){
const marginheader={
  height: '58px',
  border: 'solid aliceblue',
  boxShadow: "3px 3px 3px 3px cadetblue",
  position: "fixed",
  left: 0,
  top: 0,
  width: "100%",
 backgroundColor: "white",
 // color: "white"
}

const  headerpadding={
  
    paddingRight:'33px',
    cursor: "pointer"
}

const footer= {
  position: "fixed",
  left: 0,
  bottom: 0,
  width: "100%",
  backgroundColor: "black",
  color: "white",
  textAlign: "center"
}
  return (
    <div>
          <header style={marginheader}>
            <h2  className="split left">
              <img src={logo} style={{height:"40px"}}></img>
            <span >AF Menu</span>            
            </h2>
            <h3 className="split right">           
            <div  style={{ margin: '10px',textDecoration: "none",textAlign: "right" }}>
                        <span className="btn" style={ headerpadding} title={this.state.Home} onClick={this.Routerlinkpage }>Home</span>
                        <span className="btn" style={ headerpadding} title={this.state.Contact} onClick={this.Routerlinkpage }>Contact's</span>  
                        <span className="btn" style={ headerpadding} title={this.state.Orders} onClick={this.Routerlinkpage }>Orders</span>                    
            </div>
           </h3>
        </header>
           <div  id="Home" style={{ paddingTop: '70px'}}>
              {this.renderElement()}
           </div>
            
      <div style={footer}>
     <h5>© Copyright 2022 American Fresh Menu Services All Rights Reserved</h5>
      </div>
    
    </div>
  );
}
}

export default App;
