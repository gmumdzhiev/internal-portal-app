import { FC } from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import logoImage from '../utils/images/logo.png';

const Home: FC = () => {
  return (
    <Grid container direction="column" justify="center" alignItems="center" spacing={2}>
      <Typography variant="p" component="h2">
        We
      </Typography>
      <Typography variant="h2" component="h1">
        GROW
      </Typography>
      <Typography variant="p" component="h2">
        your company
      </Typography>
      <Typography variant="p" component="p">
        for something
      </Typography>
      <Typography variant="h1" component="h1">
        BIGGER
      </Typography>
      <img style={{ maxWidth: '100px', padding: '20px' }} alt="logo" src={logoImage} />
      <Typography variant="caption">Established 1991. All rights reserved</Typography>
    </Grid>
  );
};

export default Home;
