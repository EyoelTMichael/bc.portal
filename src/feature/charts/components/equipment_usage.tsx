import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useState } from "react";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { EQUIPMENTS } from "../../../constants/data";
import { DatePicker } from "@mui/x-date-pickers";
import { Box, Stack, Typography } from "@mui/joy";
const EquipmentUsage = () => {
  const [selectedEquipment, setSelectedEquipment] = useState<string>(
    EQUIPMENTS[0]
  );
  const [fromDate, setFromDate] = useState<Date | null>(null);
  const [toDate, setToDate] = useState<Date | null>(null);
  const [data, setData] = useState<any[]>([
    { name: "01/01", Working: 8, Idle: 16 },
    { name: "02/01", Working: 10, Idle: 14 },
  ]);
  return (
    <Stack width="100%" spacing={2}>
      {/* <Stack direction="row" spacing={2}> */}
      <Typography>Equipment Usage</Typography>
      <FormControl variant="outlined" sx={{ minWidth: 300 }}>
        <InputLabel id="equipment-label">Equipment</InputLabel>
        <Select
          // labelId="equipment-label"
          value={selectedEquipment}
          label="Equipment"
          onChange={(e) => setSelectedEquipment(e.target.value as string)}
        >
          {EQUIPMENTS.map((type) => (
            <MenuItem key={type} value={type}>
              {type}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Box display="flex" gap={2}>
        <DatePicker
          label="From Date"
          value={fromDate}
          sx={{ width: "100%" }}
          onChange={(date) => setFromDate(date)}
          //   variant="inline"
          format="MM/dd/yyyy"
        />
        <DatePicker
          label="To Date"
          value={toDate}
          onChange={(date) => setToDate(date)}
          //   variant="inline"
          sx={{ width: "100%" }}
          format="MM/dd/yyyy"
        />
      </Box>
      {/* </Stack> */}
      <Box padding={2}>
        <LineChart width={500} height={300} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="Working"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
          <Line type="monotone" dataKey="Idle" stroke="#82ca9d" />
        </LineChart>
      </Box>
    </Stack>
  );
};

export default EquipmentUsage;
