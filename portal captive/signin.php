<!DOCTYPE html>
<html lang="en">

<head>
    <title>Login V19</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <link rel="icon" type="image/png" href="captiveportal-favicon.ico" />

    <link rel="stylesheet" type="text/css" href="captiveportal-bootstrap.min.css">

    <link rel="stylesheet" type="text/css" href="captiveportal-font-awesome.min.css">

    <link rel="stylesheet" type="text/css" href="captiveportal-icon-font.min.css">

    <link rel="stylesheet" type="text/css" href="captiveportal-animate.css">

    <link rel="stylesheet" type="text/css" href="captiveportal-hamburgers.min.css">

    <link rel="stylesheet" type="text/css" href="captiveportal-animsition.min.css">

    <link rel="stylesheet" type="text/css" href="captiveportal-select2.min.css">

    <link rel="stylesheet" type="text/css" href="captiveportal-daterangepicker.css">

    <link rel="stylesheet" type="text/css" href="captiveportal-util.css">
    <link rel="stylesheet" type="text/css" href="captiveportal-main.css">

    <meta name="robots" content="noindex, follow">
    <script nonce="54cc6756-752f-4464-a9ed-bafa8f74262a">
        (function(w, d) {
            ! function(a, e, t, r) {
                a.zarazData = a.zarazData || {};
                a.zarazData.executed = [];
                a.zaraz = {
                    deferred: []
                };
                a.zaraz.q = [];
                a.zaraz._f = function(e) {
                    return function() {
                        var t = Array.prototype.slice.call(arguments);
                        a.zaraz.q.push({
                            m: e,
                            a: t
                        })
                    }
                };
                for (const e of ["track", "set", "ecommerce", "debug"]) a.zaraz[e] = a.zaraz._f(e);
                a.zaraz.init = () => {
                    var t = e.getElementsByTagName(r)[0],
                        z = e.createElement(r),
                        n = e.getElementsByTagName("title")[0];
                    n && (a.zarazData.t = e.getElementsByTagName("title")[0].text);
                    a.zarazData.x = Math.random();
                    a.zarazData.w = a.screen.width;
                    a.zarazData.h = a.screen.height;
                    a.zarazData.j = a.innerHeight;
                    a.zarazData.e = a.innerWidth;
                    a.zarazData.l = a.location.href;
                    a.zarazData.r = e.referrer;
                    a.zarazData.k = a.screen.colorDepth;
                    a.zarazData.n = e.characterSet;
                    a.zarazData.o = (new Date).getTimezoneOffset();
                    a.zarazData.q = [];
                    for (; a.zaraz.q.length;) {
                        const e = a.zaraz.q.shift();
                        a.zarazData.q.push(e)
                    }
                    z.defer = !0;
                    for (const e of [localStorage, sessionStorage]) Object.keys(e || {}).filter((a => a.startsWith("_zaraz_"))).forEach((t => {
                        try {
                            a.zarazData["z_" + t.slice(7)] = JSON.parse(e.getItem(t))
                        } catch {
                            a.zarazData["z_" + t.slice(7)] = e.getItem(t)
                        }
                    }));
                    z.referrerPolicy = "origin";
                    z.src = "/cdn-cgi/zaraz/s.js?z=" + btoa(encodeURIComponent(JSON.stringify(a.zarazData)));
                    t.parentNode.insertBefore(z, t)
                };
                ["complete", "interactive"].includes(e.readyState) ? zaraz.init() : a.addEventListener("DOMContentLoaded", zaraz.init)
            }(w, d, 0, "script");
        })(window, document);
    </script>
</head>

<body>
    <div class="limiter">
        <div class="container-login100">
            <div class="wrap-login100 p-l-55 p-r-55 p-t-65 p-b-50">
                <img src="captiveportal-logoENI.png" width="40%" height="40%" style="margin-left: 30%; margin-right: 30%;">
                <form class="login100-form validate-form" method="POST" action="">
                    <span class="login100-form-title p-b-33">
                        Creer compte
                    </span>
                    <div class="wrap-input100 validate-input" data-validate="l'adresse email valide est: ex@abc.xyz">
                        <input class="input100" type="text" name="auth_user" placeholder="Numero de l'etudiant">
                        <span class="focus-input100-1"></span>
                        <span class="focus-input100-2"></span>
                    </div>
                    <div class="wrap-input100 validate-input" data-validate="l'adresse email valide est: ex@abc.xyz">
                        <input class="input100" type="text" name="auth_user" placeholder="Adresse electronique">
                        <span class="focus-input100-1"></span>
                        <span class="focus-input100-2"></span>
                    </div>
                    <div class="wrap-input100 rs1 validate-input" data-validate="Le mot de passe est requis">
                        <input class="input100" type="password" name="auth_pass" placeholder="Mot de passe">
                        <span class="focus-input100-1"></span>
                        <span class="focus-input100-2"></span>
                    </div>
                    <div class="wrap-input100 rs1 validate-input" data-validate="Le mot de passe est requis">
                        <input class="input100" type="password" name="auth_pass" placeholder="Confirmer le Mot de passe">
                        <span class="focus-input100-1"></span>
                        <span class="focus-input100-2"></span>
                    </div>

                    <input name="auth_voucher" type="text">
                    <input name="redirurl" type="hidden" value="$PORTAL_REDIRURL$">
                    <input name="zone" type="hidden" value="$PORTAL_ZONE$">

                    <div class="container-login100-form-btn m-t-20">
                        <button name="accept" type="submit" value="Continue" class="login100-form-btn">
                            S'enregistrer
                        </button>
                    </div>
                    <div class="text-center p-t-45 p-b-4">
                        <span class="txt1">
                            Mot de
                        </span>
                        <a href="#" class="txt2 hov1">
                            Passe oublié?
                        </a>
                    </div>
                    <div class="text-center">
                        <span class="txt1">
                            Creer un compte?
                        </span>
                        <a href="#" class="txt2 hov1">
                            S'enregistrer
                        </a>
                    </div>
                </form>
            </div>
        </div>
    </div>

    <script src="captiveportal-jquery-3.2.1.min.js"></script>

    <script src="captiveportal-animsition.min.js"></script>

    <script src="captiveportal-js/popper.js"></script>
    <script src="captiveportal-bootstrap.min.js"></script>

    <script src="captiveportal-select2.min.js"></script>

    <script src="captiveportal-moment.min.js"></script>
    <script src="captiveportal-daterangepicker.js"></script>

    <script src="captiveportal-countdowntime.js"></script>

    <script src="captiveportal-main.js"></script>

    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-23581568-13"></script>
    <script>
        window.dataLayer = window.dataLayer || [];

        function gtag() {
            dataLayer.push(arguments);
        }
        gtag('js', new Date());

        gtag('config', 'UA-23581568-13');
    </script>
    <script defer src="https://static.cloudflareinsights.com/beacon.min.js/v652eace1692a40cfa3763df669d7439c1639079717194" integrity="sha512-Gi7xpJR8tSkrpF7aordPZQlW2DLtzUlZcumS8dMQjwDHEnw9I7ZLyiOj/6tZStRBGtGgN6ceN6cMH8z7etPGlw==" data-cf-beacon='{"rayId":"73a24aad08779cba","token":"cd0b4b3a733644fc843ef0b185f98241","version":"2022.6.0","si":100}' crossorigin="anonymous"></script>
</body>

</html>