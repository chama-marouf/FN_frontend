import React from "react"

export default function Badge({ status }: { status: string }) {
    return (
        <div
            className='badge'
            style={{
                backgroundColor: status === "CONNECTED" ? "green" : "red",
            }}>
            {status}
        </div>
    )
}
