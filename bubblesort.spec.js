describe('Bubble Sort', function(){
  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });
});

describe('Funcion Bubble Sort', function(){

	var array= [83,58,44,23,12,5,1]
	var esperado= [1,5,12,23,44,58,83];
	var value= bubbleSort(array);

	it('SpyOn de swap', function(){
		expect(value).toEqual(esperado);
	});

})

describe('Count de swap', function(){

	it('Se invoca n + 1 veces', function() {
	// El numero de veces que se llama a la función depende
	// de como hayas construido tu caso base.
	// Si el número de invocaciones difiere revisa como esta
	// planteado el caso base
	spyOn(window, 'swap').and.callThrough();
	var n= 21;

	expect(bubbleSort.calls.count()).toEqual(n+1);
	});
})


describe('Split Array function', function() {
 it('es capar de dividir el arreglo en dos partes', function() {
   // tu código acá

   expect(split([1,2,3,4])).toEqual([[1,2],[3,4]])


 });
});