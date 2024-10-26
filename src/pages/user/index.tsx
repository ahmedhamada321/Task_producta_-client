import { Box, Grid } from "@mui/material";
import React, { useState, useEffect } from "react";
import PaginationTable from "../../components/pagination"; // تأكد من أن هذا المكون يدعم التمرير المباشر للرقم
import TableData, { Column } from "../../components/table";
import { getAllUserAPI } from "../../servics";

const columns: Column[] = [
  { id: "id", label: "الرقم التسلسلي", minWidth: 100, align: "right" },
  { id: "userName", label: "اسم المستخدم", minWidth: 150, align: "right" },
  { id: "createdAt", label: "تاريخ الإنشاء", minWidth: 200, align: "right" },
  { id: "updatedAt", label: "تاريخ التحديث", minWidth: 100, align: "right" },
];

export const User = () => {
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(1);
  const [users, setUsers] = useState([]);
  const [userfilter, setUserFilter] = useState("");

  const fetchUsers = async () => {
    try {
      const data = await getAllUserAPI(page);
      setUsers(data?.users || []);
      setCount(data?.meta?.allPages || 0);
    } catch (error) {
      console.error("Error fetching users:", error);
      setUsers([]);
      setCount(0);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, [page]);

  const totalRows = count;

  const handleChangePage = (event: any, newPage: any) => {
    setPage(newPage);
  };

  return (
    <Box>
      <Grid container alignItems="center" direction="column" spacing={3}>
        <Grid item width="100%">
          <TableData
            columns={columns}
            rows={users.length ? users : []}
            onEditClick={(row) => console.log(row)}
          />
        </Grid>

        <Grid item>
          <PaginationTable
            count={totalRows}
            page={page}
            onChange={handleChangePage}
          />
        </Grid>
      </Grid>
    </Box>
  );
};
