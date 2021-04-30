// Wait for the DOM to be ready
$(function() {
    // Initialize form validation on the registration form.
    // It has the name attribute "registration"
    $("form[name='formulario']").validate({
      // Specify validation rules
      rules: {
        // The key name on the left side is the name attribute
        // of an input field. Validation rules are defined
        // on the right side
        nombre: "required",
        Ciudad: "required",
        opcion: "required",
        areatexto: {
            required: true,
            minlength: 50
        },
        correo: {
          required: true,
          // Specify that email should be validated
          // by the built-in "email" rule
          email: true
        },
        rut: {
          required: true,
          minlength: 11
        }
      },
      // Specify validation error messages
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
      // Make sure the form is submitted to the destination defined
      // in the "action" attribute of the form when valid
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
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      var forms = document.getElementsByClassName('needs-validation');
      // Loop over them and prevent submission
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