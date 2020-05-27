var sutils = sutils ||{
    getPath : function(name) {
        //return '../templates/_' + name + '.tmpl.html';
        return 'template/' + name + '.tmpl.html';
    },

    renderExtTemplate : function(item) {
        var file = sutils.getPath(item.name);
        $.when($.get(file)).done(function(tmplData) {
            //$.templates({ tmpl: tmplData });
            //$(item.selector).html($.render.tmpl(item.data));
            $(item.selector).html($.templates(tmplData)(item.data));
        });
    },

    include : function(file) {
        var files = typeof file == "string" ? [file] : file;
        for (var i = 0; i < files.length; i++) {
            var name = files[i];//.replace(/^s|s$/g, "");
            var att = name.split('.');
            var ext = att[att.length - 1].toLowerCase();
            var isCSS = ext == "css";
            var tag = isCSS ? "link" : "script";
            var attr = isCSS ? " type='text/css' rel='stylesheet' " : " language='javascript' type='text/javascript' ";
            var link = (isCSS ? "href" : "src") + "='" + name + "'";
            if ($(tag + "[" + link + "]").length == 0)
                document.write("<" + tag + attr + link + "></" + tag + ">");
        }
    },
};

// var item={ name: 'tmpl_name', selector: '#items', data: {} }
// sutils.renderExtTemplate(item);
// sutils.include("jsrender.js");
// sutils.include("default.css");