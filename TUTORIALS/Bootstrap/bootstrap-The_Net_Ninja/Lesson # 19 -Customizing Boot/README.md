## Bootstrap 5 Crash Course Tutorial #19 - Customizing Bootstrap

https://www.youtube.com/watch?v=nCX3QVl_PiI&list=PL4cUxeGkcC9joIM91nLzd_qaH_AimmdAR&index=19

1. Type in the terminal:
   npm init

2. Type in the terminal:
   npm install bootstrap

3. Check in node_modules/bootstrap/scss/\_variables.scss to check for the primary colors or do a search:
   scss-docs-start theme-color-variables
   I will sse the default colors

4. Create a folder (sass)

5. sass: Create a file (main.scss)

6. sass/main.scss:

6.1 Import all the scss files from modules
// import bootstrap
@import '../node_modules/bootstrap/scss/bootstrap';

6.2 Reasign a value to the default colors. This has to be over the imported bootstrap from the module so it will take effect:
$primary: #c29938;

7. Search for settings in the VSC
   7.1 Search:
   live sass format

7.2 - Click in Edit in settings.json

7.3 - Inside liveSassCompile.settings.formats, tupe this:
"format": "compressed",
"extensionName": ".min.css",
"savePath": "/css"

N: This is has to be only once!

8. Add new colors to the default colors!

8.1 - import the functions & variables:
@import "../node_modules/bootstrap/scss/\_functions";
@import "../node_modules/bootstrap/scss/\_variables";

8.2 - custom theme colours:
$custom-theme-colors: (
"altlight": #f2ebfa,
"altdark": #522192
);

8.3 - merge the maps to add new theme colors:
$theme-colors: map-merge($custom-theme-colors, $theme-colors);
