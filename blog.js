$('button').on('click', (event) => {
  $('body').append(
    `<form>${$('#copied_text').val()}</form>`
  )

  $( "form" ).last().hide();
  $( "form" ).last().toggle('slow'); // toggle() / show()

  // clear the text area
  $('#copied_text').val()

  })
  
  

/*
    // add the element from the text area
    $('body').append(
      `<form> ${$('#copied_text').val()} </form>`
    )

    $( "form" ).last().hide();
    $( "form" ).last().toggle('slow'); // toggle() / show()

    // clear the text area
    $('#copied_text').val('')
  
*/