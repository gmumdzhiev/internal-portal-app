import { FC } from 'react';
import { Formik, Form, Field } from 'formik';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '../components/common/text-field/TextField';
import * as yup from 'yup';

const Contact: FC = () => {
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      padding: 8,
    },
    paperLeft: {
      minHeight: 500,
      background: '#F8F9F9',
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
      background: '#fff',
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

  const initialUserId: UserIdentifiers = {
    email: '',
    adress: '',
    name: '',
  };

  const handleSubmit = async (values: UserIdentifiers, actions: FormikHelpers<UserIdentifiers>) => {
    try {
      history.push('/home');
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

  const classes = useStyles();

  return (
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
                name="name"
                variant="outlined"
                label="Full name"
                type="text"
                component={TextField}
              />
            </span>
            <span>
              <Field
                className={classes.form}
                name="adress"
                variant="outlined"
                label="Adress"
                type="text"
                component={TextField}
              />
            </span>

            <Grid container direction="column" justify="center" alignItems="center" spacing={2}>
              <Button type="submit" className={classes.signInButton} disabled={isSubmitting}>
                Send
              </Button>
              <p style={{ color: '#a1a1a1' }}>
                Please take note that this request may take up to 2-3 working days.
              </p>
            </Grid>
          </Form>
        );
      }}
    </Formik>
  );
};

export default Contact;
