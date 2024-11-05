// src/app/components/NavBar.tsx

import { useSession } from "next-auth/react";
import Typography from '@mui/material/Typography';

export const metadata = { title: "HomeView | vlak"};


export default function NonAuthedView() {
    const { data: session, status } = useSession();

  return (
    <Typography variant="h4">Vitaj, pokracuj prihlasenim</Typography>
    
  );
}
