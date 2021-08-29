import React from 'react';
import { BrowserView, MobileView } from 'react-device-detect';
import { Button, Grid, Container, AppBar, Fab, Paper } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import Add2Icon from '@material-ui/icons/ExposurePlus2';
import MinusIcon from '@material-ui/icons/Remove';
import Content from "./Content";

import '../App.css';
const buttonSize = 100;

class EnergyCounter extends React.Component {

    render() {
        const { energyCount, tip, addOne, addTwo, removeOne } = this.props;
        return (
            <Content style={{ width: "100vw" }} >
                <Grid style={{ textAlign: "center" }} item xs={12}>
                    <Grid
                        style={{ height: "100%" }}
                        container
                        direction="column"
                        justifyContent="flex-end"
                        alignItems="center"
                    >
                        <h1>Tips:
                        </h1>
                        <span >{tip}</span>
                    </Grid>
                </Grid>
                <Grid style={{ textAlign: "center" }}

                    justifyContent="flex-end"
                    alignItems="center"
                    item xs={12}>
                    <Grid
                        style={{ height: "100%" }}
                        container
                        direction="column"
                        justifyContent="flex-end"
                        alignItems="center"
                    >

                        <h1 style={{ fontSize: "5rem" }}>
                            {energyCount}
                            <br />
                        </h1>
                        <span style={{ fontSize: ".85rem", marginTop: -50, marginBottom: 25 }}>
                            Energy Count</span>
                        <Fab onClick={addTwo} style={{ width: buttonSize, height: buttonSize }} size="medium" color="info" aria-label="add">
                            <Add2Icon />
                        </Fab>
                    </Grid>
                </Grid>
                <Grid style={{ textAlign: "center" }} item xs={6}>
                    <Fab onClick={removeOne} style={{ width: buttonSize, height: buttonSize }} size="medium" color="secondary" aria-label="minus">
                        <MinusIcon />
                    </Fab>
                </Grid>
                <Grid style={{ textAlign: "center" }} item xs={6}>
                    <Fab onClick={addOne} style={{ width: buttonSize, height: buttonSize }} size="medium" color="primary" aria-label="add">
                        <AddIcon />
                    </Fab>
                </Grid>
            </Content>
        );
    }
}

export default EnergyCounter;
