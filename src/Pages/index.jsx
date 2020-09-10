import React from 'react'
import Cards from '../Component/Card/Card.jsx'
import Forms from '../Component/Form/Form.jsx'
import Modals from "../Component/Modal/Modal.jsx"

const index = () => {
    return (
        <div style={{marginTop: "20px"}}> 
            <Cards />
            <hr/>
            <Forms />
            <hr />
            <Modals/>
        </div>
    )
}

export default index