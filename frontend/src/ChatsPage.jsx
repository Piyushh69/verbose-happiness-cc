import { MultiChatSocket, MultiChatWindow, useMultiChatLogic } from 'react-chat-engine-advanced'

const ChatsPage = (props) => {
    const chatProps = useMultiChatLogic('157a750d-bb5b-4ff6-bb08-5696560f309f', props.user.username, props.user.secret);
    return (<div style={{height: '100vh'}}>
        <MultiChatSocket {...chatProps} />
        <MultiChatWindow {...chatProps} style = {{height: '100%'}} />
        </div>)
}

export default ChatsPage