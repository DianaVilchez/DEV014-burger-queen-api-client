import breakfast from "../assets/breakfast.png";
import dinner from "../assets/dinner.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { HeaderLogo } from "./Header";
import { useState } from "react";
import { ListBreakfast } from "./List-Breakfast";
import { ListAllDayMenu } from "./List-AllDay";
import { Link } from "react-router-dom";


export const Products = () => {
  const [visible0ptionsBreakfast, setOptionsBreakfast] = useState(false);
  const [visible0ptionsAllDay, setOptionsAllDay] = useState(false);
  
  const handleClickBreakfast = () => {
    setOptionsBreakfast(!visible0ptionsBreakfast);
  };
  const handleClickAllDay = () => {
    setOptionsAllDay(!visible0ptionsAllDay);
  };
  // const saveCustomerName = () => {
  //     localStorage.setItem('customerName', customerName);
  // }

  return (
    <main>
      <HeaderLogo />
      <span
        style={{
          display: "inline-block",
          width: "200px",
          height: "4px",
          backgroundColor: "#B62046",
        }}
      ></span>
      <h2>Menu</h2>
      <span
        style={{
          display: "inline-block",
          width: "400px",
          height: "4px",
          backgroundColor: "#B62046",
        }}
      ></span>
      <form>
        <input
          className="customerName"
          type="text"
          //   value={customerName}
          placeholder="CUSTOMER NAME"
        />
      </form>
      <section className="optionBreakfast" onClick={handleClickBreakfast}>
        <img src={breakfast} className="imgBreakfast" />
        <button className="buttonBreakfast">
          Breakfast{" "}
          <FontAwesomeIcon
            icon={faChevronDown}
            style={{ marginLeft: "12px" }}
          />
        </button>
      </section>
      {visible0ptionsBreakfast && (
        <div>
          <ListBreakfast />
        </div>
      )}
      <section className="optionDinner" onClick={handleClickAllDay}>
        <img src={dinner} className="imgDinner" />
        <button className="buttonDinner">
          All Day Menu{" "}
          <FontAwesomeIcon
            icon={faChevronDown}
            style={{ marginLeft: "12px" }}
          />
        </button>
      </section>
      {visible0ptionsAllDay && (
        <div>
          <ListAllDayMenu />
        </div>
      )}
      <Link to ="/products/selected">
        <button className="buttonNext">NEXT</button>
      </Link>
    </main>
  );
};
