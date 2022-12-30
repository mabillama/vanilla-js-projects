const typeFitDataSource = {
  name: "Type Fit",
  getQuote: async () => {
    const httpResult = await fetch("https://type.fit/api/quotes");
    const jsonData = await httpResult.json();
    const result = jsonData[Math.floor(Math.random() * jsonData.length)];

    return { quote: result.text, author: result.author };
  },
};
