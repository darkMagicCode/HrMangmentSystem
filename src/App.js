import React, { Suspense, useEffect } from 'react'

// ** Router Import
import Router from './router/Router'

const App = () => {
  useEffect(() => {
    // Set the zoom level to 90% when the component mounts
    document.body.style.zoom = '90%';
 
  }, []);
  return (
    <Suspense fallback={null}>
      <Router />
    </Suspense>
  )
}

export default App
