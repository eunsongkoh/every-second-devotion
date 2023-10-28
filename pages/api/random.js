export default async function handler(req, res) {
  const url = "https://uncovered-treasure-v1.p.rapidapi.com/random";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "c6222e6216msh2246a7d5daeb11ap184fb3jsnb2231485911d",
      "X-RapidAPI-Host": "uncovered-treasure-v1.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const resultData = await response.json(); // Parse the JSON response
    res.status(200).json(resultData);
  } catch (error) {
    console.error(error);
    res.status(500).json({error: error.message})
  }

  
}

// const getData = async () => {};
