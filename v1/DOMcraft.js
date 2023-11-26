const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);
const $on = (element, event, handler) => element.addEventListener(event, handler);
const $onAll = (elements, event, handler) => elements.forEach(element => element.addEventListener(event, handler));
const $off = (element, event, handler) => element.removeEventListener(event, handler);
const $offAll = (elements, event, handler) => elements.forEach(element => element.removeEventListener(event, handler));
const $addClass = (element, className, callback) => { element.classList.add(className); if (callback) { callback() } };
const $removeClass = (element, className, callback) => { element.classList.remove(className); if (callback) { callback() } };
const $toggleClass = (element, className, callback) => { element.classList.toggle(className); if (callback) { callback() } };
const $text = (element, text, callback) => { element.textContent = text; if (callback) { callback() } };
const $textColor = (element, color, callback) => { element.style.color = color; if (callback) { callback() } };
const $style = (element, styles, callback) => {
    const properties = Object.keys(styles)
    const values = Object.values(styles)
    properties.forEach(property => {
        element.style[property] = values[properties.indexOf(property)]
    })
    if (callback) { callback() }
}
const $styleAll = (elements, styles, callback) => {
    const properties = Object.keys(styles)
    const values = Object.values(styles)
    
        elements.forEach(element => {    
        properties.forEach(property => {
        element.style[property] = values[properties.indexOf(property)]
        })
        })
    if (callback) { callback() }
}

const $animate = (element, animation, duration, callback) => {
    element.style.animation = `${animation} ${duration}s`;
    element.style.animationFillMode = 'forwards';
    element.addEventListener('animationend', () => {
        element.style.animation = '';
        if (callback) { callback(); }
    });
};

const $createElement = (tagName, attributes = {}, callback) => {
    const element = document.createElement(tagName);
    Object.entries(attributes).forEach(([key, value]) => {
        element.setAttribute(key, value);
    });
    if (callback) { callback(element); }
    return element;
};

const $getAttribute = (element, attributeName) => element.getAttribute(attributeName);

const $setAttribute = (element, attributeName, attributeValue) => {
    element.setAttribute(attributeName, attributeValue);
};

const $handleForm = (formSelector, submitCallback, errorCallback) => {
    const form = $(formSelector);
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(form);
        const requiredFields = form.querySelectorAll('[required]');
        let missingFields = [];

        requiredFields.forEach(field => {
            const fieldName = field.getAttribute('name');
            if (!formData.get(fieldName)) {
                missingFields.push(fieldName);
            }
        });

        if (missingFields.length === 0) {
            submitCallback(formData);
        } else {
            if(errorCallback)(errorCallback(missingFields))
            const message = `Please fill in the required field(s): ${missingFields.join(', ')}`;
            return message
        }
    });
};

const $getQueryParameter = (parameterName) => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    return urlParams.get(parameterName);
};

const $request = {
    get: (url, successCallback, errorCallback) => {
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                successCallback(data);
            })
            .catch(error => {
                errorCallback(error);
            });
    },
    post: (url, data, successCallback, errorCallback) => {
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                successCallback(data);
            })
            .catch(error => {
                errorCallback(error);
            });
    },
};

const button = $$("button")
$onAll(button, "click", (e) => {
    // $textColor(button, "blue", ()=> alert("Color Now Blue"))
    const button = e.target
    $style(button, { color: "red", padding: "20px", backgroundColor:"blue" }, () => console.log("Element Styled"))
})



// window.addEventListener("click", (()=> console.log("Window Click")))