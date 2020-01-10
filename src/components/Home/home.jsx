import React, { Component } from "react";
import "./home.css";
import { Button } from "react-bootstrap";
// import { dialog } from "electron";
const { dialog } = window.require("electron").remote;
const { ipcRenderer } = window.require("electron");

class HomeComponent extends Component {
  state = {};

  openDialog = ev => {
    dialog
      .showOpenDialog({
        properties: ["openFile"]
      })
      .then(file => {
        ipcRenderer.send("uploadExcel", file.filePaths);

        ipcRenderer.once('uploadSuccess', (event, arg) => {
          console.log(arg) 
        })
      });
  };
  render() {
    return (
      <div className="home-container">
        <Button onClick={this.openDialog}>Upload</Button>
      </div>
    );
  }
}

export default HomeComponent;
