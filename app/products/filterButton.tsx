import * as React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Button, Tooltip, styled } from "@mui/material";
import FilterListIcon from "@mui/icons-material/FilterList";

interface Props {
  colors: string[];
  selectedColor: string | null;
  onColorSelect: (color: string | null) => void;
}

const StyledButton = styled(Button)({
  color: "black",
});

export const FilterButton = (props: Props) => {
  const { colors, selectedColor, onColorSelect } = props;
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleColorSelection = (color: string | null) => {
    handleClose();
    onColorSelect(color === selectedColor ? null : color);
  };

  return (
    <div>
      <Tooltip title="Filter list">
        <StyledButton
          id="filter-button"
          aria-controls={open ? "color-list" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          <FilterListIcon />
          Filter By Color
        </StyledButton>
      </Tooltip>
      <Menu
        id="color-list"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "filter-button",
        }}
      >
        {colors.map((color) => (
          <MenuItem
            selected={color === selectedColor}
            key={color}
            onClick={() => handleColorSelection(color)}
          >
            {color}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};
