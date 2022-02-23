import { useState } from "react";

function PassengerList({ passengers }) {
  // const [items, setItems] = useState([]);
  const [visible, setVisible] = useState(10);
  const [page, setPage] = useState(5);
  const [size, setSize] = useState(10);

  const showMorePassengers = () => {
    setVisible((prevValue) => prevValue + 10);
    setPage((prevValue1) => prevValue1 + 1);
    setSize((prevValue2) => prevValue2 + 10);
  };
  return (
    <>
      <h1>List of Passengers</h1>
      {passengers.data.slice(0, visible).map((key) => {
        return (
          <div key={key.id}>
            <p>{key.name}</p>
          </div>
        );
      })}
      <button onClick={showMorePassengers}>Show More</button>
    </>
  );
}

export default PassengerList;

export async function getStaticProps() {
  const url = "https://api.instantwebtools.net/v1/passenger?page=0&size=30";
  const response = await fetch(url);
  const data = await response.json();
  //console.log(data);
  return {
    props: {
      passengers: data,
    },
  };
}
