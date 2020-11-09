### Burger Builder App

#### Setup

1. Create App as Stateful Component
2. Create folders
   - `components` for "dumb"/"stateless" components / Functional components
   - `containers` for "stateful" class components
   - `hoc` for High Order Components ushc as Aux used for wrapping adjacent JSX components
   - `assets` for any image files


Firebase EndPoint

`https://react-burger-b1810.firebaseio.com/`

Rules

`
{
  "rules": {
    ".read": "true",  // 2020-12-8
    ".write": "true",  // 2020-12-8
  }
}

`