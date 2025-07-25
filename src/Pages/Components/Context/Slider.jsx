import { createContext, useContext } from "react";
import { products } from "../../data/data.jsx";

const Contextdarkmode = createContext();

const useSlidercontext = () => {
  return useContext(Contextdarkmode);
};

const Slider = ({ children }) => {
  const repeatedItems = [...products, ...products.slice(-1)];

  return (
    <Contextdarkmode.Provider value={{ items: repeatedItems }}>
      {children}
    </Contextdarkmode.Provider>
  );
};

export { Slider, useSlidercontext };
