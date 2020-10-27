// 절차형 프로그래밍
// var = let, cosnt
var section = $('.board section');
var tab = $('.board .tab a');
var item = $('.board li');
// $( )= jquery()
// querySelector : 단수 querySelectorall : 양수
// ('상위 안에 포함된 선택자')
//tab이라고 불렀지만 a를 부른 것

item.addClass('icon-dot-circled');
// (.찍으면 안됩니다 : 클래스 이름만 알려주면 됩니다.)

tab.click(function(e){
  e.preventDefault();
  section.removeClass('is-active');
  // 200개, 여러 개면 다 지우고 새로 시작하기 때문에 합리적이지 않다. 원래는 있는 것만 지워야 한다.
  $(this).parent().parent().addClass('is-active');
    // this: 내가 클릭한 요소 'a'에 접근하라는 것
    // '.' =chaining기법
});
// click이라는 event method : multi event인식 = on
// 기능을 담당하는 거지 a의 href가 실행하게 하고 싶지 않다.