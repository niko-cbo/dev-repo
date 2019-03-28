// insites: CommonJS Main
var InsitesUtil = (function(){
    var themeData = [{ "featureType": "water", "elementType": "geometry", "stylers": [{ "color": "#e9e9e9" }, { "lightness": 17 }] }, { "featureType": "landscape", "elementType": "geometry", "stylers": [{ "color": "#f5f5f5" }, { "lightness": 20 }] }, { "featureType": "road.highway", "elementType": "geometry.fill", "stylers": [{ "color": "#ffffff" }, { "lightness": 17 }] }, { "featureType": "road.highway", "elementType": "geometry.stroke", "stylers": [{ "color": "#ffffff" }, { "lightness": 29 }, { "weight": 0.2 }] }, { "featureType": "road.arterial", "elementType": "geometry", "stylers": [{ "color": "#ffffff" }, { "lightness": 18 }] }, { "featureType": "road.local", "elementType": "geometry", "stylers": [{ "color": "#ffffff" }, { "lightness": 16 }] }, { "featureType": "poi", "elementType": "geometry", "stylers": [{ "color": "#f5f5f5" }, { "lightness": 21 }] }, { "featureType": "poi.park", "elementType": "geometry", "stylers": [{ "color": "#dedede" }, { "lightness": 21 }] }, { "elementType": "labels.text.stroke", "stylers": [{ "visibility": "on" }, { "color": "#ffffff" }, { "lightness": 16 }] }, { "elementType": "labels.text.fill", "stylers": [{ "saturation": 36 }, { "color": "#333333" }, { "lightness": 40 }] }, { "elementType": "labels.icon", "stylers": [{ "visibility": "off" }] }, { "featureType": "transit", "elementType": "geometry", "stylers": [{ "color": "#f2f2f2" }, { "lightness": 19 }] }, { "featureType": "administrative", "elementType": "geometry.fill", "stylers": [{ "color": "#fefefe" }, { "lightness": 20 }] }, { "featureType": "administrative", "elementType": "geometry.stroke", "stylers": [{ "color": "#fefefe" }, { "lightness": 17 }, { "weight": 1.2 }] }];
    var toastOpt = {
        closeHtml: '<button><i class="icon-close-1"></i></button>',
        closeButton: true,
        timeOut: 0,
        extendedTimeOut: 0,
        preventDuplicates: true
    };
    var dateFormat = 'YYYY-MM-DD';
    var timeFormat = 'h:mm A';
    var timezoneVal = 0;
    
//  * ========================  
//  * Insites Utilities - Private Functions
//  *  - _somePrivateFunction()
//  * ======================= */
    var _somePrivateFunction = function(){
        console.log('b')
    }

    return {
//  * ========================
//  * Insites Utility Functions 
//  *  - goBack()
//  * ======================== */

//  * ========================== */
//  * goBack()
//  *  - pops last index of breadcrumbs & route to URL
//  * ========================== */
        goBack: function() {
            var currentCrumbs = JSON.parse(window.localStorage.getItem('ins_breadcrumbs'));
            currentCrumbs.pop();
    
            var insRendererEl = parent.document.querySelector('ins-renderer');
            insRendererEl.updateRoute(currentCrumbs);
        },
//  * ========================== */
//  * 
//  * 
//  * ========================== */
        renderPage: function(label, link, withSubmenu, app) {
            var newRoute = { label, link, withSubmenu, app }
            var currentCrumbs = JSON.parse(window.localStorage.getItem('ins_breadcrumbs'));
            var insRendererEl = parent.document.querySelector('ins-renderer');
            console.log('currentCrumbs', currentCrumbs);
            if (insRendererEl.updateRoute) {
                console.log('insRendererEl', insRendererEl);
                currentCrumbs.push(newRoute);            
                insRendererEl.updateRoute(currentCrumbs);

            } else {
                setTimeout(() => {
                    console.log('calling again.....');
                  this.renderPage(label, link, withSubmenu, app);
                }, 300);
              }
          },
//  * ========================== */
//  * 
//  * 
//  * ========================== */
        ops: function(setToastOpt) {
            var ops = setToastOpt ? setToastOpt : toastOpt;
            return ops;
        },
//  * ========================== */
//  * 
//  * 
//  * ========================== */
        getTheme: function(setThemeData) {
            var themeSnipet = setThemeData ? setThemeData : themeData;
            return themeSnipet;
        },
//  * ========================== */
//  * 
//  * 
//  * ========================== */
        formatLocalisation: function(dateTime) {
            var covertedTime = "";
            var settingsData = JSON.parse(localStorage.getItem('settingsData'));
            var dateTimeFormat = `${dateFormat} ${timeFormat}`; 
            if(settingsData) {
                dateFormat = settingsData.date_format ? settingsData.date_format : 'YYYY-MM-DD';
                timeFormat = settingsData.time_format ? settingsData.time_format : 'h:mm A';                
                dateTimeFormat = `${dateFormat} ${timeFormat}`;
                timezoneVal = 0;

                if (settingsData.time_zone){
                    timezoneVal = (parseInt(settingsData.time_zone.split('@')[0])) / 100;
                }

                if (settingsData['enable_dst']) {
                    timezoneVal += 1;
                }
            }
                covertedTime = moment(dateTime).utcOffset(timezoneVal).format(dateTimeFormat);

                return covertedTime; 
        },    
//  * ========================== */
//  * 
//  * 
//  * ========================== */
        toastNotif: function(type, message) {
        var options = {
            closeHtml: '<button><i class="icon-close-1"></i></button>',
            closeButton: true,
            timeOut: 0,
            extendedTimeOut: 0,
            preventDuplicates: true
        }
        toastIt(type, message, options);
        },
//  * ========================== */
//  * 
//  * 
//  * ========================== */
        checkModuleVersion: function(current, latest) {
            if (latest !== current){
                console.log("Check version :", current, "latest: ", latest);
                this.toastNotif("info", 
                "New version is available. <a href='https://portal.apps.near-me.com/instances' target='_blank'>Update</a>");
            }
        },  
//  * ========================== */
//  * 
//  * 
//  * ========================== */
        formValidate: function (fields) {
            var missing_fields = 0;
            var _self = this;
            fields.forEach(
            function(_field) {
                var type = _field.getAttribute("type");
                if (
                    _field.hasAttribute("required") === true ||
                    _field.getAttribute("required") == "true"
                ) {
                missing_fields += _self.validateInput(_field);
                }
                if(type && _field.value.trim() !== "" ) {
                    if (_field.getAttribute("type").toLowerCase() === "email") {
                        missing_fields += _self.validateEmail(_field);
                    }
                        if (_field.getAttribute("type").toLowerCase() === "password") {
                        missing_fields += _self.validatePassword(_field);
                    }
                }  
                if (_field.hasAttribute("has-error") === true ||  _self.arrayHas(_field.parentElement.classList.value.split(' '),'is-invalid')) {
                    missing_fields ++;
                }
            }
            );

            if (missing_fields > 0) return false;
            return true;
        },
//  * ========================== */
//  * validate password
//  * 
//  * ========================== */        
        validatePassword: function (_field) {
            if (_field.value.trim() === "" || _field.value.length < 6) {
                this.invalidFieldNotif(_field);
                return 1;
            } else {
                this.validFieldNotif(_field);
                return 0;
            }
        },
//  * ========================== */
//  * validate input value
//  * 
//  * ========================== */  
        validateInput(_field) {
            if (_field.value.trim() === "" || _field.value === null) {
                this.invalidFieldNotif(_field);
                return 1;
            } else {
                this.validFieldNotif(_field);
                return 0;
            }
        },
//  * ========================== */
//  * check if email is valid
//  * 
//  * ========================== */
        validateEmail: function(_field) {
            _field = _field.target ? _field.target: _field; 
            var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if(_field.value === "") {
                return 1;
            } else {
                if (re.test(String(_field.value).toLowerCase()) == true) {
                    this.validFieldNotif(_field);
                    return 0;
                } else {
                    this.invalidFieldNotif(_field);
                    return 1;
                }
            }
        },
//  * ========================== */
//  * validate URL format input
//  * 
//  * ========================== */
        checkURLinput: function(event, secondary){
            var clean = event.split(' ').join('-').toLowerCase();
            if (secondary === 'text'){
              return clean.replace(/[^a-z0-9-\/]/g,'');
            }
            return clean;
          },
//  * ========================== */
//  * update material design to show error message
//  * 
//  * ========================== */
        invalidFieldNotif: function(_field) {
            _field.closest("ins-input").setAttribute("has-error", true);
        },
//  * ========================== */
//  * update material design to remove error message
//  * 
//  * ========================== */
        validFieldNotif: function(_field) {
            _field.closest("ins-input").removeAttribute("has-error");
        },
//  * ========================== */
//  * 
//  * 
//  * ========================== */
        arrayHas: function(list, value) {
            for(var i=0; i<=list.length; i++) {
                if(list[i]=== value) {
                    return true;    
                }
            }
            return null;
        },
//  * ========================== */
//  * 
//  * 
//  * ========================== */
        convertBase64ToBlob: function(base64, mime) {
            mime = mime || "";
            var sliceSize = 1024;
            var byteChars = window.atob(base64);
            var byteArrays = [];

            for (var offset = 0; offset < byteChars.length; offset += sliceSize) {
                var slice = byteChars.slice(offset, offset + sliceSize);
                var byteNumbers = new Array(slice.length);

                for (var i = 0; i < slice.length; i++) {
                    byteNumbers[i] = slice.charCodeAt(i);
                }

                var byteArray = new Uint8Array(byteNumbers);
                byteArrays.push(byteArray);
            }

            return new Blob(byteArrays, {
                type: mime
            });
        },
//  * ========================== */
//  * 
//  * 
//  * ========================== */
        getBase64Blob: function(file) {
            // image
            if (file !== "" || file !== undefined) {
                var base64Content = file.split(',')[1];
                var type = file.split(';')[0].split('/') // file type

                if (type) {
                    var blob = this.convertBase64ToBlob(base64Content, type[0].split(":")[1] + '/' + type[1]);
                    return blob;
                }
            }
        },
//  * ========================== */
//  * 
//  * 
//  * ========================== */
        setLocalStorage: function(name, data) {            
            window.localStorage.setItem(name, data);
        },
//  * ========================== */
//  * 
//  * 
//  * ========================== */
        setBreadCrumbs(crumbs) {
            setTimeout(function() {
                var insRendererEl = parent.document.querySelector('ins-renderer');
                insRendererEl.updateRoute(crumbs);
            }, 800);
        }
    }
})();
window.InsitesUtil = InsitesUtil;
