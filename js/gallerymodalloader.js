 $(document).ready(function(){
   $('.clickable-image').on('click',function(){
		var src = $(this).attr('src');
		src = src.replace("/thumbnail/","/")
		var img = '<img src="' + src + '" class="img-responsive"/>';
		$('#gallery-modal').modal();
		$('#gallery-modal').on('shown.bs.modal', function(){
			$('#gallery-modal .modal-body').html(img);
		});
		$('#gallery-modal').on('hidden.bs.modal', function(){
			$('#gallery-modal .modal-body').html('');
		});
   });  
})