import React from 'react';
import Tab from './Tab';
const Tabs = props => {
  return (
    {props.tabs.map(tabs => (
    <div className="tabs">
      <div className={tabs.topics}>
        <span className={tabs.title}>TRENDING TOPICS:</span>
        {/* map over the tabs provided on your props, create a new Tab component for each one.
            give the tab component a `selectTabHandler`, the `selectedTab`, and the `tab` itself as props*/}
      </div>
    </div>
    ))}
  );
          }

// Make sure to use PropTypes to validate your types!

Tabs.propTypes = {
  tabs:  PropTypes.string.isRequired
}
export default Tabs;
