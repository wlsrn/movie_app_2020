import React from "react";

function About(props) {
    console.log(props);
    return( 
        <div>
            <span>
                About this page:
                I built it because I love movies.
            </span>
            <span>-George Orwell,</span>
        </div>
    );
}

export default About;