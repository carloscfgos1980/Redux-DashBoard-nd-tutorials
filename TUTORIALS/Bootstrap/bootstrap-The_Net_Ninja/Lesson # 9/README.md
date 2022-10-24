## Bootstrap 5 Crash Course Tutorial #9 - Navbars

https://www.youtube.com/watch?v=7AT1X9Z41sA&list=PL4cUxeGkcC9joIM91nLzd_qaH_AimmdAR&index=9

# In order to apply the NavBar, we go to the Bootstrap website:

https://getbootstrap.com/docs/5.2/getting-started/introduction/
And find the NavBar tht we want. Then just copy

This part of the NavBar is to have a variation of the same link. When the screen is small it will display a text and when it is bigger than medium size, it will display a button. Explanation in the video

          <li class="nav-item d-md-none">
            <a class="nav-link" href="#pricing">Pricing</a>
          </li>
          <li class="nav-item ms-2 d-none d-md-inline">
            <a class="btn btn-secondary" href="#pricing">buy now</a>
          </li>
