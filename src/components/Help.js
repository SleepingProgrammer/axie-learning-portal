import React from 'react';
import { Backdrop, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
    },
}));

export default function HelpBackdrop(props) {
    const classes = useStyles();

    return (
        <div>
            <Backdrop style={{
                background: "rgba(0, 0, 0, .95)"
            }} className={classes.backdrop} open={props.open} onClick={props.handleClose}>


                <Grid container style={{ height: "100vh" }}
                    direction="column"
                    justifyContent="flex-start"
                    alignItems="center">
                    <h1 style={{ marginTop: "10%", textAlign: "center" }}>
                        Instructions
                        <br />
                        <span style={{ fontSize: "1.5rem" }}>

                            1. Press the "Right" Arrow Key to increase energy once.
                            <br />
                            2. Press the "Up" Arrow Key to increase energy twice.
                            <br />
                            3. Press the "Left" Arrow Key to decrease energy once.
                            <br />
                            3. Press the "R" button to decrease energy once.
                        </span>
                    </h1>
                </Grid>
            </Backdrop>
        </div>
    );
}
