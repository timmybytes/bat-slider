import React from 'react';
// Always display Bat-Suit title (film where the suit appears) and
// year of appearance as the heading on change.
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
