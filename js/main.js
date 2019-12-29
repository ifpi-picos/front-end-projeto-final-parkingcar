function ChangeItemMenuSelected() {
	const liSelected = document.getElementsByClassName('item--menu')[0].children;
	const url = document.location.origin+document.location.pathname;
	for (let index = 0; index < liSelected.length; index++) {
		const aHref = liSelected[index].children[0].href;
		if (aHref === url) {
			liSelected[index].className = 'item--menu--selected';
			break;
		}
	}
}

ChangeItemMenuSelected();