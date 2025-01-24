import { Button } from "@mui/material";
import { ToolbarActions } from "@toolpad/core";
import { useNavigate } from "react-router";

const CustomToolbarActions = () => {
  const navigate = useNavigate();
  return (
    <>
      <Button
        variant="contained"
        sx={{ borderRadius: 10 }}
        onClick={() => navigate("/contact")}
      >
        Let's talk
      </Button>
      <ToolbarActions />
    </>
  );
};

export default CustomToolbarActions;
