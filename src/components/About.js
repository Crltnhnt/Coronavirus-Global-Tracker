import React from 'react';
import './style.css';

function About() {

  return (
        <div className="about">
                <h1>About</h1>
                <hr/>
            <div>
                <p>
                Coronavirus disease 2019, or COVID-19, is a disease that can cause what doctors call a respiratory tract infection.
                It can affect your upper respiratory tract (sinuses, nose, and throat) or lower respiratory tract (windpipe and lungs).
                </p>
            </div>
            <div>
                <h2>Symptoms</h2>
                <hr/>
            </div>
            <div>
                <ul>
                    <li>Fever</li> <br/>
                    <li>Dry Cough</li> <br/>
                    <li>Fatigue</li>
                </ul>
            </div>
            <div>
                <h2>How to prevent the spread?</h2>
                <hr/>
            </div>
            <div>
                <ul>
                    <li>Wash your hands often with soap and water, or clean them with an alcohol-based sanitizer.</li> <br/>
                    <li>Practice social distancing.</li> <br/>
                    <li>Don’t touch your face.</li> <br/>
                    <li>Clean and disinfect.</li> <br/>
                </ul>
            </div>
            <div>
                <h2>Ways to help out</h2>
                <hr/>
            </div>
            <div>
                <ul>
                    <li><a href="http://covid19responsefund.org">Donate to the relief fund</a></li> <br/>
                    <li>Stay at home</li> <br />
                    <li>Make masks for others</li> <br />
                    <li>Practice social distancing</li>
                </ul>
            </div>
        </div>
  );
}

export default About;