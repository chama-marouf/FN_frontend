import React, { useEffect } from "react"
import axios from "axios"
import { Link, useNavigate } from "react-router-dom"
import plusIcon from "../assets/icn_plus.png"

const URL = "http://localhost:4040/locations"
function Locations() {
    const navigate = useNavigate()
    const [locations, setlocations] = React.useState<any[]>([])

    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        const response = await axios.get(URL)
        console.log("dataaaa", response.data.locations)
        setlocations(response.data.locations)
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
            locations &&
            locations.map(({ id, data }) => {
                return (
                    <tr className='border_bottom' key={id}>
                        <td>{data.location}</td>
                        <td>{id}</td>
                        <td>{data.chargers.length}</td>

                        <td className='td'>{data.country}</td>
                        <td className='td'>{data.lastUpdated}</td>
                        <td className='opration '>
                            <Link
                                to={{
                                    pathname: "/EditLocation",
                                }}
                                state={{ id, data }}
                                className='button'
                                // onClick={() => navigate(``)}
                            >
                                Edit
                            </Link>
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

            <table id='location'>
                <thead>
                    <tr>{renderHeader()}</tr>
                </thead>
                <tbody>{renderBody()}</tbody>
            </table>
        </div>
    )
}

export default Locations
