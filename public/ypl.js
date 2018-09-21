/*
TODO: 
-Add focus on preamble and appendix section,
-add burger menu in panel column 0 to show rest of licenses list
-add hierarchy breadcrumn to graph
-fix history breadcrumb
-add tooltip with beginning of text to tree view
-add interactive to graph, communicate values to server and update graph ()

*/
//hold dot description of the models in the same order as in the license text

   var ypl = [
   `digraph G_Duty {
        rankdir=BT
        overlap=false
        compound=true
        ranksep=0.5
        subgraph clusterSS_YPL4a {
            label = "SS_YPL4a"
            YPL4a [shape=triangle, orientation=0, style=filled, fillcolor=lightblue, label="YPL4a", tooltip="4(a) You must retain, in the Source form of any Derivative Works that You distribute, all copyright, patent, trademark, and attribution notices from the Source form of the Work."];
            YPL4a_1 [shape=box, label="[You retained] in the Source\n form of any Derivative\n Works that You distribute,\n all copyright, patent,\n trademark, and attribution\n notices from the Source\n form of the Work"];
            YPL4a_1 -> YPL4a[label="satisfies"];
            YPL4a_2 [shape=box, label="[You intend to reproduce and\n distribute copies of the\n Work or Derivative Works]"];
            YPL4a_2 -> YPL4a[label="activates"];
        }
    }`,

        `digraph G_Right {
            rankdir=BT
            overlap=false
            compound=true
            ranksep=0.5subgraph clusterSS_YPL4 {
            label = "SS_YPL4"
            YPL4 [shape=triangle, orientation=270, style=filled, fillcolor=lightblue, label="YPL4", tooltip="4. You may reproduce and distribute copies of the Work or Derivative Works thereof in any medium, with or without modifications, and in Source or Object form, provided that You meet the following condition:"];
            YPL4_3 [shape=box, label="[You reproduced and\n distributed] copies of the\n Work or Derivative Works\n thereof in any medium, with\n or without modifications,\n and in Source or Object form"];
            YPL4_3 -> YPL4[label="satisfies"];
            YPL4_4 [shape=box, label="SS_YPL4a", style=filled, fillcolor=white];
            YPL4_4 -> YPL4[label="activates"];
            }
           
        }
        `
   ]

//manual mapping of statement name to dot index in ypl array
var mapping = {
  "YPL4a":0,
  "YPL4":1,
};

var jsonInput = [];
var jsonState = [];

/**
  * Create JSON object to use for tree view 
  */


//Build json object from DOM element here
var myJSONArray= [
    

    {
            
        "text": "YPL4",
        

        "state":
        {
            "opened": true,
            
        },

        "children": [

           { 
               "text": "YPL4a"
            }
        ]
    }
    

];
  
  // Builds the JSON data object
  function updateJSON(id, status) {

    //check if norm
    var delimited = id.split('_');
    var isNorm = false;
    if (delimited[1] == null) {
        isNorm = true; // Is a norm
    } else {
        isNorm = false; // not a norm
    }

    if (!isNorm) {
        var exist = false;
        $.each(jsonInput, function(key, val) {
            if (val.id == id) {
                val.satisfied = status;
                exist = true;
            }
        });
        if (exist == false) {
            item = {};
            item["id"] = id;
            item["satisfied"] = status;
            jsonInput.push(item);
        }

    } else { // this is a norm
        var exist = false;
        $.each(jsonInput, function(key, val) {
            if (val.id == id) {
                val.compliance = status;
                exist = true;
            }
        });
        if (exist == false) {
            item = {};
            item["id"] = id;
            item["compliance"] = status;
            jsonInput.push(item);
        }
    }

   //console.log(JSON.stringify(jsonInput));

}

function updateSVG (data){

    $.each(data, function(key, val) {
        if (val.id != null && !(val.id.startsWith('cluster'))) {
            $("title").each(function(index, element) {
              if ($(this).text() == val.id){
                 polygon = $(this).parent().children("polygon").first();
                 if (val.satisfied != null) {
                    textNode = $(this).parent().children("text").last();
                  //  delimited = textNode.text().split('|');
                  //  if (delimited[1] == null) {
                  //      textNode.text(delimited[0] + " | " + val.satisfied);
                  //  } else {
                  //      textNode.text(delimited[0] + " | " + val.satisfied);
                  //  }
                   if (val.satisfied == "SF"){
                     polygon.attr('style', "fill:#CD5360"); //red
                   } else {
                     if (val.satisfied == "ST"){
                       polygon.attr('style', "fill:#57BC90"); //green
                     } else {
                       if (val.satisfied == "SU"){
                         polygon.attr('style', "fill:#FFFFFF"); //yellow
                       }
                     }
                   }
                   // Check if this is a super situation. Then color the related container also
                   ssCheck = textNode.text().split('_');
                   if (ssCheck[0] == "SS") {
                     $("title").each(function(index, element){
                       ssNode = "cluster" + textNode.text().split('|')[0].trim();
                       //Dont color container
                    //    if ($(this).text() == ssNode) {
                    //      polygonSS = $(this).parent().children("polygon").first();
                    //     //  textNodeSS = $(this).parent().children("text").last();
                    //     //  delimited = textNodeSS.text().split('|');
                    //     //  if (delimited[1] == null) {
                    //     //      textNodeSS.text(delimited[0] + " | " + val.satisfied);
                    //     //  } else {
                    //     //      textNodeSS.text(delimited[0] + " | " + val.satisfied);
                    //     //  }
                    //      if (val.satisfied == "SF"){
                    //        polygonSS.attr('style', "fill:#CD5360"); //red
                    //      } else {
                    //        if (val.satisfied == "ST"){
                    //          polygonSS.attr('style', "fill:#57BC90"); //green
                    //        } else {
                    //          if (val.satisfied == "SU"){
                    //            polygonSS.attr('style', "fill:#E5E338"); //yellow
                    //          }
                    //        }
                    //      }
                    //    }
                     });
                   }
                 } else {  // Handle the Norm Comliance value and related display text
                   if (val.compliance != null){
                     textNodeNorm = $(this).parent().children("g").first().children("a").first().children("text").first();
                     var delimited = textNodeNorm.text().split('|');
                     if (delimited[1] == null) {
                         textNodeNorm.text(delimited[0] + " | " + val.compliance);
                     } else {
                         textNodeNorm.text(delimited[0] + " | " + val.compliance);
                     }
                   }
                 }
              }
            });
        }
    });
  }

var margin = 10 //to avoid scrollbars
var graph = null,
    graphObj = null;


var graphviz = d3.select("#graph")
    .graphviz()
    .attributer(attributer);


//statement represent an html class that all license clause have. Each statement also have a position 
//and the corresponding model name as class
$(".statement").unbind().click(function () {
    $(this).css('background-color','cornflowerblue').focus();
    //index reprensent each class name eg. index[0] = statement, index[1] = statement name (model name)
    index = $(this).attr("class").split(' ')

    console.log("statement name: " + index[1])
   
    //generate the graph using the statement name
  
    genGraph(index[1]);
    
});




/** 
 * This function allow graph to fit in div element
*/
function attributer(datum, index, nodes) {
    var selection = d3.select(this);
    if (datum.tag == "svg") {
        var width = document.getElementById("graph").offsetWidth;
        //console.log(width);
        var height = document.getElementById("graph").offsetHeight;
        //console.log(height);
        selection
            .attr("width", width)
            .attr("height", height)
        datum.attributes.width = width - margin;
        datum.attributes.height = height - margin;
    }

}

/**
 * This function allow interaction with the generated graph to navigate to another super situation (right or duty)
 */

function SVG_Interaction() {

    graph.unbind().click(function (event){

        
        var _id = "";
        var _text = "";
        var polygon;
        var _statement="";

        

        //notes:event.target.parent is g#graph0 sometimes but should be the g#node_. This cause polygon not to change color when polygon is clicked on
        
        if ($(event.target).parent().children("title").first().text() !== "") {

            _id = $(event.target).parent().children("title").first().text();
          
            _text = $(event.target).parent().children("text").first().text();

            //console.log(_id);
            //console.log(_text);
            
          
        }else {
          _id = $(event.target).parent().parent().children("title").first().text();
          
          _text = $(event.target).parent().parent().children("text").first().text();
          
            //console.log(_id);
           // console.log(_text);
        }

          //Allow clicking on text to select the sibling polygon
          if ($(event.target).attr('points') == null) {
            polygon = $(event.target).parent().children("polygon").first();
            //console.log(polygon)
        } else {
            polygon = $(event.target);
            //console.log(polygon)
        }

      
      if (_text.startsWith("SS_")) {
        _statement = _text.split("_");
        //console.log("generate graph "+ _statement[1]);
        
        genGraph(_statement[1])

      }else{

        if (!(_id.startsWith("G_")) && _id!= "") {

            let mypromise = new Promise((resolve, reject) => {

                if (polygon.attr('style') == "fill:#57BC90") { // if green then turn red
                    polygon.attr('style', "fill:#CD5360"); //red
                    // var delimited = polygon.parent().children("text").last().text().split('|');
                    // if (delimited[1] == null) {
                    //     polygon.parent().children("text").last().text(delimited[0] + " | SF");
                    // } else {
                    //     polygon.parent().children("text").last().text(delimited[0] + " | SF");
                    // }
                    updateJSON(_id, "SF");
                    $("text").each(function (index, element) {
                        if (($(this).text() != "and") && ($(this).text() != "or") && ($(this).text() != "not")) {
                            if ($(this).text() == _text) {
                                _twinpolygon = $(this).parent().children("polygon").first();
                                _twinpolygon.attr('style', "fill:#CD5360");
                                _twinid = $(this).parent().children("title").first().text();
                                updateJSON(_twinid, "SF");
                            }
                        }
                    });


                } else if(polygon.attr('style') == "fill:#CD5360") { //if red  then turn yellow

                        polygon.attr('style', "fill:#FFFFFF"); //Yellow

                        // var delimited = polygon.parent().children("text").last().text().split('|');
                        // if (delimited[1] == null) {
                        //     polygon.parent().children("text").last().text(delimited[0] + " | SU");
                        // } else {
                        //     polygon.parent().children("text").last().text(delimited[0] + " | SU");
                        // }

                        updateJSON(_id, "SU");

                        $("text").each(function (index, element) {
                            if (($(this).text() != "and") && ($(this).text() != "or") && ($(this).text() != "not")) {
                                if ($(this).text() == _text) {
                                    _twinpolygon = $(this).parent().children("polygon").first();
                                    _twinpolygon.attr('style', "fill:#FFFFFF");
                                    _twinid = $(this).parent().children("title").first().text();
                                    updateJSON(_twinid, "SU");
                                }
                            }

                        });
                        
                    } else { //turn green

                        polygon.attr('style', "fill:#57BC90"); //Green
                        // var delimited = polygon.parent().children("text").last().text().split('|');
                        // if (delimited[1] == null) {
                        //     polygon.parent().children("text").last().text(delimited[0] + " | ST");
                        // } else {
                        //     polygon.parent().children("text").last().text(delimited[0] + " | ST");
                        // }
                        updateJSON(_id, "ST");
                        $("text").each(function (index, element) {
                            if (($(this).text() != "and") && ($(this).text() != "or") && ($(this).text() != "not")) {
                                if ($(this).text() == _text) {
                                    _twinpolygon = $(this).parent().children("polygon").first();
                                    _twinpolygon.attr('style', "fill:#57BC90");
                                    _twinid = $(this).parent().children("title").first().text();
                                    updateJSON(_twinid, "ST");
                                }
                            }
                        });
                    }

                    setTimeout(function(){
                        resolve("Success");
                    },600);

                });
        

                mypromise.then((successMessage)=>{
                    console.log('Yay'+successMessage)
                    console.log("FROM ME:"+JSON.stringify(jsonInput))
                    // //query normserver
                    accessURL = "http://localhost:4567/assert/6/1"
                    $.ajax(accessURL, {
                        method: 'POST',
                        data: JSON.stringify(jsonInput),
                        crossDomain: true
                    }).then(function(data) {
                        console.log("FROM SERVER"+JSON.stringify(data));
                        jsonState = data
                        updateSVG(jsonState);
                        
                        //alert("Done! Review results")
                        
                    });
                })

        }
            


        }
        

       
    });

   

    
}

function genGraph(stat){


    
/**
 * Add generated graph to history
 */
if($("#clust1").children("title").text().slice(10) !== stat ){

    $("ul.breadcrumb li:last-child").css('font-weight','normal')
    $("ul.breadcrumb li:last-child").css('text-decoration','none')
    
    
    $('#visitedNode').append('<li><a href="#" >'+stat+'</a></li>')

    $("ul.breadcrumb li:last-child").css('font-weight','bold')
    $("ul.breadcrumb li:last-child").css('text-decoration','underline')
    // $("ul.breadcrumb li:last-child").focus()
    var left = $("#content").width()
    $("#content").scrollLeft(left)

    //generate graph when a norm model is clicked in the history list.
    $("ul#visitedNode > li").unbind().click(function () {
        console.log("here")
        genGraph($(this).text())
    });
    
}


  
  var dot_index;
  for ( var name in mapping){

      if (name == stat) {
        dot_index = mapping[name]
      } 
    }

   graphviz
        .dot(ypl[dot_index])
        .zoom(false)
        .render(function () {
            graph = $("svg")
            SVG_Interaction()
            
            for (let index = 1; index < graph.children().children('.node').children('text').length; index++) {
                // const element = graph.children().children('.node').children('text')[index];
                // console.log(element)
                if (graph.children().children('.node').children('text')[index].innerHTML.startsWith('SS_')) {

                    var prevColor = null; 
                   

                    graph.children().children('.node').children('text')[index].previousElementSibling.onmouseover = function()
                    {
                        prevColor = graph.children().children('.node').children('text')[index].previousElementSibling.style.fill;
                        this.style.fill = "#d8d6d6"
                        this.style.cursor = "pointer"
                    }

                    graph.children().children('.node').children('text')[index].previousElementSibling.onmouseout = function()
                    {
                        console.log(prevColor);
                        
                        this.style.fill = prevColor
                    }

                    graph.children().children('.node').children('text')[index].onmouseover = function()
                    {
                        prevColor = graph.children().children('.node').children('text')[index].previousElementSibling.style.fill;
                        this.previousElementSibling.style.fill = "#d8d6d6"
                        this.style.cursor = "pointer"
                    }

                    graph.children().children('.node').children('text')[index].onmouseout = function()
                    {
                        console.log(prevColor);
                        
                        this.previousElementSibling.style.fill = prevColor
                    }



            }else{

                graph.children().children('.node').children('text')[index].previousElementSibling.onmouseover = function()
                {
                    
                    this.style.cursor = "pointer"
                }

                graph.children().children('.node').children('text')[index].previousElementSibling.onmouseout = function()
                {
                    
                }

                graph.children().children('.node').children('text')[index].onmouseover = function()
                {
                    
                    this.style.cursor = "pointer"
                }

                graph.children().children('.node').children('text')[index].onmouseout = function()
                {
                    
                }
            }
        }
            //color graph using jsonState
             console.log("currentState: "+JSON.stringify(jsonState));
    

            updateSVG(jsonState);
            
        })
/**
* Highlight the statement corresponding to generated graph
*/

$(".statement,.preamble,.appendix").css('background-color','unset')
$("."+stat).css('background-color','#add8e6').focus();

 
}






//var children_array = []  //This array will store the children node so they do not duplicate

var model_text = $("a.statement")


$(document).ready(function(){

    //read document format and create an array with the data extracted from the license text body

    $('#data').jstree({

        'core': {
            'data': myJSONArray
        },
        // "plugins":["checkbox"]
        "plugins":["wholerow"]
        
    });

    //display the text of the selected node. Will pass this node to generate graph at some point. However, name need to be consistent with genGraph needs.

    $('#data').on("changed.jstree", function (e, data) {
        //console.log(data.instance.get_selected(true)[0].text.split(' ')[1])

        if (data.instance.get_selected(true)[0].text.split(' ')[0].startsWith('YPL')) {
            
            genGraph(data.instance.get_selected(true)[0].text.split(' ')[0])
        }else{
            console.log("."+data.instance.get_selected(true)[0].text.split(' ')[0].toLowerCase())
            $(".statement,.preamble,.appendix").css('background-color','unset')
            
            $("."+data.instance.get_selected(true)[0].text.split(' ')[0].toLowerCase()).css('background-color','#add8e6')
            window.location.hash = "#"+data.instance.get_selected(true)[0].text.split(' ')[0].toLowerCase();
        }

      });


     

    

})



