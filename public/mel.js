/*
TODO: 
-Add focus on preamble and appendix section,
-add burger menu in panel column 0 to show rest of licenses list
-add hierarchy breadcrumn to graph
-fix history breadcrumb
-add tooltip with beginning of text to tree view
-add interactive to graph, communicate values to server and update graph ()
Issue: Added selection of twin polygon but the only way to get the selection sent to server is to vist the super situation
*/
//hold dot description of the models in the same order as in the license text
var mel = [
    `digraph G_Right {
        rankdir=BT
        overlap=false
        compound=true
        ranksep=0.5
        subgraph clusterSS_MEL1 {
            label = "SS_MEL1"
            MEL1 [shape=triangle, orientation=270, style=filled, fillcolor=lightblue, label="MEL1", tooltip="1. You may copy and distribute verbatim copies of the [original] Program's source code as you receive it, in any medium, provided that you conspicuously and appropriately publish on each copy an appropriate copyright notice and disclaimer of warranty; keep intact all the notices that refer to this License and to the absence of any warranty; and give any other recipients of the Program a copy of this License along with the Program."];
            MEL1_35 [shape=box, label="[you copied and distributed]\n verbatim copies of the\n [original] Program's source\n code"];
            MEL1_35 -> MEL1[label="satisfies"];
            MEL1_36 [shape=box, label="and", style=filled, fillcolor=grey];
            MEL1_36 -> MEL1[label="activates"];
            MEL1_37 [shape=box, label="SS_MEL1a", style=filled, fillcolor=white];
            MEL1_37 -> MEL1_36;
            MEL1_38 [shape=box, label="and", style=filled, fillcolor=grey];
            MEL1_38 -> MEL1_36;
            MEL1_39 [shape=box, label="SS_MEL1b", style=filled, fillcolor=white];
            MEL1_39 -> MEL1_38;
            MEL1_40 [shape=box, label="SS_MEL1c", style=filled, fillcolor=white];
            MEL1_40 -> MEL1_38;
            }
        }
    `,
    `digraph G_Duty {
        rankdir=BT
        overlap=false
        compound=true
        ranksep=0.5
        subgraph clusterSS_MEL1a {
            label = "SS_MEL1a"
            MEL1a [shape=triangle, orientation=0, style=filled, fillcolor=lightblue, label="MEL1a", tooltip="you [must] conspicuously and appropriately publish on each copy an appropriate copyright notice and disclaimer of warranty"];
            MEL1a_41 [shape=box, label="[you conspicuously and\n appropriately published] on\n each copy an appropriate\n copyright notice and\n disclaimer of warranty"];
            MEL1a_41 -> MEL1a[label="satisfies"];
            MEL1a_42 [shape=box, label="or", style=filled, fillcolor=grey];
            MEL1a_42 -> MEL1a[label="activates"];
            MEL1a_43 [shape=box, label="[you intend to copy and\n distribute verbatim copies\n of the original Program's\n source code]"];
            MEL1a_43 -> MEL1a_42;
            MEL1a_44 [shape=box, label="[you intend to modify the\n Program, and copy and\n distribute such modifications]"];
            MEL1a_44 -> MEL1a_42;
            }
        }
    `,
    `digraph G_Duty {
        rankdir=BT
        overlap=false
        compound=true
        ranksep=0.5
        subgraph clusterSS_MEL1b {
            label = "SS_MEL1b"
            MEL1b [shape=triangle, orientation=0, style=filled, fillcolor=lightblue, label="MEL1b", tooltip="[you must] keep intact all the notices that refer to this License and to the absence of any warranty"];
            MEL1b_45 [shape=box, label="[you kept intact] all the\n notices that refer to this\n License and to the absence\n of any warranty"];
            MEL1b_45 -> MEL1b[label="satisfies"];
            MEL1b_46 [shape=box, label="or", style=filled, fillcolor=grey];
            MEL1b_46 -> MEL1b[label="activates"];
            MEL1b_47 [shape=box, label="[you intend to copy and\n distribute verbatim copies\n of the original Program's\n source code]"];
            MEL1b_47 -> MEL1b_46;
            MEL1b_48 [shape=box, label="[you intend to modify the\n Program, and copy and\n distribute such modifications]"];
            MEL1b_48 -> MEL1b_46;
            }
        }
    `,
    
    `digraph G_Duty {
        rankdir=BT
        overlap=false
        compound=true
        ranksep=0.5
        subgraph clusterSS_MEL1c {
            label = "SS_MEL1c"
            MEL1c [shape=triangle, orientation=0, style=filled, fillcolor=lightblue, label="MEL1c", tooltip="[you must] give any other recipients of the Program a copy of this License along with the Program"];
            MEL1c_49 [shape=box, label="[you gave] any other\n recipients of the Program a\n copy of this License along\n with the Program"];
            MEL1c_49 -> MEL1c[label="satisfies"];
            MEL1c_50 [shape=box, label="or", style=filled, fillcolor=grey];
            MEL1c_50 -> MEL1c[label="activates"];
            MEL1c_51 [shape=box, label="[you intend to copy and\n distribute verbatim copies\n of the original Program's\n source code]"];
            MEL1c_51 -> MEL1c_50;
            MEL1c_52 [shape=box, label="[you intend to modify the\n Program, and copy and\n distribute such modifications]"];
            MEL1c_52 -> MEL1c_50;
            }
        }
    `,
    `digraph G_Right {
        rankdir=BT
        overlap=false
        compound=true
        ranksep=0.5
        subgraph clusterSS_MEL1d {
            label = "SS_MEL1d"
            MEL1d [shape=triangle, orientation=270, style=filled, fillcolor=lightblue, label="MEL1d", tooltip="You may charge a fee for the physical act of transferring a copy, and you may at your option offer warranty protection in exchange for a fee."];
            MEL1d_53 [shape=box, label="and", style=filled, fillcolor=grey];
            MEL1d_53 -> MEL1d[label="satisfies"];
            MEL1d_54 [shape=box, label="[You charged] a fee for the\n physical act of\n transferring a copy"];
            MEL1d_54 -> MEL1d_53;
            MEL1d_55 [shape=box, label="[You offered] at your option\n warranty protection in\n exchange of a fee"];
            MEL1d_55 -> MEL1d_53;
            MEL1d_56 [shape=box, label="or", style=filled, fillcolor=grey];
            MEL1d_56 -> MEL1d[label="activates"];
            MEL1d_57 [shape=box, label="[you intend to copy and\n distribute verbatim copies\n of the original Program's\n source code]"];
            MEL1d_57 -> MEL1d_56;
            MEL1d_58 [shape=box, label="[you intend to modify the\n Program, and copy and\n distribute such modifications]"];
            MEL1d_58 -> MEL1d_56;
            }
        }
    `,
    `digraph G_Right {
        rankdir=BT
        overlap=false
        compound=true
        ranksep=0.5
        subgraph clusterSS_MEL2 {
            label = "SS_MEL2"
            MEL2 [shape=triangle, orientation=270, style=filled, fillcolor=lightblue, label="MEL2", tooltip="2. You may modify your copy or copies of the Program or any portion of it, thus forming a work based on the Program, and copy and distribute such modifications or work under the terms of Section 1 above, provided that you also meet all of these conditions."];
            MEL2_1 [shape=box, label="[you modified] your copy or\n copies of the Program or\n any portion of it, ... and\n [copied and distributed]\n such modifications or work"];
            MEL2_1 -> MEL2[label="satisfies"];
            MEL2_2 [shape=box, label="and", style=filled, fillcolor=grey];
            MEL2_2 -> MEL2[label="activates"];
            MEL2_3 [shape=box, label="and", style=filled, fillcolor=grey];
            MEL2_3 -> MEL2_2;
            MEL2_4 [shape=box, label="SS_MEL1a", style=filled, fillcolor=white];
            MEL2_4 -> MEL2_3;
            MEL2_5 [shape=box, label="and", style=filled, fillcolor=grey];
            MEL2_5 -> MEL2_3;
            MEL2_6 [shape=box, label="SS_MEL1b", style=filled, fillcolor=white];
            MEL2_6 -> MEL2_5;
            MEL2_7 [shape=box, label="SS_MEL1c", style=filled, fillcolor=white];
            MEL2_7 -> MEL2_5;
            MEL2_8 [shape=box, label="and", style=filled, fillcolor=grey];
            MEL2_8 -> MEL2_2;
            MEL2_9 [shape=box, label="SS_MEL2a", style=filled, fillcolor=white];
            MEL2_9 -> MEL2_8;
            MEL2_10 [shape=box, label="and", style=filled, fillcolor=grey];
            MEL2_10 -> MEL2_8;
            MEL2_11 [shape=box, label="SS_MEL2b", style=filled, fillcolor=white];
            MEL2_11 -> MEL2_10;
            MEL2_12 [shape=box, label="and", style=filled, fillcolor=grey];
            MEL2_12 -> MEL2_10;
            MEL2_13 [shape=box, label="SS_MEL2c", style=filled, fillcolor=white];
            MEL2_13 -> MEL2_12;
            MEL2_14 [shape=box, label="SS_MEL2d", style=filled, fillcolor=white];
            MEL2_14 -> MEL2_12;
            }
        }
    `,
    `digraph G_Duty {
        rankdir=BT
        overlap=false
        compound=true
        ranksep=0.5
        subgraph clusterSS_MEL2a {
            label = "SS_MEL2a"
            MEL2a [shape=triangle, orientation=0, style=filled, fillcolor=lightblue, label="MEL2a", tooltip="2.a) You must cause the modified files to carry prominent notices stating that you changed the files and the date of any change."];
            MEL2a_15 [shape=box, label="[you caused] the modified\n files to carry prominent\n notices stating that you\n changed the files and the\n date of any change"];
            MEL2a_15 -> MEL2a[label="satisfies"];
            MEL2a_16 [shape=box, label="[you intend to modify the\n Program, and copy and\n distribute such modifications]"];
            MEL2a_16 -> MEL2a[label="activates"];
            }
        }
    `,
    `digraph G_Duty {
        rankdir=BT
        overlap=false
        compound=true
        ranksep=0.5
        subgraph clusterSS_MEL2b {
            label = "SS_MEL2b"
            MEL2b [shape=triangle, orientation=0, style=filled, fillcolor=lightblue, label="MEL2b", tooltip="2.b) You must cause any work that you distribute or publish, that in whole or in part contains or is derived from the Program or any part thereof, to be licensed as a whole at no charge to all third parties under the terms of this License."];
            MEL2b_17 [shape=box, label="[you caused] any work that you\n distribute or publish, that\n in whole or in part\n contains or is derived from\n the Program or any part\n thereof, to be licensed as\n a whole at no charge to all\n third parties under the\n terms of this License"];
            MEL2b_17 -> MEL2b[label="satisfies"];
            MEL2b_18 [shape=box, label="[you intend to modify the\n Program, and copy and\n distribute such modifications]"];
            MEL2b_18 -> MEL2b[label="activates"];
            }
        }
    `,
    `digraph G_Duty {
        rankdir=BT
        overlap=false
        compound=true
        ranksep=0.5
        subgraph clusterSS_MEL2c {
            label = "SS_MEL2c"
            MEL2c [shape=triangle, orientation=0, style=filled, fillcolor=lightblue, label="MEL2c", tooltip="2.c) If the modified program normally reads commands interactively when run, you must cause it, when started running for such interactive use in the most ordinary way, to print or display an announcement including an appropriate copyright notice and a notice that there is no warranty (or else, saying that you provide a warranty) and that users may redistribute the program under these conditions, and telling the user how to view a copy of this License. (Exception: if the Program itself is interactive but does not normally print such an announcement, your work based on the Program is not required to print an announcement.)"];
            MEL2c_19 [shape=box, label="[you caused the modified\n program] ... to print or\n display an announcement\n including an appropriate\n copyright notice and a\n notice that there is no\n warranty (or else, saying\n that you provide a\n warranty) and that users\n may redistribute the\n program under these\n conditions, and telling the\n user how to view a copy of this License"];
            MEL2c_19 -> MEL2c[label="satisfies"];
            MEL2c_20 [shape=box, label="and", style=filled, fillcolor=grey];
            MEL2c_20 -> MEL2c[label="activates"];
            MEL2c_21 [shape=box, label="[you intend to modify the\n Program, and copy and\n distribute such modifications]"];
            MEL2c_21 -> MEL2c_20;
            MEL2c_22 [shape=box, label="or", style=filled, fillcolor=grey];
            MEL2c_22 -> MEL2c_20;
            MEL2c_23 [shape=box, label="the modified program normally\n reads commands\n interactively when run"];
            MEL2c_23 -> MEL2c_22;
            MEL2c_24 [shape=box, label="not", style=filled, fillcolor=grey];
            MEL2c_24 -> MEL2c_22;
            MEL2c_25 [shape=box, label="[original] Program itself is\n interactive but does not\n normally print such an\n announcement"];
            MEL2c_25 -> MEL2c_24;
            }
        }
    `,
    `digraph G_Duty {
        rankdir=BT
        overlap=false
        compound=true
        ranksep=0.5
        subgraph clusterSS_MEL2d {
            label = "SS_MEL2d"
            MEL2d [shape=triangle, orientation=0, style=filled, fillcolor=lightblue, label="MEL2d", tooltip="2.d) If the Program as you received it is intended to interact with users through a computer network and if, in the version you received, any user interacting with the Program was given the opportunity to request transmission to that user of the Program's complete source code, you must not remove that facility from your modified version of the Program or work based on the Program, and must offer an equivalent opportunity for all users interacting with your Program through a computer network to request immediate transmission by HTTP of the complete source code of your modified version or other derivative work."];
            MEL2d_26 [shape=box, label="and", style=filled, fillcolor=grey];
            MEL2d_26 -> MEL2d[label="satisfies"];
            MEL2d_27 [shape=box, label="not", style=filled, fillcolor=grey];
            MEL2d_27 -> MEL2d_26;
            MEL2d_28 [shape=box, label="[you removed] that facility\n [to request transmission of\n source code] from your\n modified version of the\n Program or work based on\n the Program"];
            MEL2d_28 -> MEL2d_27;
            MEL2d_29 [shape=box, label="[you offered] an equivalent\n opportunity for all users\n interacting with your\n Program through a computer\n network to request\n immediate transmission by\n HTTP of the complete source\n code of your modified\n version or other derivative work"];
            MEL2d_29 -> MEL2d_26;
            MEL2d_30 [shape=box, label="and", style=filled, fillcolor=grey];
            MEL2d_30 -> MEL2d[label="activates"];
            MEL2d_31 [shape=box, label="[you intend to modify the\n Program, and copy and\n distribute such modifications]"];
            MEL2d_31 -> MEL2d_30;
            MEL2d_32 [shape=box, label="and", style=filled, fillcolor=grey];
            MEL2d_32 -> MEL2d_30;
            MEL2d_33 [shape=box, label="the [original] Program as you\n received it is intended to\n interact with users through\n a computer network"];
            MEL2d_33 -> MEL2d_32;
            MEL2d_34 [shape=box, label="in the version you received,\n any user interacting with\n the [original] Program was\n given the opportunity to\n request transmission to\n that user of the Program's\n complete source code"];
            MEL2d_34 -> MEL2d_32;
            }
        }
    `
    
]

//manual mapping of statement name to dot index in mel array
var mapping = {
  "MEL1":0,
  "MEL1a":1,
  "MEL1b":2,
  "MEL1c":3,
  "MEL1d":4,
  "MEL2":5,
  "MEL2a":6,
  "MEL2b":7,
  "MEL2c":8,
  "MEL2d":9
  
};
var panZoomGraph = null;
var jsonInput = [];
var jsonState = [];
var polygon_top = null;
var jsonInput_text = [];
var mel_id = [
    {"id": "MEL2_1", "text": "[you modified] your copy or" }, { "id": "MEL2a_15", "text": "[you caused] the modified" }, 
     { "id": "MEL2a_16", "text": "[you intend to modify the" }, 
     { "id": "MEL2b_17", "text": "[you caused] any work that you" }, 
     {"id": "MEL2b_18", "text": "[you intend to modify the" }, 
     { "id": "MEL2c_19", "text": "[you caused the modified" }, 
     { "id": "MEL2c_21", "text": "[you intend to modify the" }, 
     { "id": "MEL2c_23", "text": "the modified program normally" }, 
     { "id": "MEL2c_25", "text": "[original] Program itself is" }, 
     { "id": "MEL2d_28", "text": "[you removed] that facility" }, 
     {"id": "MEL2d_29", "text": "[you offered] an equivalent" }, 
     { "id": "MEL2d_31", "text": "[you intend to modify the" }, 
     { "id": "MEL2d_33", "text": "the [original] Program as you" }, 
     { "id": "MEL2d_34", "text": "in the version you received," }, 
     { "id": "MEL1_35", "text": "[you copied and distributed]" }, 
     { "id": "MEL1a_41", "text": "[you conspicuously and" }, 
     { "id": "MEL1a_43", "text": "[you intend to copy and" }, 
     { "id": "MEL1a_44", "text": "[you intend to modify the" }, 
     { "id": "MEL1b_45", "text": "[you kept intact] all the" }, 
     { "id": "MEL1b_47", "text": "[you intend to copy and" }, 
     { "id": "MEL1b_48", "text": "[you intend to modify the" }, 
     { "id": "MEL1c_49", "text": "[you gave] any other" }, 
     { "id": "MEL1c_51", "text": "[you intend to copy and" }, 
     { "id": "MEL1c_52", "text": "[you intend to modify the" }, 
     { "id": "MEL1d_54", "text": "[You charged] a fee for the" }, 
     { "id": "MEL1d_55", "text": "[You offered] at your option" }, 
     { "id": "MEL1d_57", "text": "[you intend to copy and" }, 
     { "id": "MEL1d_58", "text": "[you intend to modify the" }
    ]

/**
  * Create JSON object to use for tree view 
  */


//Build json object from DOM element here
var myJSONArray= [

   

    {
        "id":"MEL1",   
        "text": "MEL1",
        "icon":"/static/icon/right_blue.ico",
        "state":
        {
            "opened": true,
            
        },
        "children":[
            {
                "id":"MEL1a",   
                "text": "MEL1a",
                "icon":"/static/icon/duty_blue.ico",
        
            },
            {
                "id":"MEL1b",
                "text": "MEL1b",
                "icon":"/static/icon/duty_blue.ico",
            },
            {
                "id":"MEL1c",
                "text": "MEL1c",
                "icon":"/static/icon/duty_blue.ico",
            },
            {
                "id":"MEL1d",
                "text": "MEL1d",
                "icon":"/static/icon/right_blue.ico",
            }
        ]
        
       
    },
    {
        "id":"MEL2",   
        "text": "MEL2",
        "icon":"/static/icon/right_blue.ico",
        "state":
        {
            "opened": true,
            
        },
        "children":[
            {
                "id":"MEL2a",   
                "text": "MEL2a",
                "icon":"/static/icon/duty_blue.ico",
        
            },
            {
                "id":"MEL2b",
                "text": "MEL2b",
                "icon":"/static/icon/duty_blue.ico",
            },
            {
                "id":"MEL2c",
                "text": "MEL2c",
                "icon":"/static/icon/duty_blue.ico",
            },
            {
                "id":"MEL2d",
                "text": "MEL2d",
                "icon":"/static/icon/duty_blue.ico",
            }
        ]
        
       
    }
   
    

];



function updateJSON(id, status,_text) {

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
            item["text_first_line"] = _text;
            jsonInput_text.push(item);
            $.each(mel_id,function(_id,_obj_) {
               
                if(_text == _obj_.text && id != _obj_.id){
                    
                    item = {}
                    item["id"] = _obj_.id
                    item["satisfied"]=status
                    jsonInput.push(item)
                    item["text_first_line"] = _text
                    jsonInput_text.push(item)
                }
            })
            console.log("jsonInput" +JSON.stringify(jsonInput) +"\n")
        }

        //update jsoninputtext
        $.each(jsonInput_text, function(key,val){
            if(val.text_first_line == _text){
                val.satisfied = status;
            }
        });

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

  // console.log(JSON.stringify(jsonInput));
  console.log(JSON.stringify(jsonInput_text));

}

function updateTree(data){

    $.each(data, function(key,val){
        if(val.id != null && !(val.id.startsWith('cluster'))){

            if(val.compliance == "COM"){
                //console.log(val.id + " "+ val.compliance)
                $('#data').jstree(true).set_icon(val.id,"/static/icon/duty_green.ico")
             }else if (val.compliance == "EXR"){
               // console.log(val.id + " "+ val.compliance)
                $('#data').jstree(true).set_icon(val.id,"/static/icon/right_green.ico")
             }

             if(val.compliance == "VIO"){
               $('#data').jstree(true).set_icon(val.id,"/static/icon/duty_red.ico")
               // console.log(val.id + " "+ val.compliance)

             }else if(val.compliance == "NEX"){
                 //console.log(val.id + " "+ val.compliance)
               $('#data').jstree(true).set_icon(val.id,"/static/icon/right_red.ico")
             }

             if(val.compliance == "INC"){
                 //console.log(val.id + " "+ val.compliance)
                 var icon = $('#data').jstree(true).get_node(val.id).original.icon;
                 //console.log(icon)
                 $('#data').jstree(true).set_icon(val.id,icon)
                 
             }



        }

    })
}

function updateSVG (data,data2){
    //console.log(data2)

    $.each(data, function(key, val) {
        if (val.id != null && !(val.id.startsWith('cluster'))) {
            $("title").each(function(index, element) {
              if ($(this).text() == val.id){
                 polygon = $(this).parent().children("polygon").first();
                 if (val.satisfied != null) {
                  
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

    $.each(data2, function(key, val) {

        if (val.id != null && !(val.id.startsWith('cluster'))) {
            $("text").each(function(key,element){
                
                if($(this).text() == val.text_first_line){
                    
                    var _twin_id = $(this).parent().children("title").first().text();
                    var _text_ = $(this).text()
                    
                    polygon = $(this).parent().children("polygon").first();
                    if(val.satisfied == "SF"){
                        polygon.attr('style', "fill:rgba(205, 83, 96, 0.5)"); //red
                        updateJSON(_twin_id,"SF",_text_)
                    
                    }else {
                        if (val.satisfied == "ST"){
                          polygon.attr('style', "fill:rgba(87, 188, 144, 0.5)"); //green
                          updateJSON(_twin_id,"ST",_text_)
                          
                        } else {
                          if (val.satisfied == "SU"){
                            polygon.attr('style', "fill:#FFFFFF"); //yellow
                            updateJSON(_twin_id,"SU",_text_)
                          }
                        }
                      }
                      

                }
            })

            $("title").each(function(index, element) {
              if ($(this).text() == val.id){
                 polygon = $(this).parent().children("polygon").first();
                 if (val.satisfied != null) {
                    textNode = $(this).parent().children("text").first();
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
           // console.log(_text);
            
          
        }else {
          _id = $(event.target).parent().parent().children("title").first().text();
          
          _text = $(event.target).parent().parent().children("text").first().text();
          
            //console.log(_id);
           //console.log(_text);
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
                   
                    updateJSON(_id, "SF",_text);
                    
        
                } else if(polygon.attr('style') == "fill:rgb(205, 83, 96,0.5)") { //if red  then turn yellow

                        polygon.attr('style', "fill:#FFFFFF"); //Yellow

                      //updateJSON(_id, "SU");
                        updateJSON(_id, "SU",_text);

             
                    } else { //turn green

                        polygon.attr('style', "fill:rgb(87, 188, 144,.5)"); //Green
                    
                        updateJSON(_id, "ST",_text);
                        //updateJSON(_id, "ST");
                   
                    }

        }
            


        }
        

       
    });

   

    
}

function genGraph(stat){

    $('#data').jstree().deselect_all()

    $('#data').jstree(true).select_node(stat);

    $(document).ready(function(){

        
    })
    if($('#graph svg').length){
        $('#graph svg').remove();
    }

    
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
        .dot(mel[dot_index])
        .zoom(false)
        .render(function () {
            graph = $("svg")

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
                       // console.log(prevColor);
                        
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
                       // console.log(prevColor);
                        
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
            updateSVG(jsonState,jsonInput_text);
            //updateSVG(jsonState,jsonInput);
            
            
        })
/**
* Highlight the statement corresponding to generated graph
*/

$(".statement,.preamble,.appendix").css('background-color','unset')

var color = 'rgba(173, 216, 230, 0.5)' ;
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
        $("#play").prop("disabled",true);
        $("#loader").css("display", "block");
        
    });
    $(document).ajaxComplete(function(){
        $("#play").prop("disabled",false);
        $("#loader").css("display", "none");
        
    });

    
    $("#play").click(function(){

            
            console.log("FROM ME:"+JSON.stringify(jsonInput_text))

            // //query normserver
            accessURL = "http://localhost:4567/assert/8/1"
            $.ajax(accessURL, {
                method: 'POST',
                data: JSON.stringify(jsonInput_text),
                crossDomain: true,
                cache:true
            }).then(function(data) {
                console.log("FROM SERVER"+JSON.stringify(data));
                jsonState = data
                updateSVG(jsonState);
                updateTree(jsonState)
                
                //alert("Done! Review results")
                
            });
        

    });

    //read document format and create an array with the data extracted from the license text body

    $('#data').jstree({

        'core': {
            'data': myJSONArray
        },
        // "plugins":["checkbox"]
        "plugins":["wholerow"]
        
    });

    //display the text of the selected node. Will pass this node to generate graph at some point. However, name need to be consistent with genGraph needs.

    $('#data').bind("click.jstree", function (e, data) {

        //console.log($('#data').jstree('get_selected',true)[0].id)

        
       

        if ($('#data').jstree('get_selected',true)[0].id.startsWith('MEL')) {
            
            genGraph($('#data').jstree('get_selected',true)[0].id)
        }else{
            //console.log("."+$('#data').jstree('get_selected',true)[0].id.toLowerCase())
            $(".statement,.preamble,.appendix").css('background-color','unset')
            
            $("."+$('#data').jstree('get_selected',true)[0].id.toLowerCase()).css('background-color','#add8e6').focus()
           
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

   
    

  
})



