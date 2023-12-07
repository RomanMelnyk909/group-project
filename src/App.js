import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PageWrapper from "./components/PageWrapper";
import Logo from "./components/Logo";

import { Routes, Route } from "react-router";
import { ABOUT_PATH, BLOG_PATH, HOME_PATH, CONTACT_PATH, HELP_PATH } from "./constants/constants";

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
        {lor}

      </PageWrapper>
      <Footer />
    </div>
  );
}

export default App;
