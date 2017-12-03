import React from "react";
import { Base } from 'bw-axiom'

class ScreenTest extends React.Component {
  render() {
    return (
        <div xmlns="http://www.w3.org/1999/xhtml" style={ { color: "blue" } }>
            <h1 xmlns="http://www.w3.org/1999/xhtml" style={ { size: "40px" } }>
                <Base xmlns="http://www.w3.org/1999/xhtml">
                    Oh Hai
                </Base>
            </h1>
        </div>
    );
  }
}

export default ScreenTest;
