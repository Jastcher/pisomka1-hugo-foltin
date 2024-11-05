"use client";

import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation'; // Import useRouter for redirecting

export default function MyMenu() {
  const { data: session } = useSession();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const router = useRouter(); // Initialize the router to redirect

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogin = () => {
    // Redirect to the login page
    router.push('/auth/prihlasenie');
    handleClose();
  };

  const handleLogout = async () => {
    // Sign out the user and optionally redirect them
    router.push('/auth/odhlasenie');
    handleClose();
  };

  const handleHome = async () => {
    // Sign out the user and optionally redirect them
    router.push('/');
    handleClose();
  };


  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        Menu
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
          <MenuItem onClick={handleHome}>Home</MenuItem>
        {!session ? (
          <MenuItem onClick={handleLogin}>Prihlasit</MenuItem>
        ) : (
          <MenuItem onClick={handleLogout}>Odhlasit</MenuItem>
        )}
      </Menu>
    </div>
  );
}
