## Bootstrap 5 Crash Course Tutorial #14 - Working with Forms

https://www.youtube.com/watch?v=dKVX22GR7zQ&list=PL4cUxeGkcC9joIM91nLzd_qaH_AimmdAR&index=14

- Styling forms is very usefull. Example in index.html (lin 343 - 393)

1. We have to create the section and give the id:
<section id="contact">

2. Place all the content in a large container so it will have 100% width till it heats large screen size:
<div class="container-lg">

3. We use a grid even when we are dealing with a single column coz that allows us to create a responsive form (it will adjust automatically the size of the content, in this case the form):
   <div class="row justify-content-center my-5">

4. Stablish the size of the contenr for a large screen, by defaul small screen is 100%:
   <div class="col-lg-6">

5. Create a group text. This is a very cool styling
   <div class="input-group mb-4">
   <span class="input-group-text">
   <i class="bi bi-envelope-fill text-secondary"></i>
   </span>
   <input type="text" id="email" class="form-control" placeholder="e.g. mario@example.com" />
   </div>

6. Cool styling by putting the label inside the text area
   <div class="mb-4 mt-5 form-floating">
   <textarea class="form-control" id="query" style="height: 140px" placeholder="query"></textarea>
   <label for="query">Your query...</label>
   </div>
