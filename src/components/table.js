/* 
Name: Jibin Gallistus Gnanadhas
StudentID: 104361536
Name: Amelie Li Xuan Teh 
StudentID: 104044361
*/
// imports
import * as React from "react";
import { useEffect, useState } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import axios from "axios";

// holds the column headers
const columns = [
  {
    id: "no",
    label: "No.",
    minWidth: 170,
    align: "left",
    format: (value) => value.toLocaleString("en-US"),
  },
  { id: "name", label: "File Name", minWidth: 170, align: "left" },
  {
    id: "date",
    label: "Date",
    minWidth: 170,
    align: "left",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "time",
    label: "Time",
    minWidth: 170,
    align: "left",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "notes",
    label: "Notes",
    minWidth: 170,
    align: "left",
    format: (value) => value.toFixed(2),
  },
];

function createData(date, name, notes, no, time) {
  return { no, name, date, time, notes };
}

// Holds the values for each row

export default function StickyHeadTable() {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/history/")
      .then((response) => {
        const data = response.data;
        const formattedRows = data.map((item) =>
          createData(item.date, item.filename, item.notes, item.Sno, item.time)
        );
        setRows(formattedRows);
      })
      .catch((error) => {
        console.error("there are errors:", error);
      });
  }, []);

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  //controls the change of page
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  // controls the change of number of rows per page
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper
      sx={{
        width: "100%",
        margin: "0 15% 0 15%",
        minHeight: "400px",
        height: "700px",
        overflow: "hidden",
      }}
    >
      <TableContainer
        sx={{ Height: "700px", minHeight: "650px", borderRadius: "25px" }}
      >
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === "number"
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
