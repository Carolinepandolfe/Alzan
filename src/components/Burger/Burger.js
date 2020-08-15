import React from 'react';
import './Burger.css';

function Burger() {
  return (
    <React.Fragment className="wrapper">
      <div className="wrapper__checkox">
        <input type="checkbox" id="toggle" />
        <label htmlFor="toggle" className="checkbox">
          <span className="trace" />
          <span className="trace" />
          <span className="trace" />
        </label>
      </div>

    </React.Fragment>

  );
}

export default Burger;
