import { RichText } from "prismic-reactjs";

const Quote = ({ quote }) => (
  <section className = "section-quote">
    {RichText.asText(quote.quote)}
    <br />
    {RichText.asText(quote.author)}
  </section>
);

export default Quote;
