function calcular(){
    let monto = Number(document.getElementById("input_monto").value);
    let nro_cuotas = Number(document.getElementById("input_nro_cuotas").value);
    let tasa = Number(document.getElementById("input_tasa").value);
    let x_cuota = Number(document.getElementById("input_x_cuota").value);

    var deuda = monto*(1+(tasa/100));
    var var_cuota= deuda/nro_cuotas;

    for(i=1; i<=x_cuota;i++){

        vr_adeudado= deuda-var_cuota;
        deuda = vr_adeudado;
    }

 
   
    document.getElementById('x_cuota').value =x_cuota;
    document.getElementById('vr_cuota').value =var_cuota;
    document.getElementById('Resultado').value =deuda;

}           