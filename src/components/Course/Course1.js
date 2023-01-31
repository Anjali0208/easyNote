import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from '../Header'
import "./Course.css"
import { Link } from 'react-router-dom';
import Footer from '../Footer';

function Course1() {

    return (
        <>

            <div className='course'>
                <h1>
                    MCA Course
                </h1>
                <p>These are all the courses in MCA course offered by IPU.</p>

                <Row style={{
                    display: "flex",
                    textAlign: "center",
                    justifyContent: "space-evenly",
                    marginTop: "80px",

                }}>
                    <h3 style={{ marginBottom: "30px", fontWeight: "bold" }}>First Semester</h3>
                    <Col>

                        <li><Link to="/ds" className='link'>Discrete Structure</Link></li>

                        <li>
                            <Link to="/cn" className="link">
                                Computer Networks
                            </Link></li>

                        <li><Link to="/os" className='link'>Operating Systems with Linux</Link></li>

                        <li> <Link to="/java_lab" className='link'>Object Oriented Programming and JAVA Lab</Link></li>

                    </Col>

                    <Col>

                        <li><Link to="/dbms" className='link'>Database Management Systems</Link></li>
                        <li><Link to="/os_lab" className='link'>Operating Systems with Linux Lab</Link></li>
                        <li><Link to="/dbms_lab" className='link'>Database Management Systems Lab</Link></li>
                        <li><Link to="/pp" className='link'>Professional Proficiency - I</Link></li>
                    </Col>


                    <Col>

                        <li><Link to="/java" className='link'>Object Oriented Programming and JAVA</Link></li>
                        <li> <Link to="/cn_lab" className='link'>Computer Networks Lab</Link></li>
                        <li><Link to="/minor" className='link'>Minor Project - I</Link></li>

                    </Col>

                </Row>

                <Row style={{
                    display: "flex",
                    textAlign: "center",
                    justifyContent: "space-evenly",
                    marginTop: "80px",

                }}>
                    <h3 style={{ marginBottom: "30px", fontWeight: "bold" }}>Second Semester</h3>
                    <Col>

                        <li><Link to="/ds" className='link'>Data and File Structures</Link></li>

                        <li><Link to="/cn" className="link">Object Oriented Software Engineering</Link></li>


                        <li><Link to="/os" className='link'>Python Programming</Link></li>

                        <li> <Link to="/java_lab" className='link'>Advanced Database Management Systems</Link></li>
                        <li><Link to="/dbms" className='link'>Data Warehousing and Data Mining</Link></li>
                        <li><Link to="" className='link'>Mobile Applications Design and
                            Development</Link></li>
                        <li><Link to="" className='link'>Full Stack Development</Link></li>
                        <li><Link to="" className='link'>Web Technologies</Link></li>
                        <li><Link to="" style={{ textDecoration: "none", color: "grey", lineHeight: "2", fontWeight: "600" }}>Management Information System</Link></li>
                        <li><Link to="" style={{ textDecoration: "none", color: "grey", lineHeight: "2", fontWeight: "600" }}>Management Principles and Organizational Behavior</Link></li>
                    </Col>


                    <Col>

                        <li><Link to="/java" className='link'>Theory of Computations</Link></li>
                        <li> <Link to="" className='link'>Microprocessors</Link></li>
                        <li><Link to="" className='link'>Embedded System</Link></li>
                        <li><Link to="/java" className='link'>Information Security</Link></li>
                        <li> <Link to="" className='link'>Digital Marketing</Link></li>
                        <li><Link to="" className='link'>Management Information System</Link></li>
                        <li><Link to="/java" className='link'>Object Oriented Software Engineering Lab.</Link></li>
                        <li><Link to="" style={{ textDecoration: "none", color: "grey", lineHeight: "2", fontWeight: "600" }}>Finance and Accounting</Link></li>
                        <li><Link to="" style={{ textDecoration: "none", color: "grey", lineHeight: "2", fontWeight: "600" }}>Environment Science (NUES)</Link></li>
                        <li><Link to="" style={{ textDecoration: "none", color: "grey", lineHeight: "2", fontWeight: "600" }}>Professional Proficiency – II</Link></li>
                    </Col>

                    <Col>


                        <li> <Link to="" className='link'>Finance and Accounting</Link></li>
                        <li><Link to="" className='link'>Data and File Structures Lab.</Link></li>

                        <li><Link to="/java" className='link'>Object Oriented Software Engineering Lab.</Link></li>
                        <li> <Link to="" className='link'>Python Programming Lab.</Link></li>
                        <li><Link to="" className='link'>Lab. based on Core Elective - I</Link></li>
                        <li> <Link to="" className='link'>Python Programming Lab.</Link></li>
                        <li><Link to="" className='link'>Lab. based on Core Elective - I</Link></li>
                        <li><Link to="/java" className='link'>Management Principles and</Link></li>
                        <li><Link to="" className='link'> Organizational Behavior</Link></li>

                    </Col>

                </Row>


            </div >



        </>
    )
}


export default Course1;


