var m = 4;
    o = 3;
	b = 2;
	s = 1;
 console.log(m);
  console.log(o);
   console.log(b);
    console.log(s);
	
////////////////////////////////
if (null == undefined)
{
	console.log('true');
}
else
{
	console.log('false');
}
///////////////////////////////
var s;
s="текст47";
s=Number(s);
	console.log(s);
		s=Boolean(s);
	console.log(s);
///////////////////////////////
var user = {
  name: 'Дубов',

  sayHi: function() {
    alert( 'Привет!' );
  }

};
console.log(typeof user.sayHi());
///////////////////////////////
var filters = {dvals:[{'brand':'1', 'count':'1'},
                  {'brand':'2', 'count':'2'}, 
                  {'brand':'3', 'count':'3'}]}

console.log(typeof filters);
//////////////////////////////

var a,s;
a=0;
if (a>0) {
s=1;
}
else if (a<0) {
	s=2;
}
else {
	s=3;
}
console.log(s);