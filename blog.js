// Firebase connection config
var config = {
apiKey: "AIzaSyAXss0HuO6uUcBFaPelQiMPw3ljO-NlHIY",
authDomain: "greenfoxblog.firebaseapp.com",
databaseURL: "https://greenfoxblog.firebaseio.com",
projectId: "greenfoxblog",
storageBucket: "greenfoxblog.appspot.com",
messagingSenderId: "376688960466"
};

firebase.initializeApp(config);
fb = firebase.database();






// LOADING existing posts
fb.ref("posts").once('value').then(data => {

  // getting data
  let savedPosts = data.val();

  // looping through data fetched from Firebase
  var i;
  for (i = 1; i < savedPosts.length; i++) { 
    console.log(i)

    $('div').append(
      `
      <h2> ${savedPosts[i].title} </h2>
      <p> ${savedPosts[i].text} </p>
      `
    )

  }

  });


// button click event updating the database
$('button').on('click', (event) => {
  // number of existing posts (working)
  fb.ref("posts").once('value').then(data => {
    let nr_posts
    if(data.val()){
      nr_posts = data.val().length ; // data.val().length
    } else {
      nr_posts = 1
    }
    // updating the current posts to Firebase
    let path = "posts/" + String( nr_posts );
    let dataToSave = {
    title: $('#title').val(),
    text: $('#copied_text').val()
    };
    fb.ref(path).set(dataToSave);

    $('div').append(
      `
      <h2> ${dataToSave.title} </h2>
      <p> ${dataToSave.text} </p>
      `
    )

    })

  /*
  // getting data ready saving post
  let path = "posts/" + "2";
  let dataToSave = {
  title: $('#title').val(),
  text: $('#copied_text').val()
  };

  fb.ref(path).set(dataToSave);
  */

  })

/*
// UPDATING
let samePath = "posts/1";
let updatedData = {
title: "My first edited and updated blog post",
text: "Some hilarious content again, which proves how awesome I am again."
};
fb.ref(samePath).set(updatedData);
For deleting we just need the specific path we want to remove, and use the remove() keyword:

// DELETING
fb.ref("posts/2").remove();
*/
  
/*
// button event
$('button').on('click', (event) => {
  $('body').append(
    `<form>${$('#copied_text').val()}</form>`
  )

  $( "form" ).last().hide();
  $( "form" ).last().toggle('slow'); // toggle() / show()

  // clear the text area
  $('#copied_text').val()

  })  
*/