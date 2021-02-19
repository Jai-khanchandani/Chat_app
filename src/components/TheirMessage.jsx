// this form is used to send messages

const TheirMessage = ({ lastMessage, message }) => {
    const isFisrtMessageByUser = !lastMessage || lastMessage.sender.username != lastMessage.sender.username;

    return(
        <div className="message-row">
            {isFisrtMessageByUser && (
                <div
                    className="message-avatar"
                    style={{backgroundImage: `url(${message?.sender?.avatar})`}}
                />
            )}
            
            {message?.attachments?.length > 0
                ? (
                    <img 
                        src={message.attachments[0].file}
                        alt="message-attachment"
                        className="message-image"
                        style={{ marginLeft: isFisrtMessageByUser ? '4px' : '48px' }}
                    />
                ) : (
                    <div className="message" style={{ float: 'left', backgroundColor: '#CABCDC', marginLeft: isFisrtMessageByUser ? '4px' : '48px' }}>
                        {message.text}
                    </div>
                )
            }
             
        </div>
    );
}

export default TheirMessage;