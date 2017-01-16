(function(){

    // ONLY WORKS WITH SIMPLE OBJECTS
    // var TemplateEngine = function(tpl, data) {
    //     var re = /<%([^%>]+)?%>/g, match;
    //     while(match = re.exec(tpl)) {
    //         tpl = tpl.replace(match[0], data[match[1]]);
    //     }
    //     return tpl;
    // };

    // MORE COMPLEX OBJECTS
    // var TemplateEngine = function(tpl, data) {
    //     var re = /<%([^%>]+)?%>/g,
    //         code = 'var r=[];\n',
    //         cursor = 0, match;
    //     var add = function(line, js) {
    //         js ? 
    //             code += 'r.push(' + line + ');\n' : 
    //             code += 'r.push("' + line.replace(/"/g, '\\"') + '");\n';
    //     };
    //     // going through the template and slicing the bind out and inserting the data values
    //     while(match = re.exec(tpl)) {
    //         add(tpl.slice(cursor, match.index));
    //         add(match[1], true);
    //         cursor = match.index + match[0].length;
    //     }
    //     add(tpl.substr(cursor, tpl.length - cursor)); // adds the end of the template after the last bind
    //     code += 'return r.join("");'; // adds the last statement to join the array and return the result
    //     return new Function(code.replace(/[\r\t\n]/g, '')).call(data); // function constructor taking the code string variable as a body and getting called imediately with the data object as context for this
    // };

    // ENABLES VIEW LOGIC
    this.tmpl = function tmpl(tpl, data) {
        tpl = document.getElementById(tpl).innerHTML; // gets the content of the template
        var re = /<%([^%>]+)?%>/g, // check
            reCond = /(^( )?(if|for|else|switch|case|break|{|}))(.*)?/g,
            code = 'var r=[];\n',
            cursor = 0, match;
        var add = function(line, js) {
            js ? 
                code += line.match(reCond) ? line + '\n' : 'r.push(' + line + ');\n' : 
                code += 'r.push("' + line.replace(/"/g, '\\"') + '");\n';
        };
        // going through the template and slicing the bind out and inserting the data values
        while(match = re.exec(tpl)) {
            add(tpl.slice(cursor, match.index));
            add(match[1], true);
            cursor = match.index + match[0].length;
        }
        add(tpl.substr(cursor, tpl.length - cursor)); // adds the end of the template after the last bind
        code += 'return r.join("");'; // adds the last statement to join the array and return the result
        return new Function(code.replace(/[\r\t\n]/g, '')).call(data); // function constructor taking the code string variable as a body and getting called imediately with the data object as context for this
    };


})();

