const maskPhone = (value) => {
	return value
		?.replace(/\D/g, '')
		.replace(/(\d{3})(\d)/, '$1 $2')
		.replace(/(-\d{4})(\d+?)$/, '$1');
};

export default maskPhone;
