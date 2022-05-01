import React, { useEffect } from "react"
import logo from "./logo.svg"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import plusIcon from "../assets/icn_plus.png"
const URL = "https://jsonplaceholder.typicode.com/users"
function Locations() {
    const navigate = useNavigate()
    const [employees, setEmployees] = React.useState<any[]>([])
    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        const response = await axios.get(URL)
        setEmployees(response.data)
    }

    const removeData = (id: any) => {
        axios.delete(`${URL}/${id}`).then((res: any) => {
            const del = employees.filter((employee) => id !== employee?.id)
            setEmployees(del)
        })
    }

    const renderHeader = () => {
        let headerElement = [
            "Location",
            "Location No",
            "Chargers",
            "Country",
            "Last Updated",
            "Actions",
        ]

        return headerElement.map((key, index) => {
            return <th key={index}>{key.toUpperCase()}</th>
        })
    }

    const renderBody = () => {
        return (
            employees &&
            employees.map(({ id, name, email, phone }) => {
                return (
                    <tr className='border_bottom' key={id}>
                        <td className='td'>{id}</td>
                        <td>{name}</td>
                        <td className='td'>{email}</td>
                        <td className='td'>{phone}</td>
                        <td className='td'>{phone}</td>
                        <td className='opration '>
                            <button
                                className='button'
                                onClick={() => removeData(id)}>
                                Edit
                            </button>
                        </td>
                    </tr>
                )
            })
        )
    }

    return (
        <div className='location-container'>
            <div
                style={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    marginBottom: "20px",
                }}
                className='location-header'>
                <h1>Locations</h1>
                <button
                    onClick={() => navigate("AddLocation")}
                    className='add-location'>
                    <img
                        style={{ width: 24, height: 24, marginRight: 10 }}
                        src={plusIcon}
                        alt='my image'
                    />
                    Add Location
                </button>
            </div>

            <table id='employee'>
                <thead>
                    <tr>{renderHeader()}</tr>
                </thead>
                <tbody>{renderBody()}</tbody>
            </table>
        </div>
    )
}

export default Locations
