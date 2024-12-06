# TODO

## High Priority/Functionality
___
- [ ] Extra Weapon trait needs to add another weapon
- [ ] Save and load a list. Idea right now is to save and load from a json file.
- [x] Save and load list from local storage.'
- [x] Finalize trait and spell lists. Should include descriptions
- [x] Add weapon modification to Unit component. Need to be able to select melee/range and traits.
- [x] Create weapon trait list.
- [x] Add delete button on equipped unit


## Low Priority/UI Stuff
___

- [ ] Fix the alert box pop ups for adding a unit. 
    - Should queue up several alerts when added and then give them each a setTimeout function
- [ ] Group equipped units by level
- [x] Nav bar styling
- [x] Update Unit and Weapon Component styling
- [x] Add SVGs for buttons


## Code Refactoring
___

- [ ] Replace more complex state functions with a reducer function
- [ ] Change how units are displayed (seperate window for editing them)
- [ ] Edit window will take a unit for editing and it will return a unit after editing.

## Known Bugs
___

- [x] Deleting a unit from equipped units, clears the traits from other equipped units. Not sure why.
- [x] Flaws need to properly update number of unit traits.
