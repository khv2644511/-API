import React from "react";
import axios from "axios";

export default axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5",
});

// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
