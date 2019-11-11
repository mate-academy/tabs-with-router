import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import SingleTab from './SingleTab';
import SingleContent from './SingleContent';

class Tabs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 'tab-1',
    };
  }

  onTabSelected = (tabNum) => {
    this.setState({
      activeTab: tabNum,
    });
  };

  render() {
    const { match, tabs } = this.props;

    return (
      <>
        <div className="ui top attached tabular menu">
          {tabs.map(tab => (
            <NavLink
              to={`${match.path}/${tab.id}`}
            >
              <SingleTab
                onTabSelected={() => this.onTabSelected(tab.id)}
                active={this.state.activeTab === tab.id}
                title={tab.title}
                key={tab.id}
              />
            </NavLink>
          ))
          }
        </div>
        {tabs.map(tab => (
          <SingleContent
            content={tab.content}
            active={this.state.activeTab === tab.id}
            key={tab.id}
          />
        ))
        }
      </>
    );
  }
}

export default Tabs;
