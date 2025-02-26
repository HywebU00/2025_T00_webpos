$(function() {
	var $write = $('#barcode'), shift = false, capslock = false;
	$('#keyboard li').click(
			function() {
				var $this = $(this), character = $this.html(); 
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
					var html = $write.html();

					$write.html(html.substr(0, html.length - 1));
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
				console.log("["+data.barcode+","+data.item+"]-->"+character);
				
				if(character == '-1' & !data.barcode){		
					var item = data.item;
					if(item!=null){
						var num  = parseInt(item.attr('num')) -1 ;  
						$write.html(num);
						$('#enter').trigger('click');
					}
					return false;
				} else if (character == '+1' & !data.barcode){
					var item = data.item;
					if(item!=null){
						var num  = parseInt(item.attr('num')) +1 ;  
						$write.html(num);
						$('#enter').trigger('click');
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
					$write.html($write.html() + character);
				}
					
			});
});
