
$(function () {

   $('#closebutton').click(function () {
      $('#tournamenteditor').css('display', 'none');
   });

    window.addEventListener('keydown', function(event) {
         if (event.key === 'Escape') {
             let visible = $('#tournamenteditor').css('display') === 'block';

             if (visible) {
                 $('#tournamenteditor').css('display', 'none');
             }

         }
    }, true);
});