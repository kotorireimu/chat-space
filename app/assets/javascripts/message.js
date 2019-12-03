$(function(){

  function buildHTML(message){
    // 「もしメッセージに画像が含まれていたら」という条件式
    if (message.image) {
      var html = `<div class="main-chat__contents__group">
                    <div class="main-chat__contents__group__name-time">
                      <div class="main-chat__contents__group__name-time__name">
                        <p>
                          ${message.name}
                        </p>
                      </div>
                      <div class="main-chat__contents__group__name-time__time">
                        <p>
                          ${message.time}
                        </p>
                      </div>
                    </div>
                    <div class="main-chat__contents__group__message">
                      <p>
                        ${message.content}
                      </p>
                      <img src= ${message.image} >
                    </div>
                  </div>`//メッセージに画像が含まれる場合のHTMLを作る
    } else {
      var html = `<div class="main-chat__contents__group">
                    <div class="main-chat__contents__group__name-time">
                      <div class="main-chat__contents__group__name-time__name">
                        <p>
                          ${message.name}
                        </p>
                      </div>
                      <div class="main-chat__contents__group__name-time__time">
                        <p>
                          ${message.time}
                        </p>
                      </div>
                    </div>
                    <div class="main-chat__contents__group__message">
                      <p>
                        ${message.content}
                      </p>
                    </div>
                  </div>`//メッセージに画像が含まれない場合のHTMLを作る
    }
    return html
  }

  $("#new_message").on("submit", function(e){
    e.preventDefault()
    var formData = new FormData(this);
    var url = $(this).attr('action')
    $.ajax({
      url: url,  //同期通信でいう『パス』
      type: 'POST',  //同期通信でいう『HTTPメソッド』
      data: formData,  
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      var html = buildHTML(data);
      $('.main-chat__contents').append(html);
      $('.main-chat__contents').animate({ scrollTop: $('.main-chat__contents')[0].scrollHeight});
      $('#new_message')[0].reset();
      $('.main-chat__footer__text__btn').prop('disabled', false);
    })
    .fail(function() {
      alert("メッセージ送信に失敗しました");
    });
  });
});