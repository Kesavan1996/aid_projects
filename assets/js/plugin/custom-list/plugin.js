CKEDITOR.plugins.add( 'custom-list', {

	icons: 'upload',
    init: function( editor ) {
        editor.addCommand( 'List1', {
            exec: function( editor ) {
               
                editor.insertHtml('<ol type="A" id="custom"><li></li></ol>');
            }
        });
        editor.ui.addButton( 'List-item', {
			label: 'Insert/Remove Custom List',
            command: 'List1',
            toolbar: 'insert',
			// icon: this.path + "icon/list.png"
        });
    }
});