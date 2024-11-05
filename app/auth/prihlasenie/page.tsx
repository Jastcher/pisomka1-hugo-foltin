'use client';

import Typography from '@mui/material/Typography';
import { useSession, signIn, signOut } from "next-auth/react"
import Button from '@mui/material/Button';
import GoogleIcon from '@mui/icons-material/Google';
import Box from '@mui/material/Box';

//export const metadata = { title: "Prihlasenie | vlak"};

export default function Login() {
  const { data: session } = useSession();

  return (
    <Box
      sx={{
        display: 'grid',
        placeItems: 'center', // Centers both horizontally and vertically
        height: '80vh', // Full viewport height
      }}
    >
      <Box sx={{ textAlign: 'center' }}>
        <Typography>prihlasenie</Typography>
        <Button
        variant="contained"
        color="primary"
        startIcon={<GoogleIcon />}
        onClick={() => signIn('google')}
        style={{
          backgroundColor: '#4285F4',
          color: '#fff',
          textTransform: 'none',
          padding: '10px 20px',
          borderRadius: '4px',
          fontSize: '16px',
          fontWeight: 'bold',
        }}
      >
        Sign in with Google
      </Button>
      </Box>
    </Box>
      
    
  );
}
