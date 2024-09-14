import { Box, Button, FormLabel, TextField } from '@mui/material';
import * as React from 'react';

export interface IAppProps {}

export default function TokenGeneratorForm(props: IAppProps) {
  return (
    <form action="" id="tg-form">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '0.5rem',
          width: window.innerWidth < 768 ? '80%' : '50%',
          margin: '0 auto',
          '&  .MuiInputBase-input': {
            py: 1,
          },
        }}
      >
        <FormLabel htmlFor="tg-blue-prefix">Blue Token Prefix</FormLabel>
        <TextField id="tg-blue-prefix"></TextField>
        <FormLabel htmlFor="tg-blue-token">Blue Token Length</FormLabel>
        <TextField id="tg-blue-token"></TextField>
        <FormLabel htmlFor="tg-blue-token">Blue Token Per Row</FormLabel>
        <TextField id="tg-blue-row"></TextField>
        <FormLabel htmlFor="tg-blue-prefix">Red Token Prefix</FormLabel>
        <TextField id="tg-blue-prefix"></TextField>
        <FormLabel htmlFor="tg-blue-token">Red Token Length</FormLabel>
        <TextField id="tg-blue-token"></TextField>
        <FormLabel htmlFor="tg-blue-token">Red Token Per Row</FormLabel>
        <TextField id="tg-blue-row"></TextField>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            gap: 1,
            '& > .MuiButton-root': {
              textTransform: 'none',
            },
          }}
        >
          <Button variant="contained" type="submit">
            Generate
          </Button>
          <Button variant="contained" type="reset" color="error">
            Clear
          </Button>
        </Box>
      </Box>
    </form>
  );
}
