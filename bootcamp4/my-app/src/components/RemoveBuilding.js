import React from 'react';

class RemoveBuilding extends React.Component {


    removeBuilding(id) {
		//Here you will need to update the value of the filter with the value from the textbox
		this.props.removeBuilding(id);
	}

	render() {
        const {selectedBuilding} = this.props;
		return (
            <div>
                <input 
                type="button" 
                value="Delete" 
                onClick={() => this.removeBuilding(selectedBuilding)} 
                />
               
                
                    
                    
                   
			</div>
		);
	}
}
export default RemoveBuilding;