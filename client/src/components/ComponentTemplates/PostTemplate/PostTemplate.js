import { NavLink } from "react-router-dom";

import './PostTemplate.css';

const PostTemplate = ({ data, profile }) => {
    return (
        <li className="postTemplate">
            <div className="postTemplate-container">
                <div className="user-info">
                    <NavLink to={`/profiles/${data.userId}`}>  <img className="profile-image"
                        src={profile?.imageUrl || 'https://cdn3.vectorstock.com/i/thumb-large/53/52/person-private-userpic-business-character-profile-vector-23565352.jpg'} /></NavLink>
                    <p className="username-paragraph">{data.username} post:</p>
                </div>
                <div className="meme-info">
                    <p>{data.description}</p>
                    <NavLink to={`/details/${data._id}`}><img src={data.imageUrl} /></NavLink>
                    <div className="post-info">
                    </div>
                </div>
            </div>
        </li>
    );
}
export default PostTemplate;