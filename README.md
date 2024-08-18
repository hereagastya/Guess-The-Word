

# Word Game

## Description

This project is a simple web-based word game that involves two players logging in with their usernames. After logging in, players are redirected to a game page to participate in the game.

## Technologies Used

- **HTML**: Structure of the webpage.
- **CSS**: Styling the webpage.
- **JavaScript**: Handling user interactions and navigation.
- **Bootstrap**: For styling and responsive design.

## Getting Started

1. **Clone the Repository**

   ```bash
   git clone <repository_url>
   ```

2. **Navigate to the Project Directory**

   ```bash
   cd word-game
   ```

3. **Open `index.html`**

   Open the `index.html` file in your web browser to view the project.

## Files

- **`index.html`**: The main HTML file containing the structure of the login page.
- **`style.css`**: The CSS file for styling the webpage.
- **`main.js`**: JavaScript file handling the login logic.
- **`gamePage.html`**: The HTML file for the game page (Note: This file should be created separately).

## How It Works

1. **Login Page**: The login page contains two input fields for Player 1 and Player 2 to enter their usernames.
2. **Login Functionality**: When the "Log in" button is clicked, the `login()` function is triggered. It retrieves the usernames from the input fields, stores them in `localStorage`, and redirects the user to `gamePage.html`.

## CSS Styling

- The background color of the page is set to a light blue color.
- The login sections are styled with white background, ridge borders, and rounded corners.
- The login button and input fields have specific styling for width and color.




## Dependencies

- **Bootstrap**: Included via CDN for styling and responsiveness.
- **jQuery**: Included via CDN to support Bootstrap's JavaScript components.

## Contributing

If you'd like to contribute to this project, please fork the repository and create a pull request with your changes.

---
