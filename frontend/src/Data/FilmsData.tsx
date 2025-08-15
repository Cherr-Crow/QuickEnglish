import { useState, useEffect, useRef } from 'react';

// Определяем тип для фильма
export interface Film {
    id: number;
    title: string;
    description: string;
    director: string;
    duration: number;
    year: string | number;
    genre: string;
    poster_url: string;
    link: string;
    actors: string;
    studio: string;
    filter: string;
}

// Хук для загрузки данных
export const FilmsData = (): Film[] => {
    const [films, setFilms] = useState<Film[]>([]);

    // Используем useRef для хранения данных между рендерами
    const filmsRef = useRef(films);

    // Обновляем useRef при изменении films
    useEffect(() => {
        filmsRef.current = films;
    }, [films]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://127.0.0.1:8000/api/films');

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const data = await response.json();

                console.log("Data from API:", data);

                // Обработка данных: преобразование, если это необходимо, и проверка типов
                const filmsArray: Film[] = Array.isArray(data)
                    ? data.map(film => ({
                        ...film,
                        id: (typeof film.id === 'string') ? parseInt(film.id, 10) : film.id, // Преобразуем id в число, если строка
                        // Добавьте здесь другие преобразования, если это необходимо
                    }))
                    : data
                        ? [{
                            ...data,
                            id: (typeof data.id === 'string') ? parseInt(data.id, 10) : data.id,  // Преобразуем id в число, если строка
                            // Добавьте здесь другие преобразования, если это необходимо
                        }]
                        : [];

                setFilms(filmsArray);
            } catch (error) {
                console.error('Ошибка при загрузке данных:', error);
            }
        };

        fetchData();
    }, []);

    // Возвращаем данные из useRef, чтобы они были доступны между рендерами
    return filmsRef.current;
};