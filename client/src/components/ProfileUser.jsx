import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import femaleAvatar from "../assets/images/femaleavatar.png"

const useStyles = makeStyles((theme) => ({
	root: {
	  display: 'flex',
	  '& > *': {
		margin: theme.spacing(1),
	  },
	},
	large: {
	  width: theme.spacing(7),
	  height: theme.spacing(7),
	},
  }));

export default function ProfileUser() {
	const classes = useStyles();
	return 	<div>
			<div className="info-card">
				<div className={classes.root}>
      <Avatar alt="Remy Sharp" src={femaleAvatar} className={classes.large} />
    			</div>
			</div>
			</div>;
}
