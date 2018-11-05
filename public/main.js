
var apache2 = [
    `digraph G {
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
            Apache2_48 [shape=box, label="[You prepared Derivative Works\n of] the Work and such\n Derivative Works in Source\n or Object form"];
            Apache2_48 -> Apache2_46;
            Apache2_49 [shape=box, label="[You publicly displayed] the\n Work and such Derivative\n Works in Source or Object form"];
            Apache2_49 -> Apache2_45;
            Apache2_50 [shape=box, label="[You publicly performed] the\n Work and such Derivative\n Works in Source or Object form"];
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
    `digraph G {
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
    `digraph G {
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
    `digraph G {
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
    `digraph G {
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
    `digraph G {
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
    `digraph G {
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
    `digraph G {
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
    `digraph G {
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
    `digraph G {
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
    `digraph G {
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
            Apache6_97 [shape=box, label="[You exercice permission\n granted by this License ]"];
            Apache6_97 -> Apache6[label="activates"];
            }
        }
    `,
    `digraph G {
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
            Apache7_103 [shape=box, label="You exercice permission\n granted by this License"];
            Apache7_103 -> Apache7[label="activates"];
            }
        }
    `,
    `digraph G {
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
            Apache8_108 [shape=box, label="You exercice permissions\n granted by this License"];
            Apache8_108 -> Apache8[label="activates"];
            }
        }
    `,
    `digraph G {
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

var graph = null;

$(".statement").click(function () {
    index = $(this).attr("class").split(' ')
    console.log("statement index: "+index[1])
    
    d3.select("#graph").graphviz()
        .fade(true)
        .zoom(false)
        .renderDot(apache2[index[1]],function (){
            graph = $("svg")
            console.log(graph)
            //TODO : create function registering click event on svg graph, will build jsonData on click
            // graph.click(function (event){
            //     console.log("svg clicked...Element--->"+event.target, event.type)
            // });
            SVG_Interaction()
            //TODO: fit rendered graphiz to div container and enable zooming using maybe an svg nav library
        });


});

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






