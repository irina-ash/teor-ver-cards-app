import React, { useCallback, useState } from 'react';
import './App.css';
import { cards, suits, values } from './constants/cards';
import { calcOneCard } from './helpers/probability';
import { ICard } from './types/card';

const App = () => {
  const [cardItems, setCardItems] = useState<ICard[]>(cards);
  const [takenCards, setTakenCards] = useState<ICard[]>([]);

  const getRandomCard = useCallback(() => {
    var card = cardItems[Math.floor(Math.random()*cardItems.length)];
    setCardItems(copyCards => copyCards.filter(c => c.id !== card.id));
    setTakenCards(oldCards => [card, ...oldCards]);
  }, [cardItems, takenCards]);

  const getCard = useCallback((card: ICard) => {
    setCardItems(copyCards => copyCards.filter(c => c.id !== card.id));
    setTakenCards(oldCards => [card, ...oldCards]);
  }, [cardItems, takenCards]);

  return (
    <div>
      <div>
        <button onClick={getRandomCard}>Вытянуть случайную карту</button><br/>
        <span>Нажмите на строку в колоде карт, чтобы вытянуть конкретную карту</span>
        <div className="takenCards">{takenCards?.map(c => (
          <div className="takenCard">
            <span style={{color: c.suit.color}}>{c.suit.symbol}</span>
            {c.value}
          </div>
        ))}</div>
      </div>

      <div className="App">
      <table>
        <thead>
          <th colSpan={2}>
            <td>Вероятность вытянуть карту:</td>
          </th>
        </thead>
        <tbody>
          {cardItems.map(c => (
            <tr>
              <td>
                <div className="card" onClick={() => getCard(c)}>
                  <span style={{color: c.suit.color}}>{c.suit.symbol}</span>
                  {c.value}
                </div>
              </td>
              <td>{calcOneCard(1, cardItems.length)}%</td>
            </tr>
          ))}
        </tbody>
      </table>

      <table>
        <thead>
          <th colSpan={2}>
            <td>Вероятность вытянуть номинал:</td>
          </th>
        </thead>
        <tbody>
          {values.map(v => (
            <tr>
              <td>{v}</td>
              <td>{calcOneCard((cardItems.filter(c => c.value === v)).length, cardItems.length)}%</td>
            </tr>
          ))}
        </tbody>
      </table>

      <table>
        <thead>
          <th colSpan={2}>
            <td>Вероятность вытянуть масть:</td>
          </th>
        </thead>
        <tbody>
          {suits.map(s => (
            <tr>
              <td style={{color: s.color}}>{s.symbol}</td>
              <td>{calcOneCard((cardItems.filter(c => c.suit.name === s.name)).length, cardItems.length)}%</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  );
}

export default App;
