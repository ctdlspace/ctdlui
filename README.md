#CTDLUI 
Submodule with React Components

## For the development
```shell script
npm run dev
```
or
````shell script
yarn dev
````

## For the usage
Add to the project
```shell script
git submodule add https://github.com/ctdlspace/ctdlui.git
git commit -m 'dev: ctdlui submodule'
git push
```

Work with project
```shell script
git clone <your_project>
cd <your_project>
git submodule update --init --recursive --remote
```

You will need to run to fetch latest of all submodules
```shell script
git submodule update --init --recursive --remote
``` 
