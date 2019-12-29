function ChangeItemMenuSelected() {
	const liSelected = document.getElementsByClassName('item--menu')[0].children;
	const hrefLocation = document.location.href;
	for (let index = 0; index < liSelected.length; index++) {
		const aHref = liSelected[index].children[0].href;
		if (aHref === hrefLocation) {
			liSelected[index].className = 'item--menu--selected';
			break;
		}
	}
}

ChangeItemMenuSelected();