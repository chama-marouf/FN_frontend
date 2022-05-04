import React from "react"
import { useForm } from "react-hook-form"
import axios from "axios"
import plusIcon from "../assets/icn_plus.png"
import lightBolt from "../assets/icn_light_bolt.png"
import ChargersTable from "../components/ChargersTable"
import Modal from "../components/AddChargerModal"
const save = require("../assets/icn_save.png")

interface charger {
    id: number
    type: string
    serialNumber: number
    status: string
    lastUpdated: string
}
function AddLocation() {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()
    const URL = "http://localhost:4040/location/add"
    const onSubmit = async (data: any) => {
        let lastUpdated = new Date().toLocaleString()
        let newLocation = { ...data, lastUpdated }
        const response = await axios.post(URL, newLocation)
        console.log("add location data", response)
    }
    const [modalIsOpen, setIsOpen] = React.useState(false)
    const [chargers, setChargers] = React.useState([] as charger[])

    function openModal() {
        setIsOpen(true)
    }

    function closeModal() {
        setIsOpen(false)
    }

    function _updateChargers(charger: charger) {
        setChargers([...chargers, charger])
    }

    return (
        <div>
            <div
                style={{
                    margin: 24,
                    borderCollapse: "collapse",
                    border: "1px solid #bababa",
                    padding: 24,
                    borderRadius: 4,
                }}>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "flex-start",

                        alignItems: "center",
                    }}>
                    <img
                        style={{ width: 24, height: 24, marginRight: 10 }}
                        src={plusIcon}
                        alt='my image'
                    />
                    <h1
                        style={{
                            color: "#535448",
                            fontWeight: "bold",
                            fontSize: 24,
                        }}>
                        Add New Location
                    </h1>
                </div>

                <form className='form' onSubmit={handleSubmit(onSubmit)}>
                    <label className='label'>Name</label>
                    <input
                        className='input'
                        placeholder='Location name'
                        {...register("name")}
                    />

                    <label className='label'>Location No</label>
                    <input
                        className='input'
                        placeholder='Location Number'
                        {...register("id", { required: true })}
                    />

                    {errors.exampleRequired && (
                        <span>This field is required</span>
                    )}
                    <label className='label'>City </label>
                    <input
                        className='input'
                        placeholder='City'
                        {...register("location", { required: true })}
                    />

                    {errors.exampleRequired && (
                        <span>This field is required</span>
                    )}
                    <label className='label'>Postal code </label>
                    <input
                        className='input'
                        placeholder='Postal code'
                        {...register("postalCode", { required: true })}
                    />

                    {errors.exampleRequired && (
                        <span>This field is required</span>
                    )}
                    <label className='label'>Country </label>
                    <input
                        className='input'
                        placeholder='Country'
                        {...register("country", { required: true })}
                    />
                    {/* errors will return when field validation fails  */}
                    {errors.exampleRequired && (
                        <span>This field is required</span>
                    )}
                </form>
            </div>

            {/* adding chargers */}
            <div
                style={{
                    margin: 24,
                    borderCollapse: "collapse",
                    border: "1px solid #bababa",
                    padding: 24,
                    borderRadius: 4,
                }}>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
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
                        onClick={() => openModal()}
                        className='add-charger-button'>
                        <img
                            style={{ width: 16, height: 16, marginRight: 10 }}
                            src={lightBolt}
                            alt='my image'
                        />
                        Add charger
                    </button>
                </div>

                <ChargersTable
                    chargers={chargers}
                    updateChargers={_updateChargers}
                />
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

            <Modal show={modalIsOpen} handleClose={() => closeModal()}>
                <form
                    style={{
                        display: "flex",
                        justifyContent: "flex-start",
                        flexDirection: "column",

                        padding: "30px 50px",
                    }}>
                    <label className='label'>Status</label>
                    <input className='input' />
                    <label className='label'>Charger type</label>
                    <input className='input' />
                    <label className='label'>Serial number</label>
                    <input className='input' />
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            marginTop: 16,
                        }}>
                        <button
                            style={{
                                backgroundColor: "#fcd854",
                                border: "none",
                                borderRadius: 4,
                                marginRight: 8,
                            }}
                            onClick={() => closeModal()}
                            className='button'>
                            save
                        </button>
                        <button
                            style={{ borderRadius: 4 }}
                            onClick={() => closeModal()}
                            className='button'>
                            cancel
                        </button>
                    </div>
                </form>
            </Modal>
        </div>
    )
}

export default AddLocation
