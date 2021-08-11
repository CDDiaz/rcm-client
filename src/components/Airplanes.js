import React, {Component} from 'react';
//creating an airplane
class Airplanes extends Component {

  constructor(){
    super();
    this.state = {
      showForm: false
    }
    this.showForm = this.showForm.bind(this)
  }

showForm(){

  return(
    <div>
    <form>
      Name:
      <input type="text"/>
      Rows:
      <input type="text" />
      Columns:
      <input type="text"/>
      <br/>
      <input type="submit" value= "Save"/>
      <input type="submit" value= "Cancel"/>
    </form>
    </div>
    )

}

  render(){
    return(
      <div>
        <nav>
          <ul>
          Airplanes
          Flights
          Admin
          </ul>
        </nav>
        <h1>Burning Airlines</h1>
        <button onClick={() => this.setState({showForm: true}) }>Create Plane
          </button>
          {this.state.showForm ? this.showForm() : null}
        </div>

    )
  }



}

export default Airplanes
