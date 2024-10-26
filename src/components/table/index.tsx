import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";

export interface Column {
  id: string;
  label: string;
  minWidth?: number;
  align?: "right" | "left" | "center";
}

interface CustomTableComponentProps {
  columns: Column[];
  rows: any[];
  onEditClick: (row: any) => void;
}

const TableData: React.FC<CustomTableComponentProps> = ({
  columns,
  rows,
  onEditClick,
}) => {
  return (
    <TableContainer
      component={Paper}
      sx={{
        border: "1px solid #e0e0e0",
        direction: "rtl",
      }}
    >
      <Table stickyHeader aria-label="custom table">
        <TableHead>
          <TableRow>
            {columns.map((column) => (
              <TableCell
                key={column.id}
                align={column.align}
                style={{ minWidth: column.minWidth }}
                sx={{
                  backgroundColor: "green",
                  color: "white",
                  border: "1px solid #e0e0e0",
                }}
              >
                {column.label}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow hover key={row._id}>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  sx={{ border: "1px solid #e0e0e0" }}
                >
                  {column.id === "edit" ? (
                    <IconButton
                      aria-label="edit"
                      onClick={() => onEditClick(row)}
                    >
                      <EditIcon />
                    </IconButton>
                  ) : (
                    row[column.id]
                  )}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableData;
