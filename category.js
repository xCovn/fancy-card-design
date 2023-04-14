

$(document).ready(async function () {
  // init main function for category
  initCategoryButtons();
});

let activeObj = {
  odd: false,
  even: false
}

function initCategoryButtons() {

  $("button[data-filter*='even']").click(function () {
    $("div[data-category*='odd']").toggle()
    if (!activeObj.even) {
      $("button[data-filter*='odd']").prop('disabled', true)
      activeObj.even = true
    } else {
      $("button[data-filter*='odd']").prop('disabled', false)
      activeObj.even = false
    }
  })

  $("button[data-filter*='odd']").on('click', function () {
    $("div[data-category*='even']").toggle()
    if (!activeObj.even) {
      $("button[data-filter*='even']").prop('disabled', true)
      activeObj.even = true
    } else {
      $("button[data-filter*='even']").prop('disabled', false)
      activeObj.even = false
    }
  })
}
