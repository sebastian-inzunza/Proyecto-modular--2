import React, { useState } from 'react';
import '../App.css';

const TabComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleTabClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`tab-component ${isOpen ? 'open' : ''}`}>
      <div className="tab" onClick={handleTabClick}>
        <span className="tab-text">{isOpen ? 'Cerrar' : 'Menu'}</span>
      </div>
      <div className="">
        {isOpen && (
          <table className="mtable">
            <thead>
              <tr>
                <th>Menu</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
              <td><strong>Mis Favoritos</strong></td>
                <td className="arrow">{isOpen ? '▲' : '▼'}</td>
              </tr>
              {isOpen && (
                <tr>
                  <td colSpan="2">
                    <ul>
                      <li>⭐</li>
                      <li>⭐</li>
                      <li>⭐</li>
                    </ul>
                  </td>
                </tr>
              )}
              <tr>
              <td><strong>Mis Apuestas</strong></td>
                <td className="arrow">{isOpen ? '▲' : '▼'}</td>
              </tr>
              {isOpen && (
                <tr>
                  <td colSpan="2">
                    <ul>
                      <li>No tienes apuestas</li>
                    </ul>
                  </td>
                </tr>
              )}
              <tr>
                <td><strong>Partidos</strong></td>
                <td className="arrow">{isOpen ? '▲' : '▼'}</td>
              </tr>
              {isOpen && (
                <tr>
                  <td colSpan="2">
                    <ul>
                      <li><strong>⚽Chivas vs Tijuana</strong></li>
                      <li><strong>⚽Puebla vs CA</strong></li>
                      <li><strong>⚽Leones negros vs UACH</strong></li>
                    </ul>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default TabComponent;
