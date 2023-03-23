
function handleGetData(event) {
    event.preventDefault();
    const query = $('#query').val();
    $.ajax({
        method: 'GET',
        url: 'https://api.api-ninjas.com/v1/nutrition?query=' + query,
        headers: { 'X-Api-Key': '4nihgxknLnY1MNKXnMOtgw==N2FMBsilvKXpTlXn'},
        contentType: 'application/json',
        success: function(result) {
            console.log(result);
            const data = result[0]
            console.log(Math.round(data.serving_size_g))
            $("#calories").text(data.calories)
            $("#totalfat").text(data.fat_total_g)
            $("#satfat").text(data.fat_saturated_g) 
            $("#cholesterol").text(data.cholesterol_mg)
            $("#sodium").text(data.sodium_mg)
            $("#totalcarb").text(data.carbohydrates_total_g)
            $("#servingsize").text(Math.round(data.serving_size_g))
            $("#sugar").text(data.sugar_g)
            $("#protein").text(data.protein_g)
        },
        error: function ajaxError(jqXHR) {
            console.error('Error: ', jqXHR.responseText);
        }
    });
}

$('form').on('submit', handleGetData);










    


















