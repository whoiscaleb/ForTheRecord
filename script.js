
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
        },
        error: function ajaxError(jqXHR) {
            console.error('Error: ', jqXHR.responseText);
        }
    });
}

$('form').on('submit', handleGetData);









    


















