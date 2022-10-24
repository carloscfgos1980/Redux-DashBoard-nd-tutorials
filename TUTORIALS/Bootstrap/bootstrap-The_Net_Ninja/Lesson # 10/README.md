## Bootstrap 5 Crash Course Tutorial #10 - Cards

https://www.youtube.com/watch?v=NRoET8-8cbw&list=PL4cUxeGkcC9joIM91nLzd_qaH_AimmdAR&index=10

1. Search in the bootstrap website, what kind of card we want
   https://getbootstrap.com/docs/5.2/getting-started/introduction/

N: THis cards is is used to display a product, little description and a link to something else, like buying the product. So far I dont need to use use it in my DashBoard-app project

## This example is displayed in index.html (lin 80 -136)

- To create a grid we need always to put everything inside a <div class='row'>, like this:
<div class="row my-5 g-0 align-items-center justify-content-center">
"my-5" - to git a margin top and botton of 5.
"g-0"- To eliminate the default gap between the cards
"align-items-center" - To place all the elements in the center (horizontally - X Axis)
"justify-content-center" - To place all the elements in the center (vertically -Y Axis )

---

- In this case we have 3 cards. The one in the middle is sligthly bigger that the one the right and left. We do it like this:

        <div class="col-8 col-lg-4 col-xl-3">   //"col-8" - It is size (8 is the amoung of grid-collumns).
        <div class="col-9 col-lg-4">    //"col-9" This is why is a bit bigger
        <div class="col-8 col-lg-4 col-xl-3">

        About the responsiness:
        "class="col-8 col-lg-4 col-xl-3". Start in small screens with a size of 8 grid-columns, then in large size (lg-4), takes 4 grid-columns and in extra large screens (col-xl-3) it reduce size of the grid columns to 3. In reallity, we are going to observe the cards in the more or less same size since the variation of size is a percent of the screen and not physical unit meassure like centimeters.
        "class="col-9 col-lg-4" in this case only onces it gets to large screens (col-lg-4)

- There are many variations of cards. I just need time to play around in select the one I need and like
