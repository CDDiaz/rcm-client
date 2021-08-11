import React, {Component} from 'react'

// Creating Flights ///

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
      <form>
        Flight#:
        <input type="text"/>
        Date:
        <input type="date" />
        from:
        <input type="text"/>
        To:
        <input type="text"/>
        Plane:
        <input type="text"/>
        <input type="submit" value= "Save"/>
        <input type="submit" value= "Cancel"/>
      </form>
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
