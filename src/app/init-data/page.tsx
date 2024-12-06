"use client";

import React, { useState } from "react";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function FullScreenDrawer() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = (open: boolean) => () => {
    setIsOpen(open);
  };

  return (
    <>
      {/* Drawer'ı açmak için bir buton */}
      <Button variant="contained" onClick={toggleDrawer(true)}>
        Open Drawer
      </Button>

      {/* SwipeableDrawer */}
      <SwipeableDrawer
        anchor="bottom"
        open={isOpen}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
        PaperProps={{
          sx: {
            height: "100%", // Tam ekran
            display: "flex",
            flexDirection: "column",
          },
        }}
      >
        {/* Sağ üstte kapatma ikonu */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "16px",
            borderBottom: "1px solid #ccc",
          }}
        >
          <Typography variant="h6">Drawer Title</Typography>
          <IconButton onClick={toggleDrawer(false)}>
            <CloseIcon />
          </IconButton>
        </Box>

        {/* Drawer içeriği */}
        <Box
          sx={{
            flex: 1,
            padding: "16px",
            overflowY: "auto",
          }}
        >
          <Typography variant="body1">
            This is the content of the drawer. You can swipe down or press the
            close button to dismiss it.
          </Typography>
        </Box>
      </SwipeableDrawer>
    </>
  );
}
