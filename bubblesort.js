function bubbleSort (arr,limit = arr.length){
	
	var array=[];
	for (var i=0; i < arr.length; i++){
		for (var j=i+1; j < arr.length; j++){			
			if(compare(arr[i],arr[j])){
				swap(arr,i,j);
			}
		}
	}
	return arr;
}

function compare (val1,val2){
	return val1 > val2 ? true : false;
}

function swap(arr, i, j){
	var aux= arr[j];
	arr[j]= arr[i];
	arr[i]= aux;
	
	return arr;
}


//////////////////////////////////////////////////////

// Ordena dos arreglos (ordenados).
var merge= function(arr1,arr2){
	  var arraysmall=[]
    var arraybig=[]
    if(arr1.length < arr2.length){
        arraysmall = arr1
        arraybig = arr2
    } else{
        arraysmall = arr2
        arraybig = arr1
    
    }

   var arrMerge= [];
   while (arraysmall.length > 0 || arraybig.length > 0){

       if (arraysmall[0] < arraybig[0]){
           arrMerge.push(arraysmall.shift());
       }else{
           arrMerge.push(arraybig.shift())
       }
   }

  if (arr1.length > arr2.length){
       arrMerge.concat(arr1);
   }else{
       arrMerge.concat(arr2);
   }
   console.log(arrMerge)

   return arrMerge;
}

////////////////////////////////////////////////////////

// Divide un arreglo en dos partes iguales.
// Devuelve dos arreglos.
function split(arr){
	var midd= Math.ceil(arr.length/2);
	var firstHalf= arr.slice(0,midd);
	var secondHalf= arr.slice(midd,arr.length);	
	return [firstHalf , secondHalf]
}

function mergeSort(array) {
  var callSplit=split(array);

  


}