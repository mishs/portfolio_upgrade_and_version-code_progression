import React, { Component } from 'react';
import { Tabs, Tab } from 'react-mdl';

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
          <Tab>Node.js</Tab>
          <Tab>MongoDB</Tab>
        </Tabs>

        <section className="project-grid">{this.toggleCategories()}</section>
      </div>
    );
  }
}

export default Projects;
