import React from "react";
import Box from "@mui/joy/Box";
import TextField from "@mui/joy/TextField";
import Button from "@mui/joy/Button";
import { useState, useEffect } from "react";

const NewListings = (props) => {
  const [Business, setBusiness] = useState({
    name: "",
    address: "",
    hours: "",
    description: "",
  });

  const handleSubmit = () => {
    const load = { ...Business }
    load.id = props.business.length + 1
    console.log(load, "LOAD")
    props.addBusiness(load)
  }

  useEffect(() => {
    console.log("NEWLISTINGS PROPS", props);
  }, [props]);

  useEffect(() => {
    console.log("ADDBUSINESS PROPS", Business);
  }, [Business]);

  return (
    <div className="newlistings">
      <Box sx={{ width: "50%" }}>
        <TextField
          sx={{ border: "1", borderBottom: "1px solid lightgrey;" }}
          id="name-basic"
          placeholder="Name"
          variant="standard"
          onChange={(e) =>
            setBusiness((prevState) => {
              let copy = { ...prevState };
              copy.name = e.target.value;
              setBusiness(copy);
              return copy;
            })
          }
        />
        <TextField
          sx={{ border: "1", borderBottom: "1px solid lightgrey;" }}
          id="address-basic"
          placeholder="Address"
          variant="standard"
          onChange={(e) =>
            setBusiness((prevState) => {
              let copy = { ...prevState };
              copy.address = e.target.value;
              setBusiness(copy);
              return copy;
            })
          }
        />
        <TextField
          sx={{ border: "1", borderBottom: "1px solid lightgrey;" }}
          id="hours-basic"
          placeholder="Hours"
          variant="standard"
          onChange={(e) =>
            setBusiness((prevState) => {
              let copy = { ...prevState };
              copy.hours = e.target.value;
              setBusiness(copy);
              return copy;
            })
          }
        />
        <TextField
          sx={{ border: "1", borderBottom: "1px solid lightgrey;" }}
          id="description-basic"
          placeholder="Description"
          variant="standard"
          onChange={(e) =>
            setBusiness((prevState) => {
              let copy = { ...prevState };
              copy.description = e.target.value;
              setBusiness(copy);
              return copy;
            })
          }
        />
        <br></br>
        <Button
          sx={{ width: "100%", color: "white", background: "darkblue" }}
          variant="solid"
          onClick={(e) => {
            e.preventDefault();
            handleSubmit();
            alert("Business added!")
          }}
        >
          Save
        </Button>
      </Box>
      <img
              src="/Screenshot.2022-09-21.115426.jpg"
              alt="Google maps location"
              style={{ width: 680, height: 400, paddingLeft: 10 }}
            />
    </div>
  );
};

export default NewListings;