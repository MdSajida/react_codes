const page=document.getElementById('root')
//creating an anchor tag and injecting it into the div tag.
const reactElement={
    type : 'a',
    props:{
        href : '//www.google.com',
        target:'_blank',
        title:'hehe'
    },
    children : 'Click here to visit google'
}

//its custom created element and we have to render this using our own rendering method
function customRender(reactElement,page){
    const MyEle=document.createElement(reactElement.type);
    MyEle.innerHTML=reactElement.children;

    for(const prop in reactElement.props){
        
        if(prop=='children') continue;
        MyEle.setAttribute(prop,reactElement.props[prop])
    }
    page.appendChild(MyEle)
}

customRender(reactElement,page)

