import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PageWrapper from "./components/PageWrapper";
import Logo from "./components/Logo";
import Navigation from './components/Navigation';
import { Routes, Route } from "react-router";
import { ABOUT_PATH, BLOG_PATH, HOME_PATH } from "./constants/constants";


function App() {
  return (
    <div className="App">
      <Header />
      <Navigation/>
      <Logo />
      <Routes>
          <Route path={HOME_PATH} element={HOME_PATH} />
          <Route path={ABOUT_PATH} element={ABOUT_PATH} />
          <Route path={BLOG_PATH} element={BLOG_PATH} />
          {/* <Route path={COCTAIL_CATEGIRIES_PATH} element={``} /> */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
