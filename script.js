window.onload = function()
{
	inicio();
}
function inicio()
{

	var descifra = false;
	function codifica(descifrar)
	{
		var NumeroText  = nom_div("caja_2").value;
		var clave = Number(NumeroText);
		var NumeroText  = nom_div("caja_3").value;
		var cesar = NumeroText;
		var texto = nom_div("caja_1").value;
		if (NumeroText < 0 )
		{
			alert("La clave debe ser mayor a 0. ");
		}
		
		if(descifrar==true)
		{
		var alfabeto=["Á","É","Í","Ó","Ú","á","é","í","ó","ú",
					  "A","B","C","D","E","F","G","H","I","J",
					  "K","L","M","N","Ñ","O","P","Q","R","S",
					  "T","U","V","W","X","Y","Z","0","1","2",
					  "3","4","5","6","7","8","9"," ",".",",",
					  ";","-","+","*","|","/","a","b","c","d",
					  "e","f","g","h","i","j","k","l","m","n",
					  "ñ","o","p","q","r","s","t","u","v","w",
					  "x","y","z","@",'"',"'"];
					  
var c=0;
		var m=0;
		var n=86;
		var text_cifrado="";
		var ban=0, ban1=0;
		var clave_num=0;
		var orden="";
		var k=0;
		var aux=[];	
		var pos=0;
		var nc=Number(cesar.length);
		var nnc=Number(cesar.length);
		var a="";
		var cesarvec= new Array();
		var l=0;
		
		
		for(l = 0; l < texto.length; l++){
			if(l<nc){
				cesarvec[l]=cesar[l];
				console.log("cv",cesarvec);
			}else{
				a=Number(cesar[k])+Number(nc);
				cesarvec[l]=String(a);
				k=k+1;	
				if(k==nnc){
					k=0;
					nc=nc+nnc;
				}
				console.log("a",a);
			}
			
		}
		console.log("c",cesarvec);

		for(var l = 0; l < texto.length; l++){
			aux[l]=texto.charAt(cesarvec[l]);
		}
		
		texto=aux;
		console.log("tx",texto);

		for (var i = 0; i < texto.length; i++) {
			for(var j = 0; j < alfabeto.length; j++){
				
			if(texto[i]==alfabeto[j]){
				c=(j-clave)%n;
				//console.log("j",j);
				//console.log("clave",clave);
				//console.log("c",c);
				//console.log("n",n);
				text_cifrado += alfabeto[c];
				ban=1;
				}
			}
				if(ban==0){
					text_cifrado += texto[i];
				}
				ban=0;
		}

		nom_div("tabla").innerHTML = text_cifrado;
		}
		else{
		
		nom_div("tabla").innerHTML = realizaCesar(texto, clave, cesar);
		}
	}
	
	function realizaCesar(texto, clave, cesar)
	{
		
		 
	var alfabeto=["Á","É","Í","Ó","Ú","á","é","í","ó","ú",
					  "A","B","C","D","E","F","G","H","I","J",
					  "K","L","M","N","Ñ","O","P","Q","R","S",
					  "T","U","V","W","X","Y","Z","0","1","2",
					  "3","4","5","6","7","8","9"," ",".",",",
					  ";","-","+","*","|","/","a","b","c","d",
					  "e","f","g","h","i","j","k","l","m","n",
					  "ñ","o","p","q","r","s","t","u","v","w",
					  "x","y","z","@",'"',"'"];
					  
		var c=0, k=0;
		var m=0;
		var n=86;
		var text_cifrado="";
		var ban=0, ban1=0, ban2=0;
		var clave_num=0;
		var aux=[];	
		var pos=0;
		var hjs=0;
		var nc=Number(cesar.length);
		var nnc=Number(cesar.length);
		var a="";
		var cesarvec= new Array();
		var l=0;
		
		
		for(l = 0; l < texto.length; l++){
			if(l<nc){
				cesarvec[l]=cesar[l];
				console.log("cv",cesarvec);
			}else{
				a=Number(cesar[k])+Number(nc);
				cesarvec[l]=String(a);
				k=k+1;	
				if(k==nnc){
					k=0;
					nc=nc+nnc;
				}
				console.log("a",a);
			}
			
		}
		console.log("c",cesarvec);

		for(var l = 0; l < texto.length; l++){
			aux[l]=texto.charAt(cesarvec[l]);
		}
		
		texto=aux;
		console.log("tx",texto);
		
		for (var i = 0; i < texto.length; i++) {
			for(var j = 0; j < alfabeto.length; j++){
				
			if(texto[i]==alfabeto[j]){
				c=(j+clave)%n;
				//console.log("j",j);
				//console.log("clave",clave);
				//console.log("c",c);
				//console.log("n",n);
				text_cifrado += alfabeto[c];
				ban=1;
				}
			}
			if(ban==0){
				text_cifrado += texto[i];
			}
			ban=0;
		}
		return text_cifrado;
		
	}

	nom_div("caja_1").addEventListener('keyup', function(event)
	{
		codifica(descifra);
	});

	nom_div("accion").addEventListener('change', function(event)
	{
		if(this.value == 1)
		{
			descifra = false;
		}
		else
		{
			descifra = true;
		}
		nom_div("caja_1").value = "";
		nom_div("tabla").innerHTML = "";
	});
	
	function nom_div(id)
	{
		return document.getElementById(id);
	}

}
