# PkmnDisplayer

This project was made to display Pokemon sprites based on the Pokemon names using the [PokeApi](https://pokeapi.co).

## Setup

First, you will have to install [Node.js](https://nodejs.org/en/download/package-manager) and [Git](https://git-scm.com/downloads) on your computer.
Afterwards, restart your computer and open the Command Line. Enter the folder you want this project folder to be in.
Then, you can enter `git clone https://github.com/sfeichtenschlager/pkmn-displayer` in your Command Line. A new folder will be created which contains all project files.
Do not close the Command Line yet, since it will be required later on.

Enter the created folder and then the `/src/app/` folder. In the file `app.component.ts`, the `pkmnList` variable contains all Pokemon that should be displayed later.
You can replace this with your list of Pokemon, which have to be split by new lines (hence the `\n` after every name).

Now, you are almost done. Go back to your Command Line and go back to the root of the created folder (where the `README.md` is located).
Enter the command `npm i`. This should set up the Angular project.
Once this step is completed, you can enter the command `ng serve`. This will build the application. The website will then be available on your `localhost:4200`.
You can stop hosting the website by entering the keyboard combination `Ctrl + C`. 

## Troubleshooting

If a Pokemon sprite or the types are not displayed, this might be due to an error in the edited variable.
Make sure you wrote the list just as seen in the list before.

If this still does not solve the problem, the specified Pokemon name might differ from the name in the PokeApi.
In this case, you can check all Pokemon provided by the API [here](https://pokeapi.co/api/v2/pokemon/?limit=1000000) and modify the name of the Pokemon in your `pkmnList` variable accordingly.

If you are unsure which Pokemon may not be displayed, enter the keyboard combination `Ctrl + Shift + i` in your browser while on the `localhost:4200`.
You can then read the errors in your browser console to check which Pokemon were unable to load.
