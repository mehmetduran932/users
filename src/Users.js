import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button, Spinner } from "reactstrap";
import Tool from "./Tool";

function Users() {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [loading, setloading] = useState(true);
  const fetchData = async () => {
    const response = await axios
      .get("https://reqres.in/api/users?delay=1")
      .then((response) => {
        setData(response.data.data);
        console.log(response.data);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setloading(false);
      });
  };
  useEffect(() => {
    fetchData();
    console.log(error);
    console.log(loading);
  }, []);

  function handleClick() {
    fetchData();
    console.log("tetiklendi...");
    setloading(true);
  }
  return (
    <>
      <Button name="re" value="re" onClick={handleClick}>
        reFetch
      </Button>
      {loading ? (
        <div>
          <Spinner color="primary" />
        </div>
      ) : (
        <div>
          <h1>Kullanıcılar</h1>
          {data.map((d) => (
            <Tool
              key={d.id}
              email={d.email}
              avatar={d.avatar}
              first_name={d.first_name}
              last_name={d.last_name}
            />
          ))}
        </div>
      )}
    </>
  );
}
export default Users;