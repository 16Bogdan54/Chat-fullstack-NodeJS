import styled from "styled-components";

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  height: fit-content;
  justify-content: center;
  align-items: center;
  margin: auto;
  padding: 2rem;
  background-image: linear-gradient(to right top, #d295bf, #c083b6, #ac71ae, #9661a7, #7e52a0);
  color: aliceblue;
  border-radius: 20px;
`

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin: .5rem 0;
`

export const Button = styled.button`
  background-image: linear-gradient(to right, #29274c, #3b3261, #4f3d77, #65488c, #7e52a0);
  color: #e9e9e9;
  border: none;
  padding: .4rem 1.7rem;
  font-size: 1.3rem;
  border-radius: 15px;
  cursor: pointer;
  transition: transform .3s ease;
  &:hover {
    transform: translateY(-4px);
  }
  &:active {
    transform: translateY(-4px);
  }
  &:focus {
    transform: translateY(-4px);
  }
`

export const Input = styled.input`
  border: none;
  border-radius: 10px;
  padding: .5rem;
  margin: .4rem 0;
  transition: outline .3s ease;
  cursor: pointer;

  &:focus {
    outline: 3px solid #8F8CC2;
  }

  &:hover {
    outline: 3px solid #8F8CC2;
  }
`