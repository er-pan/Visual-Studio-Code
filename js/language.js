$(() => {
  $.ajax({
    url: './js/languageData.json',
    type: 'GET',
    success(res) {
      let language_cont = $("#language-cont")
      language_cont.html('')
      res.languageList.forEach(item => {
        language_cont.append((`
        <div class="col-xs-6 col-sm-3 col-md-2">
          <div class="flex-f mar-2">
            <img src="${item.src}" alt="">
            <span>${item.name}</span>
          </div>
        </div>
        `))
      })
    }
  })
})