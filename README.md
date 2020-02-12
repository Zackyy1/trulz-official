# Trulz

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.9.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Workflow

Take a task from projects->Kanban
Click the three dots and click "Convert to issue" and then assign this issue to yourself by clicking on it and then "Assign to me"

A new branch will be created. Go to branches and copy the name of your new branch.

Inside project root, type
```
git fetch
git checkout BRANCH_NAME
git pull
```


Create new components (if not working on an existing one)
`ng g c componentName`
or 
`ng generate component comonentName`



When finished working:
```
git add .
git commit -m "Done something"
git push
```

Then on Github, go to your branch and create a pull request to merge it with master. I'll occasionally  push everything to production to update the main website


