Bootstrap 5 Crash Course Tutorial #8 - Grid Layout (part 2)

https://www.youtube.com/watch?v=yCCIztB-S_k&list=PL4cUxeGkcC9joIM91nLzd_qaH_AimmdAR&index=8

1. This section has a text on the right and image on the left.

2. Section will have an "id" so we could scroll to those sections with the NavBar

3. In the Head component is some padding style applied. Normaly we do that in a css file and imported to the index.html:
     <style>
       section {
         padding: 60px 0;        // 60px to the to and to the botton
       }
     </style>
   </head>

4. Inside the section, create a grid
<div class="container-lg">      // Every grid goes into a container. This means it will be 100% until it reach the "large break point" (lg). When it reach the breaking point it goes to the center kinda structure.

5. Inside <div class="container-lg"> :
<div class="row justify-content-center align-items-center">         
// "justify-content-center" - Everything inside this <div> will be align to the center
// align-items-center" - in the Y Axis (horizontal, from top to botton) everything will be in the center.

6. Inside <div class="row justify-content-center"> : Create two colums of content( on the right some text and on the left, an image):

6.1 - Create the Div para la comlumna de la izquierda

<div class="col-md-5 text-center text-md-start">
// "m-5" means that it will be 100 % (12 grid-columns in width) for extra small size screens and then when it reaches the medium size screen getting bigger, at that point we are getting 5 columns of width for this element
// "text-center text-md-start" It means that the content will be centered for small size screens and when it reaches the medium breaking point, it move to the right (text-md-start).

6.1.1 Create content of the column on the left:
Inside <div class="col-md-5 text-center text-md-start">

   <h1> // First time I see a div inside <h1>
   <div class="display-2">Black-Belt</div> //class="display-2" size of the text. Lower number, bigger letter size.
   <div class="display-5 text-muted">Your Coding Skills</div>
   </h1>
   <p class="lead my-4 text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam,
   dignissimos?</p> //to Generate random text, type: Lorem and press "tab".
   // "my-4" - to give margin top and botton.
   // "text-muted" - to give a gray color to the text
   <a href="#pricing" class="btn btn-secondary btn-lg">Buy Now</a> // anchor tag with the shape of a button
   // "btn-secondary" - give the button the secundary default color
   // "btn-lg" - Make the button larger.

6.2 - Create content of the column on the right. This will contain the image:
Inside <div class="row justify-content-center">

<div class="col-md-5 text-center d-none d-md-block"> //This works to centralize the image as well. This doesnt work in css so it makes our work a lot easier.
// "d-none d-md-block" - It means that as default (small size screens) it will not display the content inside this <div>, in this case the image, and it will show it when it gets to the break point of medium size screens (d-md-block)

6.2.1 Imge
<img src="/assets/ebook-cover.png" class="img-fluid" alt="ebook"> // It makes is 100% width of the parent element(in this case is 5: <div class="col-md-5)
