import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
import {
  Box,
  FormControl,
  FormLabel,
  Select,
  Sheet,
  Stack,
  Table,
  Typography,
  Option,
  IconButton,
  Button,
} from "@mui/joy";
import { useState } from "react";

interface Columns<T> {
  name: string;
  key: keyof T;
  align: string;
}

interface DataTableProps<T> {
  columns: Columns<T>[];
  rows: T[];
  actions?: React.ReactElement;
  title?: string;
  description: string;
}

function labelDisplayedRows({
  from,
  to,
  count,
}: {
  from: number;
  to: number;
  count: number;
}) {
  return `${from}–${to} of ${count !== -1 ? count : `more than ${to}`}`;
}

const DataTable = <T,>(props: DataTableProps<T>) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: any, newValue: number | null) => {
    setRowsPerPage(parseInt(newValue!.toString(), 10));
    setPage(0);
  };

  const getLabelDisplayedRowsTo = () => {
    if (props.rows.length === -1) {
      return (page + 1) * rowsPerPage;
    }
    return rowsPerPage === -1
      ? props.rows.length
      : Math.min(props.rows.length, (page + 1) * rowsPerPage);
  };

  return (
    <div>
      {props.title && (
        <Stack>
          <Typography level="body-sm" textAlign="center" sx={{ mb: 2 }}>
            {props.title}
          </Typography>
          <Typography level="body-sm" textAlign="center" sx={{ mb: 2 }}>
            {props.description}
          </Typography>
        </Stack>
      )}
      <Sheet
        variant="outlined"
        sx={{
          width: "100%",
          boxShadow: "sm",
          borderRadius: "sm",
        }}
      >
        <Table
          stickyHeader
          variant="outlined"
          borderAxis="bothBetween"
          stripe="even"
          hoverRow
          sx={{
            "--TableCell-headBackground": "transparent",
            "--TableCell-selectedBackground": (theme) =>
              theme.vars.palette.success.softBg,
            "& tr > *:nth-child(n+3)": { textAlign: "right" },
            "--Table-lastColumnWidth": "144px",
          }}
        >
          <thead>
            <tr>
              {props.columns.map((column) => {
                return (
                  <th key={column.key.toString()}>
                    {column.name.toUpperCase()}
                  </th>
                );
              })}
              {props.actions && (
                // <th align="right">{<Typography>actions</Typography>}</th>
                <th
                  aria-label="last"
                  style={{ width: "var(--Table-lastColumnWidth)" }}
                />
              )}
            </tr>
          </thead>
          <tbody>
            {props.rows.map((row, index) => {
              return (
                <tr key={index.toString()}>
                  {props.columns.map((column) => (
                    <th scope="row">
                      <Typography>
                        {row[column.key]?.toString() ?? ""}
                      </Typography>
                    </th>
                  ))}
                  {props.actions && (
                    // <th scope="row" align="left">
                    //   {props.actions}
                    // </th>
                    <td>
                      <Box sx={{ display: "flex", gap: 1 }}>
                        <Button size="sm" variant="plain" color="neutral">
                          Edit
                        </Button>
                        <Button size="sm" variant="soft" color="danger">
                          Delete
                        </Button>
                      </Box>
                    </td>
                  )}
                </tr>
              );
            })}
          </tbody>
          {/* <tfoot>
            <tr>
              <td colSpan={6}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                    justifyContent: "flex-end",
                  }}
                >
                  <FormControl orientation="horizontal" size="sm">
                    <FormLabel>Rows per page:</FormLabel>
                    <Select
                      onChange={handleChangeRowsPerPage}
                      value={rowsPerPage}
                    >
                      <Option value={5}>5</Option>
                      <Option value={10}>10</Option>
                      <Option value={25}>25</Option>
                    </Select>
                  </FormControl>
                  <Typography textAlign="center" sx={{ minWidth: 80 }}>
                    {labelDisplayedRows({
                      from:
                        props.rows.length === 0 ? 0 : page * rowsPerPage + 1,
                      to: getLabelDisplayedRowsTo(),
                      count: props.rows.length === -1 ? -1 : props.rows.length,
                    })}
                  </Typography>
                  <Box sx={{ display: "flex", gap: 1 }}>
                    <IconButton
                      size="sm"
                      color="neutral"
                      variant="outlined"
                      disabled={page === 0}
                      onClick={() => handleChangePage(page - 1)}
                      sx={{ bgcolor: "background.surface" }}
                    >
                      <KeyboardArrowLeft />
                    </IconButton>
                    <IconButton
                      size="sm"
                      color="neutral"
                      variant="outlined"
                      disabled={
                        props.rows.length !== -1
                          ? page >=
                            Math.ceil(props.rows.length / rowsPerPage) - 1
                          : false
                      }
                      onClick={() => handleChangePage(page + 1)}
                      sx={{ bgcolor: "background.surface" }}
                    >
                      <KeyboardArrowRight />
                    </IconButton>
                  </Box>
                </Box>
              </td>
            </tr>
          </tfoot> */}
        </Table>
      </Sheet>
    </div>
  );
};

export default DataTable;
