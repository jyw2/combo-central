const express = require("express");
const mongoose = require("mongoose");
const comboRoutes = require("./routes/combos/combosAPI");
const comboSetRoutes = require("./routes/comboSets/comboSetsAPI");
const userRoutes = require("./routes/users/usersAPI");
const presetRoutes = require("./routes/actionPresetSets/actionPresetSetsAPI");
const { ComboActionCombiner } = require("./modelCombiners/comboActionCombiner");
const { auth } = require("./utils/firebaseUtil")
const { enableCors, envId, mongoAuthString } = require("../frontend/src/env");
const errorHandler = require("./middleware/globalErrorHandlingMiddleware")

const mongoString = `mongodb://${mongoAuthString ? (mongoAuthString + "@") : ""}127.0.0.1:27017`;
mongoose.connect(mongoString, { dbName: `combo-central-${envId}` });
const database = mongoose.connection;

database.on("error", (error) => {
  console.log(error);
});
database.once("connected", () => {
  console.log("Database Connected");
});

const comboActionCombiner = new ComboActionCombiner(); // also validates for preset id dupes

const app = express();

if (enableCors) {
  var cors = require("cors");
  app.use(cors());
}

app.use(express.json());

app.all("*", (req, res, next) => {
  // MAY WANT TO ADD REVOCATION CHECKS IN THE FUTURE
  // Header names in Express are auto-converted to lowercase
  let token = req.headers["authorization"];

  // Remove Bearer from string
  token = token?.replace(/^Bearer\s+/, "");
  if (token) {
    auth
      .verifyIdToken(token)
      .then((decodedToken) => {
        req.decoded_uid = decodedToken.uid;
        next();
      })
      .catch((err) => {
        req.decoded_uid = null;
        next();
      });
  } else {
    req.decoded_uid = null;
    next();
  }
});

app.get("/api/combos", (req, res, next) => {
  res.locals.comboActionCombiner = comboActionCombiner;
  next();
});
app.use("/api/combos", comboRoutes);

app.use("/api/combo-sets", comboSetRoutes);

app.use("/api/users", userRoutes);

app.get("/api/presets/:charId", (req, res, next) => {
  res.locals.comboActionCombiner = comboActionCombiner;
  next();
});
app.get("/api/presets/names/:charId", (req, res, next) => {
  res.locals.comboActionCombiner = comboActionCombiner;
  next();
});
app.use("/api/presets", presetRoutes);

app.use(errorHandler)

app.listen(3001, () => {
  console.log(`Server Started at ${3001}`);
});

