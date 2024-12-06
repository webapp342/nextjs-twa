'use client';

import React, { useState } from 'react';
import { Page } from '@/components/Page';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function Home() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = (open: boolean) => () => {
    setIsDrawerOpen(open);
  };

  return (
    <Page >
      {/* Drawer'ı açmak için bir buton */}
      <Button variant="contained" onClick={toggleDrawer(true)}>
        Open Drawer
      </Button>

      {/* SwipeableDrawer */}
      <SwipeableDrawer
        anchor="bottom"
        open={isDrawerOpen}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
        PaperProps={{
          sx: {
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
          },
        }}
      >
        {/* Drawer Başlık ve Kapatma İkonu */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '16px',
            borderBottom: '1px solid #ccc',
          }}
        >
          <Typography variant="h6">Drawer Title</Typography>
          <IconButton onClick={toggleDrawer(false)}>
            <CloseIcon />
          </IconButton>
        </Box>

        {/* Drawer İçerik */}
        <Box
          sx={{
            flex: 1,
            padding: '16px',
            overflowY: 'auto',
          }}
        >
          <Typography variant="body1">
            Bu alan çekmecenin içeriğini temsil eder. Drawer’ı kapatmak için
            yukarı kaydırabilir ya da sağ üstteki kapatma ikonuna tıklayabilirsiniz.
          </Typography>
        </Box>
      </SwipeableDrawer>
    </Page>
  );
}
