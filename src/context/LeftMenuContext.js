import React, { createContext, useState, useCallback } from 'react';

export const LeftMenuContext = createContext();

export function LeftMenuContextProvider({ children }) {
  const [atendimentos, setAtendimentos] = useState([]);
  const [search, setInputSearch] = useState('');

  const [rotateSaude, setRotateSaude] = useState(false);
  const [rotateEnergia, setRotateEnergia] = useState(false);

  const [cardSaudeVisible, setcardSaudeVisible] = useState(true);

  const handleCardSaude = useCallback(() => {
    setRotateSaude((prevState) => !prevState);
    setcardSaudeVisible((prevVisible) => !prevVisible);
  }, [cardSaudeVisible]);

  const [cardEnergiaVisible, setCardEnergiaVisible] = useState(true);

  const handleCardEnergia = useCallback(() => {
    setRotateEnergia((prevState) => !prevState);
    setCardEnergiaVisible((prevVisible) => !prevVisible);
  }, [cardEnergiaVisible]);

  function handleInputChange(event) {
    setInputSearch(event.target.value);
  }

  return (
    <LeftMenuContext.Provider
      value={{
        handleInputChange,
        handleCardEnergia,
        handleCardSaude,
        search,
        rotateSaude,
        rotateEnergia,
        cardEnergiaVisible,
        cardSaudeVisible,
        setAtendimentos,
      }}
    >
      {children}
    </LeftMenuContext.Provider>
  );
}
