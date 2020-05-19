import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { withStyles } from '@material-ui/core/styles';
import FormGroup from '@material-ui/core/FormGroup';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import PeopleIcon from '@material-ui/icons/People';
import HomeIcon from '@material-ui/icons/Home';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
		root: {
				display: 'flex',
		},
		appBar: {
				transition: theme.transitions.create(['margin', 'width'], {
						easing: theme.transitions.easing.sharp,
						duration: theme.transitions.duration.leavingScreen,
				}),
		},
		appBarShift: {
				width: `calc(100% - ${drawerWidth}px)`,
				marginLeft: drawerWidth,
				transition: theme.transitions.create(['margin', 'width'], {
						easing: theme.transitions.easing.easeOut,
						duration: theme.transitions.duration.enteringScreen,
				}),
		},
		menuButton: {
				marginRight: theme.spacing(2),
		},
		hide: {
				display: 'none',
		},
		drawer: {
				width: drawerWidth,
				flexShrink: 0,
		},
		drawerPaper: {
				width: drawerWidth,
		},
		drawerHeader: {
				display: 'flex',
				alignItems: 'center',
				padding: theme.spacing(0, 1),
				// necessary for content to be below app bar
				...theme.mixins.toolbar,
				justifyContent: 'flex-end',
		},
		content: {
				flexGrow: 1,
				padding: theme.spacing(3),
				transition: theme.transitions.create('margin', {
						easing: theme.transitions.easing.sharp,
						duration: theme.transitions.duration.leavingScreen,
				}),
				marginLeft: -drawerWidth,
		},
		contentShift: {
				transition: theme.transitions.create('margin', {
						easing: theme.transitions.easing.easeOut,
						duration: theme.transitions.duration.enteringScreen,
				}),
				marginLeft: 0,
		},
}));

const IOSSwitch = withStyles((theme) => ({
		root: {
				width: 42,
				height: 26,
				padding: 0,
				margin: theme.spacing(1),
				marginLeft: theme.spacing(2),
				marginDown: theme.spacing(10)
		},
		switchBase: {
				padding: 1,
				'&$checked': {
						transform: 'translateX(16px)',
						color: theme.palette.common.white,
						'& + $track': {
								backgroundColor: '#52d869',
								opacity: 1,
								border: 'none',
						},
				},
				'&$focusVisible $thumb': {
						color: '#52d869',
						border: '6px solid #fff',
				},
		},
		thumb: {
				width: 24,
				height: 24,
		},
		track: {
				borderRadius: 26 / 2,
				border: `1px solid ${theme.palette.grey[400]}`,
				backgroundColor: theme.palette.grey[50],
				opacity: 1,
				transition: theme.transitions.create(['background-color', 'border']),
		},
		checked: {},
		focusVisible: {},
}))(({ classes, ...props }) => {
		return (
				<Switch
						focusVisibleClassName={classes.focusVisible}
						disableRipple
						classes={{
								root: classes.root,
								switchBase: classes.switchBase,
								thumb: classes.thumb,
								track: classes.track,
								checked: classes.checked,
						}}
						{...props}
				/>
		);
});

export default function PersistentDrawerLeft() {
		const classes = useStyles();
		const theme = useTheme();
		const [open, setOpen] = React.useState(false);
		const [auth, setAuth] = React.useState(true);

		const handleDrawerOpen = () => {
				setOpen(true);
		};

		const handleDrawerClose = () => {
				setOpen(false);
		};

		const handleChange = (event) => {
				setAuth(event.target.checked);
		};

		return (
				<div className={classes.root}>
						<CssBaseline />
						<AppBar
								position="fixed"
								style={{background:'#44944A'}}
								className={clsx(classes.appBar, {
										[classes.appBarShift]: open,
								},classes.root)}
						>
								<Toolbar>
										<IconButton
												color="inherit"
												aria-label="open drawer"
												onClick={handleDrawerOpen}
												edge="start"
												className={clsx(classes.menuButton, open && classes.hide)}
										>
												<MenuIcon />
										</IconButton>
										{auth && (
												<div>
														<IconButton
																aria-label="account of current user"
																aria-controls="menu-appbar"
																aria-haspopup="true"
																// onClick={handleMenu}
																color="inherit"
														>
																<VerifiedUserIcon />
														</IconButton>
												</div>
										)}
										<Typography variant="h6" noWrap>
												Present Service
										</Typography>
										<FormGroup style={{position: "right"}}>
												<FormControlLabel
														control={<IOSSwitch checked={auth} onChange={handleChange} name="checkedB" />}
														label = {auth ? 'Logout' : 'Login'}
												/>
										</FormGroup>

								</Toolbar>
						</AppBar>
						<Drawer
								className={classes.drawer}
								variant="persistent"
								anchor="left"
								open={open}
								classes={{
										paper: classes.drawerPaper,
								}}
						>
								<div className={classes.drawerHeader}>
										<IconButton onClick={handleDrawerClose}>
												{theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
										</IconButton>
								</div>
								<Divider />
								<List>
										{['My profile', 'Users'].map((text, index) => (
												<ListItem button key={text}>
														<ListItemIcon>{index % 2 === 0 ? <HomeIcon /> : <PeopleIcon />}</ListItemIcon>
														<ListItemText primary={text} />
												</ListItem>
										))}
								</List>
						</Drawer>
				</div>
		);
}
