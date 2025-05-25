import React from 'react';

const Tab1Iframe = () => {
  return (
    <div style={{ width: '100%', height: '100%', padding: '16px' }}>
      <iframe
        src="https://wikipedia.org"
        title="Wikipedia Frame"
        width="100%"
        height="600px"
        style={{
          border: 'none',
          borderRadius: '8px',
        }}
        loading="lazy"
      />
    </div>
  );
};

export default Tab1Iframe;
