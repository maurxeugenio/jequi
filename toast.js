
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

let url = 'https://rawcdn.githack.com/maurxeugenio/jequi/34195f2e13827c3870d0caed44d62a3eb78115a5/list.json';
var list_names, name;

$.getJSON(url, function(json){
    list_names = json;
});

let show;
var peoples = 271;

function info(){
    show = Boolean(Math.round(Math.random()));

    if (show===true && peoples <= 330){
        peoples = Math.floor(Math.random() * (332 - peoples) ) + peoples;
        toastr.info('Nas últimas 24h', `${peoples} se cadastraram`)
    }
}

function jequi() {
    var min = 15, max = 35;
    var rand = Math.floor(Math.random() * (max - min + 1) + min); //Generate Random number between 5 - 10

    if(list_names !== undefined){
        name = list_names[Math.floor((Math.random() * 1500) + 1)]['nome'];
        toastr.success( `${rand-5} minutos atrás`, `${name} ${call}`)
    }

    if ( rand < 20 && warning !== undefined){
        var quant_people = Math.floor(Math.random() * (37 - 23 + 1) + 1)
        toastr.warning(`${quant_people} ${warning}`)
    }

    setTimeout(jequi, rand * 1000)
    info(peoples)
}
