import {Component} from 'react'
import {VscBold} from 'react-icons/vsc'
import {GoItalic} from 'react-icons/go'
import {AiOutlineUnderline} from 'react-icons/ai'
import {Button, TextArea} from './styledComponents'

import './App.css'

class App extends Component {
  state = {isBold: false, isItalic: false, isUnderline: false}

  onClickBold = () => {
    this.setState(prevState => ({isBold: !prevState.isBold}))
  }

  onClickItalic = () => {
    this.setState(prevState => ({isItalic: !prevState.isItalic}))
  }

  onClickUnderline = () => {
    this.setState(prevState => ({isUnderline: !prevState.isUnderline}))
  }

  render() {
    const {isBold, isItalic, isUnderline} = this.state
    const bold = isBold ? '#faff00' : '#f1f5f9'
    const italic = isItalic ? '#faff00' : '#f1f5f9'
    const underline = isUnderline ? '#faff00' : '#f1f5f9'
    return (
      <div className="bg-container">
        <div className="card-container">
          <div>
            <h1 className="main-heading">Text Editor</h1>
            <img
              src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
              alt="text editor"
              className="image"
            />
          </div>
          <div className="editor-container">
            <ul className="fonts-container">
              <li>
                <Button
                  data-testid="bold"
                  onClick={this.onClickBold}
                  color={bold}
                >
                  <VscBold size={25} />
                </Button>
              </li>
              <li>
                <Button
                  data-testid="italic"
                  onClick={this.onClickItalic}
                  color={italic}
                >
                  <GoItalic size={25} />
                </Button>
              </li>
              <li>
                <Button
                  data-testid="underline"
                  onClick={this.onClickUnderline}
                  color={underline}
                >
                  <AiOutlineUnderline size={25} />
                </Button>
              </li>
            </ul>
            <hr className="hr-line" />
            <TextArea
              rows="12"
              cols="52"
              bold={isBold}
              italic={isItalic}
              underline={isUnderline}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default App
