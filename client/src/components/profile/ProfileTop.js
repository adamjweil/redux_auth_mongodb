import React from 'react'
import PropTypes from 'prop-types'
import TwitterIcon from './social/TwitterIcon';
import FacebookIcon from './social/FacebookIcon';
import LinkedinIcon from './social/LinkedinIcon';
import YoutubeIcon from './social/YoutubeIcon';
import InstagramIcon from './social/InstagramIcon';

const ProfileTop = ({ profile: { 
    status, 
    company, 
    location, 
    website, 
    social, 
    user: { username, avatar}
}
}) => {
    return (
        <div className="profile-top bg-primary p-2">
            <img
            className="round-img my-1"
            src={avatar}
            alt="Text"
            />
        <h1 className="large">{username}</h1>
        <p className="lead">
            {status} {company && <span>at {company} </span>}
        </p>
        <p>{location && <strong><span> {location} </span></strong>}</p>
        <p>{website && <span style={{textDecoration: 'underline'}}> {website} </span>}</p>
        <div className="icons my-1">
            
            {social && social.twitter && (
                <a href={social.twitter} target="_blank" rel="noopener noreferrer">
                    <TwitterIcon />
                </a>
            )}

            {social && social.facebook && (
                <a href={social.facebook}  target="_blank" rel="noopener noreferrer">
                    <FacebookIcon />
                </a>
            )}

            {social && social.twitter && (
                <a href={social.linkedin}  target="_blank" rel="noopener noreferrer">
                     <LinkedinIcon />
                </a>
            )}

            {social && social.youtube && (
                <a href={social.youtube}  target="_blank" rel="noopener noreferrer">
                    <YoutubeIcon />
                </a>
            )}

            {social && social.instagram && (
                <a href={social.instagram} target="_blank" rel="noopener noreferrer">
                  <InstagramIcon />
                </a>
            )} 
        </div>
      </div>
    );
};

ProfileTop.propTypes = {
    profile: PropTypes.object.isRequired
}

export default ProfileTop;
