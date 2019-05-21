
toastr.options = {
    "closeButton": false,
    "debug": false,
    "newestOnTop": false,
    "progressBar": true,
    "positionClass": "toast-bottom-left",
    "preventDuplicates": false,
    "onclick": null,
    "showDuration": "100",
    "hideDuration": "500",
    "timeOut": "5000",
    "extendedTimeOut": "1000",
    "showEasing": "swing",
    "hideEasing": "linear",
    "showMethod": "fadeIn",
    "hideMethod": "fadeOut"
}

let url = 'http://localhost:3000/list.json';
var list_names, name;

$.getJSON(url, function(json){
    list_names = json;
});

function jequi() {
    var min = 15, max = 35;
    var rand = Math.floor(Math.random() * (max - min + 1) + min); //Generate Random number between 5 - 10

    if(list_names !== undefined){
        name = list_names[Math.floor((Math.random() * 1500) + 1)]['nome'];
        toastr.success( `${rand-5} minutos atrás`, `${name} ${call}`)
    }

    if ( rand < 20 && warning !== undefined ){
        toastr.warning(warning)
    }

    setTimeout(jequi, rand * 1000)
}
