import { useEffect, useState, useContext } from "react";

import auth from "../../../Service/auth";
import MessageBoxTemplate from "../../ComponentTemplates/MessageBoxTemplate/MessageBoxTemplate";
import AuthContext from '../../../contexts/AuthContext';

import './MessagesPage.css';

const MessagesPage = ({ history }) => {

    const { userId } = useContext(AuthContext);

    const [messages, setMessages] = useState([]);
    const [profiles, setProfiles] = useState([]);
    const [senders] = useState([]);

    useEffect(() => {
        auth.getAllProfiles(userId)
            .then(setProfiles);
    }, [userId]);

    useEffect(() => {
        auth.getMyMessages(userId)
            .then(setMessages);
    }, [userId]);

    messages.map(x => {
        if (!senders.hasOwnProperty(x.senderId)) {
            return senders[x.senderId] = [];
        }
        return senders[x.senderId].push({
            _id: x._id,
            title: x.title,
            description: x.description,
            senderUsername: x.senderUsername,
            receiverId: x.receiverId
        });
    });

    Object.entries(senders).map(x => {
        return profiles.map(y => {
            if (x[0] === y.userId) {
                x[1].imageUrl = y.imageUrl;
                x[1].username = y.username;
            }
            return x[1].imageUrl && x[1].username;
        });
    });

    return (
        <div className="main-container">
            <section className="friends-section">
                <h2 className="description">Messanger</h2>
                <div className="friends-section">
                    <ul>
                        <li className="postTemplate search-bar">
                            <form >
                                <input type="text" placeholder="Search friend"
                                />
                                <input type="submit" value="Search" />
                            </form>
                        </li>
                        {Object.entries(senders).map(x => {
                            return <MessageBoxTemplate
                                key={x[1][0]._id}
                                senderId={x[0]}
                                data={x[1]}
                                history={history}
                            />
                        }
                        )}
                    </ul>
                </div>
            </section>
        </div>
    );
}
export default MessagesPage;