import React from 'react';

const GoBackButton = () => {

  return (
    <div style={styles.container}>
      <button onClick={() => {window.location.reload()}} style={styles.button}>
        <span style={styles.text}>Back</span>
      </button>
    </div>
  );
};

// Styles
const styles = {
  container: {
    position: 'relative', // Set parent div to relative to allow absolute positioning inside it
    width: '100%', // Ensure the container takes up full width
    height: '100%', // Or a specific height if needed
  },
  button: {
    position: 'absolute', // Position it relative to its parent div
    top: '20px',   // Position from the top of the div
    right: '20px', // Position from the right of the div
    padding: '8px 16px',  // Smaller button size
    fontSize: '14px',  // Smaller text
    fontWeight: 'bold',
    backgroundColor: '#1e90ff',  // Light blue color
    color: 'white',
    border: 'none',
    borderRadius: '50px',  // Rounded corners
    cursor: 'pointer',
    transition: 'all 0.3s ease-in-out',
    boxShadow: '0 4px 8px rgba(30, 144, 255, 0.2)',  // Subtle blue shadow
    textDecoration: 'none',
    textAlign: 'center',
  },
  text: {
    marginRight: '8px',
  },
};

export default GoBackButton;
