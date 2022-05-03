import React, { useState } from "react"

import { useLocation, useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form"
import ChargersTable from "../components/ChargersTable"
import axios from "axios"

const pinIcon = require("../assets/icn_pin.png")
const lightBolt = require("../assets/icn_light_bolt.png")
const save = require("../assets/icn_save.png")
const remove = require("../assets/icn_remove.png")

interface charger {
    id: string
    type: string
    serialNumber: number
    status: string
    lastUpdated: string
}

interface ILocation {
    id: string
    data: {
        name: string
        country: string
        lastUpdated: string
        chargers: any[]
    }
}

export default function EditLocation() {
    const [locationRemoved, setLocationRemoved] = useState(true)
    const navigate = useNavigate()
    const params: any = useLocation()

    const location = params?.state?.data
    const id = params.state.id
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const onSubmit = async (data: ILocation) => {
        const response = await axios.put(
            `http://localhost:4040/location/update/${id}`,
            data
        )
        console.log("update location data", response)
    }

    const removeLocation = async (id: number) => {
        console.log("remove location", id)
        const response = await axios.delete(
            `http://localhost:4040/location/delete/${id}`
        )
        console.log("response", response)
    }

    const chargers = [
        {
            id: 87879,
            type: "type one",
            serialNumber: 657575,
            status: "CONNECTED",
            lastUpdated: "12-03-2022",
        },
        {
            id: 87879,
            type: "type one",
            serialNumber: 657575,
            status: "NOT_CONNECTED",
            lastUpdated: "12-03-2022",
        },
    ]

    return (
        <form onSubmit={handleSubmit(() => console.log("hi"))}>
            <div className='card'>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "flex-start",

                        alignItems: "center",
                    }}>
                    <img
                        style={{ width: 24, height: 24, marginRight: 10 }}
                        src={pinIcon}
                        alt='my image'
                    />
                    <h1
                        style={{
                            color: "#535448",
                            fontWeight: "bold",
                            fontSize: 24,
                        }}>
                        {params.state.data.location}
                    </h1>
                </div>

                <label className='label'>Name</label>
                <input
                    className='input'
                    placeholder='Name'
                    {...register("name")}
                />
                <label className='label'>Location No</label>
                <input
                    className='input'
                    defaultValue='test'
                    {...register("locationNo")}
                />
                <label className='label'>City</label>
                <input
                    className='input'
                    defaultValue='test'
                    {...register("city")}
                />
                <label className='label'>Postal code</label>
                <input
                    className='input'
                    defaultValue='test'
                    {...register("postalCode")}
                />
                <label className='label'>Country</label>
                <input
                    className='input'
                    defaultValue='test'
                    {...register("country")}
                />
            </div>
            <div className='card'>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        marginBottom: 16,
                    }}>
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "flex-start",

                            alignItems: "center",
                        }}>
                        <img
                            style={{ width: 24, height: 24, marginRight: 10 }}
                            src={lightBolt}
                            alt='my image'
                        />
                        <h1
                            style={{
                                color: "#535448",
                                fontWeight: "bold",
                                fontSize: 24,
                            }}>
                            Chargers
                        </h1>
                    </div>
                    <button
                        // onClick={() => openModal()}
                        className='add-charger-button'>
                        <img
                            style={{ width: 16, height: 16, marginRight: 10 }}
                            src={lightBolt}
                            alt='my image'
                        />
                        Add charger
                    </button>
                </div>
                <ChargersTable chargers={chargers} />
            </div>
            <div className='edit-footer'>
                <button
                    onClick={() => removeLocation(id)}
                    className='remove-button'>
                    <img
                        style={{ width: 16, height: 16, marginRight: 8 }}
                        src={remove}
                        alt='my image'
                    />
                    Remove Location
                </button>

                <button
                    onClick={handleSubmit(onSubmit)}
                    className='add-charger-button'>
                    <img
                        style={{ width: 16, height: 16, marginRight: 8 }}
                        src={save}
                        alt='my image'
                    />
                    Save Location
                </button>
            </div>
        </form>
    )
}
