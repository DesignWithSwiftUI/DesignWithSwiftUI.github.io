const outdent = require('outdent')({ newline: ' ' });
module.exports = (article) => {
    return outdent`
    <div class="tile  tile--article">
        <h2 class="tile__heading">${article.heading}</h2>
        <p class="tile__excerpt">${article.excerpt}</p>
        <a href="/" class="button">
            <span>Read More</span>
            <div class="spacer  spacer--8"></div>
            <svg class="icon" width="20" height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" color="#fff"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </a>
    </div>`;
};