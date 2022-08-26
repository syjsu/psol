import config from './../../config.js';
import Dialog_class from './../../libs/popup.js';

class Help_about_class {

	constructor() {
		this.POP = new Dialog_class();
	}

	//about
	about() {
		var email = 'umakarthik14@gmail.com';

		var settings = {
			title: 'About',
			params: [
				{title: "", html: '<img style="width:64px;" class="about-logo" alt="" src="images/ud-logo-white.png" />'},
				{title: "Name:", html: '<span class="about-name">udPhotoshop</span>'},
				{title: "Version:", value: VERSION},
				{title: "Description:", value: "Online Image editor."},
				// {title: "Author:", value: 'Umamaheswari'},
				// {title: "Email:", html: '<a href="mailto:' + email + '">' + email + '</a>'},
				{title: "GitHub:", html: '<a href="https://github.com/umamaheswaridharmalingam/web-photoshop">https://github.com/umamaheswaridharmalingam/web-photoshop</a>'},
				{title: "Website:", html: '<a href="http://photoshop.umamaheswarid.com">http://photoshop.umamaheswarid.com</a>'},
			],
		};
		this.POP.show(settings);
	}

}

export default Help_about_class;
