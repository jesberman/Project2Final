$(document).ready(function() {

    event.preventDefault();

    $('#next23').on("click", function(event) {
    var newClient = {
        client_name: $("#client_name").val().trim(),
        client_email: $('#client_email').val().trim(),
        client_phone: $('#client_phone').val().trim(),
        client_zip: $('#client_zip').val().trim(),
        client_retirement: $('[name=answers-2]:checked').val(),
        client_currently_manage: $('[name=answers-3]:checked').val(),
        client_has_children: $('[name=answers-10]:checked').val(),
        client_owns_business: $('[name=answers-11]:checked').val(),
        client_advisor_tax_specialty: $('[name=answers-13]:checked').val(),
        client_advisor_estate_specialty: $('[name=answers-14]:checked').val(),
        client_existing_advisor: $('[name=answers-15]:checked').val(),
        client_advisor_immediate_area: $('[name=answers-16]:checked').val(),
        client_houshold_income: $('[name=answers-17]:checked').val(),
        client_investable_assets: $('[name=answers-18]:checked').val(),
        client_monthly_savings: $('[name=answers-19]:checked').val(),
        client_additional_data: $('[name=answers-20]:checked').val(),


    }

    console.log(newClient)

    submitClient(newClient);

    
    function submitClient(Client) {
        $.post('/api/clients', Client, function(){
            window.location.href = '/advisors';
        })
    }




});

















})

