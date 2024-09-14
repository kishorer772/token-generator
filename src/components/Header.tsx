import { Typography } from '@mui/material';

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
