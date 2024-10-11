import React from 'react';
import { gsap } from 'gsap';
import AppRoutes from './routes/AppRoutes'; // Ensure this path is correct

// Global GSAP configuration
gsap.config({
  force3D: true,
  lagSmoothing: 1000, // Handles frame drops more gracefully
});

function App() {
    return (
        <div className="App">
            <AppRoutes />
        </div>
    );
}

export default App;
