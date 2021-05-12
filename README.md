# Upwards Take Home Assignment

## Description
This is my submission for the Affirm Upwards take home assignment for backend developers. I have completed this take home in Javascript using Node.js and Express.js.

## Installation
Navigate to the 'js' directory, then install dependencies and start the app with the below commands. 
``` 
npm i
npm start
```

This app is hosted on http://localhost:3000/

## Usage / Review
`POST /api/merchant_config/` is located within the 'js' folder, at '/routes/api/merchant_config.js'

## Write Up 

### Design Decisions 
While implementing the endpoint, I was unsure how I wanted to require the prequal_enabled boolean in the merchant_config model. I knew that this was the new aspect of this 'new feature', so I didn't want to allow it to be left null, but I had to decide if I should initiate prequal_enabled as false. I ultimately decided that initiating prequal_enabled as false or as true would permit the merchant to ignore the decision, and might ultimately lead them to regret if they had a strong opinion in one way or the other. I decided to require that the value of prequal_enabled be provided by the merchant in order to configure their settings.

### Future Improvements
This endpoint could be extended to house a lot more merchant data, and be a true merchant database. 

