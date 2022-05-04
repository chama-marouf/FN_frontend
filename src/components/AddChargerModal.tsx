import React, { ReactComponentElement } from "react"
import "../assets/css/modal.css"

const { closeIcon } = require("../assets/icn_pin.png")

interface IModal {
    handleClose: () => void
    show: boolean
    children: ReactComponentElement<any>
}

const Modal = ({ handleClose, show, children }: IModal) => {
    const showHideClassName = show
        ? "modal display-block"
        : "modal display-none"

    return (
        <div className={showHideClassName}>
            <section className='modal-main'>
                <button
                    style={{
                        position: "absolute",
                        top: 10,
                        right: 10,
                        border: "none",
                        backgroundColor: "transparent",
                    }}
                    type='button'
                    onClick={handleClose}>
                    <img
                        style={{ width: 24, height: 24, marginRight: 10 }}
                        src={closeIcon}
                        alt='close'
                    />
                </button>
                {children}
            </section>
        </div>
    )
}

export default Modal
