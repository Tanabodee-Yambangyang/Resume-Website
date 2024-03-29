import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "./Home/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element = {<Home />}/>
          <Route path="/" element = {<Home />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
