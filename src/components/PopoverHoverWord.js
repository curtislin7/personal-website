import React from 'react';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    popover: {
			backgrondColor: theme.palette.main,
      pointerEvents: 'none',
    },
    paper: {
			padding: theme.spacing(1),
    }
}))

const HoverPopover = (props) => {
	const classes = useStyles();
	const [anchorEl, setAnchorEl] = React.useState(null);

	const handlePopoverOpen = (event) => {
		setAnchorEl(event.currentTarget);
	}

	const handlePopoverClose = () => {
		setAnchorEl(null);
	}

	const isPopoverOpen = Boolean(anchorEl);

	return (
		<div>
			<div 
				onMouseEnter={handlePopoverOpen}
				onMouseLeave={handlePopoverClose}
			>
				{props.text}
			</div>
			<Popover
				className={classes.popover}
				classes={{
					paper: classes.paper,
				}}
				open={isPopoverOpen}
				anchorEl={anchorEl}
				onClose={handlePopoverClose}
				anchorOrigin={{
					vertical: 'top',
					horizontal: 'left',
				}}
				transformOrigin={{
					vertical: 'bottom',
					horizontal: 'center',
				}}
			>
				{props.content}
			</Popover>
		</div>

	)

}

export default HoverPopover;