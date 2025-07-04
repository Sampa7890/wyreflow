import Home from "./Home";
import Career from "./Career";
import {Routes,Route} from 'react-router-dom'
function App() {
  return (
    <>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/career" element={<Career />} />
    </Routes>
    </>
  );
}

export default App;
