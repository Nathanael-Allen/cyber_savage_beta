# TODO

## High Priority/Functionality
___
- [ ] Finalize trait and spell lists. Should include descriptions
- [ ] Extra Weapon trait needs to add another weapon
- [ ] Save and load a list. Idea right now is to save and load from a json file.
- [ ] Save and load list from local storage.'
- [x] Add weapon modification to Unit component. Need to be able to select melee/range and traits.
- [x] Create weapon trait list.
- [x] Add delete button on equipped unit


## Low Priority/UI Stuff
___

- [ ] Fix the alert box pop ups for adding a unit. 
    - Should queue up several alerts when added and then give them each a setTimeout function
- [ ] Nav bar styling
- [ ] Add SVGs for buttons
- [ ] Update Unit and Weapon Component styling
- [ ] Group equipped units by level


## Code Refactoring
___

- [ ] Replace more complex state functions with a reducer function
- [ ] Change how units are displayed (seperate window for editing them)

## Known Bugs
___

- [x] Deleting a unit from equipped units, clears the traits from other equipped units. Not sure why.
- [x] Flaws need to properly update number of unit traits.
