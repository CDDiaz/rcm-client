import React, {Component} from 'react';
import axios from 'axios'
//creating an airplane

const AIRPLANES_URL = 'https://rcm-airlines.herokuapp.com/airplanes.json';
class Airplanes extends Component {
  constructor(){
    super();
    this.state = {
      showForm: false,
      airplanes: [],
      name: '',
      rows:'',
      columns:''
    }
    this.showForm = this.showForm.bind(this)
    this._renderRows = this._renderRows.bind(this)
    this._renderCols = this._renderCols.bind(this)
    this._renderName = this._renderName.bind(this)
    this._handleSubmit = this._handleSubmit.bind(this)
  }

  componentDidMount(){
    const fetchPlane = () => {
      axios.get(AIRPLANES_URL).then((results)=>{
        this.setState({airplanes: results.data})
        setTimeout(fetchPlane, 5000);
      });
    }
    fetchPlane();
  }
savePlane(data){
  axios.post(AIRPLANES_URL, {name: data.name, row: data.rows, column: data.columns}).then((response) => {
    //adding new secret to the set of secrets (in state) without mutation
    this.setState({airplanes: [...this.state.airplanes, response.data]});
  })
}
  //please
  _renderRows(event){
    this.setState({rows: event.target.value})
  }
  //don't
  _renderCols(event){
    this.setState({columns: event.target.value})
  }
  //touch
  _renderName(event){
    this.setState({name: event.target.value})
  }
  //this
  _handleSubmit(event){
      event.preventDefault();
      this.savePlane(this.state);
      this.setState({showForm:false})
  }

showForm(){
  return(
    <div>
    <form onSubmit={this._handleSubmit}>
      Name:<input type="text" onChange={this._renderName} value={this.state.name}/>
      Rows:<input type="text" onChange={this._renderRows} value={this.state.rows}/>
      Columns:<input type="text" onChange={this._renderCols} value={this.state.columns}/>
      <br/>
      <input type="submit" value= "Save"/>
    </form>
    <input type="submit" value= "Cancel" onClick={() => this.setState({showForm: false}) }/>
    </div>
  )
}

  render(){
    return(
      <div>
        <button onClick={() => this.setState({showForm: true}) }>Create Plane
          </button>
          {this.state.showForm ? this.showForm() : null}
          <AirplanesTable name={this.state.name} rows={this.state.rows} columns={this.state.columns} />
        </div>
      )
    }

}

const AirplanesTable = (props) => {
  //declare variable for nested loop for rows and columns and add to return?
  const seats= [];
    for(let row = 1; row <= props.rows; row++){
      const rows = [];
      for(let column = 1; column <= props.columns; column++){
        rows.push(<td>{(row + 9).toString(36).toUpperCase() + column.toString()}</td>);
      }
      seats.push(<tr>{rows}</tr>)
    }

  return(

    <div className="airlines">
      <div>
        <h3> {props.name}</h3>
      </div>
      <div className="table">
        {seats}
      </div>
    </div>
    )

  }





export default Airplanes
