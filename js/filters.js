phonecatApp.filter('checkmark',function () {
    return function (input) {
        return input? '+':'-';
    }
})
     .filter('samelcase',function () {
         return function (input) {
             strings=input.split(' ');
             for (let i=0;i<strings.length;i++){
                 let str=strings[i].split('');
                 str[0]= str[0].toLowerCase();
                 strings[i]=str.join('')
             }
             return strings.join(' ');
         }
     });
