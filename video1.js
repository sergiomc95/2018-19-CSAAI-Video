function main()
{

  //-- Obtener el elemento de video
  video1 = document.getElementById("video1")
  video2 = document.getElementById("video2")
  video3 = document.getElementById("video3")

  //-- Establecer el tamaño del vídeo
  video1.width = 200;
  video1.height= 100;
  video2.width = 200;
  video2.height= 100;
  video3.width = 200;
  video3.height= 100;

  //-- Boton de Play
  ver = document.getElementById('play1')
  ver = document.getElementById('play2')
  ver = document.getElementById('play3')

  //-- Al apretar el boton de ver video
  ver.onclick = () => {
    console.log("Ver!")

    //-- Indicar la fuente del vídeo
    video1.src ="https://gsyc.urjc.es/jmplaza/csaai/realizador-fuente1.mp4"
    video2.src ="https://gsyc.urjc.es/jmplaza/csaai/realizador-fuente2.mp4"
    video3.src ="https://gsyc.urjc.es/jmplaza/csaai/realizador-fuente3.mp4"


  }
}
