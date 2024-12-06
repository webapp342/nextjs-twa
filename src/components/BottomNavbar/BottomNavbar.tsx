'use client';

import React, { useState } from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import PaidIcon from '@mui/icons-material/Paid';
import GroupIcon from '@mui/icons-material/Group';
import WalletIcon from '@mui/icons-material/AccountBalanceWallet';
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';
import { useRouter } from 'next/navigation';

// Define the type for the theme prop
interface BottomNavbarProps {
  theme: {
    bg: string;  // Background color
    text: string; // Text color
  };
}

export default function BottomNavbar({ theme }: BottomNavbarProps) {
  const [value, setValue] = useState(0);
  const router = useRouter();

  const handleNavigation = (newValue: number) => {
    setValue(newValue);
    switch (newValue) {
      case 0:
        router.push('/ton-connect');
        break;
      case 1:
        router.push('/init-data');
        break;
      case 2:
        router.push('/launch-params');
        break;
      case 3:
        router.push('/theme-params');
        break;
      case 4:
        router.push('/ton-connect');
        break;
      default:
        break;
    }
  };

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => handleNavigation(newValue)}
      sx={{
        position: 'fixed',
        bottom: 16,
        left: '16px',
        right: '16px',
        backgroundColor: theme.bg, // Apply theme background color
        color: theme.text, // Apply theme text color
        zIndex: 1000,
        boxShadow: '0px -2px 5px rgba(0,0,0,0.1)',
        borderRadius: '16px',
      }}
    >
      <BottomNavigationAction
        label="Home"
        icon={<HomeIcon />}
        sx={{ minWidth: '40px' }}  // Ensure icons and labels fit properly
      />
      <BottomNavigationAction
        label="Earn"
        icon={<PaidIcon />}
        sx={{ minWidth: '40px' }}
      />
      <BottomNavigationAction
        label="Frens"
        icon={<GroupIcon />}
        sx={{ minWidth: '40px' }}
      />
      <BottomNavigationAction
        label="Wallet"
        icon={<WalletIcon />}
        sx={{ minWidth: '40px' }}
      />
      <BottomNavigationAction
        label="Swap"
        icon={<SwapHorizIcon />}
        sx={{ minWidth: '40px' }}
      />
    </BottomNavigation>
  );
}
