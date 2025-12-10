import React, { useState } from "react";
import axios from "axios";

const FetchApiComponent = () => {
  const [data, setData] = useState({
    users: [],
    products: [],
    todos: []
  });
  const [loading, setLoading] = useState(false);

  const fetchAllData = async () => {
    setLoading(true);
    try {
      const urls = [
        "https://jsonplaceholder.typicode.com/users",
        "https://dummyjson.com/products",
        "https://dummyjson.com/todos"
      ];

      const promises = urls.map((url) => axios.get(url));
      const results = await Promise.all(promises);

      setData({
        users: results[0].data,
        products: results[1].data.products,
        todos: results[2].data.todos
      });

    } catch (error) {
      console.log("Error fetching data:", error);
    }
    setLoading(false);
  };

  return (
    <div>
      <h1>Fetch Multiple APIs</h1>

      {loading && <h3>Loading...</h3>}

      {!loading && data.users.length === 0 && (
        <>
          <h2>No data available</h2>
          <button onClick={fetchAllData}>Fetch Data</button>
        </>
      )}

      {!loading && data.users.length > 0 && (
        <div>
          <button onClick={fetchAllData}>Refetch</button>

          <h2>Users</h2>
          {data.users.map((user) => (
            <div key={user.id} style={{ marginBottom: "10px" ,border:"1px solid gray",padding:"5px"}}>
              <h3>{user.name}</h3>
              <p>Email: {user.email}</p>
              <p>City: {user.address.city}</p>
            </div>
          ))}

          <h2>Products</h2>
          {data.products.map((product) => (
            <div key={product.id} style={{ marginBottom: "10px" ,border:"1px solid gray",padding:"5px"}}>
              <p>{product.title}</p>
            </div>
          ))}

          <h2>Todos</h2>
            {data.todos.map((todo) => (
                <div key={todo.id} style={{ marginBottom: "10px" ,border:"1px solid gray",padding:"5px"}}>
                    <p>{todo.todo}</p>
                </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default FetchApiComponent;
