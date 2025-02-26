$(function() {
	var $write = $('#barcode'), shift = false, capslock = false;
	$('#keyboard li').click(
			function() {
				var $this = $(this), character = $this.val();
				// Shift keys
				if ($this.hasClass('left-shift')
						|| $this.hasClass('right-shift')) {
					$('.letter').toggleClass('uppercase');
					$('.symbol span').toggle();

					shift = (shift === true) ? false : true;
					capslock = false;
					return false;
				}

				// Caps lock
				if ($this.hasClass('capslock')) {
					$('.letter').toggleClass('uppercase');
					capslock = true;
					return false;
				}

				// Delete
				if ($this.hasClass('delete')) {
					var html = $write.val();
					$write.val(html.substr(0, html.length - 1));
					return false;
				}

				// Special characters
				if ($this.hasClass('symbol'))
					character = $('span:visible', $this).html();
				if ($this.hasClass('space'))
					character = ' ';
				if ($this.hasClass('tab'))
					character = "\t";
				if ($this.hasClass('return'))
					character = "\n";

				// Uppercase letter
				if ($this.hasClass('uppercase'))
					character = character.toUpperCase();

				// Remove shift once a key is clicked.
				if (shift === true) {
					$('.symbol span').toggle();
					if (capslock === false)
						$('.letter').toggleClass('uppercase');
					shift = false;
				}

				// Add the character
				console.log("["+data.barcode+","+data.item+","+data.eventId+"]-->"+character);
				
				if(character == '-1'){	
					if(data.barcode){
						alert("請先選擇商品再變更數量");
					} else if(data.item!=null){
						var num  = parseInt(data.item.attr('num')) -1 ;  
						$write.val(num);
						$(data.eventId).trigger('click');
					} 
					return false;
				} else if (character == '+1' ){
					if(data.barcode){
						alert("請先選擇商品再變更數量");
					} else if(data.item!=null){
						var num  = parseInt(data.item.attr('num')) +1 ;  
						$write.val(num);
						$(data.eventId).trigger('click');
					} 
					return false;
				} else if(character == '▲'){
					if (data.item == null) {
						setItemStatus($('tr.sel_item:first'));
					} else {			
						var item = data.item.prev('tr');			
						setItemStatus(item.hasClass('sel_item') ? item : $('tr.sel_item:first'));
					}
					return false;
				} else if(character == '▼'){
					if (data.item == null) {
						setItemStatus($('tr.sel_item:first'));
					} else {
						var item = data.item.next('tr');				
						setItemStatus(item.html()==null ? $('tr.sel_item:last') : item);
					}
					return false;
				} else {
					
					$write.val($write.val() + character);
					$write.focus();
				}
					
			});
});
