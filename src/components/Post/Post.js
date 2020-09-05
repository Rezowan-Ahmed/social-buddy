import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from "react-router-dom";

const useStyles = makeStyles({
    root: {
        display: "flex",
        flexWrap: "wrap",
        // textAlign: "center",
        margin: "30px 100px",
        // justifyContent: "center",
        border: "1px solid blue",
        borderRadius: "10px",
        backgroundColor: "purple",
        height: "250px",
        color:"white"
    },
    id: {
		fontSize: 20,
		textAlign: "center",
	},
	title: {
		fontSize: 25,
		marginBottom: "20px",
	},
	button: {
		margin: "auto",
		textDecoration: "none",
	},
});

const Post = (props) => {
    const { id, title, body } = props.post;
    const classes = useStyles();
    return (
        <Card className={classes.root}>
                <CardContent>
                    <Typography component="h2" className={classes.id}>
                        {id}
                    </Typography>
                    <Typography component="h1" className={classes.title}>
                        {title}
                    </Typography>
                    <Typography component="p">
                        {body}
                    </Typography>
                </CardContent>
            <CardActions>
                <Link to={`/posts/${id}`} className={classes.button}>
                    <Button size="small" style={{color:'yellow'}}>
                        Read More
                </Button>
                </Link>
            </CardActions>
        </Card>
    );
};

export default Post;