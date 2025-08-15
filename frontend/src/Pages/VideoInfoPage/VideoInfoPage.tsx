
import { useParams } from "react-router-dom";
import { FilmsData } from "../../Data/FilmsData";
import type { Film } from "../../Data/FilmsData"; // ИЗМЕНЕНИЕ ЗДЕСЬ
import "./VideoInfoPage.css"

export function VideoInfoPage() {

 const { videoid } = useParams();

  const films: Film[] = FilmsData();

  // **ВАЖНО:** Проверка на наличие filmId перед преобразованием
  const filmIdNumber = videoid ? parseInt(videoid, 10) : null;

  // Логирование для отладки
  console.log("filmId from URL:", videoid);
  console.log("filmIdNumber:", filmIdNumber);

  const film: Film | undefined = films.find(f => f.id === filmIdNumber);


  if (!films || films.length === 0) {
    return <p>Загрузка...</p>;
  }

  if (!film) {
    console.log("Film not found. filmIdNumber:", filmIdNumber, "films:", films);
    return <p>Фильм не найден.</p>;
  }

  console.log(films, "films");

    return (
        <div className="container info">
            <h2 className="info__title">{film?.title}</h2>

            <p className="info__descr">{film.description}</p>

            <ul className="info__list">
                <li className="info__item">
                    <span>Год выпуска:</span> {film.year}
                </li>

                <li className="info__item">
                    <span>Жанр:</span> {film.genre}
                </li>

                <li className="info__item">
                    <span>Продолжительность:</span> {film.duration}
                </li>

                <li className="info__item">
                    <span>Режиссёр:</span> {film.director}
                </li>

                <li className="info__item">
                    <span>В ролях:</span> {film.actors}
                </li>

            </ul>

            <iframe className="info__video" src={film.link} width="100%" height="640px" allowFullScreen></iframe>

        </div>
    )
}