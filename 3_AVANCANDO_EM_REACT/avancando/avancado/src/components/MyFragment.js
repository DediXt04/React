import React from 'react';

const MyFragment = ({propFragment}) => {
    return (
        <>
            <h2>Primeiro título</h2>
            <h3>Segundo título</h3>
            <h4>{propFragment}</h4>
        </>
    );
};


export default MyFragment;