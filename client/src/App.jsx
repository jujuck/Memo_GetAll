import { Outlet } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <main>
      <header>
        <h1>Get All Puzzle</h1>
      </header>

      <Outlet />
      <footer>
        Développé par la&nbsp;
        <a
          href="https://www.wildcodeschool.com/"
          className="wcs"
          target="_blank"
          rel="noopener noreferrer"
        >
          Wild Code School
        </a>
      </footer>
    </main>
  );
}

export default App;
