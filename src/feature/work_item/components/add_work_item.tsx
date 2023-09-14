import { WorkItem } from "../model/work_item";
import { Button, Input, Stack } from "@mui/joy";
import {
  useCreateWorkItemMutation,
  useUpdateWorkItemMutation,
} from "../api/work_item_endpoints";
import DefaultDialog from "../../../core/ui/default_dialog";
import { Schedule } from "../../schedule/model/schedule";

interface AddWorkItemDialogProps {
  workItem?: WorkItem;
  open: boolean;
  onClose: () => void;
  schedule: Schedule;
}

const WorkItemForm = (props: AddWorkItemDialogProps) => {
  const [createWorkItem] = useCreateWorkItemMutation();
  const [updateWorkItem] = useUpdateWorkItemMutation();
  const handleSubmit = async (data: WorkItem) => {
    try {
      if (props.workItem) {
        await updateWorkItem({
          body: {
            id: props.workItem.id,
            name: data.name,
            description: data.description,
            rate: data.rate,
            quantity: data.quantity,
            unit: data.unit,
          },
        });
        props.onClose();
      } else {
        await createWorkItem({
          body: {
            scheduleId: props.schedule.id,
            name: data.name,
            description: data.description,
            rate: data.rate,
            quantity: data.quantity,
            unit: data.unit,
          },
        });
      }
      props.onClose();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <DefaultDialog
      open={props.open}
      onClose={props.onClose}
      title="Create New Work Item"
      description={`Create work item for ${props.schedule.name}`}
    >
      <form
        onSubmit={(event) => {
          event.preventDefault();
          const formData = new FormData(event.currentTarget);
          const formJson = Object.fromEntries((formData as any).entries());
          handleSubmit(formJson as WorkItem);
        }}
      >
        <Stack spacing={2}>
          <Stack spacing={2}>
            <Input placeholder="Name" name="name" required />
            <Input placeholder="Description" name="description" required />
            <Input placeholder="Unit" name="unit" required />
            <Input
              placeholder="Quantity"
              name="quantity"
              required
              type="number"
            />
            <Input placeholder="Rate" name="rate" required type="number" />
            <Input placeholder="Amount" name="amount" required type="number" />
            <Button type="submit">Submit</Button>
          </Stack>
        </Stack>
      </form>
    </DefaultDialog>
  );
};

export default WorkItemForm;
