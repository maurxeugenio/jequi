
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

let url = 'https://rawcdn.githack.com/maurxeugenio/jequi/d5d46d7efdac256c71ffc25dd747bf3668d62a91/list.json';
var list_names, name;

$.getJSON(url, function(json){
    list_names = json;
});

let show;

function info(){
    show = Boolean(Math.round(Math.random()));

    if (show===true && peoples <= (peoples_max-2)){
        peoples = Math.floor(Math.random() * (peoples_max - peoples) ) + peoples;
        toastr.info(`${info_time}`, `${peoples} ${info_call}`)
    }
}

function jequi() {
    var min = spacetime_init, max = spacetime_end;
    var rand = Math.floor(Math.random() * (max - min + 1) + min); //Generate Random number between 5 - 10

    if(list_names !== undefined){
        name = list_names[Math.floor((Math.random() * 1500) + 1)]['nome'];
        toastr.success( `${rand-5} minutos atrás`, `${name} ${call}`)
    }

    if ( rand < 20 && warning !== undefined){
        var quant_people = Math.floor(Math.random() * (people_on_max - people_on_min + 1) + 1);

        toastr.warning(`${quant_people} ${warning}`)
    }

    setTimeout(jequi, rand * 1000)
    if (peoples!== undefined) {
        info(peoples)
    }
}
