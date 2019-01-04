import React, { Component } from 'react';
import {
  Tabs,
  Tab,
  Grid,
  Cell,
  Card,
  CardActions,
  CardMenu,
  CardText,
  CardTitle
} from 'react-mdl';

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {
    if (this.state.activeTab === 0) {
      return (
        <div>
          <h1>This is React</h1>
        </div>
      );
    } else if (this.state.activeTab === 1) {
      return (
        <div>
          <h1>HTML5 and CSS3 </h1>
        </div>
      );
    } else if (this.state.activeTab === 2) {
      return (
        <div>
          <h1>Bootstrap</h1>
        </div>
      );
    } else if (this.state.activeTab === 3) {
      return (
        <div>
          <h1>JavaScript</h1>
        </div>
      );
    } else if (this.state.activeTab === 4) {
      return (
        <div>
          <h1>Applications </h1>
        </div>
      );
    } else if (this.state.activeTab === 5) {
      return (
        <div>
          <h1>Node, Express and MongoDB </h1>
        </div>
      );
    }
  }

  render() {
    return (
      <div className="technologies-tabs">
        <Tabs
          activeTab={this.state.activeTab}
          onChange={tabId => this.setState({ activeTab: tabId })}
          ripple
        >
          <Tab>React</Tab>
          <Tab>HTML and CSS3</Tab>
          <Tab>Bootstrap</Tab>
          <Tab>JavaScript</Tab>
          <Tab>Apps</Tab>
          <Tab>Node.JS, Express and MongoDB</Tab>
        </Tabs>

        <section className="project-grid">{this.toggleCategories()}</section>
      </div>
    );
  }
}

export default Projects;
