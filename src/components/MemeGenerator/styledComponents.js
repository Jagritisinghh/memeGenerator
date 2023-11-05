// Style your components here
import styled from 'styled-components'

export const MemeGeneratorMainContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;
`

export const ResponsiveContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  justify-content: flex-start;
`

export const MemeGeneratorHeading = styled.h1`
  color: #35469c;
  font-family: 'Open Sans';
  font-size: 28px;
  text-align: center;
  font-weight: bold;
`

export const GenerateButton = styled.button`
  background-color: #0b69ff;
  color: white;
  border: none;
  outline: none;
  font-family: 'Roboto';
  font-size: 18px;
  border-radius: 8px;
  padding: 10px;
  align-self: flex-start;
  padding-right: 16px;
  padding-left: 16px;
`

export const InputLabel = styled.label`
  font-family: 'Open Sans';
  font-size: 18px;
  color: #7e858e;
  margin-bottom: 12px;
`
export const InputContainer = styled.input`
  font-family: 'Open Sans';
  font-size: 18px;
  color: #5a7184;
  padding: 18px;
  border-radius: 8px;
  border: 1px solid #d7dfe9;
  width: 100%;
  margin-bottom: 12px;
`

export const SelectFontSizeContainer = styled.select`
  font-family: 'Open Sans';
  font-size: 18px;
  color: #5a7184;
  padding: 18px;
  border-radius: 8px;
  border: 1px solid #d7dfe9;
  width: 100%;
  margin-bottom: 12px;
`
export const BackgroundImageContainer = styled.div`
  height: 40%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  background-image: ${props => `url(${props.bgImage})`};
`

export const TopText = styled.p`
  color: white;
  font-family: 'Open Sans';
  font-size: ${props => props.fontSize}px;
`
export const BottomText = styled(TopText)`
  justify-content: flex-end;
`

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`
