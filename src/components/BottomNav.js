import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import ChangeHistoryIcon from '@material-ui/icons/ChangeHistory';
import FunctionsIcon from '@material-ui/icons/Functions';

const useStyles = makeStyles({
    root: {
        position: "fixed",
        bottom: "0px",
        left: "0px",
        right: "0px",
        marginBottom: "0px",
        width: "100vw",
    }
});

export default function BottomNav(props) {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    return (
        <BottomNavigation
            value={value}
            onChange={(event, newValue) => {
                props.onTabChange(newValue);
                setValue(newValue);
            }}
            showLabels
            className={classes.root}
        >
            <BottomNavigationAction label="Energy Counter" icon={<FunctionsIcon />} />
            <BottomNavigationAction label="Damage Chart" icon={<ChangeHistoryIcon />} />
        </BottomNavigation>
    );
}