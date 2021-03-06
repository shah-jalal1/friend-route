import React from 'react';
import { Link } from 'react-router-dom';

const friend = (props) => {
    const {name, email, id} = props.friend;
    const friendStyle = {
        border: '1px solid purple',
        margin: '20px',
        padding: '20px',
        borderRadius: '20px'
    }
    return (
        <div style={friendStyle}>
            <h2>Name: {name}</h2>
            <p>Email: {email}</p>
            <p>Id: <Link to={`/friend/${id}`}>Show Details of ID: {id}</Link></p>
        </div>
    );
};

export default friend;