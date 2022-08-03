import React , { Component } from 'react';
//import log   from "../images/4.jpg";
import Popup from 'reactjs-popup'
class Home extends Component
{
 constructor()
 {
super();
this.state={Itemid:"0"};
this.CallingItems=this.CallingItems.bind(this)
this.jsondata=[{
  Id:1,
  Item:"Juice",
  Image:require("../images/1.jpg")
  },
  {
    Id:2,
    Item:"Veg",
    Image:require("../images/2.jpg")
    },
    {
  
      Id:3,
      Item:"Non-Veg",
      Image:require("../images/3.jpg")
    },
    {
  
        Id:4,
        Item:"Milk Items",
        Image:require("../images/4.jpg")
    }
  ];

  this.JuiceItems=[
    {
      Id:1,
      Item:"Apple Fresh",
      Image:require("../images/6.jpg"),
      Price:5,
      Currency:"$",
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
        Image:require("../images/6.jpg"),
        Price:5,
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
       <input type="button"  style={{fontWeight:  "bold",
backgroundColor: "gold",
boxShadow: "2px 2px 2px"}} value="ADD+" /> 
      </div>
     </div>
    </div>
   
</>
  )})}
   <div style={fontWeight}>
     
  </div>
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
       <input type="checkBox"/>
       <label  style={lablelAlign}>{Ite.Item2}</label>
       <input type="checkBox"/>
       </>       
 )
}

CallingItems(e)
{
debugger;
if(this.state.Itemid=="1")
{
  this.setState({Itemid:"0"});

}
else
{
this.setState({Itemid:e.target.id});
}
this.RenderElement();
e.preventDefault();
}


  RenderElement()
 {
debugger;

 
  const w3Quarter={
    float:"left",width:"25%", boxShadow:"2px 3px 5px brown",padding:"1%",position:"right center "
  }

  return < >
  {this.jsondata.map((e)=>{ 
  return   ( <div style={w3Quarter} key={e.Id}>
<img src={e.Image} alt="Sandwich" style={{width:"100%"    }} id={e.Id} onClick={this.CallingItems} />   
   <h3 style={{textAlign:"center"}} >{e.Item}</h3>
  <p>Just some random text, lorem ipsum text praesent tincidunt ipsum lipsum.</p>
</div>
  ) }) }
    
     {this.state.Itemid==="0" || this.state.Itemid===undefined?<span className="sr-only">Click on Fresh Menu... </span>: this.elements()}
    
  </>
 };


   render()
   {

const Style={
  margin:"60px"
}

    return (
      <>
       <div style={Style}>
       {this.RenderElement()}
       </div>
        
       </>
  )
   }
  }

 
  export default Home;



  