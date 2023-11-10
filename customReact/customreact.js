function renderEle(reactEle,myRoot){
        const div=document.createElement(reactEle.type);
        div.innerHTML=reactEle.children;
        for(let key in reactEle.props){
            if(key=="children") continue;
            div.setAttribute(key, reactEle.props[key]);
        }
        myRoot.appendChild(div);
}

const reactEle={
    type:'a',
    props:{
        href:"https://www.google.com/",
        target:"_blank",
        class:"myLink",
        id:"mylink"
    },
    children:"Click on this link to Google"
}
const root=document.getElementById("root");
renderEle(reactEle, root);