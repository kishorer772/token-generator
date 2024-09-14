import Grid from '@mui/material/Grid2';

export interface IAppProps {
  color: string;
  length: number;
  perRow: number;
  prefix: string;
}

export default function TokenView(props: IAppProps) {
  return (
    <Grid container spacing={1} sx={{ p: 2 }}>
      {Array(props.length)
        .fill(0)
        .map((_, index) => (
          <Grid size={12 / props.perRow} display="flex" justifyContent="center">
            <div
              style={{
                backgroundColor: props.color,
                width: '100px',
                height: '100px',
                border: '1px solid black',
              }}
            >
              <p
                style={{
                  position: 'relative',
                  top: '40%',
                  left: '40%',
                  color: 'white',
                }}
              >
                {props.prefix + (index + 1)}
              </p>
            </div>
          </Grid>
        ))}
    </Grid>
  );
}
