import React from 'react'
import Header from '../../Header'
import Syllabus from '../Syllabus/Syllabus'
import "../Course.css"

function DS() {
    return (
        <>
            <Header />
            <div className='course'>
                <h1>Discrete Structure (MCA-101)</h1>
            </div>
            <div>
                {/* links of syllabus, q/a and textbook reference */}
            </div>
            <div style={{ margin: "50px" }}>
                This page contains Syllabus of MCA
            </div>

            <Syllabus title="DS" />
        </>
    )
}

export default DS