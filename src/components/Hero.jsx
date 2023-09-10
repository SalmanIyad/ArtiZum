import React from "react";
import { logo } from "../assets";

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <p className="title_text blue_gradient">ArtiZum</p>

        <button
          type="button"
          onClick={() => window.open("https://github.com/SalmanIyad", "_blank")}
          className="black_btn"
        >
          GitHub
        </button>
      </nav>

      <h1 className="head_text">
        Summarize Articles with <br className="max-md:hidden" />
        <span className="blue_gradient">OpenAI GPT-4</span>
      </h1>
      <h2 className="desc">
        Enhance your reading efficiency with Summize, an open-source article
        summarization application that adeptly converts lengthy articles into
        meticulously crafted, clear, and succinct summaries
      </h2>
    </header>
  );
};

export default Hero;
