# CTDL-UI or L-UI

Submodule with React Components

## Disclaimer
CTDL is a software development company focused Node JS and React development. This repo is used in our projects, 
besides of that this repo is showing our approach.

## For the development

!!! do not modify component code if you are not listed in the @author list. 
!!! Ask author to make modifications you are require.

```shell script
npm run dev
```
or
````shell script
yarn dev
````

## For the usage

!!! please check component version. Never use components versioned 0.xx.yy. 
!!! Only components versioned >=1.xx.yy are ready for use.

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
