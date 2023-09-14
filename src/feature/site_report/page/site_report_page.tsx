import { Box, Button } from "@mui/joy";
import DefaultPage from "../../../core/shell/default_page/default_page";
import { useState } from "react";
import DailyReportForm from "../component/daily_report_form";
import DailyReportCard from "../data/mock_card";
import { mockDailyReport } from "../data/mock_data";

const SiteReportPage = () => {
  const [openDailyReport, setOpenDailyReport] = useState<boolean>(false);
  const handleDailyReportForm = () => {
    setOpenDailyReport(open => !open);
  }
  return (
    <DefaultPage title="Site Reports">
      <Box padding={2} display="flex" flexDirection="column">

      <Button sx={{alignSelf: 'end'}} onClick={handleDailyReportForm}>Create Daily Report</Button>
      <Box display="flex" padding={2} flexDirection="column">
      {mockDailyReport.map(report => (
        <DailyReportCard key={report.date.toString()} report={report} />
      ))}
    </Box>
      {openDailyReport && <DailyReportForm open={openDailyReport} onClose={handleDailyReportForm} />}
      </Box>
    </DefaultPage>
  );
};

export default SiteReportPage;
