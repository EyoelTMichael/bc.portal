// import { Box, Button, Checkbox, Table } from "@mui/joy";
// import { useGetLookupsQuery } from "../api/lookup_endpoint";
// import { useState } from "react";
// import { visuallyHidden } from '@mui/utils';

// interface EnhancedTableProps {
//     numSelected: number;
//     onRequestSort: (event: React.MouseEvent<unknown>, property: keyof Data) => void;
//     onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
//     order: Order;
//     orderBy: string;
//     rowCount: number;
//   }

// function EnhancedTableHead(props: EnhancedTableProps) {
//     const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } =
//       props;
//     const createSortHandler =
//       (property: keyof Data) => (event: React.MouseEvent<unknown>) => {
//         onRequestSort(event, property);
//       };

//     return (
//       <thead>
//         <tr>
//           <th>
//             <Checkbox
//               indeterminate={numSelected > 0 && numSelected < rowCount}
//               checked={rowCount > 0 && numSelected === rowCount}
//               onChange={onSelectAllClick}
//               slotProps={{
//                 input: {
//                   'aria-label': 'select all desserts',
//                 },
//               }}
//               sx={{ verticalAlign: 'sub' }}
//             />
//           </th>
//           {headCells.map((headCell) => {
//             const active = orderBy === headCell.id;
//             return (
//               <th
//                 key={headCell.id}
//                 aria-sort={
//                   active
//                     ? ({ asc: 'ascending', desc: 'descending' } as const)[order]
//                     : undefined
//                 }
//               >
//                 {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
//                 <Link
//                   underline="none"
//                   color="neutral"
//                   textColor={active ? 'primary.plainColor' : undefined}
//                   component="button"
//                   onClick={createSortHandler(headCell.id)}
//                   fontWeight="lg"
//                   startDecorator={
//                     headCell.numeric ? (
//                       <ArrowDownwardIcon sx={{ opacity: active ? 1 : 0 }} />
//                     ) : null
//                   }
//                   endDecorator={
//                     !headCell.numeric ? (
//                       <ArrowDownwardIcon sx={{ opacity: active ? 1 : 0 }} />
//                     ) : null
//                   }
//                   sx={{
//                     '& svg': {
//                       transition: '0.2s',
//                       transform:
//                         active && order === 'desc' ? 'rotate(0deg)' : 'rotate(180deg)',
//                     },
//                     '&:hover': { '& svg': { opacity: 1 } },
//                   }}
//                 >
//                   {headCell.label}
//                   {active ? (
//                     <Box component="span" sx={visuallyHidden}>
//                       {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
//                     </Box>
//                   ) : null}
//                 </Link>
//               </th>
//             );
//           })}
//         </tr>
//       </thead>
//     );
//   }

// const LookupTable = () => {
//   const [selected, setSelected] = useState<readonly string[]>([]);

//   const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const { data: lookups, isLoading } = useGetLookupsQuery({}):
//     if (event.target.checked) {
//       const newSelected = lookups?.map((n) => n.Id);
//       setSelected(newSelected ?? []);
//       return;
//     }
//     setSelected([]);
//   };

//   const handleClick = (event: React.MouseEvent<unknown>, name: string) => {
//     const selectedIndex = selected.indexOf(name);
//     let newSelected: readonly string[] = [];

//     if (selectedIndex === -1) {
//       newSelected = newSelected.concat(selected, name);
//     } else if (selectedIndex === 0) {
//       newSelected = newSelected.concat(selected.slice(1));
//     } else if (selectedIndex === selected.length - 1) {
//       newSelected = newSelected.concat(selected.slice(0, -1));
//     } else if (selectedIndex > 0) {
//       newSelected = newSelected.concat(
//         selected.slice(0, selectedIndex),
//         selected.slice(selectedIndex + 1)
//       );
//     }

//     setSelected(newSelected);
//   };
//   return (
//     <Table
//       borderAxis="xBetween"
//       size="md"
//       stickyFooter
//       stickyHeader
//       hoverRow
//       stripe="odd"
//     >
//       <thead>
//         <tr>
//           <th>
//             <Checkbox
//               indeterminate={numSelected > 0 && numSelected < rowCount}
//               checked={rowCount > 0 && numSelected === rowCount}
//               onChange={onSelectAllClick}
//               slotProps={{
//                 input: {
//                   "aria-label": "select all desserts",
//                 },
//               }}
//               sx={{ verticalAlign: "sub" }}
//             />
//           </th>
//           <th style={{ width: "30%" }}>Name</th>
//           <th style={{ width: "50%" }}>Description</th>
//           <th
//             aria-label="last"
//             style={{ width: "var(--Table-lastColumnWidth)" }}
//           />
//         </tr>
//       </thead>
//       <tbody>
//         <tr>
//           <td>Frozen yoghurt</td>
//           <td>159</td>
//           <td>
//             <Box sx={{ display: "flex", gap: 1 }}>
//               <Button size="sm" variant="plain" color="neutral">
//                 Edit
//               </Button>
//               <Button size="sm" variant="soft" color="danger">
//                 Delete
//               </Button>
//             </Box>
//           </td>
//         </tr>
//         <tr>
//           <td>Ice cream sandwich</td>
//           <td>237</td>
//           <td>
//             <Box sx={{ display: "flex", gap: 1 }}>
//               <Button size="sm" variant="plain" color="neutral">
//                 Edit
//               </Button>
//               <Button size="sm" variant="soft" color="danger">
//                 Delete
//               </Button>
//             </Box>
//           </td>
//         </tr>
//         <tr>
//           <td>Eclair</td>
//           <td>262</td>
//           <td>
//             <Box sx={{ display: "flex", gap: 1 }}>
//               <Button size="sm" variant="plain" color="neutral">
//                 Edit
//               </Button>
//               <Button size="sm" variant="soft" color="danger">
//                 Delete
//               </Button>
//             </Box>
//           </td>
//         </tr>
//         <tr>
//           <td>Cupcake</td>
//           <td>305</td>
//           <td>
//             <Box sx={{ display: "flex", gap: 1 }}>
//               <Button size="sm" variant="plain" color="neutral">
//                 Edit
//               </Button>
//               <Button size="sm" variant="soft" color="danger">
//                 Delete
//               </Button>
//             </Box>
//           </td>
//         </tr>
//         <tr>
//           <td>Gingerbread</td>
//           <td>356</td>
//           <td>
//             <Box sx={{ display: "flex", gap: 1 }}>
//               <Button size="sm" variant="plain" color="neutral">
//                 Edit
//               </Button>
//               <Button size="sm" variant="soft" color="danger">
//                 Delete
//               </Button>
//             </Box>
//           </td>
//         </tr>
//       </tbody>
//     </Table>
//   );
// };

// export default LookupTable;

import * as React from "react";
import Box from "@mui/joy/Box";
import Table from "@mui/joy/Table";
import Typography from "@mui/joy/Typography";
import Sheet from "@mui/joy/Sheet";
import Checkbox from "@mui/joy/Checkbox";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import IconButton from "@mui/joy/IconButton";
import Link from "@mui/joy/Link";
import Tooltip from "@mui/joy/Tooltip";
import Select from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import DeleteIcon from "@mui/icons-material/Delete";
import FilterListIcon from "@mui/icons-material/FilterList";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { visuallyHidden } from "@mui/utils";
import { Button, Stack } from "@mui/joy";
import { Delete, Edit } from "@mui/icons-material";
import { Lookup } from "../model/lookup";
import DataTable from "../../../core/ui/table";
import {
  useGetLookupsByLookupTypeQuery,
  useGetLookupsQuery,
} from "../api/lookup_endpoint";

interface Data {
  name: string;
  description: string;
}

function createData(name: string, description: string): Data {
  return {
    name,
    description,
  };
}

const rows = [
  createData("Ground work", "305"),
  createData("Electric work", "452"),
  createData("Design work", "262"),
];

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

function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

type Order = "asc" | "desc";

function getComparator<Key extends keyof any>(
  order: Order,
  orderBy: Key
): (
  a: { [key in Key]: number | string },
  b: { [key in Key]: number | string }
) => number {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort<T>(
  array: readonly T[],
  comparator: (a: T, b: T) => number
) {
  const stabilizedThis = array.map((el, index) => [el, index] as [T, number]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

interface HeadCell {
  disablePadding: boolean;
  id: keyof Data;
  label: string;
  numeric: boolean;
}

const headCells: readonly HeadCell[] = [
  {
    id: "name",
    numeric: false,
    disablePadding: true,
    label: "Name",
  },
  {
    id: "description",
    numeric: true,
    disablePadding: true,
    label: "Description",
  },
];

interface EnhancedTableProps {
  numSelected: number;
  onRequestSort: (
    event: React.MouseEvent<unknown>,
    property: keyof Data
  ) => void;
  onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
  order: Order;
  orderBy: string;
  rowCount: number;
  lookupType: string;
}

function EnhancedTableHead(props: EnhancedTableProps) {
  const {
    onSelectAllClick,
    order,
    orderBy,
    numSelected,
    rowCount,
    onRequestSort,
    lookupType,
  } = props;
  const createSortHandler =
    (property: keyof Data) => (event: React.MouseEvent<unknown>) => {
      onRequestSort(event, property);
    };

  return (
    <thead>
      <tr>
        <th>
          <Checkbox
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            slotProps={{
              input: {
                "aria-label": "select all desserts",
              },
            }}
            sx={{ verticalAlign: "sub" }}
          />
        </th>
        {headCells.map((headCell) => {
          const active = orderBy === headCell.id;
          return (
            <th
              key={headCell.id}
              aria-sort={
                active
                  ? ({ asc: "ascending", desc: "descending" } as const)[order]
                  : undefined
              }
            >
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <Link
                underline="none"
                color="neutral"
                textColor={active ? "primary.plainColor" : undefined}
                component="button"
                onClick={createSortHandler(headCell.id)}
                fontWeight="lg"
                startDecorator={
                  headCell.numeric ? (
                    <ArrowDownwardIcon sx={{ opacity: active ? 1 : 0 }} />
                  ) : null
                }
                endDecorator={
                  !headCell.numeric ? (
                    <ArrowDownwardIcon sx={{ opacity: active ? 1 : 0 }} />
                  ) : null
                }
                sx={{
                  "& svg": {
                    transition: "0.2s",
                    transform:
                      active && order === "desc"
                        ? "rotate(0deg)"
                        : "rotate(180deg)",
                  },
                  "&:hover": { "& svg": { opacity: 1 } },
                }}
              >
                {lookupType}
                {active ? (
                  <Box component="span" sx={visuallyHidden}>
                    {order === "desc"
                      ? "sorted descending"
                      : "sorted ascending"}
                  </Box>
                ) : null}
              </Link>
            </th>
          );
        })}
      </tr>
    </thead>
  );
}

interface EnhancedTableToolbarProps {
  numSelected: number;
}

function EnhancedTableToolbar(props: EnhancedTableToolbarProps) {
  const { numSelected } = props;

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        py: 1,
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        ...(numSelected > 0 && {
          bgcolor: "background.level1",
        }),
        borderTopLeftRadius: "var(--unstable_actionRadius)",
        borderTopRightRadius: "var(--unstable_actionRadius)",
      }}
    >
      {numSelected > 0 ? (
        <Typography sx={{ flex: "1 1 100%" }} component="div">
          {numSelected} selected
        </Typography>
      ) : (
        <Typography
          level="body-lg"
          sx={{ flex: "1 1 100%" }}
          id="tableTitle"
          component="div"
        >
          Tasks
        </Typography>
      )}

      {numSelected > 0 ? (
        <Tooltip title="Delete">
          <Stack direction="row" spacing={2}>
            {numSelected == 1 && (
              <IconButton size="sm" color="warning" variant="solid">
                <Edit />
              </IconButton>
            )}
            <IconButton size="sm" color="danger" variant="solid">
              <DeleteIcon />
            </IconButton>
          </Stack>
        </Tooltip>
      ) : (
        <Tooltip title="Filter list">
          <IconButton size="sm" variant="outlined" color="neutral">
            <FilterListIcon />
          </IconButton>
        </Tooltip>
      )}
    </Box>
  );
}

interface LookupTableProps {
  selectedLookupType: number;
}

export default function LookupTable(props: LookupTableProps) {
  // const [order, setOrder] = React.useState<Order>("asc");
  // const [orderBy, setOrderBy] = React.useState<keyof Data>("name");
  // const [selected, setSelected] = React.useState<readonly string[]>([]);
  // const [page, setPage] = React.useState(0);
  // const [rowsPerPage, setRowsPerPage] = React.useState(5);

  // const handleRequestSort = (
  //   event: React.MouseEvent<unknown>,
  //   property: keyof Data
  // ) => {
  //   const isAsc = orderBy === property && order === "asc";
  //   setOrder(isAsc ? "desc" : "asc");
  //   setOrderBy(property);
  // };

  // const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   if (event.target.checked) {
  //     const newSelected = rows.map((n) => n.name);
  //     setSelected(newSelected);
  //     return;
  //   }
  //   setSelected([]);
  // };

  // const handleClick = (event: React.MouseEvent<unknown>, name: string) => {
  //   const selectedIndex = selected.indexOf(name);
  //   let newSelected: readonly string[] = [];

  //   if (selectedIndex === -1) {
  //     newSelected = newSelected.concat(selected, name);
  //   } else if (selectedIndex === 0) {
  //     newSelected = newSelected.concat(selected.slice(1));
  //   } else if (selectedIndex === selected.length - 1) {
  //     newSelected = newSelected.concat(selected.slice(0, -1));
  //   } else if (selectedIndex > 0) {
  //     newSelected = newSelected.concat(
  //       selected.slice(0, selectedIndex),
  //       selected.slice(selectedIndex + 1)
  //     );
  //   }

  //   setSelected(newSelected);
  // };

  // const handleChangePage = (newPage: number) => {
  //   setPage(newPage);
  // };

  // const handleChangeRowsPerPage = (event: any, newValue: number | null) => {
  //   setRowsPerPage(parseInt(newValue!.toString(), 10));
  //   setPage(0);
  // };

  // const getLabelDisplayedRowsTo = () => {
  //   if (rows.length === -1) {
  //     return (page + 1) * rowsPerPage;
  //   }
  //   return rowsPerPage === -1
  //     ? rows.length
  //     : Math.min(rows.length, (page + 1) * rowsPerPage);
  // };

  // const isSelected = (name: string) => selected.indexOf(name) !== -1;

  // // Avoid a layout jump when reaching the last page with empty rows.
  // const emptyRows =
  //   page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  // return (
  //   <Sheet
  //     variant="outlined"
  //     sx={{ width: "100%", boxShadow: "sm", borderRadius: "sm" }}
  //   >
  //     <EnhancedTableToolbar numSelected={selected.length} />
  //     <Table
  //       aria-labelledby="tableTitle"
  //       hoverRow
  //       sx={{
  //         flex: 1,
  //         width: "100%",
  //         "--TableCell-headBackground": "transparent",
  //         "--TableCell-selectedBackground": (theme) =>
  //           theme.vars.palette.success.softBg,
  //         "& thead th:nth-child(1)": {
  //           width: "50px",
  //         },
  //         "& thead th:nth-child(2)": {
  //           width: "50%",
  //         },
  //         "& tr > *:nth-child(n+3)": { textAlign: "right" },
  //       }}
  //     >
  //       <EnhancedTableHead
  //         numSelected={selected.length}
  //         order={order}
  //         orderBy={orderBy}
  //         onSelectAllClick={handleSelectAllClick}
  //         onRequestSort={handleRequestSort}
  //         rowCount={rows.length}
  //         lookupType={props.selectedLookupType}
  //       />
  //       <tbody style={{ width: "100%" }}>
  //         {stableSort(rows, getComparator(order, orderBy))
  //           .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
  //           .map((row, index) => {
  //             const isItemSelected = isSelected(row.name);
  //             const labelId = `enhanced-table-checkbox-${index}`;

  //             return (
  //               <tr
  //                 onClick={(event) => handleClick(event, row.name)}
  //                 role="checkbox"
  //                 aria-checked={isItemSelected}
  //                 tabIndex={-1}
  //                 key={row.name}
  //                 // selected={isItemSelected}
  //                 style={
  //                   isItemSelected
  //                     ? ({
  //                         "--TableCell-dataBackground":
  //                           "var(--TableCell-selectedBackground)",
  //                         "--TableCell-headBackground":
  //                           "var(--TableCell-selectedBackground)",
  //                       } as React.CSSProperties)
  //                     : {}
  //                 }
  //               >
  //                 <th scope="row">
  //                   <Checkbox
  //                     checked={isItemSelected}
  //                     slotProps={{
  //                       input: {
  //                         "aria-labelledby": labelId,
  //                       },
  //                     }}
  //                     sx={{ verticalAlign: "top" }}
  //                   />
  //                 </th>
  //                 <th id={labelId} scope="row">
  //                   {row.name}
  //                 </th>
  //                 <td scope="row">{row.description}</td>
  //               </tr>
  //             );
  //           })}
  //         {emptyRows > 0 && (
  //           <tr
  //             style={
  //               {
  //                 height: `calc(${emptyRows} * 40px)`,
  //                 "--TableRow-hoverBackground": "transparent",
  //               } as React.CSSProperties
  //             }
  //           >
  //             <td colSpan={6} />
  //           </tr>
  //         )}
  //       </tbody>
  //       <tfoot>
  //         <tr>
  //           <td colSpan={6}>
  //             <Box
  //               sx={{
  //                 display: "flex",
  //                 alignItems: "center",
  //                 gap: 2,
  //                 justifyContent: "flex-end",
  //               }}
  //             >
  //               <FormControl orientation="horizontal" size="sm">
  //                 <FormLabel>Rows per page:</FormLabel>
  //                 <Select
  //                   onChange={handleChangeRowsPerPage}
  //                   value={rowsPerPage}
  //                 >
  //                   <Option value={5}>5</Option>
  //                   <Option value={10}>10</Option>
  //                   <Option value={25}>25</Option>
  //                 </Select>
  //               </FormControl>
  //               <Typography textAlign="center" sx={{ minWidth: 80 }}>
  //                 {labelDisplayedRows({
  //                   from: rows.length === 0 ? 0 : page * rowsPerPage + 1,
  //                   to: getLabelDisplayedRowsTo(),
  //                   count: rows.length === -1 ? -1 : rows.length,
  //                 })}
  //               </Typography>
  //               <Box sx={{ display: "flex", gap: 1 }}>
  //                 <IconButton
  //                   size="sm"
  //                   color="neutral"
  //                   variant="outlined"
  //                   disabled={page === 0}
  //                   onClick={() => handleChangePage(page - 1)}
  //                   sx={{ bgcolor: "background.surface" }}
  //                 >
  //                   <KeyboardArrowLeftIcon />
  //                 </IconButton>
  //                 <IconButton
  //                   size="sm"
  //                   color="neutral"
  //                   variant="outlined"
  //                   disabled={
  //                     rows.length !== -1
  //                       ? page >= Math.ceil(rows.length / rowsPerPage) - 1
  //                       : false
  //                   }
  //                   onClick={() => handleChangePage(page + 1)}
  //                   sx={{ bgcolor: "background.surface" }}
  //                 >
  //                   <KeyboardArrowRightIcon />
  //                 </IconButton>
  //               </Box>
  //             </Box>
  //           </td>
  //         </tr>
  //       </tfoot>
  //     </Table>
  //   </Sheet>
  // );
  const { data } = useGetLookupsByLookupTypeQuery({
    params: {
      lookupType: props.selectedLookupType,
    },
  });
  const handleDelete = () => {};
  return (
    <Box>
      {data && (
        <DataTable
          rows={data}
          columns={[
            { name: "name", key: "name", align: "start" },
            { name: "description", key: "description", align: "start" },
          ]}
          actions={
            <Stack direction="row" spacing={1}>
              <IconButton size="sm" color="warning">
                <Edit />
              </IconButton>
              <IconButton
                size="sm"
                color="danger"
                onClick={() => handleDelete()}
              >
                <Delete />
              </IconButton>
            </Stack>
          }
        />
      )}
    </Box>
  );
}
