import React, { Component } from "react";
import ImageFiles from "./ImageFiles";
import Navbar from "./components/Navbar";
import ImageList from "./components/ImageList";

class App extends Component {
  state = {
    imageFileNames: ImageFiles,
    clickedImages: [],
    score: 0,
    bestScore: 0,
    feedback: "Try not to click on the same motorcycle twice!",
    gameStatus: 0
  };

  componentDidMount() {
    this.setState({
      imageFileNames: this.shuffle(this.state.imageFileNames)
    });
  }

  clickHandle = event => {
    const clickedImageFileName = event.target.alt;
    const wasImageClicked = this.imageClicked(clickedImageFileName);
    if (wasImageClicked) {
      this.setState({
        imageFileNames: this.shuffle(this.state.imageFileNames),
        clickedImages: [],
        score: 0,
        feedback: "TRY AGAIN!",
        gameStatus: 2
      });
    }
    else {
      let newScore = this.state.score + 1;
      if (newScore === this.state.imageFileNames.length) {
        this.setState({
          imageFileNames: this.shuffle(this.state.imageFileNames),
          clickedImages: [],
          score: 0,
          bestScore: newScore,
          feedback: "GOOD JOB!",
          gameStatus: 1
        });
      }
      else {
        const clickedImagesCopy = this.state.clickedImages.slice();
        clickedImagesCopy.push(clickedImageFileName);
        const newBestScore = (newScore > this.state.bestScore) ? newScore : this.state.bestScore;
        this.setState({
          imageFileNames: this.shuffle(this.state.imageFileNames),
          clickedImages: clickedImagesCopy,
          score: newScore,
          bestScore: newBestScore,
          feedback: "CORRECT!",
          gameStatus: 0
        });
      }
    }
  };

  imageClicked = (clickedImageFileName) => {
    for (let index = 0; index < this.state.clickedImages.length; index++) {
      if (this.state.clickedImages[index] === clickedImageFileName) {
        return true;
      }
    }
    return false;
  };

  shuffle = (array) => {
    let currentIndex = array.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  };

  render() {
    return (
      <div>
        <Navbar score={this.state.score} bestScore={this.state.bestScore} feedback={this.state.feedback} gameStatus={this.state.gameStatus} />
        <ImageList imageFileNames={this.state.imageFileNames} clickHandler={this.clickHandle} gameStatus={this.state.gameStatus} />
      </div>
    );
  }
}

export default App;