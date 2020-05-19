import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import MenuAppBar from './header';
import Grid from "@material-ui/core/Grid";
import Profile from "./Profile";

const useStyles = makeStyles((theme) => ({
		root: {
				width: '100%',
				maxWidth: 360,
				backgroundColor: theme.palette.background.paper,
		},
		gridContainer: {
				paddingLeft: "20px",
				paddingRight: "20px",
				marginTop: "20px"
		}
}));

export default function CheckboxList() {
		const classes = useStyles();
		const [checked, setChecked] = React.useState([0]);
		const state = {
				isDrawerOpen: false,
				itemsList: [
						{name: 'Book', description: 'Solyaris', checked: false},
						{name: 'Photo', description: 'Album', checked: false},
						{name: 'Music', description: 'Authograph', checked: false},
				]
		};
		const handleToggle = (value) => () => {
				const currentIndex = checked.indexOf(value);
				const newChecked = [...checked];
				if (currentIndex === -1) {
						newChecked.push(value);
				} else {
						newChecked.splice(currentIndex, 1);
				}
				setChecked(newChecked);
		};
		return (
				<React.Fragment>
						<MenuAppBar/>
						<Grid container spacing={4} className={classes.gridContainer} style={{marginTop: "100px"}}
									justify={"center"}>
								<Grid item xs={1} md={2}>
										<Profile/>
								</Grid>
								<Grid item xs={1} md={2}>
										<List className={classes.root} itemProp={state.itemsList}>
												{[0, 1, 2, 3].map((value) => {
														const labelId = `checkbox-list-label-${value}`;
														return (
																<ListItem key={value} role={undefined} dense button onClick={handleToggle(value)}>
																		<ListItemIcon>
																				<Checkbox
																						edge="start"
																						checked={checked.indexOf(value) !== -1}
																						tabIndex={-1}
																						disableRipple
																						inputProps={{'aria-labelledby': labelId}}
																				/>
																		</ListItemIcon>
																		<ListItemText id={labelId} primary={`Present ${value + 1}`}/>
																		<ListItemSecondaryAction>
																				<IconButton edge="end" aria-label="comments">
																						<EditIcon />
																				</IconButton>
																		</ListItemSecondaryAction>
																</ListItem>
														);
												})}
										</List>
								</Grid>
						</Grid>
				</React.Fragment>
		);
}
