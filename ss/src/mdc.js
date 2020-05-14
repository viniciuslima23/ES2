function mdc(a,b){
	var resto;
	if( b!= 0){
		resto = a % b
		a = b;
		b = resto;
		mdc(a,b);
	}
	
		return a;
	
};