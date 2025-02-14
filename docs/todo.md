# TODO

## High Priority/Functionality
___

- [ ] Warning messages when units are breaking rules (i.e. Too many characteristics, No weapons equipped, etc...)
- [ ] Add flaw handling.
    - Button to add flaw in editwindow -> when showing num characteristics needs to add 1 if character has flaw. 
- [x] Extra Weapon trait needs to add another weapon
- [x] PDF file needs to include a page of rules for equipped characteristics and remove descriptions from the character sheets
- [x] Mystical needs to add another spell
- [x] Save and load a list. Idea right now is to save and load from a json file.
- [x] Save and load list from local storage.'
- [x] Finalize trait and spell lists. Should include descriptions
- [x] Add weapon modification to Unit component. Need to be able to select melee/range and traits.
- [x] Create weapon trait list.
- [x] Add delete button on equipped unit
- [x] Heavy armor needs to adjust speed stat 

## Low Priority/UI Stuff
___
- [ ] shorten attacks and damage to atk and dmg
- [ ] Group equipped units by level
- [ ] Add a "are you sure?" modal for deleting a force
- [x] Replace X button with back button for Character list
- [x] Show point total and combat disciplines when looking at saved forces.
- [x] Alert pop up UI bug on adding a unit
- [x] Fix the alert box pop ups for adding a unit. 
    - Should queue up several alerts when added and then give them each a setTimeout function
- [x] Update Unit and Weapon Component styling
- [x] Add SVGs for buttons


## Code Refactoring
___

- [ ] Replace more complex state functions with a reducer function
- [x] Change how units are displayed (seperate window for editing them)
- [x] Edit window will take a unit for editing and it will return a unit after editing.

## Known Bugs
___

- [x] Deleting a unit from equipped units, clears the traits from other equipped units. Not sure why.
- [x] Flaws need to properly update number of unit traits.