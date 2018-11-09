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
var panZoomGraph = null;
var jsonInput = [];
var jsonState = [];
var polygon_top = null;



/**
  * Create JSON object to use for tree view 
  */


//Build json object from DOM element here
var myJSONArray= [
    

    {
         "id":"YPL4",   
        "text": "YPL4",
        "icon":"/static/right_blue.png",
        
        

        "state":
        {
            "opened": true,
            
        },

        "children": [

           { 
                "id":"YPL4a",   
               "text": "YPL4a",
               "icon":"/static/duty_blue.png",
               
               
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

function updateTree(data){

    $.each(data, function(key,val){
        if(val.id != null && !(val.id.startsWith('cluster'))){

            if(val.compliance == "COM"){
                console.log(val.id + " "+ val.compliance)
                $('#data').jstree(true).set_icon(val.id,"/static/duty_green.png")
             }else if (val.compliance == "EXR"){
                console.log(val.id + " "+ val.compliance)
                $('#data').jstree(true).set_icon(val.id,"/static/right_green.png")
             }

             if(val.compliance == "VIO"){
               $('#data').jstree(true).set_icon(val.id,"/static/duty_red.png")
                console.log(val.id + " "+ val.compliance)

             }else if(val.compliance == "NEX"){
                 console.log(val.id + " "+ val.compliance)
               $('#data').jstree(true).set_icon(val.id,"/static/right_red.png")
             }

             if(val.compliance == "INC"){
                 console.log(val.id + " "+ val.compliance)
                 var icon = $('#data').jstree(true).get_node(val.id).original.icon;
                 console.log(icon)
                 $('#data').jstree(true).set_icon(val.id,icon)
                 
             }



        }

    })
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
                     polygon.attr('style', "fill:rgba(205, 83, 96, 0.5)"); //red
                     
                    
                   } else {
                     if (val.satisfied == "ST"){
                       polygon.attr('style', "fill:rgba(87, 188, 144, 0.5)"); //green
                       
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
                     polygon_top = $(this).parent().children("g").first().children("a").first().children("polygon").first();
                    
                     var delimited = textNodeNorm.text().split('|');
                    

                     if (val.compliance == "COM"|| val.compliance == "EXR") {//fill green

                         polygon_top.attr('style',"fill:rgba(87, 188, 144, 0.5)") 
                         
                         
                        
                         $("."+delimited[0]).css('background-color','rgba(87, 188, 144, 0.5)').focus();
                     } else if(val.compliance == "VIO" || val.compliance == "NEX"){//fill red

                        polygon_top.attr('style', "fill:rgba(205, 83, 96, 0.5)"); //red

                        
                        
                        
                        $("."+delimited[0]).css('background-color','rgba(205, 83, 96, 0.5)').focus()//red
                    } else{


                        polygon_top.attr('style', "fill:#add8e6"); //blue
                        
                        
                        
                        $("."+delimited[0]).css('background-color','rgba(173, 216, 230, 0.5)').focus()
                    }

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
    //$(this).css('background-color','cornflowerblue').focus();
    //index reprensent each class name eg. index[0] = statement, index[1] = statement name (model name)
    index = $(this).attr("class").split(' ')

    //console.log("statement name: " + index[1])
   
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
 * Rebuild tree
 */

 function rebuild_tree(data){
     //data represent a new json with different icon color 
     $('#data').jstree('destroy');


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

            

                if (polygon.attr('style') == "fill:rgb(87, 188, 144,.5)") { // if green then turn red
                    polygon.attr('style', "fill:rgb(205, 83, 96,0.5)"); //red
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
                                _twinpolygon.attr('style', "fill:rgb(205, 83, 96,0.5)");
                                _twinid = $(this).parent().children("title").first().text();
                                updateJSON(_twinid, "SF");
                            }
                        }
                    });


                } else if(polygon.attr('style') == "fill:rgb(205, 83, 96,0.5)") { //if red  then turn yellow

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

                        polygon.attr('style', "fill:rgb(87, 188, 144,.5)"); //Green
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
                                    _twinpolygon.attr('style', "fill:rgb(87, 188, 144,.5)");
                                    _twinid = $(this).parent().children("title").first().text();
                                    updateJSON(_twinid, "ST");
                                }
                            }
                        });
                    }

                   

                
        

               

        }
            


        }
        

       
    });

   

    
}

function genGraph(stat){


// var sel = $('#data').jstree(true).get_selected()
// $('#data').jstree(true).deselect_node(sel[0],[true])


   $('#data').jstree().deselect_all()
   
    
    if($('#graph svg').length){
        $('#graph svg').remove();
    }

    $('#data').jstree(true).select_node(stat);

    $(document).ready(function(){

        
    })

    
/**
 * Add generated graph to history
 */
if($("#clust1").children("title").text().slice(10) !== stat ){
    $('#rcv').css('visibility','visible')

    $("ul.breadcrumb li:last-child").css('font-weight','normal')
    $("ul.breadcrumb li:last-child").css('text-decoration','none')
    
    $('#visitedNode').append('<li><a href="#" >'+stat+'</a></li>')
    
    if($('#visitedNode li').length == 6){
        $('#visitedNode li:first-child').remove()
    }

    $("ul.breadcrumb li:last-child").css('font-weight','bold')
    $("ul.breadcrumb li:last-child").css('text-decoration','underline')
    // $("ul.breadcrumb li:last-child").focus()
    var left = $("#content").width()
    $("#content").scrollLeft(left)

    //generate graph when a norm model is clicked in the history list.
    $("ul#visitedNode > li").unbind().click(function () {
        //console.log("here")
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
            graph = $("#graph svg")
          
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
                        //console.log(prevColor);
                        
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
                        //console.log(prevColor);
                        
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

            /*
            *Add zoom
            */


           panZoomGraph = svgPanZoom('#graph svg',{
            zoomEnabled: true,
            controlIconsEnabled: true,
            fit: true,
            center: true,
            dblClickZoomEnabled: false
        });

            
        })

       
/**
* Highlight the statement corresponding to generated graph
*/

$(".statement,.preamble,.appendix").css('background-color','unset')

var color = '#add8e6' ;
$("."+stat).css('background-color',color).focus();

if (polygon_top !=null) {
    color = polygon_top.attr('style').slice(5)
    $("."+stat).css('background-color',color).focus();

    
} 

 
}






//var children_array = []  //This array will store the children node so they do not duplicate

var model_text = $("a.statement")


$(document).ready(function(){

    $(document).ajaxStart(function(){
        $("#loader").css("display", "block");
    });
    $(document).ajaxComplete(function(){
        $("#loader").css("display", "none");
    });

    
    $("#play").click(function(){

            
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
                updateTree(jsonState);
                
                //alert("Done! Review results")
                
            });
        

    });

    //read document format and create an array with the data extracted from the license text body

    $('#data').jstree({

        'core': {
            'data': myJSONArray,
            'multiple':false,
            'animation':0
        },
        // "plugins":["checkbox"]
        "plugins":["wholerow"]
        
    });

    //display the text of the selected node. Will pass this node to generate graph at some point. However, name need to be consistent with genGraph needs.

    $('#data').bind("click.jstree", function (e, data) {

        //console.log($('#data').jstree('get_selected',true)[0].id)

        
       

        if ($('#data').jstree('get_selected',true)[0].id.startsWith('YPL')) {
            
            genGraph($('#data').jstree('get_selected',true)[0].id)
        }else{
            //console.log("."+$('#data').jstree('get_selected',true)[0].id.toLowerCase())
            $(".statement,.preamble,.appendix").css('background-color','unset')
            
            $("."+$('#data').jstree('get_selected',true)[0].id.toLowerCase()).css('background-color','#add8e6')
            window.location.hash = "#"+$('#data').jstree('get_selected',true)[0].id.toLowerCase();
        }

      });

      $('#data').bind("hover_node.jstree",function(e,data){

       
        $("."+(data.node.id)).css('border','1px solid').css('border-color','#c5e1eb')
        $("."+(data.node.id)).focus()
        

      });

      $('#data').bind("dehover_node.jstree",function(e,data){

        
        $("."+(data.node.id)).css('border','none').hover(function(){
            $(this).css('border','1px solid').css('border-color','#c5e1eb')
        }).mouseout(function(){
            $(this).css('border','none')
        })
        

      });



    //   $('#buttontest').click(function(){
    //     $('#data').jstree(true).select_node('YPL4a');
    //   })
     

    

})



