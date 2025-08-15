import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { MainPage } from './Pages/MainPage/MainPage';
import { Audiobooks } from './Pages/Audiobooks/Audiobooks';
import { Video } from "./Pages/Video/Video";
import { Grammar } from "./Pages/Grammar/Grammar";
import { Workout } from "./Pages/Workout/Workout";
import { Dictionary } from "./Pages/Dictionary/Dictionary";
import logo from './assets/logo.svg'; // ИМПОРТ
import { FilmsData } from "./Data/FilmsData";
import "./app.css";
import { VideoInfoPage } from "./Pages/VideoInfoPage/VideoInfoPage";

export function App() {
  console.log(FilmsData(), "app")
  return (
    <BrowserRouter>
      <header className="header">


        <div className="header__bg">
          <div className="container header__block">
            <div className="logo">
              <Link to={"/"}>
                <img src={logo} alt="logo" />
              </Link>
            </div>

            <nav className="navMenu">
              <div className="navMenu__link"><Link to={"/audiobooks"}>Аудиокниги</Link></div>
              <div className="navMenu__link"> <Link to={"/films"}>Видеоконтент</Link></div>
              <div className="navMenu__link"><Link to={"/grammar"}>Грамматика</Link></div>
              <div className="navMenu__link"><Link to={"/workout"}>Тренировки</Link></div>
              <div className="navMenu__link"> <Link to={"/dictionary"}>Словарь</Link></div>

            </nav>
          </div>
        </div>

          <div className="header__bg container">
            <button className="header__button">Войти</button>
            <button className="header__button">Зарегестрироваться</button>
          </div>

      </header>

      <main className="content">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/audiobooks" element={<Audiobooks />} />
          <Route path="/films" element={<Video films={FilmsData()} />} />
          <Route path="/grammar" element={<Grammar />} />
          <Route path="/workout" element={<Workout />} />
          <Route path="/dictionary" element={<Dictionary />} />
          <Route path="/video/:videoid" element={<VideoInfoPage />} />
        </Routes>
      </main>


      <footer className="footer">

      </footer>
    </BrowserRouter>
  );
}