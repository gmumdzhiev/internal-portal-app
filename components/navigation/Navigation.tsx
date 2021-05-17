// Basic import
import React, { FC } from 'react';
import { Link } from 'react-router-dom';

// Material UI import
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    flexGrow: 1,
    padding: '8px',
  },

  paper: {
    height: '100%',
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const Navigation: FC = () => {
  const classes = useStyles();

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="Home" to="/" component={Link} {...a11yProps(0)} />
          <Tab label="About" to="/about" component={Link} {...a11yProps(1)} />
          <Tab label="Contact" to="/contact" component={Link} {...a11yProps(2)} />
        </Tabs>
      </AppBar>
    </div>
  );
};

export default Navigation;
