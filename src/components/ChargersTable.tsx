import React from "react"
import { useNavigate } from "react-router-dom"
import Badge from "./Badge"

interface charger {
    id: number
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
            return (
                <th style={{ textAlign: "center" }} key={index}>
                    {key}
                </th>
            )
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
                        <td
                            style={{
                                display: "flex",
                                alignItems: "flex-start",
                            }}
                            className='td'>
                            <Badge status={charger.status} />{" "}
                        </td>
                        <td className='td'>{charger.lastUpdated}</td>
                        <td className='opration '>
                            <button
                                style={{ marginRight: 8 }}
                                className='button'>
                                Edit
                            </button>
                            <button className='button'>Delete</button>
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
