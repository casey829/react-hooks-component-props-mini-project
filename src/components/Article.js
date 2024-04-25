//import { render } from "@testing-library/react";
import React from "react";


function Article({title,date, preview,minutes}) {
    const renderTime = (minutes) => {
        const coffeeCups = "☕️".repeat(Math.ceil(minutes / 5));
        const bentoBoxes = "🍱".repeat(Math.ceil(minutes / 10));

        return minutes < 30 ? `${coffeeCups} ${minutes} min read` : `${bentoBoxes} ${minutes} min read`;
    }
     return(
        <article>
          <h3>{title}</h3>
          <small>{date || "January 1, 1970"}</small>
          <p>{preview}</p>
          <small>{renderTime(minutes)}</small>
        </article>
     )
};


export default Article;