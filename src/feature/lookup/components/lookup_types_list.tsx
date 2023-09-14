import { SetStateAction } from "react";
import { useGetLookupTypesQuery } from "../api/lookup_endpoint";
import { List, ListItem, ListItemButton } from "@mui/joy";

interface LookupTypeListProps {
  lookupType: number;
  setLookupType: React.Dispatch<SetStateAction<number>>;
}

const LookupTypeList: React.FC<LookupTypeListProps> = (props) => {
  const { data } = useGetLookupTypesQuery({
    params: {},
  });

  const handleLookupTypeClick = (lookupType: number) => {
    props.setLookupType(lookupType);
  };

  return (
    <List
      variant="outlined"
      sx={
        {
          // width: 200,
          // borderRadius: "sm",
        }
      }
    >
      {data?.map((lookupType: string, index: number) => (
        <ListItem>
          <ListItemButton
            selected={index == props.lookupType}
            onClick={() => handleLookupTypeClick(index)}
          >
            {lookupType}
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
};

export default LookupTypeList;
