import { IconButton } from "@mui/material";

function ActionButton ({ onClick, icon }) {
  return (
    <IconButton onClick={onClick}>
      {icon}
    </IconButton>
  );
}

export default ActionButton;
