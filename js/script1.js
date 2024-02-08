$(document).ready(function () {
  var jbOffset = $('#birth').offset();
  /*선택자는 본인 구조에 맞게 수정*/
  $(window).scroll(function () {
    if ($(document).scrollTop() > 2900) {//여기 지정된 길이 이후부터 적용됩니다
      $('#birth').addClass("on");
      /*선택자는 본인 구조에 맞게 수정, on클래스 만들어서 변경 원하는 스타일 주세요*/
    }
    else {
      $('#birth').removeClass("on");
      /*선택자는 본인 구조에 맞게 수정, on클래스 만들어서 변경 원하는 스타일 주세요*/
    }
  });
  $(window).scroll(function () {
    if ($(document).scrollTop() > 3250) {//여기 지정된 길이 이후부터 적용됩니다
      $('#birth2').addClass("on1");
      /*선택자는 본인 구조에 맞게 수정, on클래스 만들어서 변경 원하는 스타일 주세요*/
    }
    else {
      $('#birth2').removeClass("on1");
      /*선택자는 본인 구조에 맞게 수정, on클래스 만들어서 변경 원하는 스타일 주세요*/
    }
  });
});