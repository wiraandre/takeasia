import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    maxWidth: 345
  },
  media: {
    height: 0,
    paddingTop: '56.25%' // 16:9
  }
};

const KartuSingular = props => {
  const { classes } = props;
  return (
    <div>
      {props.data.posts.map((back, index) => {
        return (
          <Card key={index} className={classes.card}>
            <CardMedia
              className={classes.media}
              image={back.seo.image}
              title={back.seo.title}
            />
            <CardContent>
              <Typography gutterBottom variant="headline" component="h2">
                {back.seo.title}
              </Typography>
              <Typography component="p">{back.seo.description}</Typography>
            </CardContent>
            <CardActions>
              <Button size="small" color="primary">
                Read more
              </Button>
              <Button size="small" color="primary">
                Learn More
              </Button>
            </CardActions>
          </Card>
        );
      })}
    </div>
  );
};

export default withStyles(styles)(KartuSingular);
