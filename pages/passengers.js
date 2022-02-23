import { useState } from "react";

function PassengerList({ passengers }) {
  // const [items, setItems] = useState([]);
  const [visible, setVisible] = useState(10);

  const showMorePassengers = () => {
    setVisible((prevValue) => prevValue + 10);
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
  const response = await fetch(
    "https://api.instantwebtools.net/v1/passenger?page=0&size=30"
  );
  const data = await response.json();
  //console.log(data);
  return {
    props: {
      passengers: data,
    },
  };
}
