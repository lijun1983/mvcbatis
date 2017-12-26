$('#message_trigger_ok').on('click', function(e) {
    e.preventDefault();
    $.scojs_message('操作成功!', $.scojs_message.TYPE_OK);
 });
$('#message_trigger_err').on('click', function(e) {
    e.preventDefault();
    $.scojs_message('操作失败!', $.scojs_message.TYPE_ERROR);
});
$(document).ready(function(){
	// TO USE PRELOADRE, LET OPEN CODE BELOW AND DELETE ALL 
	// $('.spinner.demo').fadeOut('slow');
	$('.spinner.demo').hide();
	$('.show_demo').click(function(e){
		e.preventDefault();
		var $this = $(this);
		$(this).parent().find('.spinner.demo').show();
		setTimeout(function(){
			$this.parent().find('.spinner.demo').fadeOut('slow');
		}, '3000');
	});
});