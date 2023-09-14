import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import {
  useCreateSiteMutation,
  useUpdateSiteMutation,
} from "../api/site_endpoints";
import { SiteModel } from "../model/site";
import SiteLocation from "./site_location";
import AddFilesDropZone from "../../../core/utils/drop_zone";

interface AddSiteDialogProps {
  site?: SiteModel;
  open: boolean;
  onClose: () => void;
}

const AddSite = (props: AddSiteDialogProps) => {
  const [name, setName] = useState(props?.site?.name ?? "");
  const [owner, setOwner] = useState(props?.site?.owner ?? "");
  const [longitude, setLongitude] = useState(props?.site?.longitude ?? "");
  const [latitude, setLatitude] = useState(props?.site?.latitude ?? "");
  const [createSite] = useCreateSiteMutation();
  const [updateSite] = useUpdateSiteMutation();
  const handleAddSite = async () => {
    try {
      if (props.site) {
        await updateSite({
          body: {
            id: props.site.id,
            name,
            owner,
            longitude: parseInt(longitude.toString()),
            latitude: parseInt(latitude.toString()),
          },
        });
      } else {
        await createSite({
          body: {
            name,
            owner,
            longitude: sitePosition[1],
            latitude: sitePosition[0],
          },
        });
      }
      props.onClose();
    } catch (err) {
      console.log(err);
    }
  };
  const [sitePosition, setPosition] = useState<[number, number]>([
    9.018670677914995, 38.74850958716152,
  ]); // Example coordinates for London

  useEffect(() => {
    console.log(sitePosition);
  });

  const [file, setFile] = useState<string | undefined>();

  return (
    <Dialog open={props.open} onClose={props.onClose}>
      <DialogTitle>{props.site ? "Edit Site" : "Add Site"}</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          label="Name"
          fullWidth
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          margin="dense"
          label="Client"
          fullWidth
          value={owner}
          onChange={(e) => setOwner(e.target.value)}
        />
        <TextField
          autoFocus
          margin="dense"
          label="Supervisor"
          fullWidth
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          autoFocus
          margin="dense"
          label="Contractro"
          fullWidth
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Box paddingY={2}>
          <Typography>Logo</Typography>
          <Box paddingY={2}>
            <AddFilesDropZone setFile={setFile} file={file} />
          </Box>
        </Box>
        {/* <TextField
          margin="dense"
          label="Longitude"
          fullWidth
          value={longitude}
          onChange={(e) => setLongitude(e.target.value)}
        />
        <TextField
          margin="dense"
          label="Latitude"
          fullWidth
          value={latitude}
          onChange={(e) => setLatitude(e.target.value)}
        /> */}
        <Box paddingY={2}>
          <Typography>Location</Typography>
          <SiteLocation position={sitePosition} setPosition={setPosition} />
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={props.onClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleAddSite} color="primary">
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddSite;
