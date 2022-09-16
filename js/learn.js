$(() => {
  $.ajax({
    url: './js/learnData.json',
    type: "GET",
    success(res) {
      let body = $('#body')
      body.html('')
      res.learnList.forEach(item => {
        body.append((`
          <h1 class="pd-2">${item.h1}</h1>
        <p>${item.p}</p>
        <h2 class="mar-6">${item.h2}</h2>
        <div class="cent-img text-center">
          <img src="${item.src}" alt="">
        </div>
        <h3 class="mar-6">${item['h3_1']}</h3>
        <p>${item['p_1']}</p>
        <h3 class="mar-6">${item['h3_2']}</h3>
        <p>${item['p_2']}</p>
        <h3 class="mar-6">${item['h3_3']}</h3>
        <p>${item['p_3']}</p>
        <h3 class="mar-6">${item['h3_4']}</h3>
        <p>${item['p_4']}</p>
        <h3 class="mar-6">${item['h3_5']}</h3>
        <p class="mab-6" id="p_5">${item['p_5']}</p>
        `))
      })
    }
  })
})