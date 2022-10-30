import styled from "styled-components";
import ScrollToBottom from "react-scroll-to-bottom";
import {AiOutlineSend} from "react-icons/ai";

export const ChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80vw;
  height: 70vh;
  align-items: center;
  margin: auto;
  background-image: linear-gradient(to right top, #d295bf, #c083b6, #ac71ae, #9661a7, #7e52a0);
  color: aliceblue;
  border-radius: 20px;
  padding: 1rem;
`

export const Banner = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 10%;
  width: 100%;
`

export const ChatBody = styled.div`
  height: 85%;
  width: 100%;
  overflow: hidden;
`

export const ScrollContainer = styled(ScrollToBottom)`
  height: 100%;
  width: 100%;
  overflow-y: scroll;
  overflow-x: hidden;
  padding: 0 1.1rem;
  margin: 1rem 0;
  &::-webkit-scrollbar {
    display: none;
  }
`

export const MessageContainer = styled.div`
  background-color: ${props => props.username === props.message.author ? "#29274C" : "#7E52A0"};
  width: auto;
  height: auto;
  max-width: 80%;
  //width: fit-content;
  //height: fit-content;
  padding: 1rem;
  margin: .4rem 0;
  border-radius: 15px;
  overflow-wrap: break-word;
  word-break: break-word;
`

export const Sender = styled.h3`
  margin: 0;
`

export const Text = styled.p`
  margin: .4rem 0;
  width: auto;
  height: auto;
`

export const Time = styled.span`
  margin: 0;
`

export const SendContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 10%;
  margin-top: 10px;
`

export const SendInput = styled.input`
  height: 75%;
  width: 85%;
  border-radius: 10px 0 0 10px;
  border: none;
  outline: none;
  padding: .5rem;
`

export const SendButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 10%;
  background-color: #7E52A0;
  padding: .3rem;
  border: none;
  cursor: pointer;
  border-radius: 0 10px 10px 0;
`

export const StyledIcon = styled(AiOutlineSend)`
  font-size: 1.5rem;
  color: white;
  margin: 0;
  padding: 0;
`