// Initialize Firebase
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

// button click event
$('button').on('click', (event) => {

  // getting data ready saving post
  let path = "posts/1";
  let dataToSave = {
  title: $('#title').val(),
  text: $('#copied_text').val()
  };

  fb.ref(path).set(dataToSave);
  // clear the text area

  })

// loading existing posts
fb.ref("posts").once('value').then(data => {
let savedPosts = data.val();
console.log(savedPosts)
});
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