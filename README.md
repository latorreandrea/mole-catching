# Mole Catching! 

## Code Institute Portfolio 2 Project

![Logo](https://user-images.githubusercontent.com/80674568/122635202-ddf5ec80-d0e2-11eb-8307-08a412a39acd.PNG)

Welcome to my first game! 
Test your skill and try your best to hit more and more moles!

A live website can be found [here](https://latorreandrea.github.io/mole-catching/)

![immagineschermi](https://user-images.githubusercontent.com/80674568/122830066-1b779700-d2e8-11eb-9c6c-897bce98a961.PNG)

# UX

Before writing any code, I did some user research. On the internet all video game creators recommend, to start, to create basic games such as rock paper, scissors or a mole catcher to understand the principles of programming in games.

My choice therefore fell on catch the mole and with [vectr](https://vectr.com/) I created the images I use on the site.

## Strategy

The structure of the game is very basic so to attract the user I point to a good stylistic choice and later to a nice tune to loop during the game

### Project goal: Test my skill in JavaScript


The main goal for the website is to test current skill with javascript.

So i try to find out how to make a site that:

- Has pattern matching functionality 
- Has limited number of tries before the game is over 
- Has a score tracking system 
- Has the ability to play against the computer 

## Scope and Structure

In the present state of my abilities I am limited by my inexperience. This means that il focus all the time to the .jss file.

The features to include are:

- Pattern matching functionality 
- A limited number of tries before the game is over (the player have 3 attempts)
- A score tracking system (score are dispalyed during the game)
- The ability to play against the computer (the game increases in difficulty as the score increases)

The structure is therefore really minimal and focused on the game area

## Skeleton

I used [Balsamiq](https://balsamiq.com/) to create wireframes 

## Desktop & Tablet:
![desktop](https://user-images.githubusercontent.com/80674568/122635048-deda4e80-d0e1-11eb-9825-88a1c4872699.png)
## Mobile:
![mobilegame](https://user-images.githubusercontent.com/80674568/122635031-beaa8f80-d0e1-11eb-99c9-03017f685e7d.png)
![rotate](https://user-images.githubusercontent.com/80674568/122635030-bd796280-d0e1-11eb-8cd0-e08e35392ce6.png)

# Features
 
### Existing Features
-You can hit the mole when you do it you will increase combo multiplier and reduce the time that you can hit the mole

#### Landing page:
- Logo 
![Logo](https://user-images.githubusercontent.com/80674568/122635202-ddf5ec80-d0e2-11eb-8307-08a412a39acd.PNG)
- Tutorial screen - a quick description tells the user how to play. The game will start when he press the button.
![loading](https://user-images.githubusercontent.com/80674568/122635200-ddf5ec80-d0e2-11eb-9479-19813b858392.PNG)
- Rotating screen - if the width of the screen is small the play sreen is hide.
![orrizontale](https://user-images.githubusercontent.com/80674568/122635203-de8e8300-d0e2-11eb-8f4a-b0c098bdbeff.PNG)
- Play screen -the actual game where real-time score and the number of remaining attempts of the user are recorded when he hit or miss the mole!
![gameplayground](https://user-images.githubusercontent.com/80674568/122635199-dd5d5600-d0e2-11eb-81fc-ab065104f840.PNG)

### Features Left to Implement

- Add sound: at the moment no piece of music has been inserted which however should play in a loop for the duration of the match
- Add a record section that register the player record

#### General maintenance
- The site was not designed to be modified often.
In general, the real change will take place on the .css file to recall the holidays eg.
use reindeer instead of moles at christmas or rabbits at easter

## Technologies Used

- [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
  - used to structure the website and create the essential elements of my site. 

- [CSS](https://www.w3.org/Style/CSS/Overview.en.html) 
  - used to style the markup and create custom styling. 

- [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
  - used to create the scripts to make the game functional.

- [Google Developer tools](https://developers.google.com/web/tools/chrome-devtools/) 
  - to help solve a bug and help style my elements before writing code. 

- [Google Fonts](https://fonts.google.com/) 
  - used to import the font style. 

- [GitHub](https://github.com/) 
  - used to store the source code and repository. 
- [GitHub Pages](https://pages.github.com/) 
  - used to deploy my website.

- [Balsamiq](https://balsamiq.com/) 
  - used to help create my wireframes.

- [FontAwe](https://fontawesome.com/)
  - used to use some icons in the site.

- [Vectr](https://vectr.com/) 
  -To create the images  for the game.

# Testing:


#### Google Developer Tools 

I used Google Developer tools to help identify any flagged errors. A handy feature is the audit tool, and it alerted me that I had to compress my images even further. 

As well as this, the developer tool also has a responsive feature. It tells you how your site looks across multiple devices, including a 4k screen. This was insightful as I decided to use containers to ensure my site looked good on larger screens. I also made the navbar and footer to stretch across the width of the device. This is to enhance the user experience. 


#### Responsive Tools

I used [Am I Responsive](http://ami.responsivedesign.is/) to ascertain if my site is responsive on all devices. As I do not carry multiple devices, these are a handy feature to help correct any alignment or issues. 

#### W3C Validator Tools

To help validate my HTML and CSS, I used W3C validator tools to ensure my code was clean. I regularly checked if my code was cleared from any errors after each section was created. 

list of errors: 
- Initial attempts to create a function that recognized if the user clicked on the image of the right mole resulted, except for the first click, to increase the score while decreasing attempts.
- At every restart of the game the showMole interval did not work properly
- The sound music don't play when the game is loading

list of solutions:
- To get around the problem I have diversified the function that recognizes whether or not we have hit the mole by rewarding or punishing us in a consistent way for each case:
this is why we have the countPointA function, countPointS and countPointD.
- To solve it, the clear interval function has been added, which blocks the repetition of showMole at the end of each game and and I created a variable that allows us if we are actually playing or have lost 


### Manual Testing 

the game was tested on:

- Moto G4
- Galaxy S5
- Pixel 2
- Pixel 2 XL
- iPhone 5
- iPad
- PC

*aggiungere cosa accade se premo i tasti
*timer se funziona
*footer
*form

# Deployment

This project was deployed to GitHub pages. In order to deploy a project onto GitHub, please view the following steps:

1. Log onto GitHub or create an account 

2. Create a repository (repo) on GitHub and name your repo with a project name and give it a description

3. Open your workspace (I use Gitpod)

4. Initialise your repo following the below commands
`git init`
- add files to Git (the staging area)
`git add .`
- We now want to write a concise commit message
`git commit -m "git init"`

5. Once your project is complete, you are now ready to deploy this onto GitHub pages.

6. Scoll onto "settings"

7. On the left-hand side, find the "Pages" tab which looks like the following:

8. Now that you are on the Pages section, select "Master Branch" under the Source headings.

9. The page will now automatically refresh. If not, give it 5 minutes. 

10.Your page is now live! You have now successfully deployed your GitHub repository




# Credits


I would like to give special thanks to:

- My mentor Marcel for his patience and be able to order my ideas
- My partner for being supportive for all countless tests done during the creation of the scripts.
- My brother who pushed me to try again after every mistake.



Thank you for taking the time to read my project. 



