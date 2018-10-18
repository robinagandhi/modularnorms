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
var lel = [
    `digraph G_Right {
        rankdir=BT
        overlap=false
        compound=true
        ranksep=0.5
        subgraph clusterSS_LEL2 {
            label = "SS_LEL2"
            LEL2 [shape=triangle, orientation=270, style=filled, fillcolor=lightblue, label="LEL2", tooltip="Grant of Copyright License. Subject to the terms and conditions of this License, each Contributor hereby grants to You a perpetual, worldwide, non-exclusive, no-charge, royalty-free, irrevocable copyright license to reproduce, prepare Derivative Works of, publicly display, publicly perform, sublicense, and distribute the Work and such Derivative Works in Source or Object form."];
            LEL2_42 [shape=box, label="or", style=filled, fillcolor=grey];
            LEL2_42 -> LEL2[label="satisfies"];
            LEL2_43 [shape=box, label="or", style=filled, fillcolor=grey];
            LEL2_43 -> LEL2_42;
            LEL2_44 [shape=box, label="or", style=filled, fillcolor=grey];
            LEL2_44 -> LEL2_43;
            LEL2_45 [shape=box, label="or", style=filled, fillcolor=grey];
            LEL2_45 -> LEL2_44;
            LEL2_46 [shape=box, label="or", style=filled, fillcolor=grey];
            LEL2_46 -> LEL2_45;
            LEL2_47 [shape=box, label="[You reproduced] the Work and\n such Derivative Works in\n Source or Object form"];
            LEL2_47 -> LEL2_46;
            LEL2_48 [shape=box, label="[You prepared Derivative Works\n of] the Work and such\n Derivative Works in Source\n or Object form" ];
            LEL2_48 -> LEL2_46;
            LEL2_49 [shape=box, label="[You publicly displayed] the\n Work and such Derivative\n Works in Source or Object form" ];
            LEL2_49 -> LEL2_45;
            LEL2_50 [shape=box, label="[You publicly performed] the\n Work and such Derivative\n Works in Source or Object form" ];
            LEL2_50 -> LEL2_44;
            LEL2_51 [shape=box, label="[You sublicenced] the Work and\n such Derivative Works in\n Source or Object form"];
            LEL2_51 -> LEL2_43;
            LEL2_52 [shape=box, label="[You distributed] the Work and\n such Derivative Works in\n Source or Object form"];
            LEL2_52 -> LEL2_42;
            LEL2_53 [shape=box, label="and", style=filled, fillcolor=grey];
            LEL2_53 -> LEL2[label="activates"];
            LEL2_54 [shape=box, label="SS_LEL4", style=filled, fillcolor=white];
            LEL2_54 -> LEL2_53;
            LEL2_55 [shape=box, label="and", style=filled, fillcolor=grey];
            LEL2_55 -> LEL2_53;
            LEL2_56 [shape=box, label="and", style=filled, fillcolor=grey];
            LEL2_56 -> LEL2_55;
            LEL2_57 [shape=box, label="and", style=filled, fillcolor=grey];
            LEL2_57 -> LEL2_56;
            LEL2_58 [shape=box, label="SS_LEL5", style=filled, fillcolor=white];
            LEL2_58 -> LEL2_57;
            LEL2_59 [shape=box, label="and", style=filled, fillcolor=grey];
            LEL2_59 -> LEL2_57;
            LEL2_60 [shape=box, label="SS_LEL6", style=filled, fillcolor=white];
            LEL2_60 -> LEL2_59;
            LEL2_61 [shape=box, label="SS_LEL7", style=filled, fillcolor=white];
            LEL2_61 -> LEL2_59;
            LEL2_62 [shape=box, label="SS_LEL8", style=filled, fillcolor=white];
            LEL2_62 -> LEL2_56;
            LEL2_63 [shape=box, label="SS_LEL9", style=filled, fillcolor=white];
            LEL2_63 -> LEL2_55;
            }
        }
    `,
    `digraph G_Right {
        rankdir=BT
        overlap=false
        compound=true
        ranksep=0.5
        subgraph clusterSS_LEL3 {
            label = "SS_LEL3"
            LEL3 [shape=triangle, orientation=270, style=filled, fillcolor=lightblue, label="LEL3", tooltip="Grant of Patent License. Subject to the terms and conditions of this License, each Contributor hereby grants to You a perpetual, worldwide, non-exclusive, no-charge, royalty-free, irrevocable (except as stated in this section) patent license to make, have made, use, offer to sell, sell, import, and otherwise transfer the Work, where such license applies only to those patent claims licensable by such Contributor that are necessarily infringed by their Contribution(s) alone or by combination of their Contribution(s) with the Work to which such Contribution(s) was submitted.If You institute patent litigation against any entity (including a cross-claim or counterclaim in a lawsuit) alleging that the Work or a Contribution incorporated within the Work constitutes direct or contributory patent infringement, then any patent licenses granted to You under this License for that Work shall terminate as of the date such litigation is filed."];
            LEL3_64 [shape=box, label="and", style=filled, fillcolor=grey];
            LEL3_64 -> LEL3[label="satisfies"];
            LEL3_65 [shape=box, label="or", style=filled, fillcolor=grey];
            LEL3_65 -> LEL3_64;
            LEL3_66 [shape=box, label="or", style=filled, fillcolor=grey];
            LEL3_66 -> LEL3_65;
            LEL3_67 [shape=box, label="or", style=filled, fillcolor=grey];
            LEL3_67 -> LEL3_66;
            LEL3_68 [shape=box, label="or", style=filled, fillcolor=grey];
            LEL3_68 -> LEL3_67;
            LEL3_69 [shape=box, label="[You made , have made] the\n Work "];
            LEL3_69 -> LEL3_68;
            LEL3_70 [shape=box, label="[You used] the Work"];
            LEL3_70 -> LEL3_68;
            LEL3_71 [shape=box, label="[You offered to sell, sold]\n the Work"];
            LEL3_71 -> LEL3_67;
            LEL3_72 [shape=box, label="[You imported] the Work"];
            LEL3_72 -> LEL3_66;
            LEL3_73 [shape=box, label="[You transfered] the Work"];
            LEL3_73 -> LEL3_65;
            LEL3_74 [shape=box, label="not", style=filled, fillcolor=grey];
            LEL3_74 -> LEL3_64;
            LEL3_75 [shape=box, label="[You instituted] patent\n litigation against any\n entity (including a\n cross-claim or counterclaim\n in a lawsuit) alleging that\n the Work or a Contribution\n incorporated within the\n Work constitutes direct or\n contributory patent infringement"];
            LEL3_75 -> LEL3_74;
            LEL3_76 [shape=box, label="and", style=filled, fillcolor=grey];
            LEL3_76 -> LEL3[label="activates"];
            LEL3_77 [shape=box, label="SS_LEL4", style=filled, fillcolor=white];
            LEL3_77 -> LEL3_76;
            LEL3_78 [shape=box, label="and", style=filled, fillcolor=grey];
            LEL3_78 -> LEL3_76;
            LEL3_79 [shape=box, label="and", style=filled, fillcolor=grey];
            LEL3_79 -> LEL3_78;
            LEL3_80 [shape=box, label="and", style=filled, fillcolor=grey];
            LEL3_80 -> LEL3_79;
            LEL3_81 [shape=box, label="SS_LEL9", style=filled, fillcolor=white];
            LEL3_81 -> LEL3_80;
            LEL3_82 [shape=box, label="and", style=filled, fillcolor=grey];
            LEL3_82 -> LEL3_80;
            LEL3_83 [shape=box, label="SS_LEL6", style=filled, fillcolor=white];
            LEL3_83 -> LEL3_82;
            LEL3_84 [shape=box, label="SS_LEL7", style=filled, fillcolor=white];
            LEL3_84 -> LEL3_82;
            LEL3_85 [shape=box, label="SS_LEL8", style=filled, fillcolor=white];
            LEL3_85 -> LEL3_79;
            LEL3_86 [shape=box, label="SS_LEL5", style=filled, fillcolor=white];
            LEL3_86 -> LEL3_78;
            }
        }
    `,
    `digraph G_Right {
        rankdir=BT
        overlap=false
        compound=true
        ranksep=0.5
        subgraph clusterSS_LEL4 {
            label = "SS_LEL4"
            LEL4 [shape=triangle, orientation=270, style=filled, fillcolor=lightblue, label="LEL4", tooltip="4. Redistribution. You may reproduce and distribute copies of the Work or Derivative Works thereof in any medium, with or without modifications, and in Source or Object form, provided that You meet the following conditions:"];
            LEL4_1 [shape=box, label="[You reproduced and\n distributed] copies of the\n Work or Derivative Works\n thereof in any medium, with\n or without modifications,\n and in Source or Object form"];
            LEL4_1 -> LEL4[label="satisfies"];
            LEL4_2 [shape=box, label="and", style=filled, fillcolor=grey];
            LEL4_2 -> LEL4[label="activates"];
            LEL4_3 [shape=box, label="SS_LEL4a", style=filled, fillcolor=white];
            LEL4_3 -> LEL4_2;
            LEL4_4 [shape=box, label="and", style=filled, fillcolor=grey];
            LEL4_4 -> LEL4_2;
            LEL4_5 [shape=box, label="SS_LEL4b", style=filled, fillcolor=white];
            LEL4_5 -> LEL4_4;
            LEL4_6 [shape=box, label="and", style=filled, fillcolor=grey];
            LEL4_6 -> LEL4_4;
            LEL4_7 [shape=box, label="SS_LEL4c", style=filled, fillcolor=white];
            LEL4_7 -> LEL4_6;
            LEL4_8 [shape=box, label="SS_LEL4d", style=filled, fillcolor=white];
            LEL4_8 -> LEL4_6;
            }
        }
    `,
    `digraph G_Duty {
        rankdir=BT
        overlap=false
        compound=true
        ranksep=0.5
        subgraph clusterSS_LEL4a {
            label = "SS_LEL4a"
            LEL4a [shape=triangle, orientation=0, style=filled, fillcolor=lightblue, label="LEL4a", tooltip="4(a) You must give any other recipients of the Work or Derivative Works a copy of this License;"];
            LEL4a_9 [shape=box, label="[You gave] other recipients of\n the Work or Derivative\n Works a copy of this License"];
            LEL4a_9 -> LEL4a[label="satisfies"];
            LEL4a_10 [shape=box, label="[You intend to reproduce and\n distribute copies of the\n Work or Derivative Works]"];
            LEL4a_10 -> LEL4a[label="activates"];
            }
        }
    `,
    `digraph G_Duty {
        rankdir=BT
        overlap=false
        compound=true
        ranksep=0.5
        subgraph clusterSS_LEL4b {
            label = "SS_LEL4b"
            LEL4b [shape=triangle, orientation=0, style=filled, fillcolor=lightblue, label="LEL4b", tooltip="4(b) You must cause any modified files to carry prominent notices stating that You changed the files;"];
            LEL4b_11 [shape=box, label="[You caused] any modified\n files to carry prominent\n notices stating that You\n changed the files"];
            LEL4b_11 -> LEL4b[label="satisfies"];
            LEL4b_12 [shape=box, label="[You intend to reproduce and\n distribute copies of the\n Work or Derivative Works]"];
            LEL4b_12 -> LEL4b[label="activates"];
            }
        }
    `,
    `digraph G_Duty {
        rankdir=BT
        overlap=false
        compound=true
        ranksep=0.5
        subgraph clusterSS_LEL4c {
            label = "SS_LEL4c"
            LEL4c [shape=triangle, orientation=0, style=filled, fillcolor=lightblue, label="LEL4c", tooltip="4(c) You must retain, in the Source form of any Derivative Works that You distribute, all copyright, patent, trademark, and attribution notices from the Source form of the Work, excluding those notices that do not pertain to any part of the Derivative Works;"];
            LEL4c_13 [shape=box, label="and", style=filled, fillcolor=grey];
            LEL4c_13 -> LEL4c[label="satisfies"];
            LEL4c_14 [shape=box, label="[You retained], in the Source\n form of any Derivative\n Works that You distribute,\n all copyright, patent,\n trademark, and attribution\n notices from the Source\n form of the Work"];
            LEL4c_14 -> LEL4c_13;
            LEL4c_15 [shape=box, label="not", style=filled, fillcolor=grey];
            LEL4c_15 -> LEL4c_13;
            LEL4c_16 [shape=box, label="[You retained] those notices\n that do not pertain to any\n part of the Derivative Works"];
            LEL4c_16 -> LEL4c_15;
            LEL4c_17 [shape=box, label="[You intend to reproduce and\n distribute copies of the\n Work or Derivative Works]"];
            LEL4c_17 -> LEL4c[label="activates"];
            }
        }
    `,
    `digraph G_Duty {
        rankdir=BT
        overlap=false
        compound=true
        ranksep=0.5
        subgraph clusterSS_LEL4d {
            label = "SS_LEL4d"
            LEL4d [shape=triangle, orientation=0, style=filled, fillcolor=lightblue, label="LEL4d", tooltip="4(d) If the Work includes a 'NOTICE' text file as part of its distribution, then any Derivative Works that You distribute must include a readable copy of the attribution notices contained within such NOTICE file, excluding those notices that do not pertain to any part of the Derivative Works, in at least one of the following places: within a NOTICE text file distributed as part of the Derivative Works; within the Source form or documentation, if provided along with the Derivative Works; or, within a display generated by the Derivative Works, if and wherever such third-party notices normally appear. The contents of the NOTICE file are for informational purposes only and do not modify the License. You may add Your own attribution notices within Derivative Works that You distribute, alongside or as an addendum to the NOTICE text from the Work, provided that such additional attribution notices cannot be construed as modifying the License."];
            LEL4d_18 [shape=box, label="and", style=filled, fillcolor=grey];
            LEL4d_18 -> LEL4d[label="satisfies"];
            LEL4d_19 [shape=box, label="and", style=filled, fillcolor=grey];
            LEL4d_19 -> LEL4d_18;
            LEL4d_20 [shape=box, label="[You included] a readable copy\n of the attribution notices\n contained within such\n NOTICE file"];
            LEL4d_20 -> LEL4d_19;
            LEL4d_21 [shape=box, label="or", style=filled, fillcolor=grey];
            LEL4d_21 -> LEL4d_19;
            LEL4d_22 [shape=box, label="[(in notice file) You included\n the attribution notices]\n within a NOTICE text file\n distributed as part of the\n Derivative Works"];
            LEL4d_22 -> LEL4d_21;
            LEL4d_23 [shape=box, label="or", style=filled, fillcolor=grey];
            LEL4d_23 -> LEL4d_21;
            LEL4d_24 [shape=box, label="and", style=filled, fillcolor=grey];
            LEL4d_24 -> LEL4d_23;
            LEL4d_25 [shape=box, label="[(in source) in You included\n the attribution notices]\n within the Source form or\n documentation"];
            LEL4d_25 -> LEL4d_24;
            LEL4d_26 [shape=box, label="source [is] provided along\n with the Derivative Works"];
            LEL4d_26 -> LEL4d_24;
            LEL4d_27 [shape=box, label="and", style=filled, fillcolor=grey];
            LEL4d_27 -> LEL4d_23;
            LEL4d_28 [shape=box, label="[(in display) You included the\n attribution notices] within\n a display generated by the\n Derivative Works ...\n wherever such third-party\n notices normally appear"];
            LEL4d_28 -> LEL4d_27;
            LEL4d_29 [shape=box, label="third-party [attribution]\n notices normally appear [in\n display]"];
            LEL4d_29 -> LEL4d_27;
            LEL4d_30 [shape=box, label="[You excluded] those notices\n that do not pertain to any\n part of the Derivative Works"];
            LEL4d_30 -> LEL4d_18;
            LEL4d_31 [shape=box, label="and", style=filled, fillcolor=grey];
            LEL4d_31 -> LEL4d[label="activates"];
            LEL4d_32 [shape=box, label="[You intend to reproduce and\n distribute copies of the\n Work or Derivative Works]"];
            LEL4d_32 -> LEL4d_31;
            LEL4d_33 [shape=box, label="the Work includes a 'NOTICE'\n text file as part of its\n distribution"];
            LEL4d_33 -> LEL4d_31;
            }
        }
    `,
    `digraph G_Right {
        rankdir=BT
        overlap=false
        compound=true
        ranksep=0.5
        subgraph clusterSS_LEL4dAddAttrib {
            label = "SS_LEL4dAddAttrib"
            LEL4dAddAttrib [shape=triangle, orientation=270, style=filled, fillcolor=lightblue, label="LEL4dAddAttrib", tooltip="You may add Your own attribution notices within Derivative Works that You distribute, alongside or as an addendum to the NOTICE text from the Work, provided that such additional attribution notices cannot be construed as modifying the License."];
            LEL4dAddAttrib_34 [shape=box, label="[You added] Your own\n attribution notices within\n Derivative Works that You\n distribute, alongside or as\n an addendum to the NOTICE\n text from the Work"];
            LEL4dAddAttrib_34 -> LEL4dAddAttrib[label="satisfies"];
            LEL4dAddAttrib_35 [shape=box, label="and", style=filled, fillcolor=grey];
            LEL4dAddAttrib_35 -> LEL4dAddAttrib[label="activates"];
            LEL4dAddAttrib_36 [shape=box, label="SS_LEL4d", style=filled, fillcolor=white];
            LEL4dAddAttrib_36 -> LEL4dAddAttrib_35;
            LEL4dAddAttrib_37 [shape=box, label="[Your own] additional\n attribution notices cannot\n be construed as modifying\n the License"];
            LEL4dAddAttrib_37 -> LEL4dAddAttrib_35;
            }
        }
    `,
    `digraph G_Right {
        rankdir=BT
        overlap=false
        compound=true
        ranksep=0.5
        subgraph clusterSS_LEL4dAddCopyright {
            label = "SS_LEL4dAddCopyright"
            LEL4dAddCopyright [shape=triangle, orientation=270, style=filled, fillcolor=lightblue, label="LEL4dAddCopyright", tooltip="You may add Your own copyright statement to Your modifications and may provide additional or different license terms and conditions for use, reproduction, or distribution of Your modifications, or for any such Derivative Works as a whole, provided Your use, reproduction, and distribution of the Work otherwise complies with the conditions stated in this License."];
            LEL4dAddCopyright_38 [shape=box, label="or", style=filled, fillcolor=grey];
            LEL4dAddCopyright_38 -> LEL4dAddCopyright[label="satisfies"];
            LEL4dAddCopyright_39 [shape=box, label="[You added] Your own copyright\n statement to Your\n modifications"];
            LEL4dAddCopyright_39 -> LEL4dAddCopyright_38;
            LEL4dAddCopyright_40 [shape=box, label="[You provided] additional or\n different license terms and\n conditions for use,\n reproduction, or\n distribution of Your\n modifications, or for any\n such Derivative Works as a whole"];
            LEL4dAddCopyright_40 -> LEL4dAddCopyright_38;
            LEL4dAddCopyright_41 [shape=box, label="SS_LEL4", style=filled, fillcolor=white];
            LEL4dAddCopyright_41 -> LEL4dAddCopyright[label="activates"];
            }
        }
    `,
    `digraph G_Duty {
        rankdir=BT
        overlap=false
        compound=true
        ranksep=0.5
        subgraph clusterSS_LEL5 {
            label = "SS_LEL5"
            LEL5 [shape=triangle, orientation=0, style=filled, fillcolor=lightblue, label="LEL5", tooltip="Submission of Contributions. Unless You explicitly state otherwise, any Contribution intentionally submitted for inclusion in the Work by You to the Licensor shall be under the terms and conditions of this License, without any additional terms or conditions. Notwithstanding the above, nothing herein shall supersede or modify the terms of any separate license agreement you may have executed with Licensor regarding such Contributions."];
            LEL5_87 [shape=box, label="and", style=filled, fillcolor=grey];
            LEL5_87 -> LEL5[label="satisfies"];
            LEL5_88 [shape=box, label="or", style=filled, fillcolor=grey];
            LEL5_88 -> LEL5_87;
            LEL5_89 [shape=box, label="[Any Contribution\n intentionally submitted for\n inclusion in the Work by\n You to the Licensor is]\n under the terms and\n conditions of this License,\n without any additional\n terms or conditions"];
            LEL5_89 -> LEL5_88;
            LEL5_90 [shape=box, label="[You explicitly stated] terms\n and conditions"];
            LEL5_90 -> LEL5_88;
            LEL5_91 [shape=box, label="[Nothing herein supersede ]or\n modify the terms of any\n separate license agreement\n you may have executed with\n Licensor regarding such\n Contributions."];
            LEL5_91 -> LEL5_87;
            LEL5_92 [shape=box, label="[You intend to submit] a Work for\n Contribution"];
            LEL5_92 -> LEL5[label="activates"];
            }
        }
    `,
    `digraph G_Duty {
        rankdir=BT
        overlap=false
        compound=true
        ranksep=0.5
        subgraph clusterSS_LEL6 {
            label = "SS_LEL6"
            LEL6 [shape=triangle, orientation=0, style=filled, fillcolor=lightblue, label="LEL6", tooltip="Trademarks. This License does not grant permission to use the trade names, trademarks, service marks, or product names of the Licensor, except as required for reasonable and customary use in describing the origin of the Work and reproducing the content of the NOTICE file"];
            LEL6_93 [shape=box, label="or", style=filled, fillcolor=grey];
            LEL6_93 -> LEL6[label="satisfies"];
            LEL6_94 [shape=box, label="not", style=filled, fillcolor=grey];
            LEL6_94 -> LEL6_93;
            LEL6_95 [shape=box, label="[You used trade names,\n trademarks, service marks,\n or product names of the\n Licensor]"];
            LEL6_95 -> LEL6_94;
            LEL6_96 [shape=box, label="[As required ]for reasonable\n and customary use in\n describing the origin of\n the Work and reproducing\n the content of the NOTICE\n file [You used] trade\n names, trademarks, service\n marks, or product names of the Licensor"];
            LEL6_96 -> LEL6_93;
            LEL6_97 [shape=box, label="You intend to exercice permissions\n granted by this License"];
            LEL6_97 -> LEL6[label="activates"];
            }
        }
    `,
    `digraph G_Duty {
        rankdir=BT
        overlap=false
        compound=true
        ranksep=0.5
        subgraph clusterSS_LEL7 {
            label = "SS_LEL7"
            LEL7 [shape=triangle, orientation=0, style=filled, fillcolor=lightblue, label="LEL7", tooltip="Disclaimer of Warranty. Unless required by applicable law or agreed to in writing, Licensor provides the Work (and each Contributor provides its Contributions) on an 'AS IS' BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied, including, without limitation, any warranties or conditions of TITLE, NON-INFRINGEMENT, MERCHANTABILITY, or FITNESS FOR A PARTICULAR PURPOSE. You are solely responsible for determining the appropriateness of using or redistributing the Work and assume any risks associated with Your exercise of permissions under this License."];
            LEL7_98 [shape=box, label="or", style=filled, fillcolor=grey];
            LEL7_98 -> LEL7[label="satisfies"];
            LEL7_99 [shape=box, label="[Required by applicable law or\n agreed to in writing],\n Licensor did not provides\n the Work (and each\n Contributor did not provide\n its Contributions) on an\n 'AS IS' basis, WITHOUTH\n WARRANTIES OR CONDITIONS OF\n ANY KIND,either express or\n implied, including, without\n limitation, any warranties\n or conditions of TITLE,\n NON-INFRINGEMENT,\n MERCHANTABILITY, or FITNESS FOR A PARTICULAR PURPOSE"];
            LEL7_99 -> LEL7_98;
            LEL7_100 [shape=box, label="and", style=filled, fillcolor=grey];
            LEL7_100 -> LEL7_98;
            LEL7_101 [shape=box, label="[You determined\n appropriateness of using or\n redistributing the Work"];
            LEL7_101 -> LEL7_100;
            LEL7_102 [shape=box, label="[You assumed] any risks\n associated with Your\n exercice of permissions\n under this license"];
            LEL7_102 -> LEL7_100;
            LEL7_103 [shape=box, label="You intend to exercice permissions\n granted by this License"];
            LEL7_103 -> LEL7[label="activates"];
            }
        }
    `,
    `digraph G_Duty {
        rankdir=BT
        overlap=false
        compound=true
        ranksep=0.5
        subgraph clusterSS_LEL8 {
            label = "SS_LEL8"
            LEL8 [shape=triangle, orientation=0, style=filled, fillcolor=lightblue, label="LEL8", tooltip="Limitation of Liability. In no event and under no legal theory, whether in tort (including negligence), contract, or otherwise, unless required by applicable law (such as deliberate and grossly negligent acts) or agreed to in writing, shall any Contributor be liable to You for damages, including any direct, indirect, special, incidental, or consequential damages of any character arising as a result of this License or out of the use or inability to use the Work (including but not limited to damages for loss of goodwill, work stoppage, computer failure or malfunction, or any and all other commercial damages or losses), even if such Contributor has been advised of the possibility of such damages."];
            LEL8_104 [shape=box, label="or", style=filled, fillcolor=grey];
            LEL8_104 -> LEL8[label="satisfies"];
            LEL8_105 [shape=box, label="[Required by applicable law\n (such as deliberate and\n grossly negligent acts) or\n agreed to in writing, [You\n holded] Contributor liable\n to You for damages,\n including any direct,\n indirect, special,\n incidental, or\n consequential damages of\n any character arising as a\n result of this License or\n out of the use or inability\n to use the Work (including\n but not limited to damages\n for loss of goodwill, work\n stoppage, computer failure\n or malfunction, or any and\n all other commercial damages or losses)]"];
            LEL8_105 -> LEL8_104;
            LEL8_106 [shape=box, label="not", style=filled, fillcolor=grey];
            LEL8_106 -> LEL8_104;
            LEL8_107 [shape=box, label="[You holded] Contributor\n liable to You for damages,\n including any direct,\n indirect, special,\n incidental, or\n consequential damages of\n any character arising as a\n result of this License or\n out of the use or inability\n to use the Work (including\n but not limited to damages\n for loss of goodwill, work\n stoppage, computer failure\n or malfunction, or any and\n all other commercial damages or losses)"];
            LEL8_107 -> LEL8_106;
            LEL8_108 [shape=box, label="You intend to exercice permissions\n granted by this License"];
            LEL8_108 -> LEL8[label="activates"];
            }
        }
    `,
    `digraph G_Right {
        rankdir=BT
        overlap=false
        compound=true
        ranksep=0.5
        subgraph clusterSS_LEL9 {
            label = "SS_LEL9"
            LEL9 [shape=triangle, orientation=270, style=filled, fillcolor=lightblue, label="LEL9", tooltip="Accepting Warranty or Additional Liability. While redistributing the Work or Derivative Works thereof, You may choose to offer,and charge a fee for, acceptance of support, warranty, indemnity,or other liability obligations and/or rights consistent with this License. However, in accepting such obligations, You may act only on Your own behalf and on Your sole responsibility, not on behalf of any other Contributor, and only if You agree to indemnify, defend, and hold each Contributor harmless for any liability incurred by, or claims asserted against, such Contributor by reason of your accepting any such warranty or additional liability."];
            LEL9_109 [shape=box, label="and", style=filled, fillcolor=grey];
            LEL9_109 -> LEL9[label="satisfies"];
            LEL9_110 [shape=box, label="and", style=filled, fillcolor=grey];
            LEL9_110 -> LEL9_109;
            LEL9_111 [shape=box, label="[You offered, and charge] a\n fee for, acceptance of\n support, warranty,\n indemnity, or other\n liability obligations\n and/or rights consistent\n with this License"];
            LEL9_111 -> LEL9_110;
            LEL9_112 [shape=box, label="[You acted] only on Your own\n behalf and on Your sole\n responsibility, not on\n behalf of any other Contributor"];
            LEL9_112 -> LEL9_110;
            LEL9_113 [shape=box, label="[You agreed] to indemnify,\n defend, and hold each\n Contributor harmless for\n any liability incurred by,\n or claims asserted against,\n such Contributor by reason\n of your accepting any such\n warranty or additional liability"];
            LEL9_113 -> LEL9_109;
            LEL9_114 [shape=box, label="SS_LEL4", style=filled, fillcolor=white];
            LEL9_114 -> LEL9[label="activates"];
            }
        }
    `
]

//manual mapping of statement name to dot index in LEL2 array
var mapping = {
  "LEL2":0,
  "LEL3":1,
  "LEL4":2,
  "LEL4a":3,
  "LEL4b":4,
  "LEL4c":5,
  "LEL4d":6,
  "LEL4dAddAttrib":7,
  "LEL4dAddCopyright":8,
  "LEL5":9,
  "LEL6":10,
  "LEL7":11,
  "LEL8":12,
  "LEL9":13
  
};

var jsonInput = [];
var jsonState = [];
var polygon_top = null;
var jsonInput_text = [];
var lel_id = [
    { "id": "LEL4_1", "text": "[You reproduced and" }, { "id": "LEL4a_9", "text": "[You gave] other recipients of" }, { "id": "LEL4a_10", "text": "[You intend to reproduce and" }, { "id": "LEL4b_11", "text": "[You caused] any modified" }, { "id": "LEL4b_12", "text": "[You intend to reproduce and" }, { "id": "LEL4c_14", "text": "[You retained], in the Source" }, { "id": "LEL4c_16", "text": "[You retained] those notices" }, { "id": "LEL4c_17", "text": "[You intend to reproduce and" }, { "id": "LEL4d_20", "text": "[You included] a readable copy" }, { "id": "LEL4d_22", "text": "[(in notice file) You included" }, { "id": "LEL4d_25", "text": "[(in source) in You included" }, { "id": "LEL4d_26", "text": "source [is] provided along" }, { "id": "LEL4d_28", "text": "[(in display) You included the" }, { "id": "LEL4d_29", "text": "third-party [attribution]" }, { "id": "LEL4d_30", "text": "[You excluded] those notices" }, { "id": "LEL4d_32", "text": "[You intend to reproduce and" }, { "id": "LEL4d_33", "text": "the Work includes a 'NOTICE'" }, { "id": "LEL4dAddAttrib_34", "text": "[You added] Your own" }, { "id": "LEL4dAddAttrib_37", "text": "[Your own] additional" }, { "id": "LEL4dAddCopyright_39", "text": "[You added] Your own copyright" }, { "id": "LEL4dAddCopyright_40", "text": "[You provided] additional or" }, { "id": "LEL2_47", "text": "[You reproduced] the Work and" }, { "id": "LEL2_48", "text": "[You prepared Derivative Works" }, { "id": "LEL2_49", "text": "[You publicly displayed] the" }, { "id": "LEL2_50", "text": "[You publicly performed] the" }, { "id": "LEL2_51", "text": "[You sublicenced] the Work and" }, { "id": "LEL2_52", "text": "[You distributed] the Work and" }, { "id": "LEL3_69", "text": "[You made , have made] the" }, { "id": "LEL3_70", "text": "[You used] the Work" }, { "id": "LEL3_71", "text": "[You offered to sell, sold]" }, { "id": "LEL3_72", "text": "[You imported] the Work" }, { "id": "LEL3_73", "text": "[You transfered] the Work" }, { "id": "LEL3_75", "text": "[You instituted] patent" }, { "id": "LEL5_89", "text": "[Any Contribution" }, { "id": "LEL5_90", "text": "[You explicitly stated] terms" }, { "id": "LEL5_91", "text": "[Nothing herein supersede ]or" }, { "id": "LEL5_92", "text": "[You submitted] a Work for" }, { "id": "LEL6_95", "text": "[You used trade names," }, { "id": "LEL6_96", "text": "[As required ]for reasonable" }, { "id": "LEL6_97", "text": "[You intend to exercice permissions" }, { "id": "LEL7_99", "text": "[Required by applicable law or" }, { "id": "LEL7_101", "text": "[You determined" }, { "id": "LEL7_102", "text": "[You assumed] any risks" }, { "id": "LEL7_103", "text": "You intend to exercice permissions" }, { "id": "LEL8_105", "text": "[Required by applicable law" }, { "id": "LEL8_107", "text": "[You holded] Contributor" }, { "id": "LEL8_108", "text": "You intend to exercice permissions" }, { "id": "LEL9_111", "text": "[You offered, and charge] a" }, { "id": "LEL9_112", "text": "[You acted] only on Your own" }, { "id": "LEL9_113", "text": "[You agreed] to indemnify," }
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
        "id":"LEL2",   
        "text": "LEL2",
        "icon":"/static/icon/right_blue.ico",
        
       
    },
    {
        "id":"LEL3",   
        "text": "LEL3",
        "icon":"/static/icon/right_blue.ico",
        

        "state":
        {
            "opened": true,
            
        },

        
    },
    {
        "id":"LEL4",
        "text": "LEL4",
        "icon":"/static/icon/right_blue.ico",
        
        

        "state":
        {
            "opened": true,
            
        },

        "children": [
            {
                "text":"LEL4a",
                "id":"LEL4a",
                "icon":"/static/icon/duty_blue.ico",
               
            },
            {
                "text":"LEL4b",
                "id":"LEL4b",
                "icon":"/static/icon/duty_blue.ico",
                
            },
            {
                "text":"LEL4c",
                "id":"LEL4c",
                "icon":"/static/icon/duty_blue.ico",
               
            },
            {
                "text":"LEL4d",
                "id":"LEL4d",
                "icon":"/static/icon/duty_blue.ico",
                "state":{
                    "opened":true,
                    
                },
                "children":[
                    {
                    
                        "text":"LEL4dAddAttrib",
                        "id":"LEL4dAddAttrib",
                        "icon":"/static/icon/right_blue.ico",
                        
                    },
                    {
                        "text":"LEL4dAddCopyright",
                        "id":"LEL4dAddCopyright",
                        "icon":"/static/icon/right_blue.ico",
                    }
                ]
            }    
        ]
    },
    {
        "id":"LEL5", 
        "text": "LEL5",
        "icon":"/static/icon/duty_blue.ico",

    
    },
    {
        "id":"LEL6",   
        "text": "LEL6",
        "icon":"/static/icon/duty_blue.ico",
    
    },
    {
        "id":"LEL7",
        "text":"LEL7",
        "icon":"/static/icon/duty_blue.ico",
    },
    {
        "id":"LEL8",
        "text":"LEL8",
        "icon":"/static/icon/duty_blue.ico",
    },
    {
        "id":"LEL9",
        "text":"LEL9",
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
            $.each(lel_id,function(_id,_obj_) {
               
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
        .dot(lel[dot_index])
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
            accessURL = "http://localhost:4567/assert/9/1"
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

        
       

        if ($('#data').jstree('get_selected',true)[0].id.startsWith('LEL')) {
            
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



