import { FC } from 'react';
import { Grid, Paper } from '@material-ui/core';

const FirstLayout: FC = ({ children }) => {
  return (
    <>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
        style={{ minHeight: '100vh' }}
      >
        <Grid item xs={12} style={{ width: 1000 }}>
          <Paper style={{ padding: 20, margin: 50 }} elevation={5}>
            {children}
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};

export default FirstLayout;
