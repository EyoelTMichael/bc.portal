import { Box, Select, Option, Typography } from "@mui/joy";
import React from "react";
import { useGetAllSchedulesQuery } from "../../schedule/api/schedule_endpoint";

const ReportFilters = () => {
  const { data } = useGetAllSchedulesQuery({
    params: {
      siteId: "fdcaafa4-19e6-4c7d-b76f-9dd8a8efb965",
    },
  });
  return (
    <Box display="flex" gap={4} padding={2}>
      <Box display="flex" gap={1} alignItems="center">
        <Typography>Location</Typography>
        <Select
          defaultValue="month"
          variant="plain"
          color="primary"
          sx={{ fontSize: 18, fontWeight: "bold" }}
        >
          <Option value="day">
            <Typography level="body-md">Day</Typography>
          </Option>
          <Option value="week">
            <Typography level="body-md">Week</Typography>
          </Option>
          <Option value="month">
            <Typography level="body-md">Monthly</Typography>
          </Option>
        </Select>
      </Box>
      <Box display="flex" gap={1} alignItems="center">
        <Typography>Schedule</Typography>
        <Select
          defaultValue={data?.[0].id ?? ""}
          variant="plain"
          color="primary"
          sx={{ fontSize: 18, fontWeight: "bold" }}
        >
          <Option value={""} disabled>
            <Typography level="body-md" color="neutral">
              Choose a schedule
            </Typography>
          </Option>
          {data?.map((schedule) => (
            <Option value={schedule.id}>
              <Typography level="body-md" color="primary">
                {schedule.name}
              </Typography>
            </Option>
          ))}
        </Select>
      </Box>
    </Box>
  );
};

export default ReportFilters;
