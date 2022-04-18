import React from 'react';

const Blogs = () => {
    return (
        <div className='container'>
            <div>
                <h3><b>*</b> Difference between authorization and authentication</h3>
                <p><b>Authentication:-</b> Authentication works through passwords, one-time pins, biometric information, and other information provided or entered by the user.Authentication is the first step of a good identity and access management process</p>
                <p><b>Authorization:-</b>Authorization works through settings that are implemented and maintained by the organization.Authorization always takes place after authentication.</p>
                <p>Simply put, authentication is the process of verifying who someone is, whereas authorization is the process of verifying what specific applications, files, and data a user has access to.
                    The situation is like that of an airline that needs to determine which people can come on board.</p>

            </div>
            <div>
                <h3><b>*</b> Why are you using firebase?What other options do you have to implement authentication?</h3>
                <p>Firebase helps me build and run successful apps. Backed by Google, loved by developers. Accelerate app development with fully managed backend infrastructure. Learn more today. Boost App Engagement. Accelerate Development. Cross-Platform Solutions.</p>
                
                <p>Usually, authentication by a server entails the use of a user name and password. Other ways to authenticate can be through cards, retina scans, voice recognition, and fingerprints.</p>

            </div>
            <div>
                <h3> <b>*</b>What other services does firebase provide other than authentication</h3>
                <ul>
                    <li>Parse - Open Source Backend Platform;</li>
                    <li>Back4app - Parse Hosting Platform;</li>
                    <li>Kinvey - Mobile Backend as a Service (mBaaS)</li>
                    <li>Backendless - Mobile Backend and API Services Platform;.</li>
                    <li>Pubnub - Real-time APIs and Global Messaging;</li>
                    <li>Kumulos - App Performance Management;</li>
                    <li>NHost - Accelerates development and provides full control;</li>
                    <li>Amplify JS - Open-source Javascript framework;</li>
                    <li>Heroku - Platform as a service backed by Salesforce.</li>
                </ul>

            </div>
        </div>
    );
};

export default Blogs;