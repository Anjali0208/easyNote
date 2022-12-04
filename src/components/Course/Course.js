import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from '../Header'
import "./Course.css"

function Course() {
    return (
        <>
            <Header />
            <div className='course'>
                <h1>
                    MCA Course
                </h1>
                <p>These are all the courses in MCA course offered by IPU. MCA have 116 credits</p>


                <Row style={{
                    display: "flex",
                    textAlign: "center",
                    justifyContent: "space-evenly",
                    marginTop: "80px",

                }}>
                    <Col>

                        <h3>First Semester</h3>
                        <p>These are all the courses in MCA course offered by IPU</p>
                        <p>These are all the courses in MCA course offered by IPU</p>
                        <p>These are all the courses in MCA course offered by IPU</p>
                        <p>These are all the courses in MCA course offered by IPU</p>
                        <p>These are all the courses in MCA course offered by IPU</p>
                        <p>These are all the courses in MCA course offered by IPU</p>
                    </Col>
                    <Col >
                        <h4>Second Semester</h4>
                        <p>These are all the courses in MCA course offered by IPU</p>
                        <p>These are all the courses in MCA course offered by IPU</p>
                        <p>These are all the courses in MCA course offered by IPU</p>
                        <p>These are all the courses in MCA course offered by IPU</p>
                        <p>These are all the courses in MCA course offered by IPU</p>
                        <p>These are all the courses in MCA course offered by IPU</p>
                    </Col>
                </Row>
                <Row style={{
                    display: "flex",
                    textAlign: "center",
                    justifyContent: "space-evenly",
                    marginTop: "80px",

                }}>
                    <Col>
                        <h4>Third Semester</h4>
                        <p>These are all the courses in MCA course offered by IPU</p>
                        <p>These are all the courses in MCA course offered by IPU</p>
                        <p>These are all the courses in MCA course offered by IPU</p>
                        <p>These are all the courses in MCA course offered by IPU</p>
                        <p>These are all the courses in MCA course offered by IPU</p>
                        <p>These are all the courses in MCA course offered by IPU</p>
                    </Col>
                    <Col>
                        <h4>Four Semester</h4>
                        <p>These are all the courses in MCA course offered by IPU</p>
                        <p>These are all the courses in MCA course offered by IPU</p>
                        <p>These are all the courses in MCA course offered by IPU</p>
                        <p>These are all the courses in MCA course offered by IPU</p>
                        <p>These are all the courses in MCA course offered by IPU</p>
                        <p>These are all the courses in MCA course offered by IPU</p>

                    </Col>

                </Row>


            </div>

        </>
    )
}

export default Course