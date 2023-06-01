function calcular()
{

    // declarar variables para alojar datos que extraemos dwel formulario

    let nro1 = document.getElementById('cantidad').value;
    let selectDesc = document.getElementById('categoria').value;

   
     console.log('numero '+nro1);
     console.log(selectDesc);



    let totalSinDesc = 0;
    let totalDesc = 0;
    aPagar =0;
    

    //mostar por consola



    if (selectDesc == "estudiante")
    {
        totalSinDesc = parseInt(nro1) *200 
        totalDesc=totalSinDesc*80/100;
        aPagar = totalSinDesc-totalDesc;

        


    }

   

    if (selectDesc == "trainee")
    {
        totalSinDesc = parseInt(nro1) *200 
        totalDesc=totalSinDesc*50/100;
        aPagar = totalSinDesc-totalDesc;

       

    }

   


    if (selectDesc== "junior")
    {
        totalSinDesc = parseInt(nro1) *200 
        totalDesc=totalSinDesc*15/100;
        aPagar = totalSinDesc-totalDesc;

       


     }
    
        


    

    let actualizar = document.getElementById('aPagar').innerHTML= 'Total a Pagar $: ' + aPagar;

   

}

function limpiarFormulario()
 {
    document.getElementById("formulario").reset();
  }
