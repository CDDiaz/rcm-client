import React, {Component} from 'react'

class AdminFlights extends Component{

 render(){
   return(
     <div>
      <h1> Create New Flight </h1>
      <CreateFlights />
      <ShowFlights />
     </div>
   )
 }

}

class CreateFlights extends Component{

 render(){
   return(
     <div>
      <h1> Virgine Airline </h1>
     </div>
   )
 }

}


class ShowFlights extends Component{

 render(){
   return(
     <div>
      <h1> Flights </h1>
     </div>
   )
 }

}

export default AdminFlights;
