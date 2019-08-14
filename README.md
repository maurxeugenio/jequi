# JEQUI
##### Jequi é uma ferramenta para induzir por meio de influência social.

##### Para utilizar este blugin basta adicionar as seguintes linhas no seu site e alterar as variáveis CALL e WARNING

### Requirementos
- jquery
- toastr
- jqequi

``` js
<script
src="https://code.jquery.com/jquery-3.4.1.min.js"
integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo="
crossorigin="anonymous"></script>
<!-- caso já tenha jquery na página remova o código acima! -->
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.js"></script>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.css">
<script type="text/javascript" src="https://rawcdn.githack.com/maurxeugenio/jequi/b8b2d42eb6ac57cb05867439d33e89b2934b0b72/toast.js"></script>


<script type="text/javascript">
    var spacetime_init = 15;
    var spacetime_end = 35;
    var peoples = 23;
    var peoples_max = 38;
    var people_on_min = 14;
    var people_on_max = 26;
    var call = 'acabou de se cadastrar!';
    var warning = 'pessoas estão na página neste momento.'
    var info_call = 'pessoas se cadastraram';
    var info_time = 'Nas últimas 24 horas';
    jequi()
</script>
```
