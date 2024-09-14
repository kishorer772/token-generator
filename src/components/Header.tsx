import { Typography } from '@mui/material';
import * as React from 'react';

export interface IAppProps {
  title: string;
}

export default function Header(props: IAppProps) {
  return (
    <header>
      <Typography variant="h4" textAlign={'center'} sx={{ p: 4 }}>
        {props.title}
      </Typography>
    </header>
  );
}
