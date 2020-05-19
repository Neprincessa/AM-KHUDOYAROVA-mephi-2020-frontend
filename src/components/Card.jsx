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
								{/*<CardHeader*/}
								{/*		avatar={*/}
								{/*				<Avatar aria-label="recipe" className={classes.avatar}>*/}
								{/*						PS*/}
								{/*				</Avatar>*/}
								{/*		}*/}
								{/*		action={*/}
								{/*				<IconButton aria-label="settings">*/}
								{/*						<MoreVertIcon />*/}
								{/*				</IconButton>*/}
								{/*		}*/}
								{/*		title="My present"*/}
								{/*/>*/}
								<CardContent>
										{/*<Typography className={classes.title} color="textSecondary" gutterBottom>*/}
										{/*		First Present*/}
										{/*</Typography>*/}
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
								{/*		<Typography variant="body2" component="p">*/}
								{/*				Cost arount 400*/}
								{/*				<br />*/}
								{/*		</Typography>*/}
								</CardContent>
						</CardActionArea>

						<CardActions disableSpacing>
								{/*<IconButton aria-label="edit present">*/}
								{/*		<EditIcon />*/}
								{/*</IconButton>*/}
								{/*<CardActions>*/}
										<Button size="small">Register</Button>
								{/*</CardActions>*/}
								{/*<IconButton*/}
								{/*		className={clsx(classes.expand, {*/}
								{/*				[classes.expandOpen]: expanded,*/}
								{/*		})}*/}
								{/*		onClick={handleExpandClick}*/}
								{/*		aria-expanded={expanded}*/}
								{/*		aria-label="show more"*/}
								{/*>*/}
								{/*		<ExpandMoreIcon />*/}
								{/*</IconButton>*/}
						</CardActions>
						{/*<Collapse in={expanded} timeout="auto" unmountOnExit>*/}
						{/*		<CardContent>*/}
						{/*				/!*<CheckboxLabels/>*!/*/}
						{/*				/!*<input type="checkbox" onChange={InputCheckbox} title="HI"/>*!/*/}
						{/*				/!*<input className=/>*!/*/}
						{/*				<Typography paragraph>Method:</Typography>*/}
						{/*				<Typography paragraph>*/}
						{/*						fdf*/}
						{/*				</Typography>*/}
						{/*				<Typography paragraph>*/}

						{/*						Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high*/}
						{/*						heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly*/}
						{/*						browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken*/}
						{/*						and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and*/}
						{/*						pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add*/}
						{/*						saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.*/}
						{/*				</Typography>*/}
						{/*				<Typography paragraph>*/}
						{/*						Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook*/}
						{/*						without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to*/}
						{/*						medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook*/}
						{/*						again without stirring, until mussels have opened and rice is just tender, 5 to 7*/}
						{/*						minutes more. (Discard any mussels that don’t open.)*/}
						{/*				</Typography>*/}
						{/*				<Typography>*/}
						{/*						Set aside off of the heat to let rest for 10 minutes, and then serve.*/}
						{/*				</Typography>*/}
						{/*		</CardContent>*/}
						{/*</Collapse>*/}
				</Card>
		);
}
