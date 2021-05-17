import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';

import AvatarGroup from '@material-ui/lab/AvatarGroup';
import Avatar from '@material-ui/core/Avatar';

import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import Typography from '@material-ui/core/Typography';

import Divider from '@material-ui/core/Divider';

import firstPerson from '../utils/images/person1.jpg';
import secondPerson from '../utils/images/person2.jpg';
import thirdPerson from '../utils/images/person3.jpg';
import chartImage from '../utils/images/chart.jpg';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

export default function About() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Progress chart"
          height="140"
          image={chartImage}
          style={{ paddingTop: '8px' }}
          title="Progress chart"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Progress among us
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            As a small company we saw invovation when we start using this tool. Improvement is
            expected from everyone once you dive into the environement
          </Typography>
          <Divider light />
          <AvatarGroup max={4}>
            <Avatar alt="Remy Sharp" src={firstPerson} />
            <Avatar alt="Cindy Johnson" src={secondPerson} />
            <Avatar alt="Travis Howard" src={thirdPerson} />
            <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
            <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
          </AvatarGroup>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
