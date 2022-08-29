import React from "react";
import { StyledHeader, Cart, CartTable, CardAdd, Coupon, Input, StyledSubtotal, Button } from "./cartStyles";
import { useSelector, useDispatch } from "react-redux";
import { IMG } from "pages/Home/homeStyles";
import { images } from "assets";
import { removeProductToCart } from "config/redux/card-product/action";

export default function () {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.productOrder);
  const subTotalPrice = data.reduce((total, product) => total + product.price * product.quantity, 0);
  return (
    <React.Fragment>
      <StyledHeader>
        <h2>#StayHome</h2>
        <p>Save more with coupons & up to 70% off</p>
      </StyledHeader>

      <Cart>
        <CartTable width="100%">
          <thead>
            <tr>
              <td> Remove </td>
              <td> Image </td>
              <td> Product </td>
              <td> Price </td>
              <td> Quantity </td>
              <td> Subtotal </td>
            </tr>
          </thead>
          <tbody>
            {data.map((product, index) => (
              <tr key={index}>
                <td>
                  <i className="fa fa-times-circle" onClick={() => dispatch(removeProductToCart(product))}></i>
                </td>
                {/* {console.log("product", images)} */}
                <td>
                  <IMG src={images[product.img]} alt="" />
                </td>
                <td>{product.category}</td>
                <td>${product.price}</td>
                <td>
                  <input
                    type="number"
                    min={1}
                    defaultValue={product.quantity}
                    onChange={(e) =>
                      dispatch({
                        type: "CHANGE_QUANTITY_ITEM",
                        value: e.target.value,
                        id: product.id,
                      })
                    }
                  />
                </td>
                <td>${product.price * product.quantity}</td>
              </tr>
            ))}
          </tbody>
        </CartTable>
      </Cart>

      <CardAdd id="CardAdd" className="section-p1">
        <Coupon>
          <h3>Apply Coupon</h3>
          <div>
            <Input type="text" placeholder="Input your coupon" />
            <Button>Apply</Button>
          </div>
        </Coupon>
        <StyledSubtotal id="subtotal">
          <h3>Cart Totals</h3>
          <table>
            <tr>
              <td>Cart Subtotal</td>
              <td>${subTotalPrice}</td>
            </tr>
            <tr>
              <td>Shipping</td>
              <td>Free</td>
            </tr>
            <tr>
              <td>
                <strong>Total</strong>
              </td>
              <td>
                <strong>${subTotalPrice}</strong>
              </td>
            </tr>
          </table>
          <Button>Checkout</Button>
        </StyledSubtotal>
      </CardAdd>
    </React.Fragment>
  );
}
