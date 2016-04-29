import React, { Component } from 'react';
import './PokerBack.scss';
import './font/font.scss';

class PokerBack extends Component {
  render() {
    return (
      <div className="two-three-ratio">
        <div className="poker poker-back">
          <div className="poker-back-conf common-back-style">
            <div className="back-logo">
              <span className="icon-trantect-logo trantect-logo-style"></span>
              <span className="icon-trantect-text trantect-text-style"></span>
              <span className="icon-planpoker-text planpoker-text-style"></span>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default PokerBack;