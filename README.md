# TodoApp-Beta
Just for academic purposes

## Requirements

* NodeJS
* NPM or other PM (Package Manager)

## Config

Located in the folder you want to work with.

1. Create a React App with vite:
  * instal vite globally: `npm install -g create-vite`
  * create project: `npm create vite@latest todo-app-beta --template react`
    * Click on "y"
    * Framework: `React`
    * Language: `Javascript`

2. Run:
  * `cd react-app-beta`
  * `npm install`
  * `npm run dev`


## Structure

```bash
/src
├── App.jsx                 # Component main
├── services/               # Service to link with backend
│   └── taskService.js      # CRUD for tasks
└── components/             # Components for UI
    ├── TodoHeader.jsx      # header
    ├── TodoForm.jsx        # form new task
    ├── TodoFilters.jsx     # filter tasks
    ├── TodoList.jsx        # task list
    ├── TodoItem.jsx        # single task
    ├── TodoFooter.jsx      # footer
    ├── LoadingSpinner.jsx  # loading func
    └── ErrorAlert.jsx      # error system
````