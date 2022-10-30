import {useState, useEffect} from "react";
import {
    ChatContainer,
    ChatBody,
    Text,
    StyledIcon,
    Time,
    Sender,
    MessageContainer,
    ScrollContainer,
    SendContainer,
    SendInput,
    SendButton,
    Banner
} from "./ChatStyles";

const Chat = ({socket, username, roomId}) => {
    const [currentMessage, setCurrentMessage] = useState("");
    const [messages, setMessages] = useState([]);

    const sendMessage = async () => {
        if (currentMessage) {
            const messageData = {
                room: roomId,
                author: username,
                messageText: currentMessage,
                time: `${new Date(Date.now()).getHours()}:${
                    (new Date(Date.now()).getMinutes() < 10 ? "0" : "") +
                    new Date(Date.now()).getMinutes()
                }`
            };

            await socket.emit("send", messageData);
            setMessages((list) => [...list, messageData]);
            setCurrentMessage("");
        }
    };

    useEffect(() => {
        socket.on("receive", (data) => {
            setMessages((list) => [...list, data]);
        });
    }, [socket]);

    return (<ChatContainer>
        <Banner>
            <h2>Live chat</h2>
        </Banner>
        <ChatBody>
            <ScrollContainer>
                {messages.map((message, index) => {
                    return (<MessageContainer username={username} message={message} key={index}>
                        <Sender>{username === message.author ? "You" : message.author}</Sender>
                        <Text>{message.messageText}</Text>
                        <Time>{message.time}</Time>
                    </MessageContainer>);
                })}
            </ScrollContainer>
        </ChatBody>
        <SendContainer>
            <SendInput
                type="text"
                placeholder="Say Hi"
                value={currentMessage}
                onChange={(e) => {
                    setCurrentMessage(e.target.value);
                }}
            />
            <SendButton onClick={sendMessage}><StyledIcon/></SendButton>
        </SendContainer>
    </ChatContainer>);
};

export default Chat;