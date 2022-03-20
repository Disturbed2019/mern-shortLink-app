# ShortLink-app
 TEST PROJECT
 
- Node.js
- Express.js
- MongoDB
- React
    
    
## Run project
 Download project your local machine
 
 Create directory config and 2 file:
 
=> default.json (for development)
~~~~
{
  "port": 5000,
  "mongoURI": "link connect to MongoDB",
  "jwtSecret": "secret key",
  "baseURL": "http://localhost:5000"
}
~~~~

=> production.json (for production)
~~~~
{
  "port": 80,
  "mongoURI": "link connect to MongoDB",
  "jwtSecret": "secret key",
  "baseURL": "your hostname"
}
~~~~

 In the project directory, you can run: 
 ### `npm install` 
 
 Next step you can run:
 ### `npm run client:install`
 
 Next step run project in development mode: 
 ### `npm run dev`
 
 
 
