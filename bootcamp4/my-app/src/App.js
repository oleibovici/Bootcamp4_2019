import React from 'react';
import Search from './components/Search';
import ViewBuilding from './components/ViewBuilding';
import BuildingList from './components/BuildingList';
import Credit from './components/Credit';
import AddBuilding from './components/AddBuilding';
import RemoveBuilding from './components/RemoveBuilding';
import  './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      selectedBuilding: 0,
      data:[],
      newArray: []
    };
  }

  filterUpdate(value) {
    //Here you will need to set the filterText property of state to the value passed into this function
    this.setState({
      filterText: value
    });
  }

  selectedUpdate(id) {
    //Here you will need to update the selectedBuilding property of state to the id passed into this function
    console.log(id)
    this.setState({
      selectedBuilding: id
    });
  }

  handleSubmit(newArray) {
    console.log(newArray)
    this.setState(()=> 
    {
    this.props.data.push(newArray)
    })
  }

  removeBuilding(selectedBuilding) {
    this.setState(()=> 
    {
    delete this.props.data[selectedBuilding-1]
    })
  }


  render() {
    
    return (
      
      <div  style = {{backgroundColor:'green'}} className="bg">
        <div  style = {{backgroundColor:'red'}} className="row">
          <h1>UF Directory App</h1>
        </div>

        <Search
                   filterText={this.state.filterText}
                   filterUpdate={this.filterUpdate.bind(this)}
                   />
        <main>
          <div  style = {{backgroundColor:'yellow'}} className="row">
            <div  className="column1">
              <div className="tableWrapper">
                <table className="table table-striped table-hover">
                  <tr>
                    <td>
                      <b style = {{backgroundColor:'blue'}}> Code Building</b>
                    </td>
                  </tr>
                  
                  <BuildingList
                    data={this.props.data}
                    filterText={this.state.filterText}
                    selectedUpdate = {this.selectedUpdate.bind(this)}

                  />
                </table>
              </div>
            </div>
            <div  style = {{backgroundColor:'pink'}} className="column2">
              <ViewBuilding 
               data={this.props.data}
               selectedUpdate = {this.selectedUpdate.bind(this)}
               selectedBuilding = {this.state.selectedBuilding}
               />
              <p><RemoveBuilding
              data={this.props.data}
              selectedBuilding = {this.state.selectedBuilding}
              removeBuilding={this.removeBuilding.bind(this)}
              /></p>

                <AddBuilding
                    data={this.props.data}
                    handleSubmit = {this.handleSubmit.bind(this)}
                    newArray = {this.state.newArray}
               />
         
            </div>

          
             
         
          </div>
          <Credit />
        </main>
      </div>
    );
  }
}
//      delete.this.props.data
export default App;
