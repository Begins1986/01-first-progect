import React from 'react';
import s from "../../Profile.module.css";

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img className={s.content_img}
                     src="https://img.freepik.com/free-photo/landscape-of-morning-fog-and-mountains-with-hot-air-balloons-at-sunrise_335224-794.jpg?size=626&ext=jpg"
                     alt="img"/>
            </div>
            <div>
                ava+description
            </div>
        </div>
    );
};

export default ProfileInfo;