const keys = require('../../config/keys');

module.exports = (survey) => {
    return `
        <html>
            <body>
                <div style="text-align: center;">
                    <h3>Request Input</h3>
                    <p>Please answer the following questions</p>
                    <p>${survey.body}</p>
                    <div>
                        <a href="${keys.redirectDomain}/api/surveys/complete">Yes</a>
                    </div>
                    <div>
                        <a href="${keys.redirectDomain}/api/surveys/complete">No</a>
                    </div>
                </div>
            </body>
        </html>
    `;
};