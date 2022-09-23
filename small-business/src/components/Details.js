import * as React from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const Details = (props) => {
  // const id = props.business.params.id;
  // const listing = props.business.find((c) => c.id == id);
  const { id } = useParams();
  console.log("ID", id);
  const listing = props.business.find((listing) => listing.id === id);
  console.log("LISTING", listing);

  useEffect(() => {
    console.log("DETAILS PROPS", props);
  }, [props]);

  return (
    <div className="details">
      <ul>
        <li key={listing.id}>
          <h2>{listing.name}</h2>
          <h4>{listing.address}</h4>
          <h4>{listing.hours}</h4>
          <p>{listing.description}</p>
        </li>
      </ul>
      <img
        src="/Screenshot.2022-09-21.115426.jpg"
        alt="Google maps location"
        style={{ width: 600, height: 340, paddingLeft: 10 }}
      />
    </div>
  );
};

export default Details;