## Bootstrap 5 Crash Course Tutorial #15 - Tooltips

https://www.youtube.com/watch?v=WTrW-1JsDYE&list=PL4cUxeGkcC9joIM91nLzd_qaH_AimmdAR&index=15

tooltips is the message that appear when we hover the mouse over certain element. In This example is when it hovered over the book image and over the input field of email.

1.  First we need to reate a function (JavaScript) at the end of the body (lin 416 - 422):
<script>
  const tooltips = document.querySelectorAll('.tt')
  tooltips.forEach(t => {
    new bootstrap.Tooltip(t)
  })
</script>

2.  Tooltip over the book (lin 76 -78):

              <span class="tt" data-bs-placement="bottom" title="Net Ninja Pro book cover">
                <img src="/assets/ebook-cover.png" class="img-fluid" alt="ebook">
              </span>

    N: class="tt" is just a madeup name that we will use to loop over it with the function.

3.  Tooltip for the email (367-369):

                        <span class="input-group-text">
                <span class="tt" data-bs-placement="bottom" title="Enter an email address we can reply to.">
                  <i class="bi bi-question-circle text-muted"></i>
                </span>

\*There are more examplle of tooltip in this app
