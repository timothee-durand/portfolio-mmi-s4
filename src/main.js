import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store.js'
import "@/plugins/mixins";
import '@/assets/css/tailwind.css'

let vCodePen = {}

vCodePen.install = function install(Vue) {//copy from https://static.codepen.io/assets/embed/ei.js
    let _codepen_selector_contructor = function () {
        // eslint-disable-next-line no-cond-assign
        document.getElementsByClassName || (document.getElementsByClassName = function (e) {
            var n, t, r, a = document, o = [];
            if (a.querySelectorAll) return a.querySelectorAll("." + e);
            // eslint-disable-next-line no-cond-assign
            if (a.evaluate) for (t = ".//*[contains(concat(' ', @class, ' '), ' " + e + " ')]", n = a.evaluate(t, a, null, 0, null); r = n.iterateNext();) o.push(r); else for (n = a.getElementsByTagName("*"), t = new RegExp("(^|\\s)" + e + "(\\s|$)"), r = 0; r < n.length; r++) t.test(n[r].className) && o.push(n[r]);
            return o
        })
    }
    let _codepen_embed_method = //copy from https://static.codepen.io/assets/embed/ei.js then removed `()` from the end
        function () {
            function e() {
                function e() {
                    for (var e = document.getElementsByClassName("codepen"), t = e.length - 1; t > -1; t--) {
                        var u = a(e[t]);
                        if (0 !== Object.keys(u).length && (u = o(u), u.user = n(u, e[t]), r(u))) {
                            var c = i(u), l = s(u, c);
                            f(e[t], l)
                        }
                    }
                    m()
                }

                function n(e, n) {
                    if ("string" == typeof e.user) return e.user;
                    for (var t = 0, r = n.children.length; t < r; t++) {
                        var a = n.children[t], o = a.href || "", i = o.match(/codepen\.(io|dev)\/(\w+)\/pen\//i);
                        if (i) return i[2]
                    }
                    return "anon"
                }

                function r(e) {
                    return e["slug-hash"]
                }

                function a(e) {
                    for (var n = {}, t = e.attributes, r = 0, a = t.length; r < a; r++) {
                        var o = t[r].name;
                        0 === o.indexOf("data-") && (n[o.replace("data-", "")] = t[r].value)
                    }
                    return n
                }

                function o(e) {
                    return e.href && (e["slug-hash"] = e.href), e.type && (e["default-tab"] = e.type), e.safe && ("true" === e.safe ? e.animations = "run" : e.animations = "stop-after-5"), e
                }

                function i(e) {
                    var n = u(e), t = e.user ? e.user : "anon", r = "?" + l(e),
                        a = e.preview && "true" === e.preview ? "embed/preview" : "embed",
                        o = [n, t, a, e["slug-hash"] + r].join("/");
                    return o.replace(/\/\//g, "//")
                }

                function u(e) {
                    return e.host ? c(e.host) : "file:" === document.location.protocol ? "https://codepen.io" : "//codepen.io"
                }

                function c(e) {
                    return e.match(/^\/\//) || !e.match(/https?:/) ? document.location.protocol + "//" + e : e
                }

                function l(e) {
                    var n = "";
                    for (var t in e) "" !== n && (n += "&"), n += t + "=" + encodeURIComponent(e[t]);
                    return n
                }

                function s(e, n) {
                    var r;
                    e["pen-title"] ? r = e["pen-title"] : (r = "CodePen Embed " + t, t++);
                    var a = {
                        id: "cp_embed_" + e["slug-hash"].replace("/", "_"),
                        src: n,
                        scrolling: "no",
                        frameborder: "0",
                        height: d(e),
                        allowTransparency: "true",
                        allowfullscreen: "true",
                        allowpaymentrequest: "true",
                        name: "CodePen Embed",
                        title: r,
                        "class": "cp_embed_iframe " + (e["class"] ? e["class"] : ""),
                        style: "width: " + p + "; overflow: hidden;"
                    }, o = "<iframe ";
                    for (var i in a) o += i + '="' + a[i] + '" ';
                    return o += "></iframe>"
                }

                function d(e) {
                    return e.height ? e.height : 300
                }

                function f(e, n) {
                    if (e.parentNode) {
                        var t = document.createElement("div");
                        t.className = "cp_embed_wrapper", t.innerHTML = n, e.parentNode.replaceChild(t, e)
                    } else e.innerHTML = n
                }

                function m() {
                    // eslint-disable-next-line no-undef
                    "function" == typeof __CodePenIFrameAddedToPage && __CodePenIFrameAddedToPage()
                }

                var p = "100%";
                e()
            }

            function n(e) {
                /in/.test(document.readyState) ? setTimeout("window.__cp_domReady(" + e + ")", 9) : e()
            }

            var t = 1;
            window.__cp_domReady = n, window.__CPEmbed = e, n(function () {
                // eslint-disable-next-line no-undef
                new __CPEmbed
            })
        }

    let defaultProps = {
        class: 'codepen',
        'data-height': 265,
        'data-theme-id': 0,
        'data-slug-hash': '',
        'data-default-tab': 'js,result',
        'data-user': 'sindael',
        'data-embed-version': '2',
        'data-pen-title': ''
    }
    Vue.directive('code-pen', {
        // eslint-disable-next-line no-unused-vars
        inserted: function (el, binding, vnode) {
            let options = Object.assign({}, defaultProps, binding.value)
            Object.entries(options).forEach((item) => {
                el.setAttribute(item[0], item[1])
            })
            setTimeout(() => {
                _codepen_selector_contructor()
                _codepen_embed_method() //_codepen_embed_method(el); you can pass el to take place of `document`
            }, 100)
        },
        // eslint-disable-next-line no-unused-vars
        componentUpdated: function (el, binding, vnode) {
        }
    })
}

Vue.use(vCodePen)

import titleMixin from './mixins/title.js'

Vue.mixin(titleMixin)

Vue.config.productionTip = false
Vue.use(require('vue-moment'));

import dayjs from "dayjs"

Vue.filter('dayjs', function (value, format) {
    if (!value) return ''
    value = value.toString()
    return dayjs(value).format(format)
})

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
