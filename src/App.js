import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Blog from "./components/Blog";
import Categories from "./components/Categories";
import Products from "./components/Products";
import { Routes, Route } from "react-router";
import { ABOUT_PATH, BLOG_PATH, HOME_PATH } from "./constants/constants";

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
      <Routes>
        <Route path={ADD_PRODUCTS_PATH} element={<AddProducts/>} />
        {/* <Route path={ABOUT_PATH} element={ABOUT_PATH} /> */}
        <Route path={BLOG_PATH} element={<Blog/>} />
        <Route path={CATEGIRIES_PATH} element={<Categories/>} />
        <Route path={PRODUCTS_PATH} element={<Products/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
