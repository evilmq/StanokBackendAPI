import React, { useState } from 'react';
import plus from "../assets/plus.svg";
import '../css/QuestionList.css'

const QuestionList = () => {
  return (
    <div id="question-list">
        <Question
          id="1"
          header="Как сделать заказ?"
          desc="Нужно направить нам на электронную почты Zakaz@sdelaistanok.ru комплект чертежей и 3д моделей со спецификацией.
          
          Почему нам необходимы 3Д модели?

          Мы можем сразу загрузить 3Д модель в CAM и получить точное время обработки детали. Если есть только чертеж, то мы может только примерно оценить необходимое время обработки детали на станке.

          Почему нам необходимы чертежи?

          Чертежи содержать информацию, которая как правило не содержится в 3Д моделях, а именно: допуски и посадки, требования, информация о резьбах и т.д."
        />
        <Question
          id="2"
          header="Как мне быстрее получить предложение по стоимости и срокам?"
          desc="Желательно отправлять запрос с корпоративной почты, там мы сразу увидим, что Вы являетесь корпоративным заказчиком, с такими заказчиками мы работаем охотнее.

Если Вы скрываете на чертеже разработчика или вытираете часть основной надписи у нас появляется мысль, что Вы не являетесь владельцем данных чертежей.

Желательно, чтобы чертежи были в формате pdf, а 3Д модели в формате step/stp. Имена файлов одной и той-же детали были одинаковыми для чертежей и 3Д моделей."
        />
        <Question
          id="3"
          header="Какие основные факторы влияют на стоимость?"
          desc="Стоимость материала и его доступность.

Скорость обработки материала (самая высокая скорость обработки у пластиков, далее, в порядке уменьшения скорости, идут алюминиевые сплавы, цветные сплавы, чёрные стали, нержавеющие стали, жаропрочные сплавы, титановые сплавы).

Сложность обработки.

– Чем толще и больше режущий инструмент – тем быстрее он производит обработку.
– Наличие глубокого сверления – удорожает деталь
– Необходимость изготавливать оснастку.
– Наличие тонких стенок.
– необходимость много раз переворачивать и базировать деталь на станке.
– Необходимость приобретения нестандартного инструмента."
        />
        <Question
          id="4"
          header="Я хочу предоставить свой материал"
          desc="Да, мы изготавливаем изделия из материала заказчика, но нужно учитывать следующие особенности:

          Заготовку нужно за что-то закрепить
          Мы закупаем материал большими объёмами и у нас есть скидка."
        />
        <Question
          id="5"
          header="Почему мы просим для расчета стоимости 3Д модель?"
          desc="3Д модель позволяет загрузить ее в CAM модуль и получить точное станочное время обработки детали. 

          В этом случае минимизируется ошибка расчета времени изготовления и как следствие ошибка расчета стоимости детали."
        />
        <Question
          id="6"
          header="Почему первая деталь дороже последующей?"
          desc="Для первой детали есть перечень работы которые не выполняются для последующих, которые не делаются для последующих, а именно:

          Подготовка Карты обработки для ЧПУ.
          Проектирование оснастки (в случае необходимости)
          Администрирование заказа."
        />
    </div>
  );
};

const Question = ({ id, header, desc }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDescription = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="item">
      <div className="preview">
        <button onClick={toggleDescription} className="question-list-item">
          <div className="list-item-header">
            <p>{header}</p>
          </div>
          <div className="advance-image">
            <img src={plus} alt="" />
          </div>
        </button>
      </div>
      <div className={`advance-desc ${isOpen ? 'open' : ''}`}>
          <p dangerouslySetInnerHTML={{ __html: formatDescription(desc) }} />
      </div>
    </div>
  );
};

const formatDescription = (desc) => {
  return desc.replace(/\n/g, '<br>');
};

export default QuestionList; 