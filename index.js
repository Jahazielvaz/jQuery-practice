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

// IMAGE SLIDER
// let imgArr = Array.from(document.getElementsByClassName('imgs'))
// $("#image-switcher").click(() => {
//   let result = imgArr[0];
//   let shifter = imgArr.shift()
//   imgArr.push(shifter)
//   console.log()
// })

// ANIMATE
let arr = Array.from(document.getElementsByClassName('imgs'))

$("#image-switcher").click(() => {
  $(arr[1]).animate({
    opacity: 0
  }, 2000, () => {
    let shift = arr.shift()
    arr.push(shift)
    console.log(arr)
    $(arr[0]).animate({
      opacity: 1
    })

  })
}) // STILL CAN'T GET THE CAROUSEL. BUT WE'LL GET THERE

// RELATIVE ANIMATIONS
$("#box").click(() => {
  $("#box").animate({
    width: '+=100px'
  }, 3000, () => {
    $("#box").animate({
      width: '-=100px'
    }, 3000)
  })
})

// Stop Animations
$("#box-stop").click(() => {
  $("#box").stop()
  // Remember that there's also goToEnd : Which allows it to finish that iteration of the animation. And there's also stopAll which terminates all follow up animations, because it'll keep executing the rest by default
})

// Animate Using Predefined Values
$("#box-button").click(() => {
  $("#box2").animate({
    height: "toggle"
  }, 3000)
})

// Chaining
$("#chain-btn1").click(() => {
  $("#chain-target").hide(1000).show(1000).fadeTo(1000, .5).fadeTo(1000, 0).fadeTo(1000, .5).fadeTo(1000, 1);
})

// I THINK THIS IS ALL RELATED TO THE GET METHOD. I'LL RESEARCH MORE
// Adding Inner HTML Text
$("#inner-btn1").click(() => {
  let secret = "I am SW. I'm here to make sure justice is served";
  $("#secret-message").text(secret);
})

// Adding HTML Elements
$("#adding-html-btn1").click(() => {
  $("#phantom-list").html($("#lets"))
})

// Returning Value From A Form
$("#value-btn1").click(() => {
  $("#value-result").text($("#value-input").val());
  console.log("The function fired");
})

// Getting the value of an html attribute such as an href, or any other tag
$("#attr-btn1").click(() => {
  $("#attr-result").text($("#attr-url").attr("href"));
})












////////////////////////////////////////////////////////////////
//  GENERAL PRACTICE ROUNDS

// Setting html
$("#stuff1-btn1").dblclick(() => {
  if($("#hidden-img").css("display", "hidden")){
    $("#hidden-img").css("display", "block")
  }
  $("#stuff1-img-container").html($("#hidden-img"));
  console.log("Stuff 1 Event Has Been Fired")
})

$("body").on("keydown", (e) => {
  if(e.keyCode == 70){
    $("#stuff1-img-container2").html("<img src='https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.pngall.com%2Fwp-content%2Fuploads%2F2016%2F07%2FSpace-PNG-Clipart.png&f=1&nofb=1'></img>");
    $("#key1").css({
      border: '12px solid lightblue',
      color: 'lightblue'
    }, 500)

  }
})




















}) //End of jQuery
