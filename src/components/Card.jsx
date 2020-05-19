import React, {useRef} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {CardMedia} from "@material-ui/core";
import CardActionArea from '@material-ui/core/CardActionArea';
import TextField from "@material-ui/core/TextField";


const useStyles = makeStyles((theme) => ({
		root: {
				minWidth: 100,
		},
		bullet: {
				display: 'inline-block',
				margin: '0 2px',
				transform: 'scale(0.8)',
		},
		title: {
				fontSize: 14,
		},
		pos: {
				marginBottom: 12,
		},
		expand: {
				transform: 'rotate(0deg)',
				marginLeft: 'auto',
				transition: theme.transitions.create('transform', {
						duration: theme.transitions.duration.shortest,
				}),
		},
		expandOpen: {
				transform: 'rotate(180deg)',
		}
}));


export default function SimpleCard() {
		const classes = useStyles();
		let textInput = useRef(null);
		const [expanded, setExpanded] = React.useState(false);

		const handleExpandClick = () => {
				setExpanded(!expanded);
		};

		return (
				<Card className={classes.root} >
						<CardActionArea>
								<CardMedia className={classes.media}/>
								<CardContent>
										<Typography variant="h5" component="h2" style={{justifyContent :"center"}}>
												Welcome to our service!
										</Typography>
										<Typography className={classes.pos} color="textSecondary">
												Please login  or register
										</Typography>
										<Typography>
												<TextField
														fullWidth
														required
														inputRef={textInput}
														name="firstName"
														type="text"
														placeholder="Enter Your Username"
														label="Username"
												/>
												<TextField
														fullWidth
														required
														inputRef={textInput}
														name="firstName"
														type="text"
														placeholder="Enter Your Password"
														label="Password"
														style={{justifySelf:"center"}}
												/>
										</Typography>
								</CardContent>
						</CardActionArea>
						<CardActions disableSpacing>
										<Button size="small">Register</Button>
						</CardActions>
				</Card>
		);
}
