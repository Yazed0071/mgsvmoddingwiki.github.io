window.onload = function() {

    // Image handling
    var img_list = document.querySelectorAll('.git-wiki-page img'); // returns NodeList
    var img_array = [...img_list]; // converts NodeList to Array
    img_array.forEach(img => {

        // Wrap images in links to image source
        var wrapper = document.createElement('a');
        wrapper.setAttribute('href', img.getAttribute('src'));
        wrapper.classList.add(...img.classList); // copy img classes to link instead
        wrapper.classList.add('image-wrapper');
        img.removeAttribute('class');
        wrapper.appendChild(img.cloneNode(true));
        img.parentNode.replaceChild(wrapper, img);

        // Create caption element if image has alt text
        if (img.getAttribute('alt')) {
            var caption = document.createElement('small');
            caption.classList.add('caption');
            caption.textContent += img.getAttribute('alt')
            wrapper.appendChild(caption);
        }

    });

};