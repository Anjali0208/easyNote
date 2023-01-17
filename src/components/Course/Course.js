import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from '../Header'
import "./Course.css"
import { Link } from 'react-router-dom';

function Course() {

    return (
        <>
            <Header />
            <div className='course'>
                <h1>
                    MCA Course
                </h1>
                <p>These are all the courses in MCA course offered by IPU. MCA have `` credits</p>

                <Row style={{
                    display: "flex",
                    textAlign: "center",
                    justifyContent: "space-evenly",
                    marginTop: "80px",

                }}>
                    <h3 style={{ marginBottom: "30px", fontWeight: "bold" }}>First Semester</h3>
                    <Col>

                        <p><Link to="/ds" className='link'>Discrete Structure</Link></p>

                        <p>
                            <Link to="" className="link">
                                Computer Networks
                            </Link></p>


                        <p><Link to="" className='link'>Operating Systems with Linux</Link></p>

                        <p> <Link to="" className='link'>Object Oriented Programming and JAVA Lab</Link></p>

                    </Col>

                    <Col>

                        <p><Link to="" className='link'>Database Management Systems</Link></p>
                        <p><Link to="" className='link'>Operating Systems with Linux Lab</Link></p>
                        <p><Link to="" className='link'>Database Management Systems Lab</Link></p>
                        <p><Link to="" className='link'>Professional Proficiency - I</Link></p>

                    </Col>


                    <Col>

                        <p><Link to="" className='link'>Object Oriented Programming and JAVA</Link></p>
                        <p> <Link to="" className='link'>Computer Networks Lab</Link></p>
                        <p><Link to="" className='link'>Minor Project - I</Link></p>

                    </Col>

                </Row>

                {/* <Col >
                        <ul className='first'>
                            <h3>Second Semester</h3>
                            <li><Link to="" style={{ textDecoration: "none", color: "grey", lineHeight: "2", fontWeight: "600" }}>Data and File Structures</Link></li>
                            <li><Link to="" style={{ textDecoration: "none", color: "grey", lineHeight: "2", fontWeight: "600" }}>Object Oriented Software Engineering</Link></li>
                            <li><Link to="" style={{ textDecoration: "none", color: "grey", lineHeight: "2", fontWeight: "600" }}>Python Programming</Link></li>
                            <li><Link to="" style={{ textDecoration: "none", color: "grey", lineHeight: "2", fontWeight: "600" }}>Data and File Structures Lab</Link></li>
                            <li><Link to="" style={{ textDecoration: "none", color: "grey", lineHeight: "2", fontWeight: "600" }}>Object Oriented Software Engineering Lab</Link></li>
                            <li><Link to="" style={{ textDecoration: "none", color: "grey", lineHeight: "2", fontWeight: "600" }}>Python Programming Lab.</Link></li>
                            <li><Link to="" style={{ textDecoration: "none", color: "grey", lineHeight: "2", fontWeight: "600" }}>Lab. based on Core Elective - I</Link></li>
                            <li><Link to="" style={{ textDecoration: "none", color: "grey", lineHeight: "2", fontWeight: "600" }}>Minor Project – II</Link></li>
                            <li style={{ fontWeight: "800", lineHeight: "2" }}>CORE ELECTIVE-1 (choose any ONE )</li>
                            <li><Link style={{ textDecoration: "none", color: "grey", lineHeight: "2", fontWeight: "600" }}>Advanced Database Management Systems</Link></li>
                            <li><Link style={{ textDecoration: "none", color: "grey", lineHeight: "2", fontWeight: "600" }}> Data Warehousing and Data Mining</Link></li>
                            <li><Link style={{ textDecoration: "none", color: "grey", lineHeight: "2", fontWeight: "600" }}>Mobile Applications Design and Development</Link></li>
                            <li ><Link style={{ textDecoration: "none", color: "grey", lineHeight: "2", fontWeight: "600" }}>Full Stack Development</Link></li>
                            <li ><Link style={{ textDecoration: "none", color: "grey", lineHeight: "2", fontWeight: "600" }}>Web Technologies</Link></li>
                            <li ><Link style={{ textDecoration: "none", color: "grey", lineHeight: "2", fontWeight: "600" }}>Theory of Computations</Link></li>
                            <li ><Link style={{ textDecoration: "none", color: "grey", lineHeight: "2", fontWeight: "600" }}>Software Testing</Link></li>
                            <li ><Link style={{ textDecoration: "none", color: "grey", lineHeight: "2", fontWeight: "600" }}>Microprocessors</Link></li>
                            <li ><Link style={{ textDecoration: "none", color: "grey", lineHeight: "2", fontWeight: "600" }}>Embedded System</Link></li>
                            <li ><Link style={{ textDecoration: "none", color: "grey", lineHeight: "2", fontWeight: "600" }}>Information Security</Link></li>

                        </ul>
                    </Col> */}


                {/* <Col>
                        <ul className='first'>
                            <h3>Second semester continue</h3>
                            <li style={{ fontWeight: "800" }}>OPEN ELECTIVE-1 (choose any ONE)</li>
                            <li><Link to="" style={{ textDecoration: "none", color: "grey", lineHeight: "2", fontWeight: "600" }}>Digital Marketing</Link></li>
                            <li><Link to="" style={{ textDecoration: "none", color: "grey", lineHeight: "2", fontWeight: "600" }}>Management Information System</Link></li>
                            <li><Link to="" style={{ textDecoration: "none", color: "grey", lineHeight: "2", fontWeight: "600" }}>Management Principles and Organizational Behavior</Link></li>
                            <li><Link to="" style={{ textDecoration: "none", color: "grey", lineHeight: "2", fontWeight: "600" }}>Finance and Accounting</Link></li>
                            <li><Link to="" style={{ textDecoration: "none", color: "grey", lineHeight: "2", fontWeight: "600" }}>Environment Science (NUES)</Link></li>
                            <li><Link to="" style={{ textDecoration: "none", color: "grey", lineHeight: "2", fontWeight: "600" }}>Professional Proficiency – II</Link></li>
                        </ul>


                    </Col> */}






                {/* <Row style={{
                    display: "flex",
                    textAlign: "center",
                    justifyContent: "space-evenly",
                    marginTop: "80px",

                }}>
                    <Col>
                        <ul className='first'>
                            <h3>Third Semester</h3>
                            <li style={{ fontWeight: "800" }}>OPEN ELECTIVE-1 (choose any ONE)</li>
                            <li><Link to="" style={{ textDecoration: "none", color: "grey", lineHeight: "2", fontWeight: "600" }}>Design and Analysis of Algorithms</Link></li>
                            <li><Link to="" style={{ textDecoration: "none", color: "grey", lineHeight: "2", fontWeight: "600" }}>Artificial Intelligence and Machine Learning</Link></li>
                            <li><Link to="" style={{ textDecoration: "none", color: "grey", lineHeight: "2", fontWeight: "600" }}>Statistics and Data Analytics</Link></li>
                            <li><Link to="" style={{ textDecoration: "none", color: "grey", lineHeight: "2", fontWeight: "600" }}>Enterprise Computing with JAVA</Link></li>
                            <li><Link to="" style={{ textDecoration: "none", color: "grey", lineHeight: "2", fontWeight: "600" }}>Natural Language Processing</Link></li>
                            <li><Link to="" style={{ textDecoration: "none", color: "grey", lineHeight: "2", fontWeight: "600" }}>Computer Graphics</Link></li>
                            <li><Link to="" style={{ textDecoration: "none", color: "grey", lineHeight: "2", fontWeight: "600" }}>Wireless Sensor Networks</Link></li>
                            <li><Link to="" style={{ textDecoration: "none", color: "grey", lineHeight: "2", fontWeight: "600" }}>Software Project Management</Link></li>
                            <li><Link to="" style={{ textDecoration: "none", color: "grey", lineHeight: "2", fontWeight: "600" }}>Advanced Computer Architecture</Link></li>
                            <li><Link to="" style={{ textDecoration: "none", color: "grey", lineHeight: "2", fontWeight: "600" }}>Distributed Systems</Link></li>
                            <li><Link to="" style={{ textDecoration: "none", color: "grey", lineHeight: "2", fontWeight: "600" }}>Applied Cryptography</Link></li>
                            <li><Link to="" style={{ textDecoration: "none", color: "grey", lineHeight: "2", fontWeight: "600" }}>Cloud Computing</Link></li>
                            <li><Link to="" style={{ textDecoration: "none", color: "grey", lineHeight: "2", fontWeight: "600" }}>e-Business Systems</Link></li>
                            <li><Link to="" style={{ textDecoration: "none", color: "grey", lineHeight: "2", fontWeight: "600" }}>Design and Analysis of Algorithms Lab.</Link></li>
                            <li><Link to="" style={{ textDecoration: "none", color: "grey", lineHeight: "2", fontWeight: "600" }}>Artificial Intelligence and Machine Learning Lab.</Link></li>
                            <li><Link to="" style={{ textDecoration: "none", color: "grey", lineHeight: "2", fontWeight: "600" }}>Lab. based on Core Elective - I</Link></li>
                            <li><Link to="" style={{ textDecoration: "none", color: "grey", lineHeight: "2", fontWeight: "600" }}>Lab. based on Core Elective - II</Link></li>
                            <li><Link to="" style={{ textDecoration: "none", color: "grey", lineHeight: "2", fontWeight: "600" }}>Project - 3</Link></li>

                        </ul>
                    </Col>
                    <Col>
                        <ul className='first' style={{ marginRight: "60px" }}>
                            <h3>
                                Third sementer continue
                            </h3>
                            <li><Link to="" style={{ textDecoration: "none", color: "grey", lineHeight: "2", fontWeight: "600" }}>Web Intelligence and Big Data</Link></li>
                            <li><Link to="" style={{ textDecoration: "none", color: "grey", lineHeight: "2", fontWeight: "600" }}>Flutter and Dart</Link></li>
                            <li><Link to="" style={{ textDecoration: "none", color: "grey", lineHeight: "2", fontWeight: "600" }}>Service Oriented Architecture</Link></li>
                            <li><Link to="" style={{ textDecoration: "none", color: "grey", lineHeight: "2", fontWeight: "600" }}>Multimedia Technologies</Link></li>
                            <li><Link to="" style={{ textDecoration: "none", color: "grey", lineHeight: "2", fontWeight: "600" }}>Internet of Things</Link></li>
                            <li><Link to="" style={{ textDecoration: "none", color: "grey", lineHeight: "2", fontWeight: "600" }}>Soft Computing</Link></li>
                            <li><Link to="" style={{ textDecoration: "none", color: "grey", lineHeight: "2", fontWeight: "600" }}>Software Quality Management</Link></li>
                            <li><Link to="" style={{ textDecoration: "none", color: "grey", lineHeight: "2", fontWeight: "600" }}>Digital Image Processing</Link></li>
                            <li><Link to="" style={{ textDecoration: "none", color: "grey", lineHeight: "2", fontWeight: "600" }}>Compiler Design</Link></li>
                            <li><Link to="" style={{ textDecoration: "none", color: "grey", lineHeight: "2", fontWeight: "600" }}></Link></li>
                            <li><Link to="" style={{ textDecoration: "none", color: "grey", lineHeight: "2", fontWeight: "600" }}>Parallel Computing</Link></li>
                            <li><Link to="" style={{ textDecoration: "none", color: "grey", lineHeight: "2", fontWeight: "600" }}>Numerical and Scientific Computing</Link></li>
                            <li><Link to="" style={{ textDecoration: "none", color: "grey", lineHeight: "2", fontWeight: "600" }}>Research Methodology</Link></li>
                            <li><Link to="" style={{ textDecoration: "none", color: "grey", lineHeight: "2", fontWeight: "600" }}>Operational Research</Link></li>
                            <li><Link to="" style={{ textDecoration: "none", color: "grey", lineHeight: "2", fontWeight: "600" }}>Cyber Security and Cyber Laws</Link></li>
                            <li><Link to="" style={{ textDecoration: "none", color: "grey", lineHeight: "2", fontWeight: "600" }}>e-Content Development</Link></li>
                            <li><Link to="" style={{ textDecoration: "none", color: "grey", lineHeight: "2", fontWeight: "600" }}></Link></li>

                            <li><Link to="" style={{ textDecoration: "none", color: "grey", lineHeight: "2", fontWeight: "600" }}>Entrepreneurship Mindset (NUES)</Link></li>
                            <li><Link to="" style={{ textDecoration: "none", color: "grey", lineHeight: "2", fontWeight: "600" }}>Professional Proficiency – III</Link></li>

                        </ul>
                    </Col>
                    <Col style={{ marginRight: "" }}>
                        <ul className='first'>
                            <h3>Fourth Semester</h3>
                            <li><Link to="" style={{ textDecoration: "none", color: "grey", lineHeight: "2", fontWeight: "600" }}>Dissertation (Major Project)</Link></li>
                            <li><Link to="" style={{ textDecoration: "none", color: "grey", lineHeight: "2", fontWeight: "600" }}>One MOOC Course (from SWAYAM - Platform) (NUES)</Link></li>
                            <li><Link to="" style={{ textDecoration: "none", color: "grey", lineHeight: "2", fontWeight: "600" }}>Professional Proficiency – IV</Link></li>

                        </ul>
                    </Col>

                </Row> */}


            </div>

        </>
    )
}

export default Course