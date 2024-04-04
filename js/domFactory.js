export class DomFactory{
    constructor(container){
    this.element =null
    this.container = document.querySelectorAll(container)[0]
    this.fragment = document.createDocumentFragment();
    this.parentElement = null
    }
    createElement(elementType){
    this.element = document.createElement(elementType)
        return this
    }
    setElementAsParent(){
        this.parentElement = this.element
        return this
    }
    setImgSrc(src){
        this.element.src = src
        return this
    }
    addTextContent(textContent){
        this.element.textContent = textContent
        return this
    }
    addClass(className){
        this.element.classList.add(className)
        return this
    }
    appendToParent(){
        this.parentElement.append(this.element)
        return this
    }
    appendToFragment(){
        this.fragment.append(this.element)
        return this
    }
    appendToDOM(){
        this.container.append(this.fragment)
    }

}
export function generateSearchDOM(shipObj,  container= ".search__suggesstion--container") {
    const factory = new DomFactory(container);

// Create and append the image container
factory
    .createElement("div")
    .addClass("search__suggestion__img--container")
    .setElementAsParent()
    .appendToFragment()
    .createElement("img")
    .setImgSrc("./assets/img/stardestrrevsl1.jpg")
    .addClass("search__suggestion--img")
    .appendToParent()
    

// Create and append the text container
factory
    .createElement("div")
    .addClass("search__suggestion__text--container")
    .setElementAsParent()
    .appendToFragment()
    .createElement("h2")
    .addClass("search__suggestion--type")
    .addTextContent(shipObj.name)
    .appendToParent()
    .createElement("span")
    .addClass("search__suggestion--manufacturer")
    .addTextContent(shipObj.model )
    .appendToParent()
    .createElement("span")
    .addClass("search__suggestion--crew")
    .addTextContent(shipObj.crew)
    .appendToParent()

// Create and append the logo container
factory
    .createElement("div")
    .addClass("search__suggestion__logo--container")
    .setElementAsParent()
    .appendToFragment()
    .createElement("img")
    .addClass("search__suggestion--logo")
    .setImgSrc("./assets/img/Rebel_Alliance_logo.svg.png")
    .appendToParent()
    .appendToDOM();
}