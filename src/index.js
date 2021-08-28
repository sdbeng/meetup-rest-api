//express api v.01
const express = require("express");
const apiRoutes = require("./routes/apiRoutes");
/*
rest 
home route: /
/api/notes
mockup data: json file

*/
//instance of express

const PORT = process.env.PORT || 3001;

const app = express();

// app.get("/", (req, res) => {
//   res.json({ message: "success" });
// });
app.use("/", apiRoutes);
///api/anyroute
app.use("/api", apiRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
