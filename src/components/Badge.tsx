import React from "react"

export default function Badge({ status }: { status: string }) {
    return (
        <div
            className='badge'
            style={{
                backgroundColor: status === "CONNECTED" ? "#52c41a" : "#ff4d4f",
            }}>
            {status}
        </div>
    )
}
