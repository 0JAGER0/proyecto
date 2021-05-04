$(document).ready(function(){

    $('#traer-datos').click(function(){

        $.get({
            url: 'https://www.themealdb.com/api/json/v1/1/categories.php', //DIRECCIÓN SERVER
            success: function(datos) {

                var tabla = $('#tabla-cat-comidas tbody')

                tabla.empty()

                $.each(datos.categories, function(index, category){
                    tabla.append("<tr><td>" + category.idCategory + "</td><td>" + 
                        category.strCategory + "</td><td>" + 
                        "<img src='" + category.strCategoryThumb + "' /></td><td>" + 
                        category.strCategoryDescription + "</td></tr>");
                })

            },
            error: function(error) {
                console.error("Respuesta con error");
                console.error(error)
            }
        });
        

    });

});