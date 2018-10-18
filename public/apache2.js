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
var apache2 = [
    `digraph G_Right {
        rankdir=BT
        overlap=false
        compound=true
        ranksep=0.5
        subgraph clusterSS_Apache2 {
            label = "SS_Apache2"
            Apache2 [shape=triangle, orientation=270, style=filled, fillcolor=lightblue, label="Apache2", tooltip="Grant of Copyright License. Subject to the terms and conditions of this License, each Contributor hereby grants to You a perpetual, worldwide, non-exclusive, no-charge, royalty-free, irrevocable copyright license to reproduce, prepare Derivative Works of, publicly display, publicly perform, sublicense, and distribute the Work and such Derivative Works in Source or Object form."];
            Apache2_42 [shape=box, label="or", style=filled, fillcolor=grey];
            Apache2_42 -> Apache2[label="satisfies"];
            Apache2_43 [shape=box, label="or", style=filled, fillcolor=grey];
            Apache2_43 -> Apache2_42;
            Apache2_44 [shape=box, label="or", style=filled, fillcolor=grey];
            Apache2_44 -> Apache2_43;
            Apache2_45 [shape=box, label="or", style=filled, fillcolor=grey];
            Apache2_45 -> Apache2_44;
            Apache2_46 [shape=box, label="or", style=filled, fillcolor=grey];
            Apache2_46 -> Apache2_45;
            Apache2_47 [shape=box, label="[You reproduced] the Work and\n such Derivative Works in\n Source or Object form"];
            Apache2_47 -> Apache2_46;
            Apache2_48 [shape=box, label="[You prepared Derivative Works\n of] the Work and such\n Derivative Works in Source\n or Object form" ];
            Apache2_48 -> Apache2_46;
            Apache2_49 [shape=box, label="[You publicly displayed] the\n Work and such Derivative\n Works in Source or Object form" ];
            Apache2_49 -> Apache2_45;
            Apache2_50 [shape=box, label="[You publicly performed] the\n Work and such Derivative\n Works in Source or Object form" ];
            Apache2_50 -> Apache2_44;
            Apache2_51 [shape=box, label="[You sublicenced] the Work and\n such Derivative Works in\n Source or Object form"];
            Apache2_51 -> Apache2_43;
            Apache2_52 [shape=box, label="[You distributed] the Work and\n such Derivative Works in\n Source or Object form"];
            Apache2_52 -> Apache2_42;
            Apache2_53 [shape=box, label="and", style=filled, fillcolor=grey];
            Apache2_53 -> Apache2[label="activates"];
            Apache2_54 [shape=box, label="SS_Apache4", style=filled, fillcolor=white];
            Apache2_54 -> Apache2_53;
            Apache2_55 [shape=box, label="and", style=filled, fillcolor=grey];
            Apache2_55 -> Apache2_53;
            Apache2_56 [shape=box, label="and", style=filled, fillcolor=grey];
            Apache2_56 -> Apache2_55;
            Apache2_57 [shape=box, label="and", style=filled, fillcolor=grey];
            Apache2_57 -> Apache2_56;
            Apache2_58 [shape=box, label="SS_Apache5", style=filled, fillcolor=white];
            Apache2_58 -> Apache2_57;
            Apache2_59 [shape=box, label="and", style=filled, fillcolor=grey];
            Apache2_59 -> Apache2_57;
            Apache2_60 [shape=box, label="SS_Apache6", style=filled, fillcolor=white];
            Apache2_60 -> Apache2_59;
            Apache2_61 [shape=box, label="SS_Apache7", style=filled, fillcolor=white];
            Apache2_61 -> Apache2_59;
            Apache2_62 [shape=box, label="SS_Apache8", style=filled, fillcolor=white];
            Apache2_62 -> Apache2_56;
            Apache2_63 [shape=box, label="SS_Apache9", style=filled, fillcolor=white];
            Apache2_63 -> Apache2_55;
            }
        }
    `,
    `digraph G_Right {
        rankdir=BT
        overlap=false
        compound=true
        ranksep=0.5
        subgraph clusterSS_Apache3 {
            label = "SS_Apache3"
            Apache3 [shape=triangle, orientation=270, style=filled, fillcolor=lightblue, label="Apache3", tooltip="Grant of Patent License. Subject to the terms and conditions of this License, each Contributor hereby grants to You a perpetual, worldwide, non-exclusive, no-charge, royalty-free, irrevocable (except as stated in this section) patent license to make, have made, use, offer to sell, sell, import, and otherwise transfer the Work, where such license applies only to those patent claims licensable by such Contributor that are necessarily infringed by their Contribution(s) alone or by combination of their Contribution(s) with the Work to which such Contribution(s) was submitted.If You institute patent litigation against any entity (including a cross-claim or counterclaim in a lawsuit) alleging that the Work or a Contribution incorporated within the Work constitutes direct or contributory patent infringement, then any patent licenses granted to You under this License for that Work shall terminate as of the date such litigation is filed."];
            Apache3_64 [shape=box, label="and", style=filled, fillcolor=grey];
            Apache3_64 -> Apache3[label="satisfies"];
            Apache3_65 [shape=box, label="or", style=filled, fillcolor=grey];
            Apache3_65 -> Apache3_64;
            Apache3_66 [shape=box, label="or", style=filled, fillcolor=grey];
            Apache3_66 -> Apache3_65;
            Apache3_67 [shape=box, label="or", style=filled, fillcolor=grey];
            Apache3_67 -> Apache3_66;
            Apache3_68 [shape=box, label="or", style=filled, fillcolor=grey];
            Apache3_68 -> Apache3_67;
            Apache3_69 [shape=box, label="[You made , have made] the\n Work "];
            Apache3_69 -> Apache3_68;
            Apache3_70 [shape=box, label="[You used] the Work"];
            Apache3_70 -> Apache3_68;
            Apache3_71 [shape=box, label="[You offered to sell, sold]\n the Work"];
            Apache3_71 -> Apache3_67;
            Apache3_72 [shape=box, label="[You imported] the Work"];
            Apache3_72 -> Apache3_66;
            Apache3_73 [shape=box, label="[You transfered] the Work"];
            Apache3_73 -> Apache3_65;
            Apache3_74 [shape=box, label="not", style=filled, fillcolor=grey];
            Apache3_74 -> Apache3_64;
            Apache3_75 [shape=box, label="[You instituted] patent\n litigation against any\n entity (including a\n cross-claim or counterclaim\n in a lawsuit) alleging that\n the Work or a Contribution\n incorporated within the\n Work constitutes direct or\n contributory patent infringement"];
            Apache3_75 -> Apache3_74;
            Apache3_76 [shape=box, label="and", style=filled, fillcolor=grey];
            Apache3_76 -> Apache3[label="activates"];
            Apache3_77 [shape=box, label="SS_Apache4", style=filled, fillcolor=white];
            Apache3_77 -> Apache3_76;
            Apache3_78 [shape=box, label="and", style=filled, fillcolor=grey];
            Apache3_78 -> Apache3_76;
            Apache3_79 [shape=box, label="and", style=filled, fillcolor=grey];
            Apache3_79 -> Apache3_78;
            Apache3_80 [shape=box, label="and", style=filled, fillcolor=grey];
            Apache3_80 -> Apache3_79;
            Apache3_81 [shape=box, label="SS_Apache9", style=filled, fillcolor=white];
            Apache3_81 -> Apache3_80;
            Apache3_82 [shape=box, label="and", style=filled, fillcolor=grey];
            Apache3_82 -> Apache3_80;
            Apache3_83 [shape=box, label="SS_Apache6", style=filled, fillcolor=white];
            Apache3_83 -> Apache3_82;
            Apache3_84 [shape=box, label="SS_Apache7", style=filled, fillcolor=white];
            Apache3_84 -> Apache3_82;
            Apache3_85 [shape=box, label="SS_Apache8", style=filled, fillcolor=white];
            Apache3_85 -> Apache3_79;
            Apache3_86 [shape=box, label="SS_Apache5", style=filled, fillcolor=white];
            Apache3_86 -> Apache3_78;
            }
        }
    `,
    `digraph G_Right {
        rankdir=BT
        overlap=false
        compound=true
        ranksep=0.5
        subgraph clusterSS_Apache4 {
            label = "SS_Apache4"
            Apache4 [shape=triangle, orientation=270, style=filled, fillcolor=lightblue, label="Apache4", tooltip="4. Redistribution. You may reproduce and distribute copies of the Work or Derivative Works thereof in any medium, with or without modifications, and in Source or Object form, provided that You meet the following conditions:"];
            Apache4_1 [shape=box, label="[You reproduced and\n distributed] copies of the\n Work or Derivative Works\n thereof in any medium, with\n or without modifications,\n and in Source or Object form"];
            Apache4_1 -> Apache4[label="satisfies"];
            Apache4_2 [shape=box, label="and", style=filled, fillcolor=grey];
            Apache4_2 -> Apache4[label="activates"];
            Apache4_3 [shape=box, label="SS_Apache4a", style=filled, fillcolor=white];
            Apache4_3 -> Apache4_2;
            Apache4_4 [shape=box, label="and", style=filled, fillcolor=grey];
            Apache4_4 -> Apache4_2;
            Apache4_5 [shape=box, label="SS_Apache4b", style=filled, fillcolor=white];
            Apache4_5 -> Apache4_4;
            Apache4_6 [shape=box, label="and", style=filled, fillcolor=grey];
            Apache4_6 -> Apache4_4;
            Apache4_7 [shape=box, label="SS_Apache4c", style=filled, fillcolor=white];
            Apache4_7 -> Apache4_6;
            Apache4_8 [shape=box, label="SS_Apache4d", style=filled, fillcolor=white];
            Apache4_8 -> Apache4_6;
            }
        }
    `,
    `digraph G_Duty {
        rankdir=BT
        overlap=false
        compound=true
        ranksep=0.5
        subgraph clusterSS_Apache4a {
            label = "SS_Apache4a"
            Apache4a [shape=triangle, orientation=0, style=filled, fillcolor=lightblue, label="Apache4a", tooltip="4(a) You must give any other recipients of the Work or Derivative Works a copy of this License;"];
            Apache4a_9 [shape=box, label="[You gave] other recipients of\n the Work or Derivative\n Works a copy of this License"];
            Apache4a_9 -> Apache4a[label="satisfies"];
            Apache4a_10 [shape=box, label="[You intend to reproduce and\n distribute copies of the\n Work or Derivative Works]"];
            Apache4a_10 -> Apache4a[label="activates"];
            }
        }
    `,
    `digraph G_Duty {
        rankdir=BT
        overlap=false
        compound=true
        ranksep=0.5
        subgraph clusterSS_Apache4b {
            label = "SS_Apache4b"
            Apache4b [shape=triangle, orientation=0, style=filled, fillcolor=lightblue, label="Apache4b", tooltip="4(b) You must cause any modified files to carry prominent notices stating that You changed the files;"];
            Apache4b_11 [shape=box, label="[You caused] any modified\n files to carry prominent\n notices stating that You\n changed the files"];
            Apache4b_11 -> Apache4b[label="satisfies"];
            Apache4b_12 [shape=box, label="[You intend to reproduce and\n distribute copies of the\n Work or Derivative Works]"];
            Apache4b_12 -> Apache4b[label="activates"];
            }
        }
    `,
    `digraph G_Duty {
        rankdir=BT
        overlap=false
        compound=true
        ranksep=0.5
        subgraph clusterSS_Apache4c {
            label = "SS_Apache4c"
            Apache4c [shape=triangle, orientation=0, style=filled, fillcolor=lightblue, label="Apache4c", tooltip="4(c) You must retain, in the Source form of any Derivative Works that You distribute, all copyright, patent, trademark, and attribution notices from the Source form of the Work, excluding those notices that do not pertain to any part of the Derivative Works;"];
            Apache4c_13 [shape=box, label="and", style=filled, fillcolor=grey];
            Apache4c_13 -> Apache4c[label="satisfies"];
            Apache4c_14 [shape=box, label="[You retained], in the Source\n form of any Derivative\n Works that You distribute,\n all copyright, patent,\n trademark, and attribution\n notices from the Source\n form of the Work"];
            Apache4c_14 -> Apache4c_13;
            Apache4c_15 [shape=box, label="not", style=filled, fillcolor=grey];
            Apache4c_15 -> Apache4c_13;
            Apache4c_16 [shape=box, label="[You retained] those notices\n that do not pertain to any\n part of the Derivative Works"];
            Apache4c_16 -> Apache4c_15;
            Apache4c_17 [shape=box, label="[You intend to reproduce and\n distribute copies of the\n Work or Derivative Works]"];
            Apache4c_17 -> Apache4c[label="activates"];
            }
        }
    `,
    `digraph G_Duty {
        rankdir=BT
        overlap=false
        compound=true
        ranksep=0.5
        subgraph clusterSS_Apache4d {
            label = "SS_Apache4d"
            Apache4d [shape=triangle, orientation=0, style=filled, fillcolor=lightblue, label="Apache4d", tooltip="4(d) If the Work includes a 'NOTICE' text file as part of its distribution, then any Derivative Works that You distribute must include a readable copy of the attribution notices contained within such NOTICE file, excluding those notices that do not pertain to any part of the Derivative Works, in at least one of the following places: within a NOTICE text file distributed as part of the Derivative Works; within the Source form or documentation, if provided along with the Derivative Works; or, within a display generated by the Derivative Works, if and wherever such third-party notices normally appear. The contents of the NOTICE file are for informational purposes only and do not modify the License. You may add Your own attribution notices within Derivative Works that You distribute, alongside or as an addendum to the NOTICE text from the Work, provided that such additional attribution notices cannot be construed as modifying the License."];
            Apache4d_18 [shape=box, label="and", style=filled, fillcolor=grey];
            Apache4d_18 -> Apache4d[label="satisfies"];
            Apache4d_19 [shape=box, label="and", style=filled, fillcolor=grey];
            Apache4d_19 -> Apache4d_18;
            Apache4d_20 [shape=box, label="[You included] a readable copy\n of the attribution notices\n contained within such\n NOTICE file"];
            Apache4d_20 -> Apache4d_19;
            Apache4d_21 [shape=box, label="or", style=filled, fillcolor=grey];
            Apache4d_21 -> Apache4d_19;
            Apache4d_22 [shape=box, label="[(in notice file) You included\n the attribution notices]\n within a NOTICE text file\n distributed as part of the\n Derivative Works"];
            Apache4d_22 -> Apache4d_21;
            Apache4d_23 [shape=box, label="or", style=filled, fillcolor=grey];
            Apache4d_23 -> Apache4d_21;
            Apache4d_24 [shape=box, label="and", style=filled, fillcolor=grey];
            Apache4d_24 -> Apache4d_23;
            Apache4d_25 [shape=box, label="[(in source) in You included\n the attribution notices]\n within the Source form or\n documentation"];
            Apache4d_25 -> Apache4d_24;
            Apache4d_26 [shape=box, label="source [is] provided along\n with the Derivative Works"];
            Apache4d_26 -> Apache4d_24;
            Apache4d_27 [shape=box, label="and", style=filled, fillcolor=grey];
            Apache4d_27 -> Apache4d_23;
            Apache4d_28 [shape=box, label="[(in display) You included the\n attribution notices] within\n a display generated by the\n Derivative Works ...\n wherever such third-party\n notices normally appear"];
            Apache4d_28 -> Apache4d_27;
            Apache4d_29 [shape=box, label="third-party [attribution]\n notices normally appear [in\n display]"];
            Apache4d_29 -> Apache4d_27;
            Apache4d_30 [shape=box, label="[You excluded] those notices\n that do not pertain to any\n part of the Derivative Works"];
            Apache4d_30 -> Apache4d_18;
            Apache4d_31 [shape=box, label="and", style=filled, fillcolor=grey];
            Apache4d_31 -> Apache4d[label="activates"];
            Apache4d_32 [shape=box, label="[You intend to reproduce and\n distribute copies of the\n Work or Derivative Works]"];
            Apache4d_32 -> Apache4d_31;
            Apache4d_33 [shape=box, label="the Work includes a 'NOTICE'\n text file as part of its\n distribution"];
            Apache4d_33 -> Apache4d_31;
            }
        }
    `,
    `digraph G_Right {
        rankdir=BT
        overlap=false
        compound=true
        ranksep=0.5
        subgraph clusterSS_Apache4dAddAttrib {
            label = "SS_Apache4dAddAttrib"
            Apache4dAddAttrib [shape=triangle, orientation=270, style=filled, fillcolor=lightblue, label="Apache4dAddAttrib", tooltip="You may add Your own attribution notices within Derivative Works that You distribute, alongside or as an addendum to the NOTICE text from the Work, provided that such additional attribution notices cannot be construed as modifying the License."];
            Apache4dAddAttrib_34 [shape=box, label="[You added] Your own\n attribution notices within\n Derivative Works that You\n distribute, alongside or as\n an addendum to the NOTICE\n text from the Work"];
            Apache4dAddAttrib_34 -> Apache4dAddAttrib[label="satisfies"];
            Apache4dAddAttrib_35 [shape=box, label="and", style=filled, fillcolor=grey];
            Apache4dAddAttrib_35 -> Apache4dAddAttrib[label="activates"];
            Apache4dAddAttrib_36 [shape=box, label="SS_Apache4d", style=filled, fillcolor=white];
            Apache4dAddAttrib_36 -> Apache4dAddAttrib_35;
            Apache4dAddAttrib_37 [shape=box, label="[Your own] additional\n attribution notices cannot\n be construed as modifying\n the License"];
            Apache4dAddAttrib_37 -> Apache4dAddAttrib_35;
            }
        }
    `,
    `digraph G_Right {
        rankdir=BT
        overlap=false
        compound=true
        ranksep=0.5
        subgraph clusterSS_Apache4dAddCopyright {
            label = "SS_Apache4dAddCopyright"
            Apache4dAddCopyright [shape=triangle, orientation=270, style=filled, fillcolor=lightblue, label="Apache4dAddCopyright", tooltip="You may add Your own copyright statement to Your modifications and may provide additional or different license terms and conditions for use, reproduction, or distribution of Your modifications, or for any such Derivative Works as a whole, provided Your use, reproduction, and distribution of the Work otherwise complies with the conditions stated in this License."];
            Apache4dAddCopyright_38 [shape=box, label="or", style=filled, fillcolor=grey];
            Apache4dAddCopyright_38 -> Apache4dAddCopyright[label="satisfies"];
            Apache4dAddCopyright_39 [shape=box, label="[You added] Your own copyright\n statement to Your\n modifications"];
            Apache4dAddCopyright_39 -> Apache4dAddCopyright_38;
            Apache4dAddCopyright_40 [shape=box, label="[You provided] additional or\n different license terms and\n conditions for use,\n reproduction, or\n distribution of Your\n modifications, or for any\n such Derivative Works as a whole"];
            Apache4dAddCopyright_40 -> Apache4dAddCopyright_38;
            Apache4dAddCopyright_41 [shape=box, label="SS_Apache4", style=filled, fillcolor=white];
            Apache4dAddCopyright_41 -> Apache4dAddCopyright[label="activates"];
            }
        }
    `,
    `digraph G_Duty {
        rankdir=BT
        overlap=false
        compound=true
        ranksep=0.5
        subgraph clusterSS_Apache5 {
            label = "SS_Apache5"
            Apache5 [shape=triangle, orientation=0, style=filled, fillcolor=lightblue, label="Apache5", tooltip="Submission of Contributions. Unless You explicitly state otherwise, any Contribution intentionally submitted for inclusion in the Work by You to the Licensor shall be under the terms and conditions of this License, without any additional terms or conditions. Notwithstanding the above, nothing herein shall supersede or modify the terms of any separate license agreement you may have executed with Licensor regarding such Contributions."];
            Apache5_87 [shape=box, label="and", style=filled, fillcolor=grey];
            Apache5_87 -> Apache5[label="satisfies"];
            Apache5_88 [shape=box, label="or", style=filled, fillcolor=grey];
            Apache5_88 -> Apache5_87;
            Apache5_89 [shape=box, label="[Any Contribution\n intentionally submitted for\n inclusion in the Work by\n You to the Licensor is]\n under the terms and\n conditions of this License,\n without any additional\n terms or conditions"];
            Apache5_89 -> Apache5_88;
            Apache5_90 [shape=box, label="[You explicitly stated] terms\n and conditions"];
            Apache5_90 -> Apache5_88;
            Apache5_91 [shape=box, label="[Nothing herein supersede ]or\n modify the terms of any\n separate license agreement\n you may have executed with\n Licensor regarding such\n Contributions."];
            Apache5_91 -> Apache5_87;
            Apache5_92 [shape=box, label="[You intend to submit] a Work for\n Contribution"];
            Apache5_92 -> Apache5[label="activates"];
            }
        }
    `,
    `digraph G_Duty {
        rankdir=BT
        overlap=false
        compound=true
        ranksep=0.5
        subgraph clusterSS_Apache6 {
            label = "SS_Apache6"
            Apache6 [shape=triangle, orientation=0, style=filled, fillcolor=lightblue, label="Apache6", tooltip="Trademarks. This License does not grant permission to use the trade names, trademarks, service marks, or product names of the Licensor, except as required for reasonable and customary use in describing the origin of the Work and reproducing the content of the NOTICE file"];
            Apache6_93 [shape=box, label="or", style=filled, fillcolor=grey];
            Apache6_93 -> Apache6[label="satisfies"];
            Apache6_94 [shape=box, label="not", style=filled, fillcolor=grey];
            Apache6_94 -> Apache6_93;
            Apache6_95 [shape=box, label="[You used trade names,\n trademarks, service marks,\n or product names of the\n Licensor]"];
            Apache6_95 -> Apache6_94;
            Apache6_96 [shape=box, label="[As required ]for reasonable\n and customary use in\n describing the origin of\n the Work and reproducing\n the content of the NOTICE\n file [You used] trade\n names, trademarks, service\n marks, or product names of the Licensor"];
            Apache6_96 -> Apache6_93;
            Apache6_97 [shape=box, label="You intend to exercice permissions\n granted by this License"];
            Apache6_97 -> Apache6[label="activates"];
            }
        }
    `,
    `digraph G_Duty {
        rankdir=BT
        overlap=false
        compound=true
        ranksep=0.5
        subgraph clusterSS_Apache7 {
            label = "SS_Apache7"
            Apache7 [shape=triangle, orientation=0, style=filled, fillcolor=lightblue, label="Apache7", tooltip="Disclaimer of Warranty. Unless required by applicable law or agreed to in writing, Licensor provides the Work (and each Contributor provides its Contributions) on an 'AS IS' BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied, including, without limitation, any warranties or conditions of TITLE, NON-INFRINGEMENT, MERCHANTABILITY, or FITNESS FOR A PARTICULAR PURPOSE. You are solely responsible for determining the appropriateness of using or redistributing the Work and assume any risks associated with Your exercise of permissions under this License."];
            Apache7_98 [shape=box, label="or", style=filled, fillcolor=grey];
            Apache7_98 -> Apache7[label="satisfies"];
            Apache7_99 [shape=box, label="[Required by applicable law or\n agreed to in writing],\n Licensor did not provides\n the Work (and each\n Contributor did not provide\n its Contributions) on an\n 'AS IS' basis, WITHOUTH\n WARRANTIES OR CONDITIONS OF\n ANY KIND,either express or\n implied, including, without\n limitation, any warranties\n or conditions of TITLE,\n NON-INFRINGEMENT,\n MERCHANTABILITY, or FITNESS FOR A PARTICULAR PURPOSE"];
            Apache7_99 -> Apache7_98;
            Apache7_100 [shape=box, label="and", style=filled, fillcolor=grey];
            Apache7_100 -> Apache7_98;
            Apache7_101 [shape=box, label="[You determined\n appropriateness of using or\n redistributing the Work"];
            Apache7_101 -> Apache7_100;
            Apache7_102 [shape=box, label="[You assumed] any risks\n associated with Your\n exercice of permissions\n under this license"];
            Apache7_102 -> Apache7_100;
            Apache7_103 [shape=box, label="You intend to exercice permissions\n granted by this License"];
            Apache7_103 -> Apache7[label="activates"];
            }
        }
    `,
    `digraph G_Duty {
        rankdir=BT
        overlap=false
        compound=true
        ranksep=0.5
        subgraph clusterSS_Apache8 {
            label = "SS_Apache8"
            Apache8 [shape=triangle, orientation=0, style=filled, fillcolor=lightblue, label="Apache8", tooltip="Limitation of Liability. In no event and under no legal theory, whether in tort (including negligence), contract, or otherwise, unless required by applicable law (such as deliberate and grossly negligent acts) or agreed to in writing, shall any Contributor be liable to You for damages, including any direct, indirect, special, incidental, or consequential damages of any character arising as a result of this License or out of the use or inability to use the Work (including but not limited to damages for loss of goodwill, work stoppage, computer failure or malfunction, or any and all other commercial damages or losses), even if such Contributor has been advised of the possibility of such damages."];
            Apache8_104 [shape=box, label="or", style=filled, fillcolor=grey];
            Apache8_104 -> Apache8[label="satisfies"];
            Apache8_105 [shape=box, label="[Required by applicable law\n (such as deliberate and\n grossly negligent acts) or\n agreed to in writing, [You\n holded] Contributor liable\n to You for damages,\n including any direct,\n indirect, special,\n incidental, or\n consequential damages of\n any character arising as a\n result of this License or\n out of the use or inability\n to use the Work (including\n but not limited to damages\n for loss of goodwill, work\n stoppage, computer failure\n or malfunction, or any and\n all other commercial damages or losses)]"];
            Apache8_105 -> Apache8_104;
            Apache8_106 [shape=box, label="not", style=filled, fillcolor=grey];
            Apache8_106 -> Apache8_104;
            Apache8_107 [shape=box, label="[You holded] Contributor\n liable to You for damages,\n including any direct,\n indirect, special,\n incidental, or\n consequential damages of\n any character arising as a\n result of this License or\n out of the use or inability\n to use the Work (including\n but not limited to damages\n for loss of goodwill, work\n stoppage, computer failure\n or malfunction, or any and\n all other commercial damages or losses)"];
            Apache8_107 -> Apache8_106;
            Apache8_108 [shape=box, label="You intend to exercice permissions\n granted by this License"];
            Apache8_108 -> Apache8[label="activates"];
            }
        }
    `,
    `digraph G_Right {
        rankdir=BT
        overlap=false
        compound=true
        ranksep=0.5
        subgraph clusterSS_Apache9 {
            label = "SS_Apache9"
            Apache9 [shape=triangle, orientation=270, style=filled, fillcolor=lightblue, label="Apache9", tooltip="Accepting Warranty or Additional Liability. While redistributing the Work or Derivative Works thereof, You may choose to offer,and charge a fee for, acceptance of support, warranty, indemnity,or other liability obligations and/or rights consistent with this License. However, in accepting such obligations, You may act only on Your own behalf and on Your sole responsibility, not on behalf of any other Contributor, and only if You agree to indemnify, defend, and hold each Contributor harmless for any liability incurred by, or claims asserted against, such Contributor by reason of your accepting any such warranty or additional liability."];
            Apache9_109 [shape=box, label="and", style=filled, fillcolor=grey];
            Apache9_109 -> Apache9[label="satisfies"];
            Apache9_110 [shape=box, label="and", style=filled, fillcolor=grey];
            Apache9_110 -> Apache9_109;
            Apache9_111 [shape=box, label="[You offered, and charge] a\n fee for, acceptance of\n support, warranty,\n indemnity, or other\n liability obligations\n and/or rights consistent\n with this License"];
            Apache9_111 -> Apache9_110;
            Apache9_112 [shape=box, label="[You acted] only on Your own\n behalf and on Your sole\n responsibility, not on\n behalf of any other Contributor"];
            Apache9_112 -> Apache9_110;
            Apache9_113 [shape=box, label="[You agreed] to indemnify,\n defend, and hold each\n Contributor harmless for\n any liability incurred by,\n or claims asserted against,\n such Contributor by reason\n of your accepting any such\n warranty or additional liability"];
            Apache9_113 -> Apache9_109;
            Apache9_114 [shape=box, label="SS_Apache4", style=filled, fillcolor=white];
            Apache9_114 -> Apache9[label="activates"];
            }
        }
    `
]

//manual mapping of statement name to dot index in apache2 array
var mapping = {
  "Apache2":0,
  "Apache3":1,
  "Apache4":2,
  "Apache4a":3,
  "Apache4b":4,
  "Apache4c":5,
  "Apache4d":6,
  "Apache4dAddAttrib":7,
  "Apache4dAddCopyright":8,
  "Apache5":9,
  "Apache6":10,
  "Apache7":11,
  "Apache8":12,
  "Apache9":13
  
};

var jsonInput = [];
var jsonState = [];
var polygon_top = null;
var jsonInput_text = [];
var apache2_id = [
    { "id": "Apache4_1", "text": "[You reproduced and" }, { "id": "Apache4a_9", "text": "[You gave] other recipients of" }, { "id": "Apache4a_10", "text": "[You intend to reproduce and" }, { "id": "Apache4b_11", "text": "[You caused] any modified" }, { "id": "Apache4b_12", "text": "[You intend to reproduce and" }, { "id": "Apache4c_14", "text": "[You retained], in the Source" }, { "id": "Apache4c_16", "text": "[You retained] those notices" }, { "id": "Apache4c_17", "text": "[You intend to reproduce and" }, { "id": "Apache4d_20", "text": "[You included] a readable copy" }, { "id": "Apache4d_22", "text": "[(in notice file) You included" }, { "id": "Apache4d_25", "text": "[(in source) in You included" }, { "id": "Apache4d_26", "text": "source [is] provided along" }, { "id": "Apache4d_28", "text": "[(in display) You included the" }, { "id": "Apache4d_29", "text": "third-party [attribution]" }, { "id": "Apache4d_30", "text": "[You excluded] those notices" }, { "id": "Apache4d_32", "text": "[You intend to reproduce and" }, { "id": "Apache4d_33", "text": "the Work includes a 'NOTICE'" }, { "id": "Apache4dAddAttrib_34", "text": "[You added] Your own" }, { "id": "Apache4dAddAttrib_37", "text": "[Your own] additional" }, { "id": "Apache4dAddCopyright_39", "text": "[You added] Your own copyright" }, { "id": "Apache4dAddCopyright_40", "text": "[You provided] additional or" }, { "id": "Apache2_47", "text": "[You reproduced] the Work and" }, { "id": "Apache2_48", "text": "[You prepared Derivative Works" }, { "id": "Apache2_49", "text": "[You publicly displayed] the" }, { "id": "Apache2_50", "text": "[You publicly performed] the" }, { "id": "Apache2_51", "text": "[You sublicenced] the Work and" }, { "id": "Apache2_52", "text": "[You distributed] the Work and" }, { "id": "Apache3_69", "text": "[You made , have made] the" }, { "id": "Apache3_70", "text": "[You used] the Work" }, { "id": "Apache3_71", "text": "[You offered to sell, sold]" }, { "id": "Apache3_72", "text": "[You imported] the Work" }, { "id": "Apache3_73", "text": "[You transfered] the Work" }, { "id": "Apache3_75", "text": "[You instituted] patent" }, { "id": "Apache5_89", "text": "[Any Contribution" }, { "id": "Apache5_90", "text": "[You explicitly stated] terms" }, { "id": "Apache5_91", "text": "[Nothing herein supersede ]or" }, { "id": "Apache5_92", "text": "[You submitted] a Work for" }, { "id": "Apache6_95", "text": "[You used trade names," }, { "id": "Apache6_96", "text": "[As required ]for reasonable" }, { "id": "Apache6_97", "text": "[You intend to exercice permissions" }, { "id": "Apache7_99", "text": "[Required by applicable law or" }, { "id": "Apache7_101", "text": "[You determined" }, { "id": "Apache7_102", "text": "[You assumed] any risks" }, { "id": "Apache7_103", "text": "You intend to exercice permissions" }, { "id": "Apache8_105", "text": "[Required by applicable law" }, { "id": "Apache8_107", "text": "[You holded] Contributor" }, { "id": "Apache8_108", "text": "You intend to exercice permissions" }, { "id": "Apache9_111", "text": "[You offered, and charge] a" }, { "id": "Apache9_112", "text": "[You acted] only on Your own" }, { "id": "Apache9_113", "text": "[You agreed] to indemnify," }
]

/**
  * Create JSON object to use for tree view 
  */


//Build json object from DOM element here
var myJSONArray= [

    {
        "id":"Preamble",
        "text":"Preamble",
        "icon":"/static/document.png"
    },

    {
        "id":"Apache2",   
        "text": "Apache2",
        "icon":"/static/icon/right_blue.ico",
        
       
    },
    {
        "id":"Apache3",   
        "text": "Apache3",
        "icon":"/static/icon/right_blue.ico",
        

        "state":
        {
            "opened": true,
            
        },

        
    },
    {
        "id":"Apache4",
        "text": "Apache4",
        "icon":"/static/icon/right_blue.ico",
        
        

        "state":
        {
            "opened": true,
            
        },

        "children": [
            {
                "text":"Apache4a",
                "id":"Apache4a",
                "icon":"/static/icon/duty_blue.ico",
               
            },
            {
                "text":"Apache4b",
                "id":"Apache4b",
                "icon":"/static/icon/duty_blue.ico",
                
            },
            {
                "text":"Apache4c",
                "id":"Apache4c",
                "icon":"/static/icon/duty_blue.ico",
               
            },
            {
                "text":"Apache4d",
                "id":"Apache4d",
                "icon":"/static/icon/duty_blue.ico",
                "state":{
                    "opened":true,
                    
                },
                "children":[
                    {
                    
                        "text":"Apache4dAddAttrib",
                        "id":"Apache4dAddAttrib",
                        "icon":"/static/icon/right_blue.ico",
                        
                    },
                    {
                        "text":"Apache4dAddCopyright",
                        "id":"Apache4dAddCopyright",
                        "icon":"/static/icon/right_blue.ico",
                    }
                ]
            }    
        ]
    },
    {
        "id":"Apache5", 
        "text": "Apache5",
        "icon":"/static/icon/duty_blue.ico",

    
    },
    {
        "id":"Apache6",   
        "text": "Apache6",
        "icon":"/static/icon/duty_blue.ico",
    
    },
    {
        "id":"Apache7",
        "text":"Apache7",
        "icon":"/static/icon/duty_blue.ico",
    },
    {
        "id":"Apache8",
        "text":"Apache8",
        "icon":"/static/icon/duty_blue.ico",
    },
    {
        "id":"Apache9",
        "text":"Apache9",
        "icon":"/static/icon/duty_blue.ico",
    },
    {
        "id":"Appendix",
        "text":"Appendix",
        "icon":"/static/document.png"
    }

];

  
  // Builds the JSON data object JSONInput
//   function updateJSON(id, status) {

//     //check if norm
//     var delimited = id.split('_');
//     var isNorm = false;
//     if (delimited[1] == null) {
//         isNorm = true; // Is a norm
//     } else {
//         isNorm = false; // not a norm
//     }

//     if (!isNorm) {
//         var exist = false;
//         $.each(jsonInput, function(key, val) {
//             if (val.id == id) {
//                 val.satisfied = status;
//                 exist = true;
//             }
//         });
//         if (exist == false) {
//             item = {};
//             item["id"] = id;
//             item["satisfied"] = status;
//             jsonInput.push(item);
            
            
//         }

//     } else { // this is a norm
//         var exist = false;
//         $.each(jsonInput, function(key, val) {
//             if (val.id == id) {
//                 val.compliance = status;
//                 exist = true;
//             }
//         });
//         if (exist == false) {
//             item = {};
//             item["id"] = id;
//             item["compliance"] = status;
//             jsonInput.push(item);
//         }
//     }

//   // console.log(JSON.stringify(jsonInput));
//   console.log(JSON.stringify(jsonInput_text));

// }

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
            $.each(apache2_id,function(_id,_obj_) {
               
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
        .dot(apache2[dot_index])
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
            accessURL = "http://localhost:4567/assert/7/1"
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

        
       

        if ($('#data').jstree('get_selected',true)[0].id.startsWith('Apache')) {
            
            genGraph($('#data').jstree('get_selected',true)[0].id)
        }else{
            //console.log("."+$('#data').jstree('get_selected',true)[0].id.toLowerCase())
            $(".statement,.preamble,.appendix").css('background-color','unset')
            
            $("."+$('#data').jstree('get_selected',true)[0].id.toLowerCase()).css('background-color','#add8e6')
            $("."+$('#data').jstree('get_selected',true)[0].id.toLowerCase()).focus()
           
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



