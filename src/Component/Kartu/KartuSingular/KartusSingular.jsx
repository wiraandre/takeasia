import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';

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
      <Grid container spacing={0}>
        {props.data.posts.map((back, index) => {
          return (
            <Grid item sm={6} md={3}>
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
                  <Link to={`/${back.slug}`}>Read more..</Link>

                  <Button size="small" color="primary">
                    Learn More
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default withStyles(styles)(KartuSingular);
