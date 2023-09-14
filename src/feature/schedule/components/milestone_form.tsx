import { Stack } from "@mui/material";
import { Button, FormLabel, Input, Radio, Textarea } from "@mui/joy";
import DefaultDialog from "../../../core/ui/default_dialog";
import {
  useCreateScheduleMutation,
  useUpdateScheduleMutation,
} from "../api/schedule_endpoint";
import { DatePicker } from "@mui/x-date-pickers";
import { Schedule } from "../model/schedule";

interface AddScheduleProps {
  open: boolean;
  onClose: () => void;
  schedule?: Schedule;
}

const MilestoneForm = (props: AddScheduleProps) => {
  const [createSchedule] = useCreateScheduleMutation();
  const [updateSchedule] = useUpdateScheduleMutation();
  const handleLookup = async (data: any) => {
    try {
      if (props.schedule) {
        await updateSchedule({
          body: {
            id: props.schedule.id,
            name: data.name,
            description: data.description,
            fromDate: data.fromDate,
            toDate: data.toDate,
            siteId: "fdcaafa4-19e6-4c7d-b76f-9dd8a8efb965",
            //   parentSchedule: props.schedule?.id ?? undefined,
          },
        });
        props.onClose();
      } else {
        await createSchedule({
          body: {
            name: data.name,
            description: data.description,
            fromDate: data.fromDate,
            toDate: data.toDate,
            siteId: "fdcaafa4-19e6-4c7d-b76f-9dd8a8efb965",
            //   parentSchedule: props.schedule?.id ?? undefined,
          },
        });
        props.onClose();
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <DefaultDialog
      open={props.open}
      onClose={props.onClose}
      title="Create New Schedule"
      description={`This would be the root schedule`}
    >
      <form
        onSubmit={(event) => {
          event.preventDefault();
          const formData = new FormData(event.currentTarget);
          const formJson = Object.fromEntries((formData as any).entries());
          handleLookup(formJson);
        }}
      >
        <Stack spacing={2}>
          <Stack spacing={2}>
            <Input placeholder="Name" name="name" />
            <DatePicker
              label="From"
              slotProps={{
                textField: (ownerState) => ({
                  size: "small",
                }),
              }}
            />
            <DatePicker
              label="To"
              slotProps={{
                textField: (ownerState) => ({
                  size: "small",
                }),
              }}
            />
            <FormLabel>Status</FormLabel>
            <Stack spacing={2} direction="row">
              <Radio
                // checked={selectedValue === "a"}
                // onChange={handleStatusChange}
                value="a"
                name="radio-buttons"
                label="Active"
                slotProps={{ input: { "aria-label": "A" } }}
              />
              <Radio
                // checked={selectedValue === "b"}
                // onChange={handleChange}
                value="b"
                name="radio-buttons"
                label="In Active"
                slotProps={{ input: { "aria-label": "B" } }}
              />
            </Stack>
            <Textarea
              minRows={3}
              placeholder="Description"
              name="description"
            />
            <Button type="submit">Submit</Button>
          </Stack>
        </Stack>
      </form>
    </DefaultDialog>
  );
};

export default MilestoneForm;
