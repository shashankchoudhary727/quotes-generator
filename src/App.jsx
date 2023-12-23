import Navbar from "./Navbar";
import Quote from "./Quote";
import Jokes from "./Jokes";

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
        <Routes>
          <Route path="/" element={<Quote />} />
          <Route path="/jokes" element={<Jokes />} />
        </Routes>
    </>
  );
}

export default App;