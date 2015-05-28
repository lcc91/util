// not ember function, but this is the get a thousand separated format
Number.prototype.beautify = function () {
	return this.valueOf().toFixed(2).split('').reverse().join('').replace(/(\d{3}\B)/g, '$1,').split('').reverse().join('');
};

Number.prototype.intbeautify = function () {
	return this.valueOf().toFixed(0).split('').reverse().join('').replace(/(\d{3}\B)/g, '$1,').split('').reverse().join('');
};

Number.prototype.currency = function (c) {
	var amt = this.valueOf();
	if (!c || typeof c != 'string')
		c = '$';

	if (amt < 0)
		return '-' + c + (amt * -1).beautify();
	return c + amt.beautify();
};

Number.prototype.timercountdown = function () {
	var seconds_left = this.valueOf(),
		hours = 0,
		minutes = 0,
		seconds = 0;

	hours = parseInt(seconds_left / 3600);
	seconds_left = seconds_left % 3600;
	minutes = parseInt(seconds_left / 60);
	seconds_left = seconds_left % 60;
	seconds = parseInt(seconds_left % 60);

	hours = (hours < 10) ? '0' + hours : hours;
	minutes = (minutes < 10) ? '0' + minutes : minutes;
	seconds = (seconds < 10) ? '0' + seconds : seconds;
	return hours + ':' + minutes + ':' + seconds;
};

Number.prototype.fourdigit = function () {
	var padding = '0000', value = this.valueOf();
	if (!value)
		return "N/A";
	value = parseInt(value) + '';
	return padding.substring(0,padding.length-value.length) + value;
};
