//Realizado por David López Tapias

//variables
var key=0;
var puntJug2=0,puntJug1=0;


//respecto a la pelota y los jugadores
var pelota,posx,posy,X,Y,velX,velY,jug1,jug2,jug1X,jug1Y,jug2X,jug2Y,velocidadPelota,radio,dibujos;

window.onload = ()=>
{  

    //Evento para poder mover las palas
    window.addEventListener("keydown", (event) => {

        //teclas para el jugador1
        if(event.key=="q")
        {
            key=1;
        }    
        if(event.key=="a")
        {
            key=2;
        }

        //teclas para el jugador2
        if(event.key=="i")
        {
            key = 3;
        }
        if(event.key=="k")
        {
            key = 4;
        }
    });
    window.addEventListener("keyup", () => {
        key=0;
    });
    setTimeout(mover,5);

    //cogemos los elementos de nuestro html
    jug1=document.getElementById("jug1");
    jug2 = document.getElementById("jug2");
    dibujos = document.getElementById("dibujos");
    pelota = document.getElementById("pelota");
    puntJug1=document.getElementById("puntJug2");
    puntJug2=document.getElementById("puntJug1");

    //respecto a la pelota:

    //su radio
    radio=pelota.getAttribute("r");

    //poscion inicial(desde la que sale)
    posx = 400;
    posy = 200;

    //velocidad de la pelota
    velocidadPelota=5;
    velX=3;
    velY=2;

    //dirección de la pelota en el eje X e Y
    X=1;
    Y=1;

    //situamos al jugador1
    jug1X=40;
    jug1Y=200;


    //situamos al jugador2
    jug2X=1560;
    jug2Y=200;
    
    
    setInterval(dibuja,5);

}


function mover() {

    //limitamos el movimiento del jugador 1 para que no salga de la pista

    //por arriba
    
    if(key==1&&jug1Y>0){
        jug1Y-=velocidadPelota;
        jug1.setAttribute("y",jug1Y);
    }

    //por abajo

   if(key==2&&jug1Y<660){
        jug1Y+=velocidadPelota;
        jug1.setAttribute("y",jug1Y);
    }

    //limitamos el movimiento del jugador 2 para que no salga de la pista

    //por arriba

    if(key==3&&jug2Y>0){
        jug2Y-=velocidadPelota;
        jug2.setAttribute("y",jug2Y);
    }

    //por abajo

    if(key==4&&jug2Y<660){
        jug2Y+=velocidadPelota;
        jug2.setAttribute("y",jug2Y);
    }
     
    setTimeout(mover,5);
}  

function hitbox(jugador){

    var cont;

    //contamos puntos

    //Jugador 1

    if(jugador=="jugador1")
    {
        cont = parseInt(puntJug1.textContent);
        cont++;
        puntJug1.textContent=cont;

        posx=800;
        posy=400;
    }

    //Jugador 2

    if(jugador=="jugador2")
    {
        cont = parseInt(puntJug2.textContent);
        cont++;
        puntJug2.textContent=cont;

        posx=800;
        posy=400;
    }

}


function dibuja(){

    var cY=posy-2.5;
    
    //redireccionamos la pelota

   if(posx<(0+radio)||posx>(1600-radio)){
        X*= -1;
        if(posx<(0+radio))
            hitbox("jugador1");
        if(posx>(800-radio))
            hitbox("jugador2");
   }
   
    if(posy<(0+radio)||posy>(800-radio)){
        Y*= -1;
    }

    if(posx<=jug1X&&(cY>=jug1Y&&cY<=(jug1Y+140)))
        X*=-1;
    if(posx>=jug2X&&(cY>=jug2Y&&cY<=(jug2Y+140)))
        X*=-1;

    //cambiamos la posicion x teniendo en cuenta el hitbox del jugador que le haya dado:

    posx+=X*velX;
    pelota.setAttribute("cx",posx);

    posy+=Y*velY;
    pelota.setAttribute("cy",posy);

}
