# code-challenge2
# Name of the Project
Flatacuties
### Author :CLIFF MUDIGO
****
## Project Description
building an app for voting for the cutest animal! using local API for building the frontend of the app.The website should allow users to view information about the different characters, such as their names and images, and also allow them to vote.


## SCREENSHOTS
-https://github.com/CLIFF-MUDIGO/code-challenge2/issues/1



********
## SetUp Instruction
Run this command to get the backend started:

```sh
json-server --watch db.json
```

Test your server by visiting this route in the browser:

[http://localhost:3000/characters](http://localhost:3000/characters)

Then, open the `index.html` file on your browser to run the application.

Write your code in the `src/index.js` file. The base URL for your API will be
[http://localhost:3000](http://localhost:3000).
### Requirements
* [Lang]HTML.com,Javascript,css
* [Framework](Framework URL)
* Text editor eg [Visual Studio Code](https://code.visualstudio.com/download)
* [Testing Platform](Platform URL)


### Getting Files
* Fork the repo
- Create a new branch in your terminal (git checkout -b improve-feature)
- Install the prerequisites
- Make appropriate changes in file(s)
- Run the server to see the changes
- Add the changes and commit them (git commit -am "Improve App")
- Push to the branch (git push origin improve-app)
- Create a Pull request
* Open the folder location on terminal and use the following command to run app:

## How To Run It
>  $ pip install -r requirements.txt
To install all requirements that is vscode etc

> $ python3 manage.py runserver
Then run server with the above command
*****
## Live Link
Or you can access the web application directly via this [LINK.](https://astounding-marshmallow-a4b653.netlify.app/)
*****
## Deliverables
As a user, I can:

1. See all characters names in a `div` with the id of `"character-bar"`. Create
   a `span` tag with the character's name and add it the `div#character-bar`
   once you have retrieved the character data from the server. You will need to
   make a GET request to the following endpoint to retrieve the character data:

   ```txt
   GET /characters

   Example Response:
   [
    {
      "id": 1,
      "name": "Mr. Cute",
      "image": "https://thumbs.gfycat.com/EquatorialIckyCat-max-1mb.gif",
      "votes": 0
    },
    {
      "id": 2,
      "name": "Mr. Monkey",
      "image": "https://thumbs.gfycat.com/FatalInnocentAmericanshorthair-max-1mb.gif",
      "votes": 0
    },
    ...
   ]
   ```

2. When the character in the `div#character-bar` is clicked, display the
   character's details in the `div#detailed-info`. You can either use the
   character information from your first request, or make a new request to this
   endpoint to get the character's details:

   ```txt
   GET /characters/:id

   Example Response:
   {
    "id": 1,
    "name": "Mr. Cute",
    "image": "https://thumbs.gfycat.com/EquatorialIckyCat-max-1mb.gif",
    "votes": 0
   }
   ```

3. When the `form#votes-form` is submitted, add the number of votes from
   the input field to the character displayed in the `div#detailed-info`. **No
   persistence is needed**.

### Bonus Deliverables



## Technologies Used
1. HTML
2.css
3.json
4.javascript

*****
## Contact Information
* Email : cmudigo5@gmail.com
*****
## [License](LICENSE)
MIT License
Copyright (c) 23..2023 Author