import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";


export default function BasicTable() {
    return (
        <TableContainer component={Paper} style={{ borderRadius: "10px", width: "500px", margin: "40px" }}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">

                <TableBody>
                    <TableRow>
                        <TableCell>Title</TableCell>
                        <TableCell>Discrete Structure</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Short Name</TableCell>
                        <TableCell>DS</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Course Code</TableCell>
                        <TableCell>MCA101</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Nature of Code</TableCell>
                        <TableCell>Theory</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Semester</TableCell>
                        <TableCell>First</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Elective/Compulsary</TableCell>
                        <TableCell>Compulsary</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    );
}
