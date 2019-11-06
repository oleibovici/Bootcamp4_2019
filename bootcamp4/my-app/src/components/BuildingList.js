import React from 'react';

class BuilingList extends React.Component {

	selectedUpdate() {
		//Here you will need to update the value of the filter with the value from the textbox
		const val = this.myValue.id
		this.props.selectedUpdate(val)
	}
	render() {
		
		const { data, filterText, selectedUpdate} = this.props;

		const buildingList = data

		.filter(directory => {return directory.name.toLowerCase().indexOf(filterText.toLowerCase()) >= 0})
		
		.map(directory => {
			return (
				<tr key={directory.id} 
				onClick={() => selectedUpdate(directory.id)}
				>
				
					<td>{directory.code} </td>
					<td> {directory.name} </td>
				</tr>
			)
		})

		

	return <div>{buildingList}</div>;

	}
}
export default BuilingList;
