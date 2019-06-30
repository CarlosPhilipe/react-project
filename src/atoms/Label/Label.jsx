import React from 'react';

function Label (props) {

  const {
    text,
  } = props
  return (
    <p>{text}</p>
  );
}

Label.defaultProps = {
  text: '',
}

export default React.memo(Label);
