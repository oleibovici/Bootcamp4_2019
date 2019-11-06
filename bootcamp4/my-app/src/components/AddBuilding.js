import React from 'react';
import data from '../data/data';

class AddBuilding extends React.Component {
   
    constructor(props) {
        super(props);
        
        this.state = {id: 0, 
            code: '', 
            name: '', 
            address: '', 
            coordinates: 
            { 
                latitude: '', 
                longitude: ''
            } 
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChangeCoordinates = this.handleChangeCoordinates.bind(this);
      }

      handleChange(event) {
        
        this.setState({id: Math.max(...data.map((build) => build.id)) + 1 })
        this.setState({[event.target.name]: event.target.value});
        console.log()
      }

      handleChangeCoordinates(event) {

        this.setState({
            coordinates:
            {
                ...this.state.coordinates, 
                [event.target.name]: event.target.value
                
            }
        });
      }

    handleSubmit(event) {
       
        event.preventDefault();
        this.props.handleSubmit(this.state)
        console.log(this.state.code)
        console.log(this.state.name)
        console.log(this.state.address)
        console.log(this.state.coordinates.latitude)
        console.log(this.state.coordinates.longitude)
      }
		
	render() {
            //You will need to save the value from the textbox and update it as it changes
            //You will need the onChange value for the input tag to capture the textbox value
            
        return (
           
                <form onSubmit={this.handleSubmit}>
                    <label style = {{backgroundColor:'orange'}}>
                        
                        <label style = {{backgroundColor:'purple'}} >Code: </label>
                        <input 
                            type="text" 
                            
                            onChange={this.handleChange} 
                            name="code" 
                            placeholder = "type here"
                        />
                        
                        Building:
                        <input 
                            type="text" 
                        
                            onChange={this.handleChange} 
                            name="name" 
                            placeholder = "type here"
                        />
             
                        Address:
                       <input 
                            type="text" 
                        
                            onChange={this.handleChange} 
                            name="address"
                            placeholder = "type here"
                       />

                        Latitude:
                        <input 
                            type="text" 
                          
                            onChange={this.handleChangeCoordinates}
                            name="latitude" 
                            placeholder = "type here"
                        />
                        
                       Longitude:
                       <input 
                       type="text" 
                       
                       onChange={this.handleChangeCoordinates}
                       name="longitude" 
                       placeholder = "type here"
                       />

                    </label>
                <input type="submit" value="Submit" /> 
                </form>
            );
        }

	}

export default AddBuilding;
