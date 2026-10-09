
                try {
                    (function () {
                        var util = {
                            isValidGuid: function (val) {
                                var validGUIDPattern = /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/;
                                var isValid = val && validGUIDPattern.test(val.trim());
                                return isValid;
                            },
                            warnIfInvalidToken: function (token) {
                                var isTokenValid = util.isValidGuid(token);
                                if (!isTokenValid) {
                                    console.error('Token is not a valid GUID');
                                }
                                return isTokenValid;
                            }
                        };
                        var TatariTagManager = /** @class */ (function () {
                            function TatariTagManager(token) {
                                this.debugCookieName = 'ttm-debug-cookie';
                                this.debugCookieTime = 24 * 60 * 60 * 1000; // 1 day
                                this.debug = false;
                                this.util = util;
                                this._i = token;
                                this.checkDebugCookie(); // Debug before everything
                            }
                            TatariTagManager.prototype.enableDebug = function () {
                                this.createCookie(this.debugCookieName, '1', this.debugCookieTime);
                                this.debug = true;
                                console.info('Debug: TTM Debug Enabled');
                            };
                            // handle multiple instantiations of the snippet
                            TatariTagManager.prototype.init = function (token) {
                                this._i = token;
                                // emit console error if token is not valid GUID
                                util.warnIfInvalidToken(token);
                            };
                            TatariTagManager.prototype.flushCommandQueue = function (commandQueue) {
                                if (commandQueue === void 0) { commandQueue = []; }
                                if (this.debug) {
                                    console.info('Debug: flushing command queue', commandQueue);
                                }
                                if (commandQueue.length > 0) {
                                    var that_1 = this;
                                    commandQueue.forEach(function (m) {
                                        that_1[m[0]].apply(that_1, m.slice(1, m.length));
                                    });
                                }
                            };
                            TatariTagManager.prototype.onPageview = function () {
                                if (this.debug) {
                                    console.info('Debug: onPageview triggered');
                                }
                                // custom stuff you want to do on pageview

!(function () {
    try {
        !(function (t, i) {
            if (!i.dstillery) {
                var n1 = t.createElement("script");
                n1.type = "text/javascript";
                n1.async = !0;
                n1.src = "//action.dstillery.com/orbserv/nsjs?adv=cl170967130279620&ns=8482&nc=UpworkSiteVisits&ncv=62&dstOrderId=[OrderId]&dstOrderAmount=[OrderAmount]";
                n1.onload = function() {window.tatari.dstillery = true;};
                var e = t.getElementsByTagName("head")[0];
                e.appendChild(n1);
            }
        })(document, window.tatari || []);
    } catch (t) {
        console.log(t);
    }
})();

(function () {
    var baseUrl = 'https://segment.prod.bidr.io/associate-segment?';
    var params = {
        buzz_key: 'tatari',
        segment_key: 'tatari-16505',
        value: '',
        uncacheplz: '' + Math.floor(Math.random() * 10000042069)
    };
    var img = new Image(0, 0);
    img.src = baseUrl + new URLSearchParams(params).toString();
    img.style.display = 'none';
    img.alt = '';
    document.body.appendChild(img);
})();
!(function () {
    try {
        !(function (t, i) {
            if (!i.dstillery) {
                var e = t.getElementsByTagName("head")[0];
                var path = window.location.pathname.replace(/\/+$/, "") + "/";
                
                // Upwork Client Services Site Visitors
                var clientPaths = [
                    "/i/how-it-works/client/",
                    "/talent-marketplace/",
                    "/services/",
                    "/agencies/",
                    "/anyhire/",
                    "/contract-to-hire/client/",
                    "/business-plus/",
                    "/hire/",
                    "/outcomes/",
                ];

                var isClient = false;
                for (var c = 0; c < clientPaths.length; c++) {
                    if (path.startsWith(clientPaths[c])) {
                        isClient = true;
                        break;
                    }
                }

                if (isClient) {
                    var n1 = t.createElement("script");
                    n1.type = "text/javascript";
                    n1.async = !0;
                    n1.src = "//action.dstillery.com/orbserv/nsjs?adv=cl170967130279620&ns=8482&nc=UpworkClientServicesSiteVisits&ncv=62&dstOrderId=[OrderId]&dstOrderAmount=[OrderAmount]";
                    n1.onload = function() { window.tatari.dstillery = true; };
                    e.appendChild(n1);
                }

                else {
                    // Upwork Freelancer Services Site Visitors
                    var freelancerPaths = [
                        "/i/how-it-works/freelancer/",
                        "/direct-contracts/",
                        "/freelance-jobs/",
                        "/work/"
                    ];

                    var isFreelancer = false;
                    for (var f = 0; f < freelancerPaths.length; f++) {
                        if (path.startsWith(freelancerPaths[f])) { 
                            isFreelancer = true; 
                            break; 
                        }
                    }                    
                    
                    if (isFreelancer) {
                        var n2 = t.createElement("script");
                        n2.type = "text/javascript";
                        n2.async = !0;
                        n2.src = "//action.dstillery.com/orbserv/nsjs?adv=cl170967130279620&ns=8482&nc=UpworkFreelancerServicesSiteVisits&ncv=62&dstOrderId=[OrderId]&dstOrderAmount=[OrderAmount]";
                        n2.onload = function() { window.tatari.dstillery = true; };
                        e.appendChild(n2);
                    }
                }
            }
        })(document, window.tatari || {});
    } catch (t) {
        console.log(t);
    }
})();
                            };
                            TatariTagManager.prototype.onTrack = function (event, arg) {
                                if (this.debug) {
                                    console.info('Debug: onTrack triggered', event, arg);
                                }
                                // custom stuff you want to do on track being fired

!(function () {
    try {
        !(function (t, i) {
            if (!i.dstillery) {
                var n1 = t.createElement("script");
                n1.type = "text/javascript";
                n1.async = !0;
                n1.src = "//action.dstillery.com/orbserv/nsjs?adv=cl170967130279620&ns=8482&nc=UpworkConversions&ncv=62&dstOrderId=[OrderId]&dstOrderAmount=[OrderAmount]";
                n1.onload = function() {window.tatari.dstillery = true;};
                var e = t.getElementsByTagName("head")[0];
                e.appendChild(n1);
            }
        })(document, window.tatari || []);
    } catch (t) {
        console.log(t);
    }
})();

(function () {
    var segments = {"pageview": "tatari-16507", "client registration": "tatari-17005", "business plus enroll": "tatari-17183", "business plus upgrade": "tatari-17184", "first job post": "tatari-17185", "non-first job post": "tatari-17186", "business plus first job post": "tatari-17187", "page_view": "tatari-16505"};
    var baseUrl = 'https://segment.prod.bidr.io/associate-segment?';
    var params = {
        buzz_key: 'tatari',
        value: '',
        segment_key: segments[event],
        uncacheplz: '' + Math.floor(Math.random() * 10000042069)
    };
    // If we have a matching segment name, fire the event
    if (params['segment_key']) {
        var img = new Image(0, 0);
        img.src = baseUrl + new URLSearchParams(params).toString();
        img.style.display = 'none';
        img.alt = '';
        document.body.appendChild(img);
    }
})();

                            };
                            TatariTagManager.prototype.onIdentify = function (id) {
                                if (this.debug) {
                                    console.info('Debug: onIdentify triggered', id);
                                }
                                // custom stuff to do on identify

                            };
                            TatariTagManager.prototype.createCookie = function (cookieName, cookieValue, cookieExp) {
                                var exp = '';
                                var date = new Date();
                                var domain = "domain=" + this.getDomain() + ";";
                                date.setTime(date.getTime() + cookieExp);
                                exp = "expires=" + date.toUTCString() + ";";
                                document.cookie = cookieName + "=" + cookieValue + "; " + exp + " " + domain + " path=/";
                                return cookieValue;
                            };
                            TatariTagManager.prototype.getDomain = function () {
                                var testCookieName = 'testTLD';
                                var testCookie = testCookieName + "=test";
                                var loc = document.location || { hostname: '' };
                                var hostnames = loc.hostname.split('.');
                                var domain = '';
                                hostnames.some(function (_, i) {
                                    var testDomain = hostnames.slice(hostnames.length - i - 1).join('.');
                                    document.cookie = testCookie + ";domain=" + testDomain + ";";
                                    if (document.cookie.indexOf(testCookie) !== -1) {
                                        // found tld, remove cookie
                                        domain = testDomain;
                                        document.cookie = testCookieName + "=;domain=" + domain + ";expires=" + (new Date(0)).toUTCString() + ";";
                                        return true;
                                    }
                                });
                                return domain;
                            };
                            TatariTagManager.prototype.getCookie = function (cookieName) {
                                var name = cookieName + "=";
                                var decodedCookie = decodeURIComponent(document.cookie);
                                var ca = decodedCookie.split(';');
                                for (var _a = 0, ca_1 = ca; _a < ca_1.length; _a++) {
                                    var c = ca_1[_a];
                                    while (c.charAt(0) === ' ') {
                                        c = c.substring(1);
                                    }
                                    if (c.indexOf(name) === 0) {
                                        return c.substring(name.length, c.length);
                                    }
                                }
                                return;
                            };
                            TatariTagManager.prototype.removeCookie = function (cookieName) {
                                var domain = this.getDomain();
                                // delete cookie which doesn't specify domain
                                document.cookie = cookieName + "=; Max-Age=-99999999;";
                                // delete cookie which does specify domain
                                if (domain) {
                                    document.cookie = cookieName + "=; Max-Age=-99999999; domain=" + domain + ";";
                                }
                            };
                            TatariTagManager.prototype.checkDebugCookie = function () {
                                var val = this.getCookie(this.debugCookieName);
                                this.debug = val ? true : false;
                            };
                            return TatariTagManager;
                        }());
                        // Using tracker before real script is initialized
                        var mockTagManager = window['ttm'] || [];
                        // Here we replace the mock ttm with the real one
                        var realTagManager = new TatariTagManager(mockTagManager['_i']);
                        window['ttm'] = realTagManager;
                        realTagManager.flushCommandQueue(mockTagManager);
                    })();
                }
                catch (e) {
                    console.log(e);
                }
