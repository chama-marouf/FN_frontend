import React from "react"
import { useForm } from "react-hook-form"

function AddLocation() {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()
    const onSubmit = (data: any) => console.log(data)
    return (
        <div
            style={{
                margin: 24,
                borderCollapse: "collapse",
                border: "2px solid red",
                padding: 24,
            }}>
            Add New Location
            <form onSubmit={handleSubmit(onSubmit)}>
                {/* register your input into the hook by invoking the "register" function */}
                <input defaultValue='test' {...register("example")} />

                {/* include validation with required or other standard HTML validation rules */}
                <input {...register("exampleRequired", { required: true })} />
                {/* errors will return when field validation fails  */}
                {errors.exampleRequired && <span>This field is required</span>}

                <input type='submit' />
            </form>
        </div>
    )
}

export default AddLocation
