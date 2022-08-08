import React,{Component} from 'react';
import '../css/order.css'

import { form } from "react-hook-form";
import { toContainHTML } from '@testing-library/jest-dom/dist/matchers';



class Orders extends Component {

  constructor()
  {

    var today = new Date();
    super();
    debugger;
    this.state={
      curDT : today.getFullYear() + "-"+ Number(today.getMonth()+1)+"-"+today.getDate()+" "+ today.getHours()+":"+today.getMinutes()
    }
    this.totalp=0;
    this.JuiceItems=[
      {
        Id:1,
        Itemid:1,
        Item:"Apple Fresh",
        Price:5,
        Quantity:0,
        Totalprice:""
        },
        {
          Id:1,
          Item:"Avocado  Fresh",
          Itemid:2,
          Price:5,
          Totalprice:""
          }
      ];

  }
    totalbill()
  {
    
  
    debugger;
    let totlalbill=0;
    var data=  localStorage.getItem("items");
    var data1=  localStorage.getItem("Aitems");
    
    totlalbill=  this.JuiceItems.filter(x=>x.Itemid==1)[0].Totalprice=this.JuiceItems.filter(x=>x.Itemid===1)[0].Price*Number(data);
    this.JuiceItems.filter(x=>x.Itemid===1)[0].Quantity=Number(data);
    totlalbill+= this.JuiceItems.filter(x=>x.Itemid==2)[0].Totalprice=this.JuiceItems.filter(x=>x.Itemid===2)[0].Price*Number(data1);
    this.JuiceItems.filter(x=>x.Itemid===2)[0].Quantity=Number(data1);
  
                return( <>
                <tr>
                <th><span >Total</span></th>
                <td><span data-prefix>$ </span><span>{totlalbill}</span></td>
              </tr>
              <tr>
                <th><span >Amount Paid</span></th>
                <td><span data-prefix>$</span><span >0.00</span></td>
              </tr>
              <tr>
                <th><span >Balance Due</span></th>
                <td><span data-prefix>$</span><span>{totlalbill}</span></td>
              </tr>
              </>
           )
  }
orderlist()
{

var data=  localStorage.getItem("items");
var data1=  localStorage.getItem("Aitems");

 this.JuiceItems.filter(x=>x.Itemid==1)[0].Totalprice=this.JuiceItems.filter(x=>x.Itemid===1)[0].Price*Number(data);
this.JuiceItems.filter(x=>x.Itemid===1)[0].Quantity=Number(data);
 this.JuiceItems.filter(x=>x.Itemid==2)[0].Totalprice=this.JuiceItems.filter(x=>x.Itemid===2)[0].Price*Number(data1);
this.JuiceItems.filter(x=>x.Itemid===2)[0].Quantity=Number(data1);
return <>

{this.JuiceItems.map((Ite)=>{
  return(
    
     <tr>
						<td><a class="cut">-</a><span >{Ite.Item}</span></td>
						<td><span data-prefix>$</span><span >{Ite.Price}</span></td>
						<td><span >{Ite.Quantity}</span></td>
						<td><span data-prefix>$</span><span>{Ite.Totalprice}</span></td>
					</tr>
 )
})}
</>

}



  render() {

    const h1= { font : "bold 100% sans-serif", 
    letterSpacing:" 0.5em",
     textAlign: "center",
      textTransform: "uppercase"
  }



  return ( <>
<h1 className='h1'>Address</h1>
			<address >
				<p>Jonathan Neal</p>
				<p>101 E. Chapman Ave<br/>Orange, CA 92866</p>
				<p>(800) 555-1234</p>
			</address>
			<span></span>
		
		<article>
			<h1 className='h1'>Recipient</h1>
			{/* <address >
				<p>Some Company<br/>c/o Some Guy</p>
			</address> */}
			<table class="meta">
				<tr>
					<th><span >Bill id#</span></th>
					<td><span >101138</span></td>
				</tr>
				<tr>
					<th><span >Date</span></th>
					<td><span >{this.state.curDT}</span></td>
				</tr>
				{/* <tr>
					<th><span >Amount Due</span></th>
					<td><span id="prefix" >$</span><span>600.00</span></td>
				</tr> */}
			</table>
			<table class="inventory">
				<thead>
					<tr>
						<th><span >Item</span></th>
						<th><span >Rate</span></th>
						<th><span >Quantity</span></th>
						<th><span >Price</span></th>
					</tr>
				</thead>
				<tbody>
				    { this.orderlist()    }
				</tbody>
			</table>
			
			<table class="balance">

        {this.totalbill()}
      
			</table>
		</article>
		
  </>)
  }
}



export default Orders;