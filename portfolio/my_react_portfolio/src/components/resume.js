import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';

class Resume extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{ textAlign: 'center' }}>
              <img
                src="https://www.shareicon.net/download/2015/09/18/103157_man_512x512.png"
                alt="avatar"
                style={{ height: '200px' }}
              />
            </div>
            <h2 style={{ paddingTop: '2em' }}>Misheck Siwela</h2>

            <h4 style={{ color: 'grey' }}>Web Developer</h4>
            <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
            <p>
              {' '}
              of Lorem Ipsum used since the 1500s is reproduced below for those
              interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum
              et Malorum" by Cicero are also reproduced in their exact original
              form, accompanied by English versions from the 1914 translation by
              H. Rackham.
            </p>
            <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
            <h5>Address</h5>
            <p>26 Heather Road, Cape Town- 7708</p>
            <h5>Phone</h5>
            <p>071 325 3457</p>
            <h5>Email</h5>
            <p>mishuct27@gmail.com</p>
            <h5>Website</h5>
            <p>mish@nemplify.com</p>
            <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
          </Cell>
          <Cell col={8} className="resume-right-col">
            <h2>Education</h2>

            <Education
              startYear={2005}
              endYear={2006}
              schoolName="Advanced Level"
              schoolDescription="Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown "
            />
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Resume;
