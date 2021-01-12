import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import {
  makeStyles,
  Typography,
  Card,
  CardMedia,
  CardContent,
  CardActionArea,
} from '@material-ui/core';
import { TPost } from '../../domains/contentful';

interface IProps {
  posts: TPost[];
  isLoading: boolean;
}

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
    marginBottom: 20,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  link: {
    textDecoration: 'none',
  },
});

const HomeView: FC<IProps> = ({ posts, isLoading }) => {
  const classes = useStyles();

  return isLoading ? (
    <p>Loading...</p>
  ) : (
    <>
      <Typography component="h1" variant="h3">
        my awesome blog
      </Typography>
      <p>powerd by contentful</p>
      {posts.map((post) => (
        <Card className={classes.card} component="article" key={post.slug}>
          <CardActionArea>
            <Link className={classes.link} to={`/post/${post.slug}`}>
              {post?.thumbnail?.fields?.file?.url && (
                <CardMedia
                  image={`https:${post.thumbnail.fields.file.url}`}
                  className={classes.media}
                />
              )}
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {post.title}
                </Typography>
                <Typography
                  variant="caption"
                  color="textSecondary"
                  component="time"
                >
                  {post.createdAt}
                </Typography>
                <Typography variant="body1" color="textSecondary" component="p">
                  {post.description}
                </Typography>
              </CardContent>
            </Link>
          </CardActionArea>
        </Card>
      ))}
    </>
  );
};

export default HomeView;
