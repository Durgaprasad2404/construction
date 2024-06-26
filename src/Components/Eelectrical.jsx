import React from "react";
import { pro } from "../itemsData/productsData";
import Footer from "./Footer";
import Allproducts from "./productsDisplay/Allproducts";
import Productnavbar from "./ProductLandingPart/Productnavbar";

function ElectronicsElectrical() {
  return (
    <>
      <Productnavbar />
      <div className="backGround">
        <h1 className="shopSideHeading">Electronics & Electrical</h1>
        <div style={{ margin: "10px" }} id="Cables">
          <div className="allItems">
            {pro.map((i) => {
              if (i.GROUP === "Electrical_Electronic_Items") {
                return (
                  <Allproducts
                    id={i.ID}
                    key={i.ID}
                    itemname={i.ITEMNAME}
                    imgUrl={i["IMG URL"]}
                    price={i.PRICE}
                    oldprice={i.OLDPRICE}
                    offer={i.OFFER}
                  />
                );
              } else {
                return null;
              }
            })}
          </div>
        </div>
        {/* <div style={{ margin: "20px 25px" }} id="Circuites">
          <h2 className="shopSideHeading">Circuites</h2>
          <div className="allItems">
            {productData.map((i) => {
              if (i.category === "Circuits") {
                return (
                  <Allproducts
                    id={i.id}
                    key={i.id}
                    itemname={i.itemname}
                    imgUrl={i.imgUrl}
                    price={i.price}
                    oldprice={i.oldprice}
                    offer={i.offer}
                  />
                );
              } else {
                return null;
              }
            })}
          </div>
        </div>
        <div style={{ margin: "20px 25px" }} id="Pannels">
          <h2 className="shopSideHeading">Pannels</h2>
          <div className="allItems">
            {productData.map((i) => {
              if (i.category === "Panels") {
                return (
                  <Allproducts
                    id={i.id}
                    key={i.id}
                    itemname={i.itemname}
                    imgUrl={i.imgUrl}
                    price={i.price}
                    oldprice={i.oldprice}
                    offer={i.offer}
                  />
                );
              } else {
                return null;
              }
            })}
          </div>
        </div>
        <div style={{ margin: "20px 25px" }} id="Pipes">
          <h2 className="shopSideHeading">Pipes</h2>
          <div className="allItems">
            {productData.map((i) => {
              if (i.category === "Pipes") {
                return (
                  <Allproducts
                    id={i.id}
                    key={i.id}
                    itemname={i.itemname}
                    imgUrl={i.imgUrl}
                    price={i.price}
                    oldprice={i.oldprice}
                    offer={i.offer}
                  />
                );
              } else {
                return null;
              }
            })}
          </div>
        </div>
        <div style={{ margin: "20px 25px" }} id="WireCutters">
          <h2 className="shopSideHeading">Wire Cutters</h2>
          <div className="allItems">
            {productData.map((i) => {
              if (i.category === "Wire Cutters") {
                return (
                  <Allproducts
                    id={i.id}
                    key={i.id}
                    itemname={i.itemname}
                    imgUrl={i.imgUrl}
                    price={i.price}
                    oldprice={i.oldprice}
                    offer={i.offer}
                  />
                );
              } else {
                return null;
              }
            })}
          </div>
        </div> */}
      </div>
      <Footer />
    </>
  );
}

export default ElectronicsElectrical;
