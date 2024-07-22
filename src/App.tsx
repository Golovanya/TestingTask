
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import Layout from './Pages/Layout'
import { Theme, presetGpnDefault  } from "@consta/uikit/Theme";
import Main from './Pages/Main';
import FirstTask from './Pages/Task1';
import SecondTask from './Pages/Task2';
function App() {

  return (
    <Theme preset={presetGpnDefault }>
      <BrowserRouter>
       <Routes>
          <Route path="/" element={<Layout />}>
          <Route index element={<Main />}/>
          <Route path='task1' element={<FirstTask />}/>
          <Route path='task2' element={<SecondTask />}/>
          </Route>
       </Routes>
      </BrowserRouter>
    </Theme>
  )
}

export default App
