import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        // maxWidth: 345,
        display: "flex",
        flexWrap: "wrap",
        textAlign: "center",
        margin: "30px 100px",
        justifyContent: "center",
        border: "1px solid blue",
        borderRadius: "10px",
        // width: "40%"
        backgroundColor: "cyan",
        height: "250px"
    },
});

const Posts = (props) => {
    const {id, title, body} = props.post;
    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <CardActionArea> 
                <CardContent>
                    <Typography  component="h2">
                        {id}
                    </Typography>
                    <Typography  component="h1">
                        {title}
                    </Typography>
                    <Typography  color="textSecondary" component="p">
                        {body}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    Read More
                </Button>
            </CardActions>
        </Card>
    );
};

export default Posts;