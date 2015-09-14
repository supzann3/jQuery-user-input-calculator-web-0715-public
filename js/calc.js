'use-strict';
$(function(){

  var calculator = new Calculator();
});

function Calculator () {
  $('#equals').click(validate);
}

function validate() {
  var $number1=$('#number1').val();
  var $number2=$('#number2').val();
  var $operator=$('#operation').val();

  if (isNaN($number1) || isNaN($number2)) {
    $('#result').text('Sorry, one of those is not a valid number!');
  }
  else if ($operator!= '+' && $operator!='-'&& $operator!= '*' && $operator!= '/') {
    return $('#result').text('Sorry, not a valid operation!');
  }
  else{
    var total=eval(parseInt($number1)+$operator+parseInt($number2));
    $('#result').text(total);
  }
}
// your code here!
