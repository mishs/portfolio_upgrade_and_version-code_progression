import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';

class Contact extends Component {
  render() {
    return (
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h3 style={{ marginRight: '30%' }}>Misheck Siwela</h3>
            <img
              src="https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png"
              alt="ava-pic"
              style={{
                height: '250px',
                marginLeft: '12%'
              }}
            />

            <p style={{ width: '75%', margin: 'auto', paddingTop: '1em' }}>
              Where does it come from? Contrary to popular belief, Lorem Ipsum
              is not simply random text. It has roots in a piece of classical
              Latin literature from 45 BC, making it over 2000 years old.
              Richard McClintock, a Latin professor at Hampden-Sydney College in
              Virginia, looked up one of the more obscure Latin
            </p>
          </Cell>
          <Cell col={6}>
            <h3>Contact Me</h3>
            <hr />
            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent
                    style={{ fontSize: '25px', fontFamily: 'Anton' }}
                  >
                    <i className="fa fa-phone-square" aria-hidden="true" />
                    071 325 3457{' '}
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent
                    style={{ fontSize: '25px', fontFamily: 'Anton' }}
                  >
                    <i className="fa fa-envelope" aria-hidden="true" />
                    mishsiwela@gmail.com{' '}
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent
                    style={{ fontSize: '25px', fontFamily: 'Anton' }}
                  >
                    <i className="fa fa-phone-square" aria-hidden="true" />
                    Website{' '}
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent
                    style={{ fontSize: '25px', fontFamily: 'Anton' }}
                  >
                    <i className="fa fa-s" aria-hidden="true" />{' '}
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent
                    style={{ fontSize: '25px', fontFamily: 'Anton' }}
                  >
                    <i className="fa fa-phone-square" aria-hidden="true" />
                    MySkypeID{' '}
                  </ListItemContent>
                </ListItem>
              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Contact;
