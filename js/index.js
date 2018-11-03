let photo = 1;

document.querySelector('.right').addEventListener('click',next);
document.querySelector('.left').addEventListener('click',before);

 function next(){
 	console.log(photo)
 	if(photo == 1){
 		document.querySelector('#photo1').style.transform = 'translateX(-100%)';
 		document.querySelector('#photo2').style.transform = 'translateX(-100%)';
 		photo = 2;
 	} else if(photo == 2){
 		document.querySelector('#photo2').style.transform = 'translateX(-200%)';
 		document.querySelector('#photo3').style.transform = 'translateX(-200%)';
 		photo=3;
 	}
 	
 }

 function before(){
 	
 	if(photo == 2){
 		document.querySelector('#photo1').style.transform = 'translateX(0)';
 		document.querySelector('#photo2').style.transform = 'translateX(100%)';
 		photo = 1;
 	} else if(photo == 3){
 		document.querySelector('#photo2').style.transform = 'translateX(-100%)';
 		document.querySelector('#photo3').style.transform = 'translateX(-100%)';
 		photo=2
 	}
 }