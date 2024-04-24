import { useCallback, useState } from "react";
import { useEffect } from "react";

import "../../assets/css/FoodMenu/menuCategory.css";
import leftArrow from "../../assets/svg/left-arrow.svg";
import MenuDetailsFood from "./MenuDetailsFood.jsx";
import { motion } from "framer-motion";

const FoodCategory = ({ comeBack }) => {
  const [displayFood, setDisplayFood] = useState("");
  const [indexFood, setIndexFood] = useState(0);
  const [activeList, setActiveList] = useState(false);

  const enterList = (e) => {
    if (e.target.tagName == "DIV") {
      setActiveList(true);
    }
    switch (e.target.innerText) {
      case "Pastas":
        return setDisplayFood("Pastas"), setIndexFood(0);

        break;
      case "Carnes":
        return setDisplayFood("Carnes"), setIndexFood(1);
        break;
      case "Pizzas":
        return setDisplayFood("Pizzas"), setIndexFood(2);
        break;
      case "Sanguches":
        return setDisplayFood("Sanguches"), setIndexFood(3);
        break;
      case "Postres":
        return setDisplayFood("Postres"), setIndexFood(4);
        break;
      default:
        break;
    }
  };

  const comeBackCategory = () => {
    window.location.href = "#foodMenu__title";
    setDisplayFood("");
    setActiveList(false);
  };

  return (
    <div className="cont_category">
      {enterList ? <MenuDetailsFood activeList={activeList} indexType={indexFood} name={displayFood} /> : ""}
      {displayFood == "" ? (
        <motion.ul
          layout
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          onClick={enterList}
          className="category__ul"
        >
          <li className="category__li li__pastas">
            <div className="category__div">Pastas</div>
          </li>
          <li className="category__li li__carnes">
            <div className="category__div">Carnes</div>
          </li>
          <li className="category__li li__pizzas">
            <div className="category__div">Pizzas</div>
          </li>
          <li className="category__li li__sanguches">
            <div className="category__div">Sanguches</div>
          </li>
          <li className="category__li li__postres">
            <div className="category__div">Postres</div>
          </li>
        </motion.ul>
      ) : (
        ""
      )}

      <button onClick={displayFood == "" ? comeBack : comeBackCategory} className="category_btn_back">
        <h3>Volver atras</h3>
      </button>
    </div>
  );
};

export default FoodCategory;
