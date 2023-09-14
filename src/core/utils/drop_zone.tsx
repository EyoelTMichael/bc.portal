import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { Close, FileDownload } from "@mui/icons-material";
import { Box, IconButton, Stack, Typography } from "@mui/material";

interface AddFilesDropZoneProps {
  file: string | undefined;
  setFile: React.Dispatch<React.SetStateAction<string | undefined>>;
}

export default function AddFilesDropZone(props: AddFilesDropZoneProps) {
  const [files, setFiles] = useState<string[]>([]);

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      const file = acceptedFiles[0];
      const reader = new FileReader();

      reader.onload = (event) => {
        const base64String = event.target?.result as string;
        props.setFile(base64String);
        setFiles((prevFiles) => [...prevFiles, base64String]);
      };

      reader.readAsDataURL(file);
    },
    [props.setFile]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div>
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Drop the files here ...</p>
        ) : (
          <Box
            sx={(theme) => ({
              backgroundColor: theme.palette.grey[200],
              padding: 2,
              border: `1px dashed ${theme.palette.primary.light}`,
              display: "flex",
              gap: 1,
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            })}
          >
            <Stack direction="row" spacing={1}>
              <FileDownload
                sx={(theme) => ({ color: theme.palette.primary.light })}
              />
              <Typography
                variant="body1"
                sx={(theme) => ({ color: theme.palette.primary.dark })}
              >
                Upload files
              </Typography>
            </Stack>
            <Typography
              variant="body2"
              sx={(theme) => ({ color: theme.palette.primary.dark })}
            >
              Drop the files here ..
            </Typography>
          </Box>
        )}
      </div>
      {files.map((base64String, index) => (
        <Box
          key={index}
          sx={(theme) => ({
            backgroundColor: theme.palette.grey[200],
            padding: 2,
            border: `1px dashed ${theme.palette.primary.light}`,
            display: "flex",
            gap: 1,
            flexDirection: "column",
            alignItems: "start",
            justifyContent: "start",
            marginY: 2,
          })}
        >
          <Stack
            direction="row"
            display="flex"
            spacing={1}
            alignSelf="start"
            alignItems="start"
            justifyContent="start"
          >
            <FileDownload
              sx={(theme) => ({ color: theme.palette.primary.light })}
            />
            <Typography
              variant="body1"
              sx={(theme) => ({ color: theme.palette.primary.dark })}
            >
              Image {index + 1} (base64)
            </Typography>
          </Stack>
          <Box display="flex" justifyContent="space-between" width="100%">
            <Stack spacing={1}>
              <Typography
                variant="body2"
                sx={(theme) => ({ color: theme.palette.primary.dark })}
              >
                File type: Image
              </Typography>
              <Typography
                variant="body2"
                sx={(theme) => ({ color: theme.palette.primary.dark })}
              >
                File Size: {Math.round((base64String.length * 3) / 4)} bytes
              </Typography>
            </Stack>
            <IconButton
              onClick={() => {
                setFiles((prevFiles) =>
                  prevFiles.filter((_, i) => i !== index)
                );
              }}
            >
              <Close />
            </IconButton>
          </Box>
        </Box>
      ))}
    </div>
  );
}
