import {Navbar} from "./components/Nav/Navbar";
import {useState, lazy, Suspense} from "react";
import io from "socket.io-client";
import styled from "styled-components";

const socket = io.connect("http://localhost:3001");

const JoinForm = lazy(() => import("./components/JoinForm/JoinForm"));
const Chat = lazy(() => import( "./components/Chat/Chat"));

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
`

function App() {
    const [username, setUsername] = useState("");
    const [roomId, setRoomId] = useState("");
    const [showChat, setShowChat] = useState(false);

    return (<AppContainer>
            <Navbar/>
            <Suspense fallback={<div>Loading</div>}>
                {!showChat ? (
                    <JoinForm roomId={roomId} setRoomId={setRoomId} username={username} setUsername={setUsername}
                              setShowChat={setShowChat} socket={socket}/>) : (
                    <Chat socket={socket} username={username} roomId={roomId}/>)}
            </Suspense>
        </AppContainer>);
}

export default App;