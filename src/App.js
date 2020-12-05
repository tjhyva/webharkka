import './App.css';
import React, { useState } from 'react'
import Canvas from './components/Canvas'
import Button from './components/Button'

function App() {

  function refreshPage() {
    window.location.reload(false);
}

  return (
    <>
      <Button handleOnClick={refreshPage} />,
      <Canvas  />
    </>
  );
}

export default App;
