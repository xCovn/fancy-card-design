const carouselList = [
  { text: 'Cards row', color: ['#ffbc00', '#ff0058'] },
  { text: 'Awesome row', color: ['#03a9f4', '#ff0058'] },
  { text: 'Default Row', color: ['#4dff03', '#00d0ff'] },
]

$(document).ready(async function () {
  // init main function with stuff
  initCarousel(carouselList, '#changing-text');
});

async function typeText(eleRef, eleObj) {
  let getText = eleObj.text.split("");
  for (let i = 0; i < getText.length; i++) {
    $(eleRef).append(getText[i]);
    await waitForMs(100);
  }
}

async function deleteText(eleRef) {
  let getTextAndSplit = $(eleRef).html().split('');

  while (getTextAndSplit.length > 0) {
    getTextAndSplit.pop();
    $(eleRef).html(getTextAndSplit.join(""))
    await waitForMs(150);
  }
}

async function initCarousel(carouselList, eleRef) {

  // loop through list 
  let i = 0;

  while (i < carouselList.length) {
    updateStyling(eleRef, carouselList[i].color)
    await typeText(eleRef, carouselList[i]);
    await waitForMs(2000)
    await deleteText(eleRef)
    await waitForMs(450)
    i++;

    // resetting for starting again
    if (i === carouselList.length) {
      i = 0
    }
  }

}

function waitForMs(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

function updateStyling(eleRef, color) {
  $(eleRef).css('background', '-webkit-linear-gradient(315deg, ' + color[0] + ', ' + color[1] + ')');
  $(eleRef).css('-webkit-background-clip', 'text');
  $(eleRef).css('-webkit-text-fill-color', 'transparent');
  $('#headline-text').css('border-bottom', '3px solid transparent');
  $('#headline-text').css('border-image', 'linear-gradient(0.25turn, ' + color[0] + ', ' + color[1] + ')');
  $('#headline-text').css('border-image-slice', '1');
}



