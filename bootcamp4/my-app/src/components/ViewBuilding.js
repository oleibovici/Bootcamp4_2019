import React from 'react';

class ViewBuilding extends React.Component {
	render() {

		const { data, selectedBuilding } = this.props;

		const viewBuilding = data
		.filter(directory => {
			return directory.id ===  selectedBuilding})
		
		.map(directory => {
			return (
				<tr key={directory.id}>
				<p>
					{' '}

					<p>
						<b>Code: </b> 
						{directory.code}
					</p>
					
					<p>
						<b>Building: </b>
						{directory.name} 
					</p>

					{directory.address ? 
					[ 
						<div>
							<p>
								<b>Address: </b> 
								{directory.address}
							</p>
						</div>
					] : null
					}
			
					{directory.coordinates ? 
						[
							<div>
								<p>
									<b>Latitude: </b> 
									{directory.coordinates.latitude}
								</p>

								<p>
									<b>Longitude: </b> 
									{directory.coordinates.longitude}
								</p>
							</div>
						]
						: null
					}
					
				</p>
				</tr>
			)
		})
		return (
			<div>
				
				<p>
					{' '}
					
					<i>Click on a name to view more information</i>
					
				</p>
				<p>{viewBuilding}</p>
			</div>
		);
	}
}
export default ViewBuilding;
