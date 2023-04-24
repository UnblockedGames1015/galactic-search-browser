(() => {
    "use strict";
    importScripts("/osana/osana.bundle.js?1"), importScripts("/osana/osana.config.js?1"), self.OsanaServiceWorker = class {
        constructor() {
            this.config = self.__osana$config, this.bundle = self.__osana$bundle, this.bareClient = new this.bundle.BareClient(this.config.bare)
        }
        fetch(t) {
            return s = this, n = void 0, r = function*() {
                const s = this.config.codec.decode(new URL(t.request.url).pathname.replace(this.config.prefix, "")) + new URL(t.request.url).search;
                if (!/^https?:\/\//.test(s)) return fetch(t.request.url);
                const n = new URL(s),
                    i = this.bundle.rewrite.headers.request(Object.fromEntries(t.request.headers.entries()), n);
                if (this.config.blacklist && this.config.blacklist.some((e => e.test(n.host)))) return new e;
                const r = {
                    method: t.request.method,
                    headers: i
                };
                ["GET", "HEAD"].includes(t.request.method) || (r.body = yield t.request.blob());
                const o = yield this.bareClient.fetch(n, r);
                let a = o.rawResponse.status;
                const c = this.bundle.rewrite.headers.response(o.rawHeaders, n);
                let l = "";
                return /text\/html/.test(c["Content-Type"]) ? (l = `<head><script src="${this.config.files.bundle}?1"><\/script><script src="${this.config.files.config}?1"><\/script><script src="${this.config.files.client}?1"><\/script><link rel="icon" href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAA1JREFUGFdjYGBkZAAAAAoAAx9k7/gAAAAASUVORK5CYIIA"><link rel="icon" href="${n.origin}/favicon.ico">` + (301 === a && c.location ? `<meta http-equiv="refresh" content="0; url=${this.bundle.rewrite.url(c.location)}">` : "") + "</head>", l += this.bundle.rewrite.html(yield o.text(), n.origin + n.pathname)) : l = /text\/css/.test(c["Content-Type"]) || "style" === t.request.destination ? this.bundle.rewrite.css(yield o.text(), n.origin + n.pathname) : /application\/javascript/.test(c["Content-Type"]) || "script" === t.request.destination ? this.bundle.rewrite.js(yield o.text()) : yield o.arrayBuffer(), new Response(l, {
                    status: o.rawResponse.status,
                    statusText: o.rawResponse.statusText,
                    headers: c
                })
            }, new((i = void 0) || (i = Promise))((function(e, t) {
                function o(e) {
                    try {
                        c(r.next(e))
                    } catch (e) {
                        t(e)
                    }
                }

                function a(e) {
                    try {
                        c(r.throw(e))
                    } catch (e) {
                        t(e)
                    }
                }

                function c(t) {
                    var s;
                    t.done ? e(t.value) : (s = t.value, s instanceof i ? s : new i((function(e) {
                        e(s)
                    }))).then(o, a)
                }
                c((r = r.apply(s, n || [])).next())
            }));
            var s, n, i, r
        }
    };
    class e extends Response {
        constructor() {
            super("Forbidden", {
                status: 403,
                statusText: "Forbidden",
                headers: {
                    "Content-Type": "text/plain"
                }
            })
        }
    }
})();