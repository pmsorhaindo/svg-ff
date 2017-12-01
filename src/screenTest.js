import React from "react";

class ScreenTest extends React.Component {
  render() {
    return (
      <div style={ { display: 'flex' } }> 
        <div style= { { flex: '0 1 auto'} }>
          <div className="sscr-target">Test</div>
        </div>
        <div style={ { flex: '1 0 auto' } }> </div>
      </div>
    );
  }
};

export default ScreenTest;
