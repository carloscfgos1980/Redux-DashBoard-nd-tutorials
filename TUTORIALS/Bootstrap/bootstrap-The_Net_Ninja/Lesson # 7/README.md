## Bootstrap 5 Crash Course Tutorial #7 - Grid Layout (part 1)

https://www.youtube.com/watch?v=irfbn103AzE&list=PL4cUxeGkcC9joIM91nLzd_qaH_AimmdAR&index=7

1. Divide the columns equally (lin 5 -28). EX
  <div class="container-lg my-5">
      <div class="col">
N: By default the screen is divided in 12 columns!

2. Divide the columns of content in different size (lin 30 -43)

  <div class="container-lg my-5">
      <div class="col">
  <div class="container-lg my-5">
  <div class="row">
   <div class="col-6">
   <div class="col-3">
    <div class="col-3">

N: the sum of the 3 columns is 12 coz the default 12 columns!

3. responsive column widths (lin 45 -59)

<div class="container-lg my-5">
<div class="row gy-3">
N: here it changes to "gy-3" to specified the amount (3) of responsise columns
 <div class="col-sm-4 col-lg-6">
<div class="col-sm-4 col-lg-3">
<div class="col-sm-4 col-lg-3">
N: "sm-4" means that when is small screen(it will be divided in 3 columns with a with of 4)
"col-lg-6"
"col-lg-3"
"col-lg-3"
Then when it is a larger screen the first column will ocupied 50% of the screen (6 columns) and the other 2 columns, 25% each one!

4. justifying column

div class="container-lg my-5">

<div class="row justify-content-center">
N: It is just like a flex-box. In this case the 3 columns to take all the space in the DOM (only 9 grids-column 3 x 3)
<div class="col-md-3">
"md-3" singnifica que el contenido que esta en esa columna ocupa 3 clumnas en el grid.
El Dom esta fraccionado en 12 columnas, so the columns size change if the screem is larger or shorte... I hope it makes sense later...
