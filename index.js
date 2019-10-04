$(() => {
// MAKING CONTENT DISAPPEAR AND APPEAR

//Click Hide Event
  $('.dis').click(() => {
    $('.divs').hide()
  })

//Click Show Event
  $('.app').click(() => {
    $('.divs').show()
  })

// Mouse Hover Event
  $('.dis-hold').hover(() => {
    $(".divs").hide()

    console.log('Event got fired')
  },
  () => {
    $(".divs").show()
    console.log("Mouse Left")
  }
)

// $('.inputs').focus(() => {
//   $('.inputs').css('background-color', 'white')
// })

$('input').blur(() => {
  $('input').css("background-color", "lightblue");
  console.log('This event worked')
})






}) //End of jQuery
