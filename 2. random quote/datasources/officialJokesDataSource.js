const officialJokesDataSource = {
  name: "Official Jokes",
  getQuote: async () => {
    const httpResult = await fetch(
      "https://official-joke-api.appspot.com/random_joke"
    );
    const jsonData = await httpResult.json();
    console.log(jsonData);

    return { quote: jsonData.setup, author: jsonData.punchline };
  },
};
