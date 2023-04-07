import React, {useState} from 'react'
import { format } from 'date-fns'
import useFetch from '../components/hooks/useFtech'
import { BASE_URL } from '../utlis/config'



export default function RecentOrders() {
	const [Booking] = useState(0);
	const { data: booking } = useFetch(`${BASE_URL}/booking?${Booking}`)
	return (
		<div className="bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
			<strong className="text-gray-700 font-medium">Recent Orders</strong>
			<div className="border-x border-gray-200 rounded-sm mt-3">
				<table className="w-full text-gray-700">
				<thead>
                        <tr>
                            <th>TourName</th>
                            <th>Name</th>
                            <th>Date</th>
                            <th>GuestSize</th>
                            <th>phone</th>
                        </tr>
                    </thead>
                    <tbody>
                        {booking?.map((e) => (
                            <tr key={e.userEmail}>
                                <td>{e.tourName}</td>
                                <td>{e.fullName}</td>
                                <td>{format(new Date(e.bookAt), 'dd MMM yyyy')}</td>
                                <td>{e.guestSize}</td>
                                <td>{e.phone}</td>
                                <td>
                                   
                                </td>
                            </tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	)
}
