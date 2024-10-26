import breakfast from "../assets/breakfast.png";
import dinner from "../assets/dinner.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { HeaderLogo } from "./Header";
import { useState } from "react";
import { ListProducts } from "./List-Products";
// import { ListAllDayMenu } from "./List-AllDay";
import { useNavigate } from "react-router-dom";
import { SelectedProduct } from "../Services/FetchOrdersPost";
import { Background } from "./Background";



export const Products = () => {
  const navigate = useNavigate();
  const [visible0ptionsBreakfast, setOptionsBreakfast] = useState(false);
  const [visible0ptionsAllDay, setOptionsAllDay] = useState(false);
  const [selectedProducts, setSelectedProducts] = useState<SelectedProduct[]>([]);
  const [customerName, setCustomerName] = useState('');
  const [menuFilter, setMenuFilter] = useState<"Breakfast" | "All Day Menu">("Breakfast");

  const handleClickBreakfast = () => {
    setMenuFilter("Breakfast");
    setOptionsBreakfast(!visible0ptionsBreakfast);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  const handleClickAllDay = () => {
    setMenuFilter("All Day Menu");
    setOptionsAllDay(!visible0ptionsAllDay);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  const handleSelectedProductsChange = (products:SelectedProduct[]) => {
    setSelectedProducts((prevProducts) => [...prevProducts, ...products]);
  };
  
  const handleNextClick = () => {
    navigate("/products/selected", { state: { selectedProducts } });
    localStorage.setItem('customerName', customerName);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCustomerName(event.target.value); 
  }
  
  return (
    <Background  style={{ backgroundColor: '#fff6de' }}>
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
          value={customerName}
          onChange={handleChange}
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
          <ListProducts onSelectedProductsChange={handleSelectedProductsChange}
          filteredMenu={menuFilter} />
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
          <ListProducts
                        onSelectedProductsChange={handleSelectedProductsChange}
                        filteredMenu={menuFilter} // Pasar el filtro seleccionado
                    />
        </div>
      )}
       <button className="buttonNext" onClick={handleNextClick}>
        NEXT
      </button>
    </main>
    </Background>
  );
};

