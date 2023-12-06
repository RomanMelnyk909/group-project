
import './App.css';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Test from './components/Test';
import { Routes, Route } from "react-router";
import { ABOUT_PATH, BLOG_PATH, COCTAIL_CATEGIRIES_PATH, HOME_PATH } from "./constants/constants";
function App() {
  return (
    <div className="App">
     <Header />
     <Navigation/>
     <Routes>
          <Route path={HOME_PATH} element={HOME_PATH} />
          <Route path={ABOUT_PATH} element={ABOUT_PATH} />
          <Route path={BLOG_PATH} element={BLOG_PATH} />
          {/* <Route path={COCTAIL_CATEGIRIES_PATH} element={``} /> */}
      </Routes>
    </div>
  );
}

export default App;
