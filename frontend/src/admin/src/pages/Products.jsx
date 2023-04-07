import React , { useState}from 'react'
import Layout from '../components/shared/Layout'
import useFetch from '../components/hooks/useFtech'
import { BASE_URL } from '../utlis/config'
import Switch from '@mui/material/Switch'

export default function Products() {
    const [Tour] = useState(0);
    const label = { inputProps: { 'aria-label': 'Switch demo' } }
    const {data: tours} = useFetch(`${BASE_URL}/tours/?${Tour}`)
    return (
        <Layout>
        <div className="bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
            <strong className="text-gray font-medium">Order</strong>
            <div className="border-x border-gray rounded-sm mt-3">
                <table className="w-full text-gray">
                    <thead>
                        <tr>
                            <th>TourName</th>
                            <th>city</th>
                            <th>address</th>
                            <th>price</th>
                            <th>desc</th>
                            <th>maxGroupSize</th>
                            <th>edit</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tours?.map((e) => (
                            <tr key={e._id}>
                                <td>{e.title}</td>
                                
                                <td>{e.city}</td>
                                <td>{e.address}</td>
                                <td>{e.price}</td>
                                <td>{e.desc}</td>
                                <td>{e.maxGroupSize}</td>
                                <td>
                                <div className="flex gap-4 pt-3">
                                <button className="p-3 border border-black rounded bg-white hover:bg-black hover:text-white">
                                Edit
                                </button>
                                <button className="p-3 border border-black rounded bg-white hover:bg-black hover:text-white">
                                Delete
                                </button>
                                <Switch {...label} defaultChecked />
                                </div></td>
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
