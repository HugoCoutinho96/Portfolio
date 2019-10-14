$(document).ready(function(){
    $("#escolha_bateria,#escolha_dia").change(function(){
        for(i=0;i<=9;i++){
            if($("#escolha_bateria").val() == ("bateria"+(i+1))){
                $("#bateria").text("Bateria: "+baterias[i].battery_name);
                
                for(c=0;c<=30;c++){
                    if($("#escolha_dia").val() == (c+1)){
                       switch(i){
                            case 0:
                               var dataCompleta = (bateria1[c].timestamp_upload).split(" ");
                               var data = dataCompleta[0];
                               var hora = dataCompleta[1];
                               $("#data").text(`Data: ${data}`);
                               $("#hora").text(`Hora: ${hora}`);
                               var temp = bateria1[c].temperature;
                               var carga = bateria1[c].charge;
                               $("#temp_valor").text((bateria1[c].temperature).toFixed(2)+"°C");
                               $("#carga_valor").text((Math.round(bateria1[c].charge))+"ah");
                            break;
                            case 1: 
                               dataCompleta = (bateria2[c].timestamp_upload).split(" ");
                               data = dataCompleta[0];
                               hora = dataCompleta[1];
                               $("#data").text(`Data: ${data}`);
                               $("#hora").text(`Hora: ${hora}`);
                               temp = bateria2[c].temperature;
                               carga = bateria2[c].charge;
                               $("#temp_valor").text((bateria2[c].temperature).toFixed(2)+"°C");
                               $("#carga_valor").text((Math.round(bateria2[c].charge))+"ah");
                            break;
                            case 2: 
                               dataCompleta = (bateria3[c].timestamp_upload).split(" ");
                               data = dataCompleta[0];
                               hora = dataCompleta[1];
                               $("#data").text(`Data: ${data}`);
                               $("#hora").text(`Hora: ${hora}`);
                               temp = bateria3[c].temperature;
                               carga = bateria3[c].charge;
                               $("#temp_valor").text((bateria3[c].temperature).toFixed(2)+"°C");
                               $("#carga_valor").text((Math.round(bateria3[c].charge))+"ah")
                            break;
                            case 3: 
                               dataCompleta = (bateria4[c].timestamp_upload).split(" ");
                               data = dataCompleta[0];
                               hora = dataCompleta[1];
                               $("#data").text(`Data: ${data}`);
                               $("#hora").text(`Hora: ${hora}`);
                               temp = bateria4[c].temperature;
                               carga = bateria4[c].charge;
                               $("#temp_valor").text((bateria4[c].temperature).toFixed(2)+"°C");
                               $("#carga_valor").text((Math.round(bateria4[c].charge))+"ah")
                            break;
                            case 4: 
                               dataCompleta = (bateria5[c].timestamp_upload).split(" ");
                               data = dataCompleta[0];
                               hora = dataCompleta[1];
                               $("#data").text(`Data: ${data}`);
                               $("#hora").text(`Hora: ${hora}`);
                               temp = bateria5[c].temperature;
                               carga = bateria5[c].charge;
                               $("#temp_valor").text((bateria5[c].temperature).toFixed(2)+"°C");
                               $("#carga_valor").text((Math.round(bateria5[c].charge))+"ah")
                            break;
                            case 5: 
                               dataCompleta = (bateria6[c].timestamp_upload).split(" ");
                               data = dataCompleta[0];
                               hora = dataCompleta[1];
                               $("#data").text(`Data: ${data}`);
                               $("#hora").text(`Hora: ${hora}`);
                               temp = bateria6[c].temperature;
                               carga = bateria6[c].charge;
                               $("#temp_valor").text((bateria6[c].temperature).toFixed(2)+"°C");
                               $("#carga_valor").text((Math.round(bateria6[c].charge))+"ah")
                            break;
                            case 6: 
                               dataCompleta = (bateria7[c].timestamp_upload).split(" ");
                               data = dataCompleta[0];
                               hora = dataCompleta[1];
                               $("#data").text(`Data: ${data}`);
                               $("#hora").text(`Hora: ${hora}`);
                               temp = bateria7[c].temperature;
                               carga = bateria7[c].charge;
                               $("#temp_valor").text((bateria7[c].temperature).toFixed(2)+"°C");
                               $("#carga_valor").text((Math.round(bateria7[c].charge))+"ah")
                            break;
                            case 7: 
                               dataCompleta = (bateria8[c].timestamp_upload).split(" ");
                               data = dataCompleta[0];
                               hora = dataCompleta[1];
                               $("#data").text(`Data: ${data}`);
                               $("#hora").text(`Hora: ${hora}`);
                               temp = bateria8[c].temperature;
                               carga = bateria8[c].charge;
                               $("#temp_valor").text((bateria8[c].temperature).toFixed(2)+"°C");
                               $("#carga_valor").text((Math.round(bateria8[c].charge))+"ah")
                            break;
                            case 8: 
                               dataCompleta = (bateria9[c].timestamp_upload).split(" ");
                               data = dataCompleta[0];
                               hora = dataCompleta[1];
                               $("#data").text(`Data: ${data}`);
                               $("#hora").text(`Hora: ${hora}`);
                               temp = bateria9[c].temperature;
                               carga = bateria9[c].charge;
                               $("#temp_valor").text((bateria9[c].temperature).toFixed(2)+"°C");
                               $("#carga_valor").text((Math.round(bateria9[c].charge))+"ah")
                            break;
                            case 9: 
                               dataCompleta = (bateria10[c].timestamp_upload).split(" ");
                               data = dataCompleta[0];
                               hora = dataCompleta[1];
                               $("#data").text(`Data: ${data}`);
                               $("#hora").text(`Hora: ${hora}`);
                               temp = bateria10[c].temperature;
                               carga = bateria10[c].charge;
                               $("#temp_valor").text((bateria10[c].temperature).toFixed(2)+"°C");
                               $("#carga_valor").text((Math.round(bateria10[c].charge))+"ah")
                        } 
                    }    
                }
                
                if(temp <= 3){
                    $("#temp_cor").text("Normal");
                    $("#temp_cor").css("background-color","limegreen")
                }
                else if(temp <= 6){
                    $("#temp_cor").text("Atenção");
                    $("#temp_cor").css("background-color","yellow")
                }
                else{
                    $("#temp_cor").text("Quente");
                    $("#temp_cor").css("background-color","red")
                }
                
                if(carga <= 2){
                    $("#carga_cor").text("Bateria Fraca");
                    $("#carga_cor").css("background-color","red")
                }
                else if(carga <= 5){
                    $("#carga_cor").text("Bateria Descarregando");
                    $("#carga_cor").css("background-color","yellow")
                }
                else{
                    $("#carga_cor").text("Bateria Carregada");
                    $("#carga_cor").css("background-color","limegreen")
                }
            }
        }
    })
    
    
})