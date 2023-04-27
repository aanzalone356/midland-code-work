import axios from "axios";

const getResponse = async () => {
  try {
    let response = await fetch("/someURL");
    let data = await response.json();
    let internalPromiseData = await somePromise(data);
  } catch (err) {
    // error handling here
  }
};