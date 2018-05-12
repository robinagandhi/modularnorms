
var agpl = [
    `digraph G {
        rankdir=BT
        overlap=false
        compound=true
        ranksep=0.5
        subgraph clusterSS_AGPL1 {
            label = "SS_AGPL1"
            AGPL1 [shape=triangle, orientation=270, style=filled, fillcolor=lightblue, label="AGPL1", tooltip="1. You may copy and distribute verbatim copies of the [original] Program's source code as you receive it, in any medium, provided that you conspicuously and appropriately publish on each copy an appropriate copyright notice and disclaimer of warranty; keep intact all the notices that refer to this License and to the absence of any warranty; and give any other recipients of the Program a copy of this License along with the Program."];
            AGPL1_35 [shape=box, label="[you copied and distributed]\n verbatim copies of the\n [original] Program's source\n code"];
            AGPL1_35 -> AGPL1[label="satisfies"];
            AGPL1_36 [shape=box, label="and", style=filled, fillcolor=grey];
            AGPL1_36 -> AGPL1[label="activates"];
            AGPL1_37 [shape=box, label="SS_AGPL1a", style=filled, fillcolor=orange];
            AGPL1_37 -> AGPL1_36;
            AGPL1_38 [shape=box, label="and", style=filled, fillcolor=grey];
            AGPL1_38 -> AGPL1_36;
            AGPL1_39 [shape=box, label="SS_AGPL1b", style=filled, fillcolor=orange];
            AGPL1_39 -> AGPL1_38;
            AGPL1_40 [shape=box, label="SS_AGPL1c", style=filled, fillcolor=orange];
            AGPL1_40 -> AGPL1_38;
            }
        }
    `,
    `digraph G {
        rankdir=BT
        overlap=false
        compound=true
        ranksep=0.5
        subgraph clusterSS_AGPL1a {
            label = "SS_AGPL1a"
            AGPL1a [shape=triangle, orientation=0, style=filled, fillcolor=lightblue, label="AGPL1a", tooltip="you [must] conspicuously and appropriately publish on each copy an appropriate copyright notice and disclaimer of warranty"];
            AGPL1a_41 [shape=box, label="[you conspicuously and\n appropriately published] on\n each copy an appropriate\n copyright notice and\n disclaimer of warranty"];
            AGPL1a_41 -> AGPL1a[label="satisfies"];
            AGPL1a_42 [shape=box, label="or", style=filled, fillcolor=grey];
            AGPL1a_42 -> AGPL1a[label="activates"];
            AGPL1a_43 [shape=box, label="[you intend to copy and\n distribute verbatim copies\n of the original Program's\n source code]"];
            AGPL1a_43 -> AGPL1a_42;
            AGPL1a_44 [shape=box, label="[you intend to modify the\n Program, and copy and\n distribute such modifications]"];
            AGPL1a_44 -> AGPL1a_42;
            }
        }
    `,
    `digraph G {
        rankdir=BT
        overlap=false
        compound=true
        ranksep=0.5
        subgraph clusterSS_AGPL1b {
            label = "SS_AGPL1b"
            AGPL1b [shape=triangle, orientation=0, style=filled, fillcolor=lightblue, label="AGPL1b", tooltip="[you must] keep intact all the notices that refer to this License and to the absence of any warranty"];
            AGPL1b_45 [shape=box, label="[you kept intact] all the\n notices that refer to this\n License and to the absence\n of any warranty"];
            AGPL1b_45 -> AGPL1b[label="satisfies"];
            AGPL1b_46 [shape=box, label="or", style=filled, fillcolor=grey];
            AGPL1b_46 -> AGPL1b[label="activates"];
            AGPL1b_47 [shape=box, label="[you intend to copy and\n distribute verbatim copies\n of the original Program's\n source code]"];
            AGPL1b_47 -> AGPL1b_46;
            AGPL1b_48 [shape=box, label="[you intend to modify the\n Program, and copy and\n distribute such modifications]"];
            AGPL1b_48 -> AGPL1b_46;
            }
        }
    `,
    `digraph G {
        rankdir=BT
        overlap=false
        compound=true
        ranksep=0.5
        subgraph clusterSS_AGPL1c {
            label = "SS_AGPL1c"
            AGPL1c [shape=triangle, orientation=0, style=filled, fillcolor=lightblue, label="AGPL1c", tooltip="[you must] give any other recipients of the Program a copy of this License along with the Program"];
            AGPL1c_49 [shape=box, label="[you gave] any other\n recipients of the Program a\n copy of this License along\n with the Program"];
            AGPL1c_49 -> AGPL1c[label="satisfies"];
            AGPL1c_50 [shape=box, label="or", style=filled, fillcolor=grey];
            AGPL1c_50 -> AGPL1c[label="activates"];
            AGPL1c_51 [shape=box, label="[you intend to copy and\n distribute verbatim copies\n of the original Program's\n source code]"];
            AGPL1c_51 -> AGPL1c_50;
            AGPL1c_52 [shape=box, label="[you intend to modify the\n Program, and copy and\n distribute such modifications]"];
            AGPL1c_52 -> AGPL1c_50;
            }
        }
    `,
    `digraph G {
        rankdir=BT
        overlap=false
        compound=true
        ranksep=0.5
        subgraph clusterSS_AGPL2 {
            label = "SS_AGPL2"
            AGPL2 [shape=triangle, orientation=270, style=filled, fillcolor=lightblue, label="AGPL2", tooltip="2. You may modify your copy or copies of the Program or any portion of it, thus forming a work based on the Program, and copy and distribute such modifications or work under the terms of Section 1 above, provided that you also meet all of these conditions."];
            AGPL2_1 [shape=box, label="[you modified] your copy or\n copies of the Program or\n any portion of it, ... and\n [copied and distributed]\n such modifications or work"];
            AGPL2_1 -> AGPL2[label="satisfies"];
            AGPL2_2 [shape=box, label="and", style=filled, fillcolor=grey];
            AGPL2_2 -> AGPL2[label="activates"];
            AGPL2_3 [shape=box, label="and", style=filled, fillcolor=grey];
            AGPL2_3 -> AGPL2_2;
            AGPL2_4 [shape=box, label="SS_AGPL1a", style=filled, fillcolor=orange];
            AGPL2_4 -> AGPL2_3;
            AGPL2_5 [shape=box, label="and", style=filled, fillcolor=grey];
            AGPL2_5 -> AGPL2_3;
            AGPL2_6 [shape=box, label="SS_AGPL1b", style=filled, fillcolor=orange];
            AGPL2_6 -> AGPL2_5;
            AGPL2_7 [shape=box, label="SS_AGPL1c", style=filled, fillcolor=orange];
            AGPL2_7 -> AGPL2_5;
            AGPL2_8 [shape=box, label="and", style=filled, fillcolor=grey];
            AGPL2_8 -> AGPL2_2;
            AGPL2_9 [shape=box, label="SS_AGPL2a", style=filled, fillcolor=orange];
            AGPL2_9 -> AGPL2_8;
            AGPL2_10 [shape=box, label="and", style=filled, fillcolor=grey];
            AGPL2_10 -> AGPL2_8;
            AGPL2_11 [shape=box, label="SS_AGPL2b", style=filled, fillcolor=orange];
            AGPL2_11 -> AGPL2_10;
            AGPL2_12 [shape=box, label="and", style=filled, fillcolor=grey];
            AGPL2_12 -> AGPL2_10;
            AGPL2_13 [shape=box, label="SS_AGPL2c", style=filled, fillcolor=orange];
            AGPL2_13 -> AGPL2_12;
            AGPL2_14 [shape=box, label="SS_AGPL2d", style=filled, fillcolor=orange];
            AGPL2_14 -> AGPL2_12;
        }   
    }
    `,
    `digraph G {
        rankdir=BT
        overlap=false
        compound=true
        ranksep=0.5
        subgraph clusterSS_AGPL2a {
            label = "SS_AGPL2a"
            AGPL2a [shape=triangle, orientation=0, style=filled, fillcolor=lightblue, label="AGPL2a", tooltip="2.a) You must cause the modified files to carry prominent notices stating that you changed the files and the date of any change."];
            AGPL2a_15 [shape=box, label="[you caused] the modified\n files to carry prominent\n notices stating that you\n changed the files and the\n date of any change"];
            AGPL2a_15 -> AGPL2a[label="satisfies"];
            AGPL2a_16 [shape=box, label="[you intend to modify the\n Program, and copy and\n distribute such modifications]"];
            AGPL2a_16 -> AGPL2a[label="activates"];
            }
        }
    `,
    `digraph G {
        rankdir=BT
        overlap=false
        compound=true
        ranksep=0.5
        subgraph clusterSS_AGPL2b {
            label = "SS_AGPL2b"
            AGPL2b [shape=triangle, orientation=0, style=filled, fillcolor=lightblue, label="AGPL2b", tooltip="2.b) You must cause any work that you distribute or publish, that in whole or in part contains or is derived from the Program or any part thereof, to be licensed as a whole at no charge to all third parties under the terms of this License."];
            AGPL2b_17 [shape=box, label="[you caused] any work that you\n distribute or publish, that\n in whole or in part\n contains or is derived from\n the Program or any part\n thereof, to be licensed as\n a whole at no charge to all\n third parties under the\n terms of this License"];
            AGPL2b_17 -> AGPL2b[label="satisfies"];
            AGPL2b_18 [shape=box, label="[you intend to modify the\n Program, and copy and\n distribute such modifications]"];
            AGPL2b_18 -> AGPL2b[label="activates"];
        }
    }
    `,
    `digraph G {
        rankdir=BT
        overlap=false
        compound=true
        ranksep=0.5
        subgraph clusterSS_AGPL2c {
            label = "SS_AGPL2c"
            AGPL2c [shape=triangle, orientation=0, style=filled, fillcolor=lightblue, label="AGPL2c", tooltip="2.c) If the modified program normally reads commands interactively when run, you must cause it, when started running for such interactive use in the most ordinary way, to print or display an announcement including an appropriate copyright notice and a notice that there is no warranty (or else, saying that you provide a warranty) and that users may redistribute the program under these conditions, and telling the user how to view a copy of this License. (Exception: if the Program itself is interactive but does not normally print such an announcement, your work based on the Program is not required to print an announcement.)"];
            AGPL2c_19 [shape=box, label="[you caused the modified\n program] ... to print or\n display an announcement\n including an appropriate\n copyright notice and a\n notice that there is no\n warranty (or else, saying\n that you provide a\n warranty) and that users\n may redistribute the\n program under these\n conditions, and telling the\n user how to view a copy of this License"];
            AGPL2c_19 -> AGPL2c[label="satisfies"];
            AGPL2c_20 [shape=box, label="and", style=filled, fillcolor=grey];
            AGPL2c_20 -> AGPL2c[label="activates"];
            AGPL2c_21 [shape=box, label="[you intend to modify the\n Program, and copy and\n distribute such modifications]"];
            AGPL2c_21 -> AGPL2c_20;
            AGPL2c_22 [shape=box, label="or", style=filled, fillcolor=grey];
            AGPL2c_22 -> AGPL2c_20;
            AGPL2c_23 [shape=box, label="the modified program normally\n reads commands\n interactively when run"];
            AGPL2c_23 -> AGPL2c_22;
            AGPL2c_24 [shape=box, label="not", style=filled, fillcolor=grey];
            AGPL2c_24 -> AGPL2c_22;
            AGPL2c_25 [shape=box, label="[original] Program itself is\n interactive but does not\n normally print such an\n announcement"];
            AGPL2c_25 -> AGPL2c_24;
            }
        }
    `,
    `digraph G {
        rankdir=BT
        overlap=false
        compound=true
        ranksep=0.5
        subgraph clusterSS_AGPL2d {
            label = "SS_AGPL2d"
            AGPL2d [shape=triangle, orientation=0, style=filled, fillcolor=lightblue, label="AGPL2d", tooltip="2.d) If the Program as you received it is intended to interact with users through a computer network and if, in the version you received, any user interacting with the Program was given the opportunity to request transmission to that user of the Program's complete source code, you must not remove that facility from your modified version of the Program or work based on the Program, and must offer an equivalent opportunity for all users interacting with your Program through a computer network to request immediate transmission by HTTP of the complete source code of your modified version or other derivative work."];
            AGPL2d_26 [shape=box, label="and", style=filled, fillcolor=grey];
            AGPL2d_26 -> AGPL2d[label="satisfies"];
            AGPL2d_27 [shape=box, label="not", style=filled, fillcolor=grey];
            AGPL2d_27 -> AGPL2d_26;
            AGPL2d_28 [shape=box, label="[you removed] that facility\n [to request transmission of\n source code] from your\n modified version of the\n Program or work based on\n the Program"];
            AGPL2d_28 -> AGPL2d_27;
            AGPL2d_29 [shape=box, label="[you offered] an equivalent\n opportunity for all users\n interacting with your\n Program through a computer\n network to request\n immediate transmission by\n HTTP of the complete source\n code of your modified\n version or other derivative work"];
            AGPL2d_29 -> AGPL2d_26;
            AGPL2d_30 [shape=box, label="and", style=filled, fillcolor=grey];
            AGPL2d_30 -> AGPL2d[label="activates"];
            AGPL2d_31 [shape=box, label="[you intend to modify the\n Program, and copy and\n distribute such modifications]"];
            AGPL2d_31 -> AGPL2d_30;
            AGPL2d_32 [shape=box, label="and", style=filled, fillcolor=grey];
            AGPL2d_32 -> AGPL2d_30;
            AGPL2d_33 [shape=box, label="the [original] Program as you\n received it is intended to\n interact with users through\n a computer network"];
            AGPL2d_33 -> AGPL2d_32;
            AGPL2d_34 [shape=box, label="in the version you received,\n any user interacting with\n the [original] Program was\n given the opportunity to\n request transmission to\n that user of the Program's\n complete source code"];
            AGPL2d_34 -> AGPL2d_32;
            }
        }
    `
    
]

var graph = null;
var graphviz = d3.select("#graph").graphviz()
                .attributer(attributer);
var t = d3.transition().duration(1000);


$(".statement").click(function () {
    console.log("here")
    index = $(this).attr("class").split(' ')
    console.log("statement index: "+index[1])
    
    
        
        graphviz
            .dot(agpl[index[1]])
            .zoom(false)
            .render(function (){
                graph = $("svg")
                console.log(graph)
                //TODO : create function registering click event on svg graph, will build jsonData on click
                // graph.click(function (event){
                //     console.log("svg clicked...Element--->"+event.target, event.type)
                // });
                SVG_Interaction()
                console.log(graphviz);
                //TODO: fit rendered graphiz to div container and enable zooming using maybe an svg nav library
            });
    
});

// function nextModel() {
    
//     d3.select("#graph").graphviz()
//         .fade(false)
//         .zoom(false)
//         .renderDot(agpl[index])

//     index++;
// }

var margin = 10 //to avoid scrollbars

function attributer(datum,index,nodes) {
    var  selection = d3.select(this);
    if(datum.tag == "svg"){
        var width = document.getElementById("box-2").offsetWidth;
        console.log(width);
        var height = document.getElementById("box-2").offsetHeight;
        console.log(height);
        selection   
            .attr("width",width)
            .attr("height",height)
        datum.attributes.width = width - margin;
        datum.attributes.height = height - margin;
    }

}

function resizeSVG() {
    console.log('Resize');
    var width = window.innerWidth;
    var height = window.innerHeight;
    d3.select("#graph").selectWithoutDataPropagation("svg")
        .transition()
        .duration(700)
        .attr("width",width - margin)
        .attr("height",height - margin);
};



function SVG_Interaction() {

    var jsonData = [];

    graph.click(function (event){

        console.log("svg clicked...Element--->"+event.target, event.type)
        var _id = "";
        var _text = "";

        //notes:event.target.parent is g#graph0 sometimes but should be the g#node_. This cause polygon not to change color when polygon is clicked on
        
        if ($(event.target).parent().children("title").first().text() != "") {
            _id = $(event.target).parent().children("title").first().text();
            _text = $(event.target).parent().children("text").first().text();
        }else {
            _id = $(event.target).parent().parent().children("title").first().text();
            _text = $(event.target).parent().parent().children("text").first().text();
        }

        //Allow clicking on text to select the sibling polygon
        if ($(event.target).attr('points') == null) {
            polygon = $(event.target).parent().children("polygon").first();
        } else {
            polygon = $(event.target);
        }

        //check if norm
        var delimited = polygon.parent().children("title").last().text().split('_');
        var isNorm = false;
        if (delimited[1] == null) {
            isNorm = true; // Is a norm
        } else {
            isNorm = false; // not a norm
        }

        // Don't color anything that is not polygon with points. Also don't color graphs and Norms
        if ((polygon.attr('points') != null) & (polygon.parent().children("title").first().text() != "G") & !(isNorm)) {


            if (polygon.attr('style') == "fill:#57BC90") { //if green turn red
                polygon.attr('style', "fill:#CD5360")
                //updateJSONData
            } else if (polygon.attr('style') == "fill:#CD5360") { //if red turn yellow
                polygon.attr('style', "fill:#E5E338")
                //updateJSONData
            }else if (polygon.attr('style') == "fill:#E5E338") //if yellow turn white
            {
                polygon.attr('style', "fill:#FFFFFF")
                //update JSONData
            }else{ //turn green
                polygon.attr('style', "fill:#57BC90")
                //updateJSONdata
            }

        }

            
    });
}
/*
This function will update json data to perform request on server
*/
function updateJSON(params) {
    
}






