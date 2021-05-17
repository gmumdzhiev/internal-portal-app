import { Formik, Form, Field, FormikHelpers } from 'formik';
import { useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import TextField from '../components/common/text-field/TextField';
import * as yup from 'yup';
import SwipeableViews from 'react-swipeable-views';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import React, { FC } from 'react';
import { makeStyles, withStyles, useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import GoogleImage from '../utils/images/google.png';
import backgroundImage from '../utils/images/background.jpg';

import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: 8,
  },
  paperLeft: {
    minHeight: 500,

    // maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0)),
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    padding: theme.spacing(2),
    textAlign: 'center',
  },
  paperRight: {
    minHeight: 500,
    borderTopRightRadius: '10px',
    borderBottomRightRadius: '10px',
    padding: theme.spacing(2),
    textAlign: 'center',
  },
  form: {
    margin: 16,
  },
  signInButton: {
    background: '#ffc629',
    fontWeight: 700,
    margin: 16,
    width: 140,
  },
  signUpButton: {
    background: '#ffc629',
    fontWeight: 700,
    margin: 16,
    width: 140,
  },
  buttonGoogleDiv: {
    background: '#fff',
    width: 25,
    height: 25,
    padding: 4,
    marginRight: 4,
    borderRadius: 4,
  },
  image: {
    width: 25,
    height: 25,
  },
  signUpGoogleButton: {
    background: '#4285f4',
    color: '#FFF',
    fontWeight: 700,
    margin: 16,
  },
  tabsDiv: {
    backgroundColor: 'none',
  },
}));

const StyledTabs = withStyles({
  indicator: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    '& > span': {
      maxWidth: 50,
      width: '100%',
      backgroundColor: '#ffc629',
    },
  },
})((props) => <Tabs {...props} TabIndicatorProps={{ children: <span /> }} />);

const StyledTab = withStyles((theme) => ({
  root: {
    textTransform: 'none',
    color: '#000000',
    fontWeight: 700,
    minWidth: 30,
    fontSize: theme.typography.pxToRem(15),
    marginRight: theme.spacing(1),
    '&:focus': {
      opacity: 1,
    },
  },
}))((props) => <Tab disableRipple {...props} />);

type UserIdentifiers = {
  email: string;
  password: string;
};

const Login: FC = () => {
  const classes = useStyles();
  const history = useHistory();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);
  const initialUserId: UserIdentifiers = {
    email: '',
    password: '',
  };

  const handleSubmit = async (values: UserIdentifiers, actions: FormikHelpers<UserIdentifiers>) => {
    try {
      history.push('/table');
    } catch (error) {
      alert('Invalid credential with values : ' + values);
    }
    actions.setSubmitting(false);
  };

  let validationSchema = yup.object().shape({
    email: yup.string().email('Invalid email').required('The email is required'),
    password: yup
      .string()
      .required('The password required')
      .matches(/(?=.*\d)/, 'Must contain at least one number')
      .min(8, 'should have at least 8 chars'),
  });

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };
  return (
    <div>
      <Grid container direction="row" justify="center" alignItems="center">
        <Grid item lg={6} xs={12} sm={6}>
          <Paper square elevation={0} className={classes.paperLeft}>
            <div className={classes.tabsDiv}>
              <StyledTabs
                value={value}
                onChange={handleChange}
                indicatorColor="primary"
                textColor="default"
                variant="fullWidth"
                aria-label="full width tabs example"
              >
                <StyledTab label="Home" {...a11yProps(0)} />
                <StyledTab label="About" {...a11yProps(1)} />
                <StyledTab label="Contact" {...a11yProps(2)} />
              </StyledTabs>
            </div>
            <SwipeableViews
              axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
              index={value}
              onChangeIndex={handleChangeIndex}
            >
              <TabPanel value={value} index={0} dir={theme.direction}>
                <Home />
              </TabPanel>
              <TabPanel value={value} index={1} dir={theme.direction}>
                <About />
              </TabPanel>
              <TabPanel value={value} index={2} dir={theme.direction}>
                <Contact />
              </TabPanel>
            </SwipeableViews>
          </Paper>
        </Grid>
        <Grid item lg={6} xs={12} sm={6}>
          <Paper square elevation={0} className={classes.paperRight}>
            <h2>Login to Your Account</h2>

            <Formik
              initialValues={initialUserId}
              onSubmit={handleSubmit}
              validationSchema={validationSchema}
            >
              {(props) => {
                const { isSubmitting } = props;

                return (
                  <Form>
                    <span>
                      <Field
                        className={classes.form}
                        name="email"
                        variant="outlined"
                        label="Email"
                        component={TextField}
                      />
                    </span>
                    <span>
                      <Field
                        className={classes.form}
                        name="password"
                        variant="outlined"
                        label="Password"
                        type="password"
                        component={TextField}
                      />
                    </span>
                    <Grid
                      container
                      direction="row"
                      justify="center"
                      alignItems="center"
                      spacing={1}
                    >
                      {' '}
                      <Field type="radio" name="checked" value="One" />
                      <p style={{ color: '#a1a1a1' }}>Remember me</p>
                    </Grid>
                    <Grid
                      container
                      direction="column"
                      justify="center"
                      alignItems="center"
                      spacing={1}
                    >
                      <Button
                        type="submit"
                        className={classes.signInButton}
                        disabled={isSubmitting}
                      >
                        Proceed
                      </Button>
                      <p style={{ color: '#a1a1a1' }}>
                        Don&apos;t have an account ? <b>Sign up</b>
                      </p>
                      <Button type="submit" className={classes.signUpGoogleButton}>
                        <div className={classes.buttonGoogleDiv}>
                          <img className={classes.image} alt="google" src={GoogleImage} />
                        </div>
                        Sign in with Google
                      </Button>
                    </Grid>
                  </Form>
                );
              }}
            </Formik>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default Login;
