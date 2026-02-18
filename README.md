# Markdown Editor
This is a markdown editor

### Project Description
This is a markdown editor that offers a split screen live preview and character counter that persists via local storage.

### How to Run Locally
- x

### Feature List
- Notes persist across page refresh and browser restart
- Toggleable light/dark theme which persists across page refresh and browser restart
- Live preview
- Live character counter
- Responsive to different screen sizes including mobile and desktop

# Quiz Responses

### Quiz 1
1. What is the purpose of `git commit` ?
    - `git commit` is used to take a snapshot of the locally staged files
2. What happens when you push to GitHub?
    - Pushing to GitHub syncs the local snapshots with GitHub
3. Why should we commit multiple times instead of once at the end?
    - Committing multiple times allows us to have multiple snapshots so that we can revert changes if necessary
4. What is the difference between local repository and remote repository?
    - Local repository is stored on our local machine, remote repository is stored on GitHub

### Quiz 2
1. What does `display: flex` do?
    - `display: flex` changes an element to use flex box styling, meaning that it will change size dynamically to fit a given space
2. What is a media query?
    - A media query is a CSS function that allows us to change the style of an element based on a condition such as screen dimensions
3. Why should responsive design be handled in CSS, not JavaScript?
    - CSS is faster and has all of the built-in features for responsive design, while JavaScript can be made to do responsive design, it is not designed for it
4. What happens if media query is placed before base styles?
    - If a media query is placed before base styles then the base styles override it and the media query never applies its styling

### Quiz 3
1. What is the difference between `data` and `computed` in Vue?
    - `data` stores raw values which may change and `computed` stores values which are derived from data
2. Why should we not manipulate DOM manually in Vue?
    - Vue uses its own virtual DOM which will likely override manual changes
3. What does `v-html` do?
    - `v-html` injects HTML tags and text into an existing HTML element
4. Why must we strip HTML before counting characters?
    - If we do not strip HTML, we will have a much higher character count because we will count all of the HTML tags

### Quiz 4
1. What is localStorage?
    - localStorage allows websites to store data on the user's machine such that information can persist across page refreshes and browser restarts
2. When does `mounted()` run?
    - `mounted()` runs after the element has been created and inserted into the page HTML
3. What is a Vue watcher?
    - A watcher is a feature that monitors a property and can respond when that property changes, such as the input field in our markdown-editor example
4. Why should theme state also be persisted?
    - Theme state should be persisted so that the user doesn't need to change it every time they visit the website or refresh the page

### Final Quiz
1. How did you utilise AI to help you code the app, show some examples.
    - See the AI usage section below
2. What part of the build was most challanging?
    - This is my first time using JavaScript and Vue JS, so I found it challenging to understand how to structure the `app.js` file. I wasn't sure where the Vue functions should go, so you can see I asked ChatGPT whether my code was structured correctly. 
3. What is the benefit of using a framework such as Vue for frontend development
    - The benefit is that you don't need to implement event listeners manually, there are a lot of built-in features that ease the development process. 

### AI Usage
##### Prompt: 
Does this setup look right? How do I use this in the html? Do not give me any code, just answer the questions. 
- I also included a code snippet from my `app.js`

##### Response: 
Your Vue setup looks correct and well-structured 👍

You have:
- ✅ data() returning reactive state
- ✅ mounted() restoring from localStorage
- ✅ computed for parsed markdown + character count
- ✅ watch to auto-save

That’s all good.

✅ How to Use This in Your HTML

You just need to:
1. Mount the app
2. Bind message to a `<textarea>`
3. Render htmlOutput using v-html
4. Display charCount

##### Prompt: 
How do I include these in my project? Do not give code, just explain how to include them and give me the necessary links: Bootstrap 5 (CSS), Material Icons, Vue 3 CDN, marked.js CDN

##### Response: 
1️⃣ Bootstrap 5 (CSS)

What it is:
Bootstrap is a CSS framework for responsive layout and UI components.

How to include it:
- Go to the official Bootstrap website.
- Copy the CSS CDN link from the “Get Started” section.
- Paste that link inside the <head> section of your HTML file.
- Make sure it appears before your own custom CSS file.

Official link:
https://getbootstrap.com/docs/5.3/getting-started/introduction/

Continued for Material Icons, Vue 3, and Marked JS... 