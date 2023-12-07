import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PageWrapper from "./components/PageWrapper";
import Logo from "./components/Logo";
import Navigation from './components/Navigation';
import Test from './components/Test';
import { Routes, Route } from "react-router";
import { ABOUT_PATH, BLOG_PATH, COCTAIL_CATEGIRIES_PATH, HOME_PATH } from "./constants/constants";

const lor = `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad deserunt
veritatis excepturi dolores adipisci, quae facere sapiente odio saepe
voluptate, officiis voluptatibus sequi minima vel labore numquam maxime
enim esse.
Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad deserunt
veritatis excepturi dolores adipisci, quae facere sapiente odio saepe
voluptate, officiis voluptatibus sequi minima vel labore numquam maxime
enim esse.
Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad deserunt
veritatis excepturi dolores adipisci, quae facere sapiente odio saepe
voluptate, officiis voluptatibus sequi minima vel labore numquam maxime
enim esse.
Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad deserunt
veritatis excepturi dolores adipisci, quae facere sapiente odio saepe
voluptate, officiis voluptatibus sequi minima vel labore numquam maxime
enim esse.
Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad deserunt
veritatis excepturi dolores adipisci, quae facere sapiente odio saepe
voluptate, officiis voluptatibus sequi minima vel labore numquam maxime
enim esse.
Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad deserunt
veritatis excepturi dolores adipisci, quae facere sapiente odio saepe
voluptate, officiis voluptatibus sequi minima vel labore numquam maxime
enim esse.
Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad deserunt
veritatis excepturi dolores adipisci, quae facere sapiente odio saepe
voluptate, officiis voluptatibus sequi minima vel labore numquam maxime
enim esse.
Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad deserunt
veritatis excepturi dolores adipisci, quae facere sapiente odio saepe
voluptate, officiis voluptatibus sequi minima vel labore numquam maxime
enim esse.
Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad deserunt
veritatis excepturi dolores adipisci, quae facere sapiente odio saepe
voluptate, officiis voluptatibus sequi minima vel labore numquam maxime
enim esse.
Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad deserunt
veritatis excepturi dolores adipisci, quae facere sapiente odio saepe
voluptate, officiis voluptatibus sequi minima vel labore numquam maxime
enim esse.
Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad deserunt
veritatis excepturi dolores adipisci, quae facere sapiente odio saepe
voluptate, officiis voluptatibus sequi minima vel labore numquam maxime
enim esse.
Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad deserunt
veritatis excepturi dolores adipisci, quae facere sapiente odio saepe
voluptate, officiis voluptatibus sequi minima vel labore numquam maxime
enim esse.
Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad deserunt
veritatis excepturi dolores adipisci, quae facere sapiente odio saepe
voluptate, officiis voluptatibus sequi minima vel labore numquam maxime
enim esse.
Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad deserunt
veritatis excepturi dolores adipisci, quae facere sapiente odio saepe
voluptate, officiis voluptatibus sequi minima vel labore numquam maxime
enim esse.
Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad deserunt
veritatis excepturi dolores adipisci, quae facere sapiente odio saepe
voluptate, officiis voluptatibus sequi minima vel labore numquam maxime
enim esse.
Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad deserunt
veritatis excepturi dolores adipisci, quae facere sapiente odio saepe
voluptate, officiis voluptatibus sequi minima vel labore numquam maxime
enim esse.
Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad deserunt
veritatis excepturi dolores adipisci, quae facere sapiente odio saepe
voluptate, officiis voluptatibus sequi minima vel labore numquam maxime
enim esse.
Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad deserunt
veritatis excepturi dolores adipisci, quae facere sapiente odio saepe
voluptate, officiis voluptatibus sequi minima vel labore numquam maxime
enim esse.
Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad deserunt
veritatis excepturi dolores adipisci, quae facere sapiente odio saepe
voluptate, officiis voluptatibus sequi minima vel labore numquam maxime
enim esse.
Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad deserunt
veritatis excepturi dolores adipisci, quae facere sapiente odio saepe
voluptate, officiis voluptatibus sequi minima vel labore numquam maxime
enim esse.
Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad deserunt
veritatis excepturi dolores adipisci, quae facere sapiente odio saepe
voluptate, officiis voluptatibus sequi minima vel labore numquam maxime
enim esse.
Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad deserunt
veritatis excepturi dolores adipisci, quae facere sapiente odio saepe
voluptate, officiis voluptatibus sequi minima vel labore numquam maxime
enim esse.
Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad deserunt
veritatis excepturi dolores adipisci, quae facere sapiente odio saepe
voluptate, officiis voluptatibus sequi minima vel labore numquam maxime
enim esse.
Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad deserunt
veritatis excepturi dolores adipisci, quae facere sapiente odio saepe
voluptate, officiis voluptatibus sequi minima vel labore numquam maxime
enim esse.
Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad deserunt
veritatis excepturi dolores adipisci, quae facere sapiente odio saepe
voluptate, officiis voluptatibus sequi minima vel labore numquam maxime
enim esse.
Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad deserunt
veritatis excepturi dolores adipisci, quae facere sapiente odio saepe
voluptate, officiis voluptatibus sequi minima vel labore numquam maxime
enim esse.
Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad deserunt
veritatis excepturi dolores adipisci, quae facere sapiente odio saepe
voluptate, officiis voluptatibus sequi minima vel labore numquam maxime
enim esse.
Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad deserunt
veritatis excepturi dolores adipisci, quae facere sapiente odio saepe
voluptate, officiis voluptatibus sequi minima vel labore numquam maxime
enim esse.
Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad deserunt
veritatis excepturi dolores adipisci, quae facere sapiente odio saepe
voluptate, officiis voluptatibus sequi minima vel labore numquam maxime
enim esse.
Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad deserunt
veritatis excepturi dolores adipisci, quae facere sapiente odio saepe
voluptate, officiis voluptatibus sequi minima vel labore numquam maxime
enim esse.
Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad deserunt
veritatis excepturi dolores adipisci, quae facere sapiente odio saepe
voluptate, officiis voluptatibus sequi minima vel labore numquam maxime
enim esse.
Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad deserunt
veritatis excepturi dolores adipisci, quae facere sapiente odio saepe
voluptate, officiis voluptatibus sequi minima vel labore numquam maxime
enim esse.
Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad deserunt
veritatis excepturi dolores adipisci, quae facere sapiente odio saepe
voluptate, officiis voluptatibus sequi minima vel labore numquam maxime
enim esse.
Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad deserunt
veritatis excepturi dolores adipisci, quae facere sapiente odio saepe
voluptate, officiis voluptatibus sequi minima vel labore numquam maxime
enim esse.
Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad deserunt
veritatis excepturi dolores adipisci, quae facere sapiente odio saepe
voluptate, officiis voluptatibus sequi minima vel labore numquam maxime
enim esse.
Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad deserunt
veritatis excepturi dolores adipisci, quae facere sapiente odio saepe
voluptate, officiis voluptatibus sequi minima vel labore numquam maxime
enim esse.
Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad deserunt
veritatis excepturi dolores adipisci, quae facere sapiente odio saepe
voluptate, officiis voluptatibus sequi minima vel labore numquam maxime
enim esse.
Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad deserunt
veritatis excepturi dolores adipisci, quae facere sapiente odio saepe
voluptate, officiis voluptatibus sequi minima vel labore numquam maxime
enim esse.
Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad deserunt
veritatis excepturi dolores adipisci, quae facere sapiente odio saepe
voluptate, officiis voluptatibus sequi minima vel labore numquam maxime
enim esse.
Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad deserunt
veritatis excepturi dolores adipisci, quae facere sapiente odio saepe
voluptate, officiis voluptatibus sequi minima vel labore numquam maxime
enim esse.
Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad deserunt
veritatis excepturi dolores adipisci, quae facere sapiente odio saepe
voluptate, officiis voluptatibus sequi minima vel labore numquam maxime
enim esse.
Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad deserunt
veritatis excepturi dolores adipisci, quae facere sapiente odio saepe
voluptate, officiis voluptatibus sequi minima vel labore numquam maxime
enim esse.
Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad deserunt
veritatis excepturi dolores adipisci, quae facere sapiente odio saepe
voluptate, officiis voluptatibus sequi minima vel labore numquam maxime
enim esse.
Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad deserunt
veritatis excepturi dolores adipisci, quae facere sapiente odio saepe
voluptate, officiis voluptatibus sequi minima vel labore numquam maxime
enim esse.
Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad deserunt
veritatis excepturi dolores adipisci, quae facere sapiente odio saepe
voluptate, officiis voluptatibus sequi minima vel labore numquam maxime
enim esse.`;

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
      <PageWrapper>{lor}</PageWrapper>
      <Footer />
    </div>
  );
}

export default App;
