# Workflow for static pages - modular

Flujo de trabajo para paginas estaticas - Modularizado

## Estructurado con:
- Pug
- Scss

## Inicializando

1. Instalación de node_modules (`packages`):
``` 
yarn install
```
o
```
npm install
```

2. Instalar Gulp globalmente
- Ejecutar el comando en consola:
```
  npm install --global gulp-cli
```

3. Puesta en marcha gulpfiles (run project)

```
gulp
```

--- 

Tipografia:
- importacion de fuente tipografica `theme/typography.scss`


Funciones:
- convertidor de px a em

Mixins:
- reseteo de `<ul>`
- reseteo de `<a>`
- variables `root:css` y la remplaza segun su propiedad  
- breakpoints (mediaqueries)


Map:() mapas
- mapa paleta de color `config/vars.css`
- mapa valores mediaqueries `config/vars.css`
