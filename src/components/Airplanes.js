import React, {Component} from 'react';
import axios from 'axios'
//creating an airplane

const AIRPLANES_URL = 'http://localhost:3000/airplanes.json';
class Airplanes extends Component {
  constructor(){
    super();
    this.state = {
      showForm: false,
      name: '',
      rows: '',
      columns: ''
    }
    this.showForm = this.showForm.bind(this)
  }

showForm(){
  return(
    <div>
    <form onSubmit={this.saveTable}>
      Name:<input type="text"/>
      Rows:<input type="text" />
      Columns:<input type="text"/>
      <br/>
      <input type="submit" value= "Save"/>
    </form>
    <input type="submit" value= "Cancel"/>
    </div>
    )
}
componentDidMount(){
  const fetchTable = () => {
    axios.get(AIRPLANES_URL).then((results) =>{
      this.setState({showTable: true, name: results.data.name, rows: results.data.rows, columns: results.data.columns })
      setTimeout(fetchTable, 5000);
    })
  }
  fetchTable();
}

saveTable(rows, columns){
  axios.post(AIRPLANES_URL, {rows: rows}, {columns: columns}).then((response) => {
    this.setState({name: [...this.state.name, response.data]}, {rows: [...this.state.rows, response.data]}, {columns: [...this.state.columns, response.data]})
  })
}



  render(){
    return(
      <div>
        <h1>Burning Airlines</h1>
        <button onClick={() => this.setState({showForm: true}) }>Create Plane
          </button>
          {this.state.showForm ? this.showForm() : null}
          <AirplanesTable />
        </div>
    )
  }

}

const AirplanesTable = (props) => {

      return(
        <div>

        </div>
      )

  }


export default Airplanes
