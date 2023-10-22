import { IVehicleInfo } from '../form/vehicle.interface';

type TableProps = {
	vehicleList: IVehicleInfo[];
};

export const Table = ({ vehicleList }: TableProps) => {
	console.log('vehicle list', vehicleList);
	console.log("test")
	return (
		<div className="mt-4 text-center">
			<table className="border-collapse mx-auto">
				<thead>
					<tr>
						<th className="px-4 py-2 border">Owner name</th>
						<th className="px-4 py-2 border">Vehicle type</th>
						<th className="px-4 py-2 border">License no</th>
						<th className="px-4 py-2 border">Entry time</th>
						<th className="px-4 py-2 border">Exit time</th>
						<th className="px-4 py-2 border">Status</th>
						<th className="px-4 py-2 border">Edit</th>
					</tr>
				</thead>
				<tbody>
					{vehicleList.map((entry, index) => (
						<tr
							key={index}
							className="odd:bg-slate-50">
							<td className="px-4 py-2 border">{entry.ownerName}</td>
							<td className="px-4 py-2 border">{entry.vehicleType}</td>
							<td className="px-4 py-2 border">{entry.licenseNumber}</td>
							<td className="px-4 py-2 border">{new Date(entry.entryDateTime).toISOString()}</td>
							<td className="px-4 py-2 border">{new Date(entry.exitDateTime).toISOString()}</td>
							<td className="px-4 py-2 border">{entry.status}</td>
							<td className="px-4 py-2 border">button</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};
