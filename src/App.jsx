import { Box, Button, TextField } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import React, { useState } from "react";

const App = () => {
  const [val, setval] = useState([
    {
      id: 1,
      name: "samad",
      address: "korangi",
      email: "samad@gmail.com",
      number: "123454667",
      age: 21,
      gender: "Male",
    },

    {
      id: 2,
      name: "shuja",
      address: "malir",
      email: "shuja@gmail.com",
      number: "123454",
      age: 21,
      gender: "Male",
    },
  ]);

  const [inputData, setInputData] = useState({
    name: "",
    address: "",
    email: "",
    number: "",
    age: "",
    gender: "",
  });

  const columns = [
    { field: "id", headerName: "id", width: 130 },
    { field: "name", headerName: "name", width: 130 },
    { field: "email", headerName: "email", width: 130 },
    { field: "number", headerName: "number", width: 130 },
    { field: "age", headerName: "age", type: "number", width: 130 },
    { field: "gender", headerName: "gender", width: 130 },
  ];

  return (
    <>
      <Box sx={{ display: "grid", gap: 2, gridTemplateColumns: "1fr 1fr 1fr" }}>
        <TextField
          id="standard-basic"
          label="Enter Your Name"
          variant="outlined"
          size="small"
          name="name"
          value={inputData.name}
          onChange={(e) => {
            setInputData({
              ...inputData,
              name: e.target.value,
            });
          }}
        />

        <TextField
          id="standard-basic"
          label="Enter Your Email"
          variant="outlined"
          size="small"
          name="email"
          value={inputData.email}
          onChange={(e) => {
            setInputData({
              ...inputData,
              email: e.target.value,
            });
          }}
        />

        <TextField
          id="standard-basic"
          label="Enter Your Address"
          variant="outlined"
          size="small"
          name="address"
          value={inputData.address}
          onChange={(e) => {
            setInputData({
              ...inputData,
              address: e.target.value,
            });
          }}
        />

        <TextField
          id="standard-basic"
          label="Enter Your Number"
          variant="outlined"
          size="small"
          name="address"
          value={inputData.number}
          onChange={(e) => {
            setInputData({
              ...inputData,
              number: e.target.value,
            });
          }}
        />

        <TextField
          id="standard-basic"
          label="Enter Your Gender"
          variant="outlined"
          size="small"
          name="gender"
          value={inputData.gender}
          onChange={(e) => {
            setInputData({
              ...inputData,
              gender: e.target.value,
            });
          }}
        />

        <TextField
          id="standard-basic"
          label="Enter Your Age"
          variant="outlined"
          size="small"
          name="age"
          value={inputData.age}
          onChange={(e) => {
            setInputData({
              ...inputData,
              age: e.target.value,
            });
          }}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          mt: 2,

          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Button
          variant="contained"
          disabled={!inputData.name || !inputData.address || !inputData.email}
          onClick={() => {
            setval([...val, { id: val.length + 1, ...inputData }]);
            setInputData({
              id: "",
              name: "",
              address: "",
              email: "",
              number: "",
              age: "",
              gender: "",
            });
          }}
        >
          Submitt
        </Button>
      </Box>

      <div style={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={val}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          pageSizeOptions={[5, 10]}
          // checkboxSelection
        />
      </div>
    </>
  );
};

export default App;
