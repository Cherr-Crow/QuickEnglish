import React, { useState } from "react";
import { FilmsData } from "../../Data/FilmsData";
import { Link, useSearchParams } from "react-router-dom";
import "./Video.css";

/*
 'title',
        'description',
        'director',
        'duration',
        'year',
        'genre',
        'poster_url',
        'link',
        'actors',
        'studio',
*/

// Определяем тип для фильма
interface Films {
   id: number;
   title: string;
   filter: string; // Добавьте поле filter из базы данных
   description: string;
   director: string;
   duration: number;
   year: string | number;
   genre: string;
   poster_url: string;
   link: string;
   actors: string;
   studio: string;
}

interface FilmListProps {
   films: Films[]; // Определяем тип для props
}

export function Video({ films }: FilmListProps) {
   // 1. Состояние для фильтра
   const [activeFilter, setActiveFilter] = useState<string | null>(null); // Начальное значение - null (нет фильтра)

   // 3. Фильтрация списка фильмов
   const filteredFilms = activeFilter
      ? films.filter((film) => film.filter === activeFilter)
      : films;

   // 2. Обработчик клика по кнопке фильтра
   const handleFilterClick = (filter: string | null) => { //изменен тип параметра
      setActiveFilter(filter);
   };

   return (
      <div className="container films">
         <h2 className="films__title">Список Фильмов</h2>
         <p className="films__descr">
            Слушайте аудиокниги на английском с параллельным переводом и просмотром значений к каждому слову. Добавляйте новые для
            вас слова в личный словарь для дальнейшего изучения.
         </p>
         <ul className="films__filter">
            <li className="films__filter-item">
               <button className="films__filter-btn" onClick={() => handleFilterClick(null)}>
                  Все
               </button>
            </li>
            <li className="films__filter-item">
               <button className="films__filter-btn" onClick={() => handleFilterClick("cartoon")}>
                  Мультфильмы
               </button>
            </li>
            <li className="films__filter-item">
               <button className="films__filter-btn" onClick={() => handleFilterClick("series")}>
                  Сериалы
               </button>
            </li>
            <li className="films__filter-item">
               <button className="films__filter-btn" onClick={() => handleFilterClick("film")}>
                  Фильмы
               </button>
            </li>
            <li className="films__filter-item">
               <button className="films__filter-btn" onClick={() => handleFilterClick("anime")}>
                  Аниме
               </button>
            </li>
         </ul>
         <ul className="films__list">
            {filteredFilms.map((film) => (
               <li className="films__item" key={film.id}>
                  <img className="films__img" src={film.poster_url} alt={film.title} />
                  <h3>{film.title}</h3>
                  <Link to={`/video/${film.id}`} key={film.id}>
                     <button className="films__btn">Смотреть</button>
                  </Link>
               </li>
            ))}
         </ul>
         {filteredFilms.length === 0 && <p>Нет фильмов для отображения.</p>}
      </div>
   );
}