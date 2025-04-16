function customRender(reactElement, container){
    /*
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.childern
    domElement.setAttribute('href', reactElement.props.href)
    domElement.setAttribute('target', reactElement.props.target)
    container.appendChild(domElement) */

    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.childern
    for (const prop in reactElement.props) {
        if (prop === 'childern') continue;
            domElement.setAttribute(prop, reactElement.props[prop])
        
    }
    container.appendChild(domElement)
}

// created element to render with its type and properties
const reactElement = {
    type : 'a',
    props :{
        href : 'https://google.com',
        target: '_blank',

    },
    childern : 'Click me to visit google'
}

// selecting div
const mainContainer = document.querySelector('#root')

// render method to get elements and insert it into the container
customRender(reactElement, mainContainer)