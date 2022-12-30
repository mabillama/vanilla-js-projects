// Get random quote
// Update page function
// Setup sharing buttons

// A good first quote could be that Functions should do one thing. They should do it well. They should do it only. - Robert C. Martin

// Create a javascript class and define what happen when we create a new object from it
class QuoteApp {
  constructor() {
    this.quoteBtn = document.getElementById("getQuoteBtn");

    this.quoteSection = document.querySelector("section#quoteDisplay");
    this.quoteElements = {
      quote: this.quoteSection.querySelector("blockquote"),
      author: this.quoteSection.querySelector("p.author"),
      source: this.quoteSection.querySelector("p.source"),
    };

    this.quoteBtn.addEventListener(
      "click",
      this.updatePageWithQuote.bind(this)
    );
    document.addEventListener(
      "DOMContentLoaded",
      this.updatePageWithQuote.bind(this)
    );

    this.dataSources = [typeFitDataSource, officialJokesDataSource];
  }

  // fetches result from api and returns quote data
  async getRandomQuote() {
    const dataSource = this.dataSources[1];
    const quote = await dataSource.getQuote();

    return { ...quote, source: dataSource.name };
  }

  async updatePageWithQuote() {
    const randomQuoteResult = await this.getRandomQuote();
    const { quote, author = "Unkown", source } = randomQuoteResult;

    this.quoteElements.quote.textContent = quote;
    this.quoteElements.author.textContent = ` - ${author}`;
    this.quoteElements.source.textContent = `Source: ${source}`;
  }
}

new QuoteApp();
