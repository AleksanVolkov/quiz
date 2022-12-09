const inputs = document.querySelectorAll('.form_radio_btn input');
  let attributeValues = [];

    inputs.forEach(element => {
    $(element).click(() => pushInputsDataToArray())
  })

  function pushInputsDataToArray() {
    attributeValues = [];
    console.log(attributeValues);
    inputs.forEach(element => {
      let input = $(element);
      

      if (input.is(":checked")) {
        attributeValues.push(input.val())
      }
    })

        var _token   = $("input[name=_token]").val();
        var product = $('#productId').val();
        
        
        $.ajax({
                url: "{{ route('show.variant') }}",
                type: 'post',
                data: {
                    _token: _token,
                    product: product,
                    parametr: attributeValues,
                },
                beforeSend: function(xhr) {

                },
                success: function(data) {
                    $('#modImage').css("display", "block");
                    $('#modImage').html('<img src="'+ data.thumbnail +'" width="350" height="500" />');
                    $('#default-price').html('$' + Math.round(data.price));
                    $('#product-slider').css("display", "none");
                    //alert(data);
                    console.log(data);

                },
                
                error: function() {
                    alert('Error');
                }
                
            });
  }

  /**/
  const arraw = document.querySelector('.btn'),
  slide_track = document.querySelector('.quiz_field')

  let card = 0;
  arraw.addEventListener(('click'), ()=>{
    
    
    switch (card) {
      case 0:
        slide_track.style.transform = "translateX(-700px)";
        card = 1;
        console.log(card)
        break;
      case 1:
        slide_track.style.transform = "translateX(-1400px)";
        card = 2;
        break;
      case 2:
        slide_track.style.transform = "translateX(-2100px)";
        card = 3;
        break;
      case 3:
        slide_track.style.transform = "translateX(-2800px)";
        card = 4;
        break;
      
    }

  })