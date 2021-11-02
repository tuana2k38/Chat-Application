import { PicCenterOutlined, SendOutlined } from "@ant-design/icons";
import { useState } from "react"
import { isTyping, sendMessage } from "react-chat-engine";

const MessageForm = (props) => {
    const [value, setValue] = useState('');
    const { chatId, creds } = props;

    const handleSubmit = (event) => {
        event.preventDefault();

        const text = value.trim();
        if (text.length > 0) sendMessage(creds, chatId, { text });

        setValue('');
    }
    const handleChange = (event) => {
        setValue(event.target.value);

        isTyping(props, chatId)
    }
    const handleUpload = (event) => {
        sendMessage(creds, chatId, { file: event.target.file, text: '' })
    }
    return (
        <form className="message-from" onSubmit={handleSubmit}>
            <input
                className="message-input"
                placeholder="Send a message ..."
                value={value}
                onChange={handleChange}
                onSubmit={handleSubmit}
            />
            <label htmlFor="upload-button">
                <span className="image-button">
                    <PicCenterOutlined className="picture-icon" />
                </span>
            </label>
            <input
                type="file"
                multiple={false}
                id="upload-button"
                style={{ display: 'none' }}
                onSubmit={handleUpload}
            />
            <button type="submit" className="send-button">
                <SendOutlined className="send-icon" />
            </button>
        </form>
    )
}
export default MessageForm;