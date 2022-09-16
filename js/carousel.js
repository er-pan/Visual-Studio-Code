$(() => {
  $.ajax({
    url: './js/carouselData.json',
    type: 'GET',
    success(res) {
      let carousel_item = $("#carousel-item")
      let carousel_item2 = $("#carousel-item2")
      carousel_item.html('')
      carousel_item2.html('')
      res.carouselList.slice(0, 3).forEach(item => {
        carousel_item.append((`
          <div class="col-md-4">
            <ul class="carousel flex-top">
              <li class="">
                <div class="img">
                  <img src="${item.img}" alt="">
                </div>
              </li>
              <li>
                <div class="desc">
                  <div class="desc-top re">
                    <p><span>${item.username}</span> ${item.call}</p>
                  </div>
                  <div class="desc-bot">
                    <p>${item.desc}</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        `))
      })
      res.carouselList.slice(3, 6).forEach(item => {
        carousel_item2.append((`
          <div class="col-md-4">
            <ul class="carousel flex-top">
              <li class="">
                <div class="img">
                  <img src="${item.img}" alt="">
                </div>
              </li>
              <li>
                <div class="desc">
                  <div class="desc-top re">
                    <p><span>${item.username}</span> ${item.call}</p>
                  </div>
                  <div class="desc-bot">
                    <p>${item.desc}</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        `))
      })
    }
  })
})