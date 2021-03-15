import React, { Component } from 'react';
import './App.css';
import ClefIcon from './Components/ClefIcon';
import WomanIcon from './Components/WomanIcon';
import MusicSheet from './Components/MusicSheet';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div></div>
        <div id="mainApp">


          <div id="editor" className="z-depth-1">
            <div id="clefIcon">
              <ClefIcon />
            </div>
            <div id="sheet">
              <MusicSheet />
            </div>
          </div>


          <div id="buttons">
            <div></div>
            <div id="middleButtons">
              <a class="btn-floating btn-large waves-effect waves-light red"><i class="material-icons">file_upload</i></a>
              <a class="btn-floating btn-large waves-effect waves-light red"><i class="material-icons">play_arrow</i></a>
              <a class="btn-floating btn-large waves-effect waves-light red"><i class="material-icons">save</i></a>

            </div>
            <div></div>
          </div>



          <div id="player" class="z-depth-1">
            <div id="womanIcon">
              <WomanIcon />
            </div>
            <div id="musicBox">

            </div>
          </div>
        
        </div>
        <div></div>
      </div>
    );
  }
}

export default App;
