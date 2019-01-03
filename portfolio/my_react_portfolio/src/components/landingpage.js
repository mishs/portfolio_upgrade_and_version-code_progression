import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
//  ms- check how to import from within project
// import Image from './images';

class Landing extends Component {
  render() {
    return (
      <div style={{ width: '100%', margin: 'auto' }}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              className="profile-image"
              src="https://images.pexels.com/photos/712786/pexels-photo-712786.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt="selfie-profile-pic"
            />
            <div className="profile-banner-text">
              <h1>Junior Web Developer</h1>

              <hr />

              <p>
                HTML5/CSS3 | JavaScript | Bootstrap | MERN: (React | Express |
                Nodejs | TDD | MongoDB) <br />
                <span style={{ fontSize: '14px' }}>
                  NB: Express and MongoDB; currently just courses done but no
                  'work' experience.
                </span>
              </p>

              <div className="social-links">
                {/* {LinkedIn} */}
                <a
                  href="http://google.com"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i class="fab fa-linkedin-in" aria-hidden="true" />
                </a>

                {/* {Github} */}
                <a
                  href="http://google.com"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fab fa-github-square" aria-hidden="true" />
                </a>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Landing;
