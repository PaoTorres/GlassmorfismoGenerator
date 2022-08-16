let border=25;
let size=200;
let color="#ffffff";
let rgba="rgba(255, 255, 255, 0.5)";
let opacity=0.5;
let blur=0;
let contrast=100;
let saturation=100;
let filtro="backdrop-filter: blur(0px) contrast(100%) saturate(100%)";
//backdrop-filter: blur(10px) contrast(50%) saturate(50%);

const glass=  document.querySelector('#glass');
const inColor= document.querySelector('#color'); 
const chooseColor= document.querySelector('#choose-color'); 
const rgBorRad=  document.querySelector('#rg-border');
const rgOpacity=  document.querySelector('#rg-opacity');
const rgSize=  document.querySelector('#rg-size');
const rgBlur=  document.querySelector('#rg-blur');
const rgContrast=  document.querySelector('#rg-contrast');
const rgSaturation=  document.querySelector('#rg-saturation');
const textBorder= document.querySelector('#text-border'); 
const textWidth= document.querySelector('#text-width'); 
const textHeight= document.querySelector('#text-height'); 
const textColor= document.querySelector('#text-color'); 
const textFilter= document.querySelector('#text-filter'); 
const code= document.querySelector('#code'); 
//const buttonCopy= document.querySelector('#btn'); 


//console.log(rgBorRad.value);

function drawBorder(element, value){
element.style.borderRadius=`${value}%`;
}


function drawSize(element, value){
  element.style.width=`${value}px`;
  element.style.height=`${value}px`;
}

function hexToRgba(hex, value)
{  let strs=hex.split('');
   let r=parseInt(`${strs[1]}${strs[2]}`, 16);
   let g=parseInt(`${strs[3]}${strs[4]}`, 16);
   let b=parseInt(`${strs[5]}${strs[6]}`, 16);
   //console.log(`El color rgba(${r}, ${g}, ${b}, ${value})`)
   return (`rgba(${r}, ${g}, ${b}, ${value})`);
   //rgba(255, 255, 255, 0.5)
}

function fixFilter(blurI, contrastI, saturationI)
{
     let strs=`blur(${blurI}px) contrast(${contrastI}%) saturate(${saturationI}%)`;
     let longStrs=`backdrop-filter: `+strs+`;`;
    // console.log(`Pasó por fixFilter ${longStrs}`);
     glass.style.backdropFilter = strs;
     textFilter.textContent = longStrs;
}


function changeTextCode(variable, value)
{ //console.log(`New ${variable} es: ${value}`) /*OJO QUITAR*/
   switch(variable){
    case "color":                  
                  color=value;
                  chooseColor.textContent=`${color}`;
                  rgba =hexToRgba(color, opacity);
                  //console.log(`del color case ${rgba}`);
                  glass.style.backgroundColor=rgba;
                  textColor.textContent=`background-color: ${rgba});`;
                  break;
    case "border":                  
                  border=value;
                  textBorder.textContent=`border-radius: ${border}%;`;
                  break;
    case "size":                  
                  size=value;
                  textWidth.textContent=`width: ${size}px;`;
                  textHeight.textContent=`height: ${size}px;`;
                  break;
    case "opacity":                  
                  opacity=value;
                  rgba =hexToRgba(color, opacity);
                  //console.log(`del opacity case ${rgba}`);
                  glass.style.backgroundColor=rgba;
                  textColor.textContent=`background-color: ${rgba});`;
                  break;
    case "blur":                  
                  blur=value;
                  fixFilter(blur, contrast, saturation);
                  break;
    case "contrast":                  
                  contrast=value;
                  fixFilter(blur, contrast, saturation);
                  break;
    case "saturation":                  
                  saturation=value;
                  fixFilter(blur, contrast, saturation);
                  break;
    default:
      {
        console.log("pasando por default");
      }
   }
}




/* Cambiando el color*/
inColor.addEventListener('input', function(e){
  const newColor=e.target.value;
  //console.log (`New Color ${newColor}`)
  changeTextCode("color", newColor);
  
})


/* Cambiando la opacidad*/
  rgOpacity.addEventListener('input', function(e){
  const newOpacity=e.target.value;
  //console.log (`New opacity ${newOpacity}`)
  changeTextCode("opacity", newOpacity);
  
})

/* Cambiando el blur*/
rgBlur.addEventListener('input', function(e){
  const newBlur=e.target.value;
  //console.log (`New Blur ${newBlur}`)
  changeTextCode("blur", newBlur);
})

/* Cambiando el contraste*/
rgContrast.addEventListener('input', function(e){
  const newContrast=e.target.value;
  //console.log (`New Contraste ${newContrast}`)
  changeTextCode("contrast", newContrast);
})

/* Cambiando la saturacion*/
rgSaturation.addEventListener('input', function(e){
  const newSaturation=e.target.value;
  //console.log (`New Contraste ${newSaturation}`)
  changeTextCode("saturation", newSaturation);
})

/* Cambiando el border*/
rgBorRad.addEventListener('input', function(e){
  const newBorder=e.target.value;
  changeTextCode("border", newBorder);
  drawBorder(glass, newBorder);
})


/* Cambiando el tamaño*/
rgSize.addEventListener('input', function(e){
  const newSize=e.target.value;
  changeTextCode("size", newSize);
  drawSize(glass, newSize);
})


/* Copiando el codigo al portapapeles
buttonCopy.addEventListener('click', function(e){
  
  console.log(`entra a copiar ${text}`);
  let text=code.textContent;
  Document.execCommand('copy');
 
})*/