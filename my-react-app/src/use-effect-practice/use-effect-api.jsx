import React, { useEffect, useState } from "react";
import axios from "axios";

const UseEffectPracticeThree = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );
        setData(response.data);
      } catch (err) {
        console.log("Error fetching data:", err);
      }
      setLoading(false);
    };

    fetchPosts();
  }, []);

  const filteredData = data.filter(
    (item) =>
      item.title.toLowerCase().includes(search.toLowerCase()) ||
      item.body.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h1>UseEffect Practice</h1>

      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {loading ? (
        <h3>Loading...</h3>
      ) : filteredData.length === 0 ? (
        <h3>No data found</h3>
      ) : (
        filteredData.map((item) => (
          <div key={item.id}>
            <h3>{item.title}</h3>
            <p>{item.body}</p>
            <hr />
          </div>
        ))
      )}
    </div>
  );
};

export default UseEffectPracticeThree;
