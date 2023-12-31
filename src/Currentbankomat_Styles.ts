import styled from "styled-components";

const Banknote = styled.div`
  background-color: ${props => {
    if (props.color === 'greenyellow') return 'greenyellow'
    return 'deepskyblue'
}};
  width: 300px;
  height: 150px;
  margin: 10px;
  border-radius: 30px;
`

const Name = styled.span`
  display: flex;
  justify-content: center;
  font-size: 30px;
  margin-top: 10px;
`

const Nominal = styled.span`
  display: flex;
  justify-content: center;
  font-size: 30px;
`

const SerialNumber = styled.span`
  display: flex;
  justify-content: center;
  color: green;
  font-size: 20px;
  margin: 15px;
`

export const S = {
    Banknote,
    Name,
    Nominal,
    SerialNumber
}