$(() => {
  $.ajax({
    url: './js/stateData.json',
    type: 'GET',
    success(res) {
      let state = $('#state')
      state.html('')
      res.stateList.forEach((item, index) => {
        state.append((`
     <div class="container mar-15">
      <div class="row" id="state-row">
        <div class="col-md-4 col-sm-4 ${index % 2 != 0 ? 'col-md-push-8' : ""}">
          <img class="state-img" src="${item.src}" alt="">
        </div>
        <div class="col-md-1 col-sm-2"></div>
        <div class="col-md-7 col-sm-6 ${index % 2 != 0 ? 'col-md-pull-5' : ""}">
          <h2 class="state-h2">${item.h2}</h2>
          <p class="state-p mar-2">${item.p}</p>
        </div>
      </div> 
     </div> 
        `))
      })
    }
  })
})