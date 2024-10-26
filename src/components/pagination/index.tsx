import { Box, Pagination, PaginationItem } from "@mui/material";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";

const PaginationTable = ({
  count,
  page,
  onChange,
}: {
  count?: number;
  page?: number;
  onChange?: any;
}) => {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", direction: "rtl" }}>
      <Pagination
        count={count}
        page={page}
        onChange={onChange}
        showFirstButton
        showLastButton
        renderItem={(item) => (
          <PaginationItem
            {...item}
            components={{
              previous: () => (
                <KeyboardDoubleArrowRightIcon
                  sx={{ color: "green", fontSize: 13, margin: 0 }}
                />
              ),
              next: () => (
                <KeyboardDoubleArrowLeftIcon
                  sx={{ color: "green", fontSize: 13, margin: 0 }}
                />
              ),
              first: () => (
                <>
                  <KeyboardDoubleArrowRightIcon
                    sx={{
                      color: "green",
                      fontSize: 13,
                      marginRight: -0.5,
                    }}
                  />
                  <KeyboardDoubleArrowRightIcon
                    sx={{
                      color: "green",
                      fontSize: 13,
                      marginRight: -0.5,
                    }}
                  />
                </>
              ),
              last: () => (
                <>
                  <KeyboardDoubleArrowLeftIcon
                    sx={{
                      color: "green",
                      fontSize: 13,
                      marginRight: -0.5,
                    }}
                  />
                  <KeyboardDoubleArrowLeftIcon
                    sx={{
                      color: "green",
                      fontSize: 13,
                      marginRight: -0.5,
                    }}
                  />
                </>
              ),
            }}
            sx={{
              fontSize: "0.875rem",
              display: "flex",
              alignItems: "center",
              backgroundColor: item.selected ? "#f0ad4e" : "transparent",
              color: item.selected ? "white" : "inherit",
              "&.Mui-selected": {
                backgroundColor: "green",
                color: "white",
              },
              "&:hover": {
                backgroundColor: item.selected ? "#f0ad4e" : "#e0e0e0",
              },
            }}
          />
        )}
      />
    </Box>
  );
};

export default PaginationTable;
