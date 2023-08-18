// commone function start

// get input value 

function getInputValue(fieldId){
      const inputField =document.getElementById(fieldId)
      const inputFieldText = inputField.value;
      const value = parseFloat(inputFieldText);
      return value;
}
// set element as inner text 
function setElementInnerText(elementId, area){
      const element = document.getElementById(elementId);
      element.innerText=area
}

// set area count  function 
function addToCalculationEntry(areaType, area){
      console.log(areaType+ ' '  + area)
      const calculationEntry = document.getElementById('calculation-entry');
  
      const count = calculationEntry.childElementCount;
  
      const p = document.createElement('p');
      p.classList.add('my-4');
      p.innerHTML = `${count + 1}. ${areaType} ${area} cm<sup>2</sup> <button class="btn btn-sm btn-success">Convert</button>`;
  
      calculationEntry.appendChild(p);
  }
// commone function end  


// calculate area 
function calculateTriangleArea(){
      const base = getInputValue('triangle-base');
      // console.log(base);
      const height = getInputValue('triangle-height')
      // console.log(height);
      if(isNaN(base) || isNaN(height)){
            alert('Please insert a number');
            return;
        }
      const area = 0.5*base*height;
      // console.log(area);
      setElementInnerText('triangle-area',area)

      addToCalculationEntry('Triangle',area)


}
function calculateRectangleArea(){
      const width =getInputValue('rectangle-width')
      const length = getInputValue('rectangle-length')
      if(isNaN(width)|| isNaN(length)){
            alert('please insert a number')
            return
      }
      const area = width*length;
      // console.log(area);
      setElementInnerText('rectangle-area',area)

      addToCalculationEntry('Rectangle',area)
}


function calculateParallelogramArea(){
      const base = getInputValue('parallelogram-base');
      const height = getInputValue('parallelogram-height')
      if(isNaN(base) || isNaN(height)){
            alert('please insert a number')
            return
      }
      const area = base*height
      setElementInnerText('parallelogram-area',area)
      addToCalculationEntry('parallelogram',area)
}


function calculateRhombusArea(){
      const d1=getInputValue('rhombus-d1')
      const d2= getInputValue('rhombus-d2')
      if(isNaN(d1) || isNaN(d2)){
            alert('please insert a number');
            return
      }
      
      const area = 0.5*d1*d2;
      // console.log(area);
      setElementInnerText('rhombus-area',area);
      addToCalculationEntry('rhombus',area)
}