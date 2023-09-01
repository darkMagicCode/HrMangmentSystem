import React, { Suspense, useEffect } from 'react'

// ** Router Import
import Router from './router/Router'

const App = () => {
  useEffect(() => {
    // Calculate the desired zoom level (90%)
    const desiredZoom = 0.8;
    
    // Calculate the current device pixel ratio
    const currentPixelRatio = window.devicePixelRatio;
    
    // Calculate the required zoom to achieve the desired zoom level
    const zoom = desiredZoom / currentPixelRatio;

    // Apply the zoom to the body element
    document.body.style.zoom = zoom.toString();
    
    // Cleanup by resetting the zoom when the component unmounts
  
  }, []);
  return (
    <Suspense fallback={null}>
      <Router />
    </Suspense>
  )
}

export default App
