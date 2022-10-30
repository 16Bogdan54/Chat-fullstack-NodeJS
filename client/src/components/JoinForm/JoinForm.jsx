import {Field} from "./Field";
import {FormContainer, Label, Button} from "./JoinFormStyles";

const JoinForm = ({username, setUsername, roomId, setRoomId, setShowChat, socket}) => {
    const joinRoom = () => {
        if (username && roomId) {
            socket.emit("join", roomId);
            setShowChat(true);
        }
    };

    return (
        <FormContainer>
            <h2>Join chat</h2>
            <Label>
                Name:
                <Field type="text" setter={setUsername}/>
            </Label>
            <Label>
                Room ID:
                <Field type="text" setter={setRoomId}/>
            </Label>
            <Button onClick={joinRoom}>Join</Button>
        </FormContainer>
    )
}

export default JoinForm;