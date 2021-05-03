// Wait for the DOM to be ready

$(function() {
    $("form[name='formulario']").validate({
      rules: {
        nombre: "required",
        Ciudad: "required",
        opcion: "required",
        areatexto: {
            required: true,
            minlength: 50
        },
        correo: {
          required: true,

          email: true
        },
        rut: {
          required: true,
          minlength: 11
        }
      },
      messages: {
        nombre: "Por favor ingrese el nombre completo ",
        Ciudad: "Por favor ingrese la ciudad",
        opcion: "Por favor elige una opcion",
        areatexto: "Por favor llene este campo con minimo caracteres de 50",
        rut: {
          required: "Por favor ingrese el rut o pasaporte",
          minlength: "El rut o pasaporte debe ser como minimo de 11 caracteres contando el punto y guion"
        },
        correo: "Por favor ingrese el correo"
      },
      submitHandler: function(form) {
        form.submit();
      }
    });
  });


/* FORMATO directo de bootstrap sin jquery, ESTA ES LA VERSION QUE QUIERO PASAR A JQUERY, PERO NOSE 
COMO HELP LINK A LA PAGINA AQUI ABAJO exactamente en custom-styles*/

//https://getbootstrap.com/docs/4.6/components/forms/#custom-styles


//FORMA QUE QUIERO TRANSFORMAR A JQUERY

/*
(function() {
  'use strict';
  window.addEventListener('load', function() {
    var forms = document.getElementsByClassName('needs-validation');
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();

*/