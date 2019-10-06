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

$("#btn2").click(() => {
  $("#toggle-event > p").toggle(3000)
})







}) //End of jQuery
