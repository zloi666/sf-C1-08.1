jQuery.prototype.html = function(htmlString) {
    if (typeof htmlString === 'string') {
      this.elements.forEach(element => element.innerHTML = htmlString);
    }
    else {
      return this.elements.map(element => element.innerHTML);
    }
    return this;
}
