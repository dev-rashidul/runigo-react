import React from "react";
import "./MyOrder.css";

const MyOrder = () => {
  return (
    <section id="my-order">
      <div className="my-order-wrapper">
        <h3>My Order</h3>
        <div className="order-table mt-4">
          <div className="order-table-wrapper">
            <table className="w-100">
              <thead>
                <tr>
                  <th>Order ID</th>
                  <th>Mentor Name</th>
                  <th>Order Date</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>#FF00222344</td>
                  <td>Rashidul Islam</td>
                  <td>6th Jan 2023</td>
                </tr>
                <tr>
                  <td>#FF00256474</td>
                  <td>D Anteh</td>
                  <td>5th Jan 2023</td>
                </tr>
                <tr>
                  <td>#FF00256345</td>
                  <td>Nirob</td>
                  <td>4th Jan 2023</td>
                </tr>
                <tr>
                  <td>#FF00256345</td>
                  <td>Expert Nirob</td>
                  <td>4th Jan 2023</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyOrder;
