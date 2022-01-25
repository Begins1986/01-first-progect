import React from 'react';
import './Profile.modules.css';

const Profile = () => {
    return (
        <div>
            <div className='content'>
                <div>
                    <img className='content_img'
                         src="https://img.freepik.com/free-photo/landscape-of-morning-fog-and-mountains-with-hot-air-balloons-at-sunrise_335224-794.jpg?size=626&ext=jpg"
                         alt="img"/>
                </div>
                <div>
                    ava+description
                </div>
                <div>MyPost</div>
                <div>NewPost</div>
                <div>
                    <div>Post 1</div>
                    <div>Post 2</div>
                </div>
            </div>
        </div>
    );
};

export default Profile;