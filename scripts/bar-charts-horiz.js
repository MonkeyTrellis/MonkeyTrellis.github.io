$(document).ready(function() {
    var $win = $(window),
        $win_height = $(window).height(),
        windowPercentage = $(window).height() * 0.9;
    $win.on("scroll", scrollReveal);

    $("#rect-1")
    .velocity({ width: "0%" });
    $("#rect-2")
    .velocity({ width: "0%" });

    function scrollReveal() {
        var scrolled = $win.scrollTop();


    $("#rect-1").each(function() {
            var $this = $(this),
                offsetTop = $this.offset().top;
            if (
                scrolled + windowPercentage > offsetTop ||
                $win_height > offsetTop
            ) {
              // $(this).delay(500)
              $(this).velocity({ width: "97%" });
              }
      });

     $("#rect-2").each(function() {
          var $this = $(this),
              offsetTop = $this.offset().top;
          if (
              scrolled + windowPercentage > offsetTop ||
              $win_height > offsetTop
          ) {
            // $(this).delay(500)
            $(this).velocity({ width: "55%" });
            }
    });




    }
    scrollReveal();
});
