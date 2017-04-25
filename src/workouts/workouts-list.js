import React from 'react';
import deleteImage from '../assets/images/bin.ico';

export default (props) => {
	const { items, onDeleteItem } = props;

	return (
		<div className="workouts">
			<table>
				<thead>
					<tr>
						<th>Tempo</th>
						<th>Tipo</th>
						<th>Data</th>
						<th></th>
					</tr>
				</thead>
				<tbody>
					{items.map( item => (
						<tr key={item.id}>
							<td>{item.time}</td>
							<td>{item.type}</td>
							<td>{item.date}</td>
							<td>
								<a href="#" onClick={() => onDeleteItem(item.id)}>
									<img src={deleteImage} height="10" width="10" alt="" />
								</a>
							</td>
						</tr>
					))}
				</tbody>
			</table>
    </div>
	);
};