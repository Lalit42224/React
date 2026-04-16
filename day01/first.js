// How to create a element in js




// const header1 =  document.createElement("h1");
// header1.innerText="Hello bhai shaab";
// header1.style.background = "blue"
// header1.style.fontSize = "30px"
// header1.style.color = "white"


// const header2  = document.createElement("h2");
// header2.innerHTML="kesse hn app log!!!!"
// header2.style.backgroundColor = "red"
// header2.style.fontSize="50px"
// header2.style.color="white"
 

// const root = document.getElementById("root")
// root.appendChild(header1)
// root.appendChild(header2)



// React :Object
// ReactDOM: Object

const React= {
         createElement:function(tag,styles,children){
                  const element = document.createElement(tag);
                  if(typeof children === 'object'){
                           for(let v of children){
                                    element.append(val)
                           }
                  }    else{
                           element.innerText = children
                           for(let key in styles){
                                    element.style[key] = styles[key]
                           }
                           return element;
                  }    
         }
}


const ReactDom = {
         render:function(element,root){
                  root.append(element)
         }
}


const header1 = React.createElement("h1",{fontSize:"30px",backgroundColor:"red",color:"white"},"hello bhai")
const header2 = React.createElement("h2",{fontSize:"60px",backgroundColor:"yellow",color:"white"},"kesse ho bhai")

ReactDom.render(header1,root)
ReactDom.render(header2,root)





