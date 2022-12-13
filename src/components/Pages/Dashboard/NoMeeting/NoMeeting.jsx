import React from 'react';
import './NoMeeting.css';

const NoMeeting = () => {
    return (
        <section>
            <div className="no-meeting text-center">
                <img draggable="false" src="assets/images/no-meeting.png" alt="no-meeting" />
                <h4>You have no scheduled meetings</h4>
            </div>
        </section>
    );
};

export default NoMeeting;