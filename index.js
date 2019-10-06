$(() => {
// MAKING CONTENT DISAPPEAR AND APPEAR

//Click Hide Event
  $('.dis').click(() => {
    $('.divs').hide("slow")
  })

//Click Show Event
  $('.app').click(() => {
    $('.divs').show(5000)
  })

// Mouse Hover Event
  $('.dis-hold').hover(() => {
    $(".divs").hide(1000)

    console.log('Event got fired')
  },
  () => {
    $(".divs").show()
    console.log("Mouse Left")
  }
)

$('.inputs').focus(() => {
  $('.inputs').css('background-color', 'white')
})

$('input').blur(() => {
  $('input').css("background-color", "lightblue");
  console.log('This event worked')
})

// $('#btn1').on('click', () => {
//   $('#img1').css('background', `url(https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.s6-NuNcuDG-U1qnOev3fcgHaEK%26pid%3DApi&f=1)`);
//   console.log('Change is triggering');
// })

// $('#btn1').click(() => {
//   $('#img1').css('background', 'url(https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.s6-NuNcuDG-U1qnOev3fcgHaEK%26pid%3DApi&f=1)');
// });

// ON EVENT
$('#btn1').on({
  mouseleave: () => {
    $('#img1').css('background', 'url(https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.s6-NuNcuDG-U1qnOev3fcgHaEK%26pid%3DApi&f=1) center center no-repeat', 3000)
    console.log('Mouseleave event fired')
  },
  click: () => {
    $('#img1').css('background', 'url(https://1.bp.blogspot.com/-re5HqFKGZwk/Umy1ep7Fr8I/AAAAAAAACeQ/o22Qoim-QYs/s1600/Hackers+are+real+by+PCbots.png) center center no-repeat')
    console.log('click event fired')
  }
})

// TOGGLE EVENT
$("#btn2").click(() => {
  $("#toggle-event > p").toggle(3000)
})

// FADE EVENTS

// Fade In/Out
$("#fade-btn1").on("click", () => {
  $("#fade-text1").fadeOut(2000)
},() =>{
  if($("#fade-text1").css('display', 'none')){
    $("#fade-text1").fadeIn(5000)
  }
}
)

// Fade Toggle
$("#fade-btn2").click(() => {
  $("#fade-text2").fadeToggle(3000)
})

// Fade To
$("#fade-btn3").click(() => {
  $("#fade-text3").fadeTo(2000, .5);
  $("#fade-text3").fadeTo(2000, 0);
  $("#fade-text3").fadeTo(2000, .5);
  $("#fade-text3").fadeTo(2000, 1);
})


// SLIDE EVENTS
$("#slide-btn1").click(() => {
  $("#slide-text1").slideDown(2000)
})

$("#slide-btn2").click(() => {
  $("#slide-text2").slideUp(3000);
});

$("#slide-btn3").on("click", () => {
  $("#slide-text3").slideToggle(1000)
})





}) //End of jQuery
