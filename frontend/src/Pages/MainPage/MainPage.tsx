import "./MainPage.css";

export function MainPage() {
    return (
        <section className="main">
            <div className="container">
                <h1 className="main__title">Quick<span className="main__title-span">English</span>: Твой путь
                    к свободному английскому!
                </h1>

                <p className="main__descr">Изучай английский быстро, эффективно и бесплатно!</p>

                <ul className="main__list">

                    <li className="main__item">
                        <h3 className="main__item-title">Грамматика, как по учебнику, только лучше!</h3>

                        <img  className="main__item-img" src="" alt="" />

                        <div>

                        </div>
                    </li>

                    <li className="main__item">
                        <h3 className="main__item-title">Расширяй словарный запас весело и эффективно!</h3>
                        <img className="main__item-img" src="" alt="" />

                        <div></div>
                    </li>

                    <li className="main__item">
                        <h3 className="main__item-title">Смотри фильмы и слушай книги на английском с удовольствием</h3>
                        <img  className="main__item-img" src="" alt="" />

                        <div></div>
                    </li>

                    <li className="main__item">
                        <h3 className="main__item-title">Тренируй разговорный английский в интерактивных упражнениях!</h3>
                        <img  className="main__item-img" src="" alt="" />

                        <div></div>
                    </li>

                </ul>

                <div></div>
            </div>
        </section>
    )
}