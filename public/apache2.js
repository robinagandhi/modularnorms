/*
Note check why click event register more than once when a SS_ is clicked
maybe add click event to SS_ in column 1 box-3

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
            Apache2_54 [shape=box, label="SS_Apache4", style=filled, fillcolor=orange];
            Apache2_54 -> Apache2_53;
            Apache2_55 [shape=box, label="and", style=filled, fillcolor=grey];
            Apache2_55 -> Apache2_53;
            Apache2_56 [shape=box, label="and", style=filled, fillcolor=grey];
            Apache2_56 -> Apache2_55;
            Apache2_57 [shape=box, label="and", style=filled, fillcolor=grey];
            Apache2_57 -> Apache2_56;
            Apache2_58 [shape=box, label="SS_Apache5", style=filled, fillcolor=orange];
            Apache2_58 -> Apache2_57;
            Apache2_59 [shape=box, label="and", style=filled, fillcolor=grey];
            Apache2_59 -> Apache2_57;
            Apache2_60 [shape=box, label="SS_Apache6", style=filled, fillcolor=orange];
            Apache2_60 -> Apache2_59;
            Apache2_61 [shape=box, label="SS_Apache7", style=filled, fillcolor=orange];
            Apache2_61 -> Apache2_59;
            Apache2_62 [shape=box, label="SS_Apache8", style=filled, fillcolor=orange];
            Apache2_62 -> Apache2_56;
            Apache2_63 [shape=box, label="SS_Apache9", style=filled, fillcolor=orange];
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
            Apache3_77 [shape=box, label="SS_Apache4", style=filled, fillcolor=orange];
            Apache3_77 -> Apache3_76;
            Apache3_78 [shape=box, label="and", style=filled, fillcolor=grey];
            Apache3_78 -> Apache3_76;
            Apache3_79 [shape=box, label="and", style=filled, fillcolor=grey];
            Apache3_79 -> Apache3_78;
            Apache3_80 [shape=box, label="and", style=filled, fillcolor=grey];
            Apache3_80 -> Apache3_79;
            Apache3_81 [shape=box, label="SS_Apache9", style=filled, fillcolor=orange];
            Apache3_81 -> Apache3_80;
            Apache3_82 [shape=box, label="and", style=filled, fillcolor=grey];
            Apache3_82 -> Apache3_80;
            Apache3_83 [shape=box, label="SS_Apache6", style=filled, fillcolor=orange];
            Apache3_83 -> Apache3_82;
            Apache3_84 [shape=box, label="SS_Apache7", style=filled, fillcolor=orange];
            Apache3_84 -> Apache3_82;
            Apache3_85 [shape=box, label="SS_Apache8", style=filled, fillcolor=orange];
            Apache3_85 -> Apache3_79;
            Apache3_86 [shape=box, label="SS_Apache5", style=filled, fillcolor=orange];
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
            Apache4_3 [shape=box, label="SS_Apache4a", style=filled, fillcolor=orange];
            Apache4_3 -> Apache4_2;
            Apache4_4 [shape=box, label="and", style=filled, fillcolor=grey];
            Apache4_4 -> Apache4_2;
            Apache4_5 [shape=box, label="SS_Apache4b", style=filled, fillcolor=orange];
            Apache4_5 -> Apache4_4;
            Apache4_6 [shape=box, label="and", style=filled, fillcolor=grey];
            Apache4_6 -> Apache4_4;
            Apache4_7 [shape=box, label="SS_Apache4c", style=filled, fillcolor=orange];
            Apache4_7 -> Apache4_6;
            Apache4_8 [shape=box, label="SS_Apache4d", style=filled, fillcolor=orange];
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
            Apache4a_10 [shape=box, label="[You reproduced and\n distributed copies of the\n Work or Derivative Works]"];
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
            Apache4b_12 [shape=box, label="[You reproduced and\n distributed copies of the\n Work or Derivative Works]"];
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
            Apache4c_17 [shape=box, label="[You reproduced and\n distribute copies of the\n Work or Derivative Works]"];
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
            Apache4d_32 [shape=box, label="[You reproduced and\n distributed copies of the\n Work or Derivative Works]"];
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
            Apache4dAddAttrib_36 [shape=box, label="SS_Apache4d", style=filled, fillcolor=orange];
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
            Apache4dAddCopyright_41 [shape=box, label="SS_Apache4", style=filled, fillcolor=orange];
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
            Apache5_92 [shape=box, label="[You submitted] a Work for\n Contribution"];
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
            Apache6_97 [shape=box, label="[You exerciced permission\n granted by this License ]"];
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
            Apache7_103 [shape=box, label="You exerciced permission\n granted by this License"];
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
            Apache8_108 [shape=box, label="You exerciced permissions\n granted by this License"];
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
            Apache9_114 [shape=box, label="SS_Apache4", style=filled, fillcolor=orange];
            Apache9_114 -> Apache9[label="activates"];
            }
        }
    `
]

//var test = [];

var margin = 10 //to avoid scrollbars
var graph = null,
    graphObj = null;

var resultJSON = []; //hold the json value corresponding to the answer the user select
var polygon = [];
var nodeName = "";
var dutyIndex = 0, visitedRightIndex = 0;



var duties = []; //hold the duties in a right super situation
var dutiesToBeVisited = []; //hold duties to be visited
var visitedRight = []; //hold right already visited
var SS_name = null;

//Attach id to each question so we can colr the corresponding situation on the graph and also build resultJSON file
//duty atomic situation questions pool
var dutyQuestionPool = {

    "SS_Apache4a":
    {
        
        "Did you reproduce or distribute copy of the Work or Derivative Works?": ["Apache4a_10"],
        "Did you give other recipients of the Work or Derivative Work a copy of this License? ": ["Apache4a_9"]
    },


    "SS_Apache4b":
    {
        "Do you intend to reproduce or distribute copy of the Work or Derivative Works?": ["Apache4b_12"],
        "Did you cause any modified file to carry prominent notices stating that You changed the File?": ["Apache4b_11"]
    },


    "SS_Apache4c":
    {
        "Do you intend to reproduce or distribute copy of the Work or Derivative Works?": ["Apache4c_17"],
        "Did you retained in  the Source form of any Derivative Works that You distribute all copyright, patent,trademark, and attribution notices from the Source form of the Work?": ["Apache4c_14"],
        "Did you retained those notices that do not pertain to any part of the Derivative Works?": ["Apache4c_16"]
    },


    "SS_Apache4d":
    {
        "Do you intend to reproduce or distribute copy of the Work or Derivative Works?": ["Apache4d_32"],
        "Does the Work include a NOTICEtext file as part of its distribution? ": ["Apache4d_33"],
        "Did you exclude those notices that do not pertain to any part of the Derivatove Works?": ["Apache4d_30"],
        "Did you include a readable copy of the attribution notices contained within such NOTICE file?": ["Apache4d_20"],
        "Question with multiple situation ID": ["Apache4d_22", "Apache4d_29", "Apache4d_28", "Apache4d_26", "Apache4d_25"],

    },

    "SS_Apache5":
    {
        "Question1 goes here": ["Apache5_92"],
        "Question 2 goes here ": ["Apache5_91"],
        "Question 3 goes here": ["Apache5_90"],
        "Jebrewing blah blah": ["Apache5_89"]
    },

    "SS_Apache6":
    {
        "activating question 1 goes here": ["Apache6_97"],
        "satisfying question 1 goes here ": ["Apache6_96"],
        "satisfying question 2 goes here": ["Apache6_95"]
    },

    "SS_Apache7":
    {
        "activating question 1 goes here": ["Apache7_103"],
        "satisfying question 1 goes here": ["Apache7_99"],
        "satusfying question 2 goes here": ["Apache7_102"],
        "satisfying question 3 goes here": ["Apache7_101"]
    },

    "SS_Apache8":
    {
        "activating question goes here": ["Apache8_108"],
        "satisfying question1 goes here": ["Apache8_105"],
        "satisfying question 2 goes here": ["Apache8_107"]
    },
};

//right atomic situations questions pool 
var rightQuestionPool = {
    "SS_Apache2": {
        "Did you distributed the Work and such Derivative Works in source or object form?": ["Apache2_47"],
        "Question2": ["Apache2_48"],
        "Question3": ["Apache2_49"],
        "Question4": ["Apache2_50"],
        "Question5": ["Apache2_51"],
        "Question6": ["Apache2_52"]
    },

    "SS_Apache3": {
        "Did you instituted patent litigation against any entity (including cross claim or counter clam in a lawsuit alleging that the work...infringement?": ["Apache3_69"],
        "Question2": ["Apache3_70"],
        "Question3": ["Apache2_71"],
        "Question4": ["Apache3_72"],
        "Did you transfered the Work?": ["Apache3_73"],
        "Did you institute patent litigation against any entity ....infringement": ["Apache3_75"]
    },
    "SS_Apache4": {
        "Did you reproduced and distributed copies of the work or derivative works thereof in any medium, with or without...Object form?": ["Apache4_1"]
    },
    "SS_Apache4dAddAttrib": {
        "Do your own additional attribution notices constructed as modifying the license?": ["Apache4dAddAttrib_37"],
        "Did you add your own attribution...text form of the Work?": ["Apache4dAddAttr_34"]
    },
    "SS_Apache4dAddCopyright": {
        "Did you provide additional or different license terms and conditions for use...as a whole?": ["Apache4dAddCopyright_40"],
        "Did you added your own copyright statement to your modification?": ["Apache4dAddCopyright_39"]
    },
    "SS_Apache9": {
        "Did you offered and charged a fee for acceptance of support...with this License?": ["Apache9_111"],
        "Did you acted only on your own behalf and ...not on behalf of any other Contributor?": ["Apache9_112"],
        "Did you agreed to indemnify, defend and hold each contributor harmless for any ....warranty or additional liability?": ["Apache9_113"]
    }
};

var questionPool = [];

var graphviz = d3.select("#graph")
    .graphviz()
    .attributer(attributer);

$( function() {
    $( document ).tooltip();
    } );

//statement represent an html class that all license clause have. Each statement also have a position 
//and the corresponding model name as class
$(".statement").click(function () {
    visitedRight = [];
    dutiesToBeVisited = [];
    visitedRightIndex = 0;
    dutyIndex = 0;
    polygon = [];
    $("#nextButton").off("click");
    questionPool = [];

    //index reprensent each class name eg. index[0] = statement, index [1] = position, index[2] = model name
    index = $(this).attr("class").split(' ')

    console.log("statement index: " + index[1])

    console.log("statement name: " + index[2])
    //generate the graph using the position
    graphviz
        .dot(apache2[index[1]])
        .zoom(false)
        .render(function () {
            graph = $("svg")
            SS_handler()
        });

});



/** 
 * This function allow graph to fit in div element
*/
function attributer(datum, index, nodes) {
    var selection = d3.select(this);
    if (datum.tag == "svg") {
        var width = document.getElementById("box-2").offsetWidth;
        //console.log(width);
        var height = document.getElementById("box-2").offsetHeight;
        //console.log(height);
        selection
            .attr("width", width)
            .attr("height", height)
        datum.attributes.width = width - margin;
        datum.attributes.height = height - margin;
    }

}



/**
 * This function distinguish between a duty or rigt super situation, and display the appropriate questions and populate the duties array in case the 
 * super situation is a right
 */

function SS_handler() {

    //clear box-3, which is the wizard box
    $("#question").text("")
    $("#duty_list").empty();
    //reset dropdown or check box here
    $("#choice").val("Don't know")
    //hold the SS_name
    SS_name = null;
    //hold the specific questionPool for the given super situation
    questionPool = [];
    var arrayIndex = 0; //index to loop through question pool

    //enable tooltip
    enableTooltip(graph);


   


    if (graph.children().children("title").html() == "G_Duty") {


        $("#wizard-box-question").show();
        $("#wizard-box-list").hide()
        questionPool = [];
        console.log("Display duty stuff");
        //get name of super situation then compare to dutyQuestion array (object) and then display the corresponding question in box 3
        SS_name = graph.children().children("g#clust1").children("text").html();
        console.log("duty name: " + SS_name);
        //TODO save the user answer and color the satisfying box here
        //Ask assessement question related to SS_duty and save answer
        //get corresponding duty questionPool

        for (const ss_name_key of Object.keys(dutyQuestionPool)) {

            if (SS_name == ss_name_key) {
                questionPool = Object.entries(dutyQuestionPool[ss_name_key])
            }
        }
      
        
        console.log(questionPool); //display the question pool
        $("#question").text(questionPool[arrayIndex][0]);
        console.log("Question id: " + questionPool[arrayIndex][1]) 
        //save corresponding polygon in a variable
        polygon = getPolygon(questionPool[arrayIndex][1]);

        //clicking the next button display the next question
        $("#nextQuestionButton").off('click');
        $("#nextQuestionButton").click(function () { //register click event on next button

            //reset dropdown or check box here
            $("#choice").val("Don't know")
            if (arrayIndex < (questionPool.length - 1)) {
                arrayIndex++;
                $("#question").text(questionPool[arrayIndex][0]);
                console.log("Question id: " + questionPool[arrayIndex][1])   //questionPool[arrayIndex[1]] is an array create function to color situation

                 //save corresponding polygon in a variable
                polygon = getPolygon(questionPool[arrayIndex][1]);

            } else {
                console.log("No more question")

                if (dutiesToBeVisited != [] && dutyIndex < (dutiesToBeVisited.length - 1)) {
                    dutyIndex++;
                    visitDuty(dutiesToBeVisited, dutyIndex);

                } else {

                    if (dutyIndex < (dutiesToBeVisited.length - 1) && dutiesToBeVisited != []) {
                        visitDuty(dutiesToBeVisited, dutyIndex)
                    }
                    console.log("done traversing")


                }
            }

        });
        $("#previousQuestionButton").off('click')
        $("#previousQuestionButton").click(function () { //register click event on previous button
            //reset dropdown or check box here
            $("#choice").val("Don't know")
            if (arrayIndex > 0) {
                arrayIndex--;
                $("#question").text(questionPool[arrayIndex][0]);
                console.log("Question id: " + questionPool[arrayIndex][1])   //questionPool[arrayIndex[1]] is an array create function to color situation
                //save corresponding polygon in a variable
                polygon = getPolygon(questionPool[arrayIndex][1]);
            } else {
                console.log("No previous question");

            }
        });


    } else if (graph.children().children("title").html() == "G_Right") {
        duties = [] //empty duties array

        $("#wizard-box-question").hide();
        $("#wizard-box-list").show()

        questionPool = [];
        SS_name = graph.children().children("g#clust1").children("text").html();

        graphObj = graph.children().children();
        console.log("right name: " + SS_name)
        console.log("Display right stuff");

        //start by node with index 4 to skip unnecessary nodes

        for (var i = 4; i < graphObj.length; i++) {
            //only visit nodes not edges
            if (graphObj[i].id.includes('node')) {

                var children = graphObj[i].children;
                //console.log(graphObj[i])

                //console.log(children);

                //start by index 1 because index 0 is the title of node
                for (var j = 1; j < children.length; j++) {
                    if (children[j].nodeName == "text") {

                        if (children[j].innerHTML[0] == "S" && children[j].innerHTML[1] == "S") {
                            // console.log("Duty: "+children[j].innerHTML)
                            duties.push(children[j].innerHTML); //populate the duties array
            
                        }
                    }
                }
            }

        }

        dutiesToBeVisited = duties;
        console.log("This right duties: " + duties) //display the activating duties for this right

        //get corresponding right questionPool
        for (const ss_name_key of Object.keys(rightQuestionPool)) {

            if (SS_name == ss_name_key) {
                questionPool = Object.entries(rightQuestionPool[ss_name_key])
            }
        }


        console.log("Questions for this right "+questionPool);

        $("#duty_list").empty();
        $("#prompt").text("The following SS need to be visited to get " + SS_name + " right");

        duties.forEach(element => {

            $("#duty_list").append("<li> <a class ='supersit'>" + element + "</a></li>")

        });

        //When user click next, recursively visit every duty or rights. At the end, display satisfying question to a user
        $("#nextButtonList").off('click');
        $("#nextButtonList").click(function () {

            $("#nextQuestionButton").off('click');
            visitDuty(dutiesToBeVisited, dutyIndex);
            $("#nextQuestionButton").off('click');
        });

    }

}

function SS_handler2() {

    //clear box-3, which is the wizard box
    $("#question").text("")
    $("#duty_list").empty();
    //hold the SS_name
    SS_name = null;
    //hold the specific questionPool for the given super situation
    questionPool = [];
    var arrayIndex = 0; //index to loop through question pool

    //enable tooltip
    enableTooltip(graph);




    if (graph.children().children("title").html() == "G_Duty") {


        $("#wizard-box-question").show();
        $("#wizard-box-list").hide()
        questionPool = [];
        console.log("Display duty stuff");
        //get name of super situation then compare to dutyQuestion array (object) and then display the corresponding question in box 3
        SS_name = graph.children().children("g#clust1").children("text").html();
        console.log("duty name: " + SS_name);
        //TODO save the user answer and color the satisfying box here
        //Ask assessement question related to SS_duty and save answer
        //get corresponding duty questionPool

        for (const ss_name_key of Object.keys(dutyQuestionPool)) {

            if (SS_name == ss_name_key) {
                questionPool = Object.entries(dutyQuestionPool[ss_name_key])
            }
        }

        console.log("duty questions:" + questionPool); //display the question pool

        //Display first question in list 
        $("#question").text(questionPool[arrayIndex][0]);

        console.log("Question id: " + questionPool[arrayIndex][1])

        //save corresponding polygon in a variable
        polygon = getPolygon(questionPool[arrayIndex][1]);

        //clicking the next button display the next question
        $("#nextQuestionButton").off('click');
        $("#nextQuestionButton").click(function () { //register click event on next button

            //reset dropdown or check box here
            $("#choice").val("Don't know")
            if (arrayIndex < (questionPool.length - 1)) {
                arrayIndex++;
                $("#question").text(questionPool[arrayIndex][0]);
                console.log("Question id: " + questionPool[arrayIndex][1])   //questionPool[arrayIndex[1]] is an array create function to color situation
                //save corresponding polygon in a variable
                polygon = getPolygon(questionPool[arrayIndex][1]);
                //colorSituation(questionPool[arrayIndex][1],user_input)

                

            } else {
                console.log("No more question")


                if (dutiesToBeVisited != [] && dutyIndex < (dutiesToBeVisited.length - 1)) {
                    dutyIndex++;
                    visitDuty(dutiesToBeVisited, dutyIndex);

                } else {

                    if (dutyIndex < (dutiesToBeVisited.length - 1) && dutiesToBeVisited != []) {
                        visitDuty(dutiesToBeVisited, dutyIndex)
                    }
                    console.log("done traversing")


                }
            }

        });
        $("#previousQuestionButton").off('click')
        $("#previousQuestionButton").click(function () { //register click event on previous button
            //reset dropdown or checkvox here
            $("#choice").val("Don't know")
            if (arrayIndex > 0) {
                arrayIndex--;
                $("#question").text(questionPool[arrayIndex][0]);
                console.log("Question id: " + questionPool[arrayIndex][1])   //questionPool[arrayIndex[1]] is an array create function to color situation
                //save corresponding polygon in a variable
                polygon = getPolygon(questionPool[arrayIndex][1]);
            } else {
                console.log("No previous question");

            }
        });


    } else if (graph.children().children("title").html() == "G_Right") {

        duties = [] //empty duties array
        // var previousIndex = dutyIndex;
        // dutyIndex = 0;
        $("#wizard-box-question").hide();
        $("#wizard-box-list").show()

        questionPool = [];
        SS_name = graph.children().children("g#clust1").children("text").html();

        graphObj = graph.children().children();
        console.log("right name: " + SS_name)
        console.log("Display right stuff");
        //populate this array with right already visited.
        visitedRight[visitedRightIndex] = dutiesToBeVisited.splice(dutyIndex, 1);
        visitedRightIndex++;
        console.log(dutiesToBeVisited);

        //start by node with index 4 to skip unnecessary nodes

        for (var i = 4; i < graphObj.length; i++) {
            //only visit nodes not edges
            if (graphObj[i].id.includes('node')) {

                var children = graphObj[i].children;
                //console.log(graphObj[i])

                //console.log(children);

                //start by index 1 because index 0 is the title of node
                for (var j = 1; j < children.length; j++) {
                    if (children[j].nodeName == "text") {

                        if (children[j].innerHTML[0] == "S" && children[j].innerHTML[1] == "S") {
                            // console.log("Duty: "+children[j].innerHTML)

                            duties.push(children[j].innerHTML); //populate the duties array
                            /**
                             * If the element to be added to the dutiesToBeVisited is in visitedRight array then dont add it. Prompt user that this super situation has alreday been visited.
                             */

                             if ([].concat.apply([],visitedRight).includes(children[j].innerHTML)){
                                 //Maybe an alert to user to tell this rights have already been visited
                                 alert(children[j].innerHTML+ " has already been visited. Questions related to this right will not be ask again.");

                                console.log(children[j].innerHTML+ " has already been visited");
                             } else {
                                 //?? duties are populated in inverse so they are visited in inverse too. Fix this
                                dutiesToBeVisited.splice(dutyIndex, 0, children[j].innerHTML); //populate the duties array starting at the position of the previously removed element
                             }
                        }
                    }
                }
            }

        }

        console.log("This right duties: " + duties) //display the activating duties for this right

        //get corresponding right questionPool (in case we need to ask those at some point in time)
        for (const ss_name_key of Object.keys(rightQuestionPool)) {

            if (SS_name == ss_name_key) {
                questionPool = Object.entries(rightQuestionPool[ss_name_key])
            }
        }

        console.log("Questions for this right: " + questionPool);

        $("#duty_list").empty();

        $("#prompt").text("The following SS need to be visited to get " + SS_name + " right");

        duties.forEach(element => {

            $("#duty_list").append("<li> <a class ='supersit'>" + element + "</a></li>")

        });

        //When user click next, recursively visit every duty or rights. At the end, display satisfying question to a user
        $("#nextButtonList").off('click');
        $("#nextButtonList").click(function () {

            $("#nextQuestionButton").off('click');
            if (dutyIndex < (dutiesToBeVisited.length - 1)) {
                visitDuty(dutiesToBeVisited, dutyIndex);

            }else{
                //The dutiesToBeVisited array has been looped through. Maybe prompt user to visit other supersituation of interest?
                console.log("No more duties");
                
            }
            
            $("#nextQuestionButton").off('click');
        });

    }

}

function visitDuty(_duties, _index) {
    //duties = [];
    $("#nextQuestionButton").off('click')
    var duty = _duties[_index].slice(3)

    $("." + duty).focus();
    var index = $("." + duty).attr("class").split(" ")[1];

    graphviz
        .dot(apache2[index])
        .zoom(false)
        .render(function () {

            SS_handler2()

        });

}

/**
 * 
 * @param {*} ___id 
 * This function color polygon to default yellow and return corresponding polygon
 */
function getPolygon(__id) {
    var __polygon = [];

    for(var i = 4; i< graph.children().children().length; i++){

                    
        if (graph.children().children()[i].id.includes("node") && graph.children().children()[i].children[0].innerHTML == __id) {

             __polygon.push(graph.children().children()[i].children[1]);
             __polygon[0].setAttribute('fill','#E5E338');
        
        }
    }
    __polygon.push(__id);
    return __polygon;
    
}

$("#choice").on('change', function () {
   
    if ($("#choice option:selected").text() == "Yes") {

        polygon[0].setAttribute('fill','#57BC90'); //set the polygon attribute fill to green
        console.log(polygon[1][0]);
        updateJSON(polygon[1][0],"ST");
        
    } else if ($("#choice option:selected").text() == "No") {

        polygon[0].setAttribute('fill','#CD5360'); //set the polygon attribute fill to red
        updateJSON(polygon[1][0],"SF");

    } else if ($("#choice option:selected").text() == "Dont'know"){

        polygon[0].setAttribute('fill','#E5E338'); //set the polygone attribute fill to yellow
        updateJSON(polygon[1][0],"SU");
    }
});

function updateJSON(_id,status) {
    
}

function enableTooltip(_graph) {

   
        
    

    _graph.mouseover(function(event){

        var situationSVG = null;
        var _text = "";
        var lines = [];
        var id = "";
        
        if($(event.target).parent().hasClass("node")){
            _text = $(event.target).parent().text();
            lines = _text.split("\n");
            lines.splice(0,3);
            _text = lines.join("\n");
           
            if(_text != "not\n" && _text != "and\n" && _text != "or\n" ){
                id = $(event.target).parent()[0].id;
                console.log(id)
                
                situationSVG = $(event.target).parent();
                console.log(situationSVG);
                console.log(_text);
                  
            }

            
        }

        




    });
    
}


