import "./SearchItem.css";

const SearchItem = () => {
  return (
    <div className="searchItem">
      <img
        src="https://cf.bstatic.com/xdata/images/hotel/square600/377944418.webp?k=68d2f708663b48d463d28b6f848f5efd03ffee20a8d9be307b14b4b4dd3ae8bf&o=&s=1"
        alt=""
        className="siImg"
      />
      <div className="siDesc">
        <h1 className="siTitle">Tower Street Apartments</h1>
        <span className="siDistance">500m from center</span>
        <span className="siTaxiOp">Free airport taxi </span>

        <span className="siSubtitle">Studio apartment with ac</span>
        <span className="siFeatures">
          Deluxe Double Room 2 Adults + 1 Child
        </span>
        <span className="siCancleOp">free Cancellation</span>
        <span className="siCancleOpSubtitle">
          You can cancel later, so lock in this great price today.
        </span>
      </div>
      <div className="siDetails">
        <div className="siRating">
          <span>Excellent</span>
          <button>9.9</button>
        </div>
        <div className="siDetailText">
        <span className="siPrice" >$999</span>
        <span className="siTaxOp" >Includes taxes and fees</span>
        <button className="siCheckButton" >See Availability</button>


        </div>

      </div>
    </div>
  );
};

export default SearchItem;
