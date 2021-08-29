import WeaknessChart from "./assets/weakness_chart.png";
import React from 'react';
import { BrowserView, MobileView } from 'react-device-detect';
import { Button, Grid, Container, AppBar, Fab, Paper } from '@material-ui/core';
import HelpIcon from '@material-ui/icons/Help';
import Add2Icon from '@material-ui/icons/ExposurePlus2';
import MinusIcon from '@material-ui/icons/Remove';
import BottomNav from './components/BottomNav';
import Content from "./components/Content";
import Slide from '@material-ui/core/Slide';
import EnergyCounter from './components/EnergyCounterMobile';
import Help from "./components/Help";

import Backdrop from '@material-ui/core/Backdrop';

import './App.css';

const KeyCodes = {
  Left: 37,
  Up: 38,
  Right: 39,
  Down: 40,
  R: 82
}


const defaultEnergy = 3;

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      energyCount: defaultEnergy,
      tab: 0,
      helpOn: false,
    }
  }

  limitEnergy = (newEnergy) => {
    if (newEnergy > 10) {
      newEnergy = 10;
    }

    if (newEnergy < 0) {
      newEnergy = 0;
    }

    return newEnergy;
  }

  increaseEnergy = (value) => {
    var newEnergy = this.limitEnergy(this.state.energyCount + value);
    this.setState({ energyCount: newEnergy });
  }

  decreaseEnergy = (value) => {
    var newEnergy = this.limitEnergy(this.state.energyCount - value);
    this.setState({ energyCount: newEnergy });
  }

  leftBtn = (event) => {
    if (event.keyCode === KeyCodes.Left) {
      //Do whatever when esc is pressed
      console.log("energyCount", this.state.energyCount);
      this.decreaseEnergy(1);
    }
  }

  rightBtn = (event) => {
    if (event.keyCode === KeyCodes.Right) {
      //Do whatever when esc is pressed
      this.increaseEnergy(1);
    }
  }

  upBtn = (event) => {
    if (event.keyCode === KeyCodes.Up) {
      //Do whatever when esc is pressed
      this.increaseEnergy(2);
    }
  }

  rBtn = (event) => {
    if (event.keyCode === KeyCodes.R) {
      //Do whatever when esc is pressed
      var sure = window.confirm("are you sure you want to reset the energy count?");
      if (sure) {

        this.setState({ energyCount: defaultEnergy });
      }
    }
  }

  bindKeyEvents = () => {
    document.addEventListener("keyup", this.leftBtn, false);
    document.addEventListener("keyup", this.rightBtn, false);
    document.addEventListener("keyup", this.upBtn, false);
    document.addEventListener("keyup", this.rBtn, false);
  }

  unbindKeyEvents = () => {
    document.removeEventListener("keyup", this.leftBtn, false);
    document.removeEventListener("keyup", this.rightBtn, false);
    document.removeEventListener("keyup", this.upBtn, false);
    document.removeEventListener("keyup", this.rBtn, false);
  }

  componentDidMount() {
    console.log("bound events");
    this.bindKeyEvents();
    return () => {
      this.unbindKeyEvents();
    }
  };

  getTip = () => {
    const energy = this.state.energyCount;
    var tip = "";
    if (energy >= 3) {
      tip = "Beware of enemy bursts!";
    }
    else {
      tip = "You can use utility cards or burst your enemy down.";
    }


    return tip;
  }

  render() {
    const tip = this.getTip();
    const { tab, energyCount, helpOn } = this.state;
    return (
      <div className="App">
        <BrowserView>
          <Grid container
            direction="row"
            justifyContent="center"
            alignItems="center">

            <Slide direction="left" in={tab == 0} mountOnEnter unmountOnExit>

              <Grid container style={{ height: "100vh" }}
                direction="column"
                justifyContent="flex-start"
                alignItems="center">
                <h1 style={{ fontSize: "10rem" }}>{energyCount}</h1>
                <h3 style={{ marginTop: "-8rem" }}>Energy Count</h3>


                <h1 style={{ fontSize: "5rem" }}>Tip</h1>
                <h3 style={{ marginTop: "-3rem", fontSize: "3rem" }}>{tip}</h3>

                <Fab aria-label="Help" color="primary" style={{
                  position: "absolute",
                  bottom: 100,
                  right: 100
                }}
                  onClick={() => {
                    this.setState({
                      helpOn: true
                    })
                  }}
                >
                  <HelpIcon />
                </Fab>

                <Help open={helpOn} handleClose={() => {
                  this.setState({
                    helpOn: false
                  })
                }} />
              </Grid>

            </Slide>
            <Slide direction="right" in={tab == 1} mountOnEnter unmountOnExit>

              <Grid style={{ textAlign: "center", height: "100vh" }} item xs={12}>
                <Grid
                  style={{ height: "100%" }}
                  container
                  direction="column"
                  justifyContent="center"
                  alignItems="center"
                >
                  <h1>Damage Chart</h1>
                  <p>Ex: A plant type card used to attack a beast type axie will cause 15% reduced damage.
                    A beast type card used to attack a plant type axie will cause 15% increased damage.</p>
                  <img src={WeaknessChart} alt="Weakness Chart" />
                </Grid>
              </Grid>
            </Slide>

            <BottomNav onTabChange={
              (newTab) => {
                this.setState({
                  tab: newTab
                })
              }
            } />
          </Grid>
        </BrowserView>
        <MobileView>
          <Container maxWidth="sm" fixed>

            <Slide direction="left" in={tab == 0} mountOnEnter unmountOnExit>

              <EnergyCounter energyCount={energyCount} tip={tip}
                addOne={() => {
                  this.increaseEnergy(1);
                }}
                addTwo={() => {
                  this.increaseEnergy(2);
                }}
                removeOne={() => {
                  this.decreaseEnergy(1);
                }} />
            </Slide>
            <Slide direction="right" in={tab == 1} mountOnEnter unmountOnExit>

              <Grid style={{ textAlign: "center", height: "100vh" }} item xs={12}>
                <Grid
                  style={{ height: "100%" }}
                  container
                  direction="column"
                  justifyContent="center"
                  alignItems="center"
                >
                  <h1>Damage Chart</h1>
                  <p>Ex: A plant type card used to attack a beast type axie will cause 15% reduced damage.
                    A beast type card used to attack a plant type axie will cause 15% increased damage.</p>
                  <img src={WeaknessChart} alt="Weakness Chart" />
                </Grid>
              </Grid>
            </Slide>
            <BottomNav onTabChange={
              (newTab) => {
                this.setState({
                  tab: newTab
                })
              }
            } />
          </Container>
        </MobileView>
      </div>
    );
  }
}

export default App;
