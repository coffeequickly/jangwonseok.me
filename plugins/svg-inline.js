import Vue from 'vue'
const DOMParser = process.browser ? window.DOMParser : require('xmldom').DOMParser
const parser = new DOMParser()

Vue.component('svg-inline', {
    props: {
        src: {
            type: String,
            required: true
        }
    },
    render(h) {
        const document = parser.parseFromString(this.src, 'text/xml')
        const svg = document.getElementsByTagName('svg')[0]
        const attrs = {}

        Array.prototype.forEach.call(svg.attributes, (attribute) => {
            attrs[attribute.nodeName] = attribute.nodeValue
        })

        return h('svg', {
            ...this.data,
            attrs,
            domProps: {
                innerHTML: svg.innerHTML
            }
        })
    }
})
