import { Box, Grid } from "@mui/material";
import React, { useState, useEffect } from "react";
import PaginationTable from "../../components/pagination";
import TableData, { Column } from "../../components/table";
import { getAllProductsAPI } from "../../servics/product";

const columns: Column[] = [
  { id: "id", label: "الرقم التسلسلي", minWidth: 10, align: "right" },
  { id: "name", label: "اسم المنتج", minWidth: 10, align: "right" },
  { id: "productCode", label: "كود المنتج", minWidth: 10, align: "right" },
  { id: "unit", label: "وحده القياس", minWidth: 10, align: "right" },
  { id: "quantity", label: "الكمية", minWidth: 10, align: "right" },
  { id: "descriptionItem", label: "وصف العنصر", minWidth: 10, align: "right" },
  { id: "description", label: "الموصفات", minWidth: 400, align: "right" },
  { id: "category", label: "الفئة", minWidth: 10, align: "right" },
  { id: "item", label: "العنصر", minWidth: 10, align: "right" },
  { id: "isMandatory", label: "إجباري", minWidth: 10, align: "center" },
  {
    id: "structuralCode",
    label: "الكود الهيكلي",
    minWidth: 10,
    align: "right",
  },
  { id: "attachments", label: "المرفقات", minWidth: 10, align: "right" },
];

export const Product = () => {
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(1);
  const [products, setProducts] = useState([]);
  const [productFilter, setProductFilter] = useState("");

  const fetchProducts = async () => {
    const data = await getAllProductsAPI(page);
    setProducts(data?.products || []);
    setCount(data?.meta?.allPages || 1);
  };

  useEffect(() => {
    fetchProducts();
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
            rows={products}
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
