import {Component} from 'react'

import {
  MemeGeneratorMainContainer,
  MemeGeneratorHeading,
  GenerateButton,
  InputLabel,
  InputContainer,
  ResponsiveContainer,
  SelectFontSizeContainer,
  BackgroundImageContainer,
  TopText,
  FormContainer,
  BottomText,
} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]
// Write your code here

class MemeGenerator extends Component {
  state = {
    imageUrl: '',
    topText: '',
    bottomText: '',
    selectedValue: fontSizesOptionsList[0].optionId,
    generateImage: false,
  }

  onChangeSelectedValue = e => {
    this.setState({selectedValue: e.target.value})
  }

  onChangeBottomText = e => {
    this.setState({bottomText: e.target.value})
  }

  onChangeTopText = e => {
    this.setState({topText: e.target.value})
  }

  onChangeImageUrl = e => {
    this.setState({imageUrl: e.target.value})
  }

  showGeneratedImage = () => {
    const {selectedValue, imageUrl, topText, bottomText} = this.state

    return (
      <BackgroundImageContainer bgImage={imageUrl} data-testid="meme">
        <TopText fontSize={selectedValue}>{topText}</TopText>
        <BottomText fontSize={selectedValue}>{bottomText}</BottomText>
      </BackgroundImageContainer>
    )
  }

  onClickGenerateImage = e => {
    e.preventDefault()
    const {generateImage} = this.state
    this.setState({generateImage: !generateImage})
  }

  render() {
    const {imageUrl, topText, bottomText, generateImage} = this.state
    return (
      <MemeGeneratorMainContainer>
        <ResponsiveContainer>
          <MemeGeneratorHeading>Meme Generator</MemeGeneratorHeading>
          {generateImage && this.showGeneratedImage()}

          <FormContainer onSubmit={this.onClickGenerateImage}>
            <InputLabel htmlFor="imageUrl">Image URL</InputLabel>

            <InputContainer
              placeholder="Enter the Image URL"
              type="text"
              id="imageUrl"
              value={imageUrl}
              onChange={this.onChangeImageUrl}
            />
            <InputLabel htmlFor="top-text">Top Text</InputLabel>
            <InputContainer
              placeholder="Enter the Top Text"
              type="text"
              id="top-text"
              value={topText}
              onChange={this.onChangeTopText}
            />
            <InputLabel htmlFor="bottom-text">Bottom Text</InputLabel>

            <InputContainer
              placeholder="Enter the Bottom Text"
              type="text"
              id="bottom-text"
              value={bottomText}
              onChange={this.onChangeBottomText}
            />
            <InputLabel htmlFor="fontSize">Font Size</InputLabel>
            <SelectFontSizeContainer id="fontSize">
              {fontSizesOptionsList.map(each => (
                <option
                  value={each.optionId}
                  key={each.optionId}
                  onChange={this.onChangeSelectedValue}
                >
                  {each.displayText}
                </option>
              ))}
            </SelectFontSizeContainer>

            <GenerateButton type="submit">Generate</GenerateButton>
          </FormContainer>
        </ResponsiveContainer>
      </MemeGeneratorMainContainer>
    )
  }
}

export default MemeGenerator
