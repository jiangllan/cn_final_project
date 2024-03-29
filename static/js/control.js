function showLoading(){
  $("#loadingBackground").show();
}
function hideLoading(){
  $("#loadingBackground").hide();
}

function logout(){
  showLoading();
  $.ajax({
    type:"post",
    url:"/logout",
    data:{},
    success:function(){
      hideLoading();
      window.location.href="/";
    },
    error:function(){
      hideLoading();
      alert("网络拥堵，请稍后再试");
    }
  });
}

function loadStudentControlPage(){
  showLoading();
  $(".contentWraper").load("/showStudent",hideLoading);
}

function loadShowBelongingPage(){
  showLoading();
  $(".contentWraper").load("/showBelongings",hideLoading);
}

function loadTagCheckPage(){
  showLoading();
  $(".contentWraper").load("/checkTag",hideLoading);
}
