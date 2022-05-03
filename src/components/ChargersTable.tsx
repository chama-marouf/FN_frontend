import React from "react"
import { useNavigate } from "react-router-dom"
import Badge from "./Badge"

interface charger {
    id: string
    type: string
    serialNumber: number
    status: string
    lastUpdated: string
}
interface props {
    chargers: charger[]
    updateChargers: (charger: charger) => void
}
export default function ChargersTable({ chargers, updateChargers }: props) {
    const navigate = useNavigate()
    const renderHeader = () => {
        let headerElement = [
            "Id",
            "Type",
            "Serial Number",
            "Status",
            "Last Updated",
            "Actions",
        ]

        return headerElement.map((key, index) => {
            return <th key={index}>{key}</th>
        })
    }
    const renderBody = () => {
        return chargers?.length ? (
            chargers.map((charger: charger, index) => {
                return (
                    <tr className='border_bottom' key={charger.id}>
                        <td className='td'>{charger.id}</td>
                        <td className='td'>{charger.type}</td>

                        <td className='td'>{charger.serialNumber}</td>
                        <td className='td'>
                            {" "}
                            <Badge status={charger.status} />{" "}
                        </td>
                        <td className='td'>{charger.lastUpdated}</td>
                        <td className='opration '>
                            <button
                                className='button'
                                onClick={() => navigate("EditLocation")}>
                                Edit
                            </button>
                        </td>
                    </tr>
                )
            })
        ) : (
            <tr>
                <td colSpan={6}>no chargers yet</td>{" "}
            </tr>
        )
    }

    return (
        <div className='location-container'>
            <table id='location'>
                <thead>
                    <tr>{renderHeader()}</tr>
                </thead>
                <tbody>{renderBody()}</tbody>
            </table>
        </div>
    )
}
