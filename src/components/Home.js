
import React , { Component,useContext  } from 'react';
//import log   from "../images/4.jpg";
//import Popup from 'reactjs-popup'
//import {writeJsonFile} from 'write-json-file';
var jsondetail = require('../jsondata/detail.json'); 
class Home extends Component
{

 constructor()
 {

super();
this.state={Itemid:"0", additem:0,additems:0};

this.CallingItems=this.CallingItems.bind(this);
this.onlyVeg=this.onlyVeg.bind(this);
this.onlyNonVeg=this.onlyNonVeg.bind(this);
this.selectAll=this.selectAll.bind(this);
this.Orderdetail=this.Orderdetail.bind(this);
this.jsondata=[{
  Id:1,
  Item:"Juice",
  Catgerios:"veg",
  Image:require("../images/1.jpg")
  },
  {
    Id:2,
    Item:"Veg",
    Catgerios:"veg",
    Image:require("../images/2.jpg")
    },
    {
  
      Id:3,
      Item:"Non-Veg",
      Catgerios:"nonveg",
      Image:require("../images/3.jpg")
    },
    {
  
        Id:4,
        Item:"Milk Items",
        Catgerios:"veg",
        Image:require("../images/4.jpg")
    }
  ];

  this.JuiceItems=[
    {
      Id:1,
      Itemid:1,
      Item:"Apple Fresh",
      Image:require("../images/6.jpg"),
      Price:5,
      Currency:"$",
      DeleteOrder:0,
      Require:{
        Item1:"Mix With cherry",
        Item2:"More Suger"
      },
      NotRequire:{
        Item1:"Ice",
        Item2:"More Suger"
      }
      },
      {
        Id:1,
        Item:"Avocado  Fresh",
        Itemid:2,
        Image:require("../images/6.jpg"),
        Price:5,
        DeleteOrder:0,
        Currency:"$",
        Require:{
          Item1:"Mix With cherry",
          Item2:"More Suger"
        },
        NotRequire:{
          Item1:"Ice",
          Item2:"More Suger"
        }
        }
    ];




 }

 Orderdetail(event,target)
 {

  if( localStorage.items && target===1)
  {
   
  localStorage.items=Number(localStorage.items)+1;
  this.setState({additem:1});
  }
  else if(target===1){
    localStorage.items=1;
    this.setState({additem:1});
  }

  if( localStorage.Aitems && target===2)
  {
    
    this.setState({additems:1});
  localStorage.Aitems=Number(localStorage.Aitems)+1;
  }
  else if(target===2){
    localStorage.Aitems=1;
    this.setState({additems:1});
  }

 }
 selectAll()
 {
  this.RenderElement("all")
 }
 onlyNonVeg(){


  this.RenderElement('nonveg');
  
 }
 onlyVeg()
 {
  this.RenderElement('veg');

 }

elements(){

  const marginheader={
    height: '400px',
    border: 'solid aliceblue',
    boxShadow: "3px 3px 3px 3px cadetblue",
    width: "50%",
    position: "fixed",
   backgroundColor: "white",
   // color: "white"
  }
  const center= {
    margin: "auto",
    width: "60%",
    padding: "10px",
  }
  const detailimg={
    display: "flex",
    justifyContent: "end",
    float:"left",width:"36%", padding:"1%",position:"right center"
  }
  const w3Quarter1={
  
    float:"left",width:"100%",padding:"1%",position:"right center" ,boxShadow: "3px 3px 3px 3px cadetblue",visibility:"show"
    ,height: "175px"
 
  }
  const fontWeight={
  
    float:"left",width:"100%",padding:"2%",position:"right center" 
  }
return <>

{this.JuiceItems.map((Ite)=>{
  return(
    <>
<div   style={center}>
   <div style={w3Quarter1} >
     <div  style={detailimg}>
     
   <img src={Ite.Image} alt="Sandwich" style={{width:"100%" ,height:"150px"   }}/> 
   </div>
      
      <h3 style={{textAlign:"center",margin:"2px"}} >{Ite.Item}</h3>
     <h5 style={{margin:"1px"}}>Required</h5>
     {this.ItemrequireornotRequire(Ite.Require)}
      <div>
     <h5 style={{margin:"1px"}}>Not Required</h5>
       {this.ItemrequireornotRequire(Ite.NotRequire)}
     
       <span  style={{paddingLeft:"200px", fontWeight: "bold",fontSize: "larger",  color: "green"}} >Price:- {Ite.Price}$ </span>  
       <input className='Add' type="button"  style={{fontWeight:  "bold",
backgroundColor: "gold", border:"2px solid red",
borderRadius:"25px" 
}} value="ADD+" onClick={() => this.Orderdetail(Ite.Id, Ite.Itemid)}/> 
<span style={{paddingLeft:"20px"}}  >

   { this.DeleteorderCount() } 
</span>
      </div>
     </div>
    </div>
   
</>
  )})}
   <div style={fontWeight}>
     
  </div>
  </>
}


DeleteorderCount(){
debugger;
return  <>

{ this.state.additem===1?
<input className='Add' type="button" value="   -   " onClick={() => this.deleteOrderdetail()}  style={{fontWeight:  "bold",
backgroundColor: "gold",
border:"2px solid red",
borderRadius:"25px" }} /> : this.state.additems===1?<input className='Add' type="button" value="   -   " onClick={() => this.deleteOrderdetail()}  style={{fontWeight:  "bold",
backgroundColor: "gold",
border:"2px solid red",
borderRadius:"25px" }} /> :""  }
</>
}





ItemrequireornotRequire(Ite)
{

  const lablelAlign={
    fontWeight: "bold",
fontSize: "larger",
padding: "5px"
  }

     return(
       <>
       <label  style={lablelAlign}>{Ite.Item1}</label>
       <span>
       <input type="checkBox"/>
       </span>
       <label  style={lablelAlign}>{Ite.Item2}</label>
       <input type="checkBox"/>
       </>       
 )
}

CallingItems(e)
{

if(this.state.Itemid=="1")
{
  this.setState({Itemid:"0"});

}
else
{
this.setState({Itemid:e.target.id});
}
this.RenderElement('all');
e.preventDefault();
}


  RenderElement(CATEGORIES)
 {
  debugger;

  var lstitem=this.jsondata;
  if(CATEGORIES!='all')
  {
   lstitem=this.jsondata.filter(x=>x.Catgerios===CATEGORIES);
 }
const ColoredLine = ({ color }) => (
  <hr
      style={{
          color: "color",
          backgroundColor: "color",
          height: 5
      }}
  />
);
  const w3Quarter={
    float:"left",width:"25%", boxShadow:"2px 3px 5px brown",padding:"1%",position:"right center "
  }
  return < >
  {lstitem.map((e)=>{ 
  return   ( <div style={w3Quarter} key={e.Id}>
<img src={e.Image} alt="Sandwich" style={{width:"100%"    }} id={e.Id} onClick={this.CallingItems} />   
   <h3 style={{textAlign:"center"}} >{e.Item}</h3>
  <p>Just some random text, lorem ipsum text praesent tincidunt ipsum lipsum.</p>
</div>
  ) }) }
    <hr style={{
      padding: '11%'
    }} />
     {this.state.Itemid==="0" || this.state.Itemid===undefined? <span className="sr-only" >Click on Fresh Menu... </span>   : this.elements()}
       
  </>
 };


   render()
   {

const Style={
  margin:"10px"
}

    return (
      <>

      <div style={{
    fontZize: 'larger',
fontWeight: 'bold',
}}>
    <h5   className="Catsplitleft">CATEGORIES
  <span className="Catsplit">
  <input type='button'  value='Veg' className="colorofveg" onClick={this.onlyVeg}/>
  </span>
  <span className="Catsplit">
  <input type='button'  value='Non-Veg' className="colorofvegnonnonveg" onClick={this.onlyNonVeg}/>
  </span>
  <span className="Catsplit">
  <input type='button'  value='All' className="colorofveg" onClick={this.selectAll}/>
  </span>   
  </h5>
      </div>
       
     
       <div style={Style}>
       {this.RenderElement('all')}
       </div>
        
       </>
  )
   }
  }

 
  export default Home;



  