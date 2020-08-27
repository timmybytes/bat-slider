import React from "react";

function Header(props) {
  return (
    <div>
      <h1 className="batslider-header">
        <em>
          "{props.suitTitle}" ({props.suitYear})
        </em>
      </h1>
    </div>
  );
}

export default Header;
