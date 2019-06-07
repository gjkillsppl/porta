

$(function () {
  "use strict";

    $('#contacto-form').validator();

    $('#contacto-form').on('submit', function (e) {
        if (!e.isDefaultPrevented()) {
            var url = "assets/php/contacto.php";

            $.ajax({
                type: "POST",
                url: url,
                data: $(this).serialize(),
                success: function (data)
                {
                    var messageAlert = 'alert-' + data.type;
                    var messageText = data.message;

                    var alertBox = '<div class="alert ' + messageAlert + ' alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' + messageText + '</div>';
                    if (messageAlert && messageText) {
                        $('#contacto-form').find('.messages').html(alertBox);
                        $('#contacto-form')[0].reset();
                    }
                }
            });
            return false;
        }
    })
});
