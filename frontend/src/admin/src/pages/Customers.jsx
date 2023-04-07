import React,{useState} from 'react'
import Layout from '../components/shared/Layout'
import useFetch from '../components/hooks/useFtech'
import { BASE_URL } from '../utlis/config'
import Switch from '@mui/material/Switch'
const Customers = () => {
    const [user] = useState(0);
    const label = { inputProps: { 'aria-label': 'Switch demo' } }
    const { data: users } = useFetch(`${BASE_URL}/users?${user}`)
    return (
        <Layout>
            <div className="bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
                <strong className="text-gray-700 font-medium">Customers</strong>
                <div className="border-x border-gray-200 rounded-sm mt-3">
                    <table className="w-full text-gray">
                        <thead>
                            <tr>
                                <th>Username</th>
                                <th>email</th>
                                <th>password</th>
                                <th>role</th>

                            </tr>
                        </thead>
                        <tbody>
                            {users?.map((e) => (
                                <tr key={e._id}>
                                    <div className="flex gap-4 pt-3">
                                <button className="p-3 border border-black rounded bg-white hover:bg-black hover:text-white">
                                Delete
                                </button>
            
                                </div>
                                    <td>{e.username}</td>
                                    <td>{e.email}</td>
                                    <td>{e.password}</td>
                                    <td>
                                        <button className="capitalize py-1 px-2 rounded-md text-xs text-sky-600 bg-sky-100">
                                        <td>{e.role} </td>
                                        </button>
                                        
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

export default Customers
