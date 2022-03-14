import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    container: {
        paddingTop: theme.spacing(10),
    },
    card: {
        marginBottom: theme.spacing(5),
        fontFamily: "Roboto",
    },
    media: {
        height: 250,
        [theme.breakpoints.down("sm")]: {
            height: "150px",
        }
    },
}));

const Post = () => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
        <CardActionArea>
            <CardMedia className={classes.media} image="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8dGVjaG5vbG9neXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" title="My Post" />
        </CardActionArea>
        <CardContent>
            <Typography gutterBottom variant="h5">My First Post</Typography>
            <Typography variant="body2">Enabling a proper Tech space by encouraging everyone to take part in Tech. Both male and females, all working together to promote a Great Tech ecosystem by properly trained and well equipped Developers, designers and tech enthusiasts from all over the world. This will help increase the Skills of individuals and reduce the rate of unemployment. Fresh Gradutes would be able to harness these skills and get their dream jobs...</Typography>
        </CardContent>
        <CardActions>
            <Button size="small" color="primary">Share</Button>
            <Button size="small" color="primary">Learn More</Button>
        </CardActions>
    </Card>
  );
}

export default Post;
