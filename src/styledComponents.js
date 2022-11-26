import styled from 'styled-components'

export const Button = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  outline: none;
  margin-right: 15px;
  color: ${props => props.color};
`

export const TextArea = styled.textarea`
  background-color: transparent;
  border: none;
  outline: none;
  padding: 20px;
  color: #f8fafc;
  height: 100%;
  font-size: 18px;
  text-decoration: none;
  font-weight: ${props => (props.bold ? 'bold' : 'normal')};
  font-style: ${props => (props.italic ? 'italic' : 'normal')};
  text-decoration: ${props => (props.underline ? 'underline' : 'normal')};
`
