// src/components/Orders.js
import React, { useEffect, useState } from "react";
import axios from "axios";

const Orders = () => {
  const [allOrders, setAllOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:3002/allOrders") 
      .then((res) => setAllOrders(res.data || []))
      .catch((err) => {
        console.error("Failed to fetch orders:", err);
        setAllOrders([]);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p className="title">Loading orders…</p>;

  return (
    <>
      <h3 className="title">Orders ({allOrders.length})</h3>

      {allOrders.length === 0 ? (
        <div className="no-orders">
          <p>You haven’t placed any orders.</p>
        </div>
      ) : (
        <div className="order-table">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Mode</th>
                <th>Qty.</th>
                <th>Price</th>
              </tr>
            </thead>

            <tbody>
              {allOrders.map((order, i) => {
                return (
                  <tr key={order._id || i}>
                    <td>{order.name}</td>
                    <td>{order.mode}</td>
                    <td>{order.qty}</td>
                    <td>{Number(order.price).toFixed(2)}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};

export default Orders;
