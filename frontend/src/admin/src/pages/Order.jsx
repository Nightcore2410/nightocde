import React, {useState}from 'react'
import { format } from 'date-fns';
import Layout from '../components/shared/Layout'
import useFetch from '../components/hooks/useFtech'
import { BASE_URL } from '../utlis/config'

const Order = () => {
  const [Booking] = useState(0);
  const { data: booking } = useFetch(`${BASE_URL}/booking?${Booking}`)
  
  return (
    <Layout>
        <div className="bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
            <strong className="text-gray-700 font-medium">Order</strong>
            <div className="border-x border-gray-200 rounded-sm mt-3">
                <table className="w-full text-gray">
                    <thead>
                        <tr>
                            <th>TourName</th>
                            <th>userEmail</th>
                            <th>Name</th>
                            <th>Date</th>
                            <th>GuestSize</th>
                            <th>phone</th>
                        </tr>
                    </thead>
                    <tbody>
                        {booking?.map((e) => (
                            <tr key={e._id}>
                                <td>{e.tourName}</td>
                                <td>{e.userEmail}</td>
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
    </Layout>
)
}

export default Order
