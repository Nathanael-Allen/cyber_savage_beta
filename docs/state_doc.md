# Application State

## App Tree
The app doesn't need to handle any state directly.

### Main Menu
- State
  - List of built forces
- Handlers
  - Create force
  - Load Force
  - Delete Force
  - Rename Force
  
### Active Force
- Props
  - Force
- State
  - List of Characters in force
  - Discipline of Force
  - Force Points Amount
- Handlers
  - Change Discipline
  - Add Character
  - Duplicate Character
  - Remove Character
  - Edit Character

#### Add Characters 
- Props
  - Handle Add Character
##### Dropdown
- Props
  - Character list
  - Handle Add Character
- State
  - Open / Closed

#### Characters List
- Props
  - Character List
  - Handler Props
    - Edit Character
    - Remove Character
    - Duplicate Character 
##### Character
- Props 
  - Character
  - Handler Props
    - Edit Character
    - Remove Character
    - Duplicate Character

#### Edit Character
- Props
  - Character
  - Handle Edit Character
- State
  - Equipped Traits
  - Equipped Spells
  - Number Spells
  - Number Characteristics
  