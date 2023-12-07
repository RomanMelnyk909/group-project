import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PageWrapper from "./components/PageWrapper";
import Logo from "./components/Logo";

import { Routes, Route } from "react-router";
import { ABOUT_PATH, BLOG_PATH, HOME_PATH } from "./constants/constants";


function App() {
  return (
    <div className="App">
      <Header />
      <Navigation/>
      <Logo />
      <Routes>
        <Route path={CONTACT_PATH} element={CONTACT_PATH} />
        <Route path={HOME_PATH} element={HOME_PATH} />
        <Route path={ABOUT_PATH} element={ABOUT_PATH} />
        <Route path={BLOG_PATH} element={BLOG_PATH} />
        <Route path={HELP_PATH} element={HELP_PATH} />
        {/* <Route path={COCTAIL_CATEGIRIES_PATH} element={``} /> */}
      </Routes>
      <PageWrapper>
        <Header />

      </PageWrapper>
      <Footer />
    </div>
  );
}

export default App;
