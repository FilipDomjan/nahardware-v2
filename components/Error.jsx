import React from 'react';
import './Error.css';


function Error(){
    return(
        <>
            <div className="error-message">
                <div className="error-content">
                    <h1>This page is currently unavailable</h1>
                    <p>We have detected critical errors with this page upon deployment and has been disabled until we fix them. We are sorry for inconvenience and will be back as soon as possible.</p>
                </div>
            </div>
        </>
    )
}

export default Error;