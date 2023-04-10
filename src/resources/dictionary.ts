﻿import { DictionaryResource } from '@/typings/index'

/**
 * Built-in dictionaries in an array.
 * Why arrays? Because it keeps the order across browsers.
 */
export const dictionaries: DictionaryResource[] = [
  {
    id: 'cet4',
    name: 'CET-4',
    description: '大学英语四级词库',
    category: '英语学习',
    url: '',
    length: 2607,
    language: 'en',
  },
  {
    id: 'cet6',
    name: 'CET-6',
    description: '大学英语六级词库',
    category: '英语学习',
    url: '/dicts/CET6_T.json',
    length: 2345,
    language: 'en',
  },
  {
    id: 'gmat',
    name: 'GMAT',
    description: 'GMAT 词库',
    category: '英语学习',
    url: '/dicts/GMAT_3_T.json',
    length: 3047,
    language: 'en',
  },
  {
    id: 'gre',
    name: 'GRE',
    description: 'GRE 词库',
    category: '英语学习',
    url: '/dicts/GRE_3_T.json',
    length: 6515,
    language: 'en',
  },
  // {
  //   id: 'zhtest',
  //   name: '中文测试',
  //   description: '中文测试词库',
  //   category: '测试',
  //   url: '/dicts/chinese_test.json',
  //   length: 27,
  //   language: 'zh',
  // },
  // {
  //   id: 'jptest',
  //   name: '日文测试',
  //   description: '日文测试词库',
  //   category: '测试',
  //   url: '/dicts/japanese_test.json',
  //   length: 20,
  //   language: 'ja',
  // },
  {
    id: 'ielts',
    name: 'IELTS',
    description: '雅思词库',
    category: '英语学习',
    url: '/dicts/IELTS_3_T.json',
    length: 3575,
    language: 'en',
  },
  {
    id: 'kaoyan',
    name: '考研',
    description: '研究生英语入学考试词库',
    category: '英语学习',
    url: '/dicts/KaoYan_3_T.json',
    length: 3728,
    language: 'en',
  },
  {
    id: 'level4',
    name: '专四',
    description: '英语专业四级词库',
    category: '英语学习',
    url: '/dicts/Level4luan_2_T.json',
    length: 4025,
    language: 'en',
  },
  {
    id: 'level8',
    name: '专八',
    description: '英语专业八级词库',
    category: '英语学习',
    url: '/dicts/Level8luan_2_T.json',
    length: 12197,
    language: 'en',
  },
  {
    id: 'gaokao3500',
    name: '高考 3500 词',
    description: '高考常见词 3500',
    category: '英语学习',
    url: '/dicts/GaoKao_3500.json',
    length: 3893,
    language: 'en',
  },
  {
    id: 'SHjuniormiddleOxford',
    name: '上海初中牛津词汇',
    description: '上海初中牛津词汇',
    category: '英语学习',
    url: '/dicts/OxfordVocabulary_juniorMiddleSH.json',
    length: 1270,
    language: 'en',
  },
  {
    id: 'sat',
    name: 'SAT',
    description: '美国 SAT 考试词库',
    category: '英语学习',
    url: '/dicts/SAT_3_T.json',
    length: 4464,
    language: 'en',
  },
  {
    id: 'toefl',
    name: 'TOEFL',
    description: '托福考试常见词',
    category: '英语学习',
    url: '/dicts/TOEFL_3_T.json',
    length: 4264,
    language: 'en',
  },
  {
    id: 'bec2',
    name: '商务英语',
    description: '商务英语常见词',
    category: '英语学习',
    url: '/dicts/BEC_2_T.json',
    length: 2753,
    language: 'en',
  },
  {
    id: 'bec3',
    name: 'BEC',
    description: 'BEC考试常见词',
    category: '英语学习',
    url: '/dicts/BEC_3_T.json',
    length: 2825,
    language: 'en',
  },
  {
    id: 'pets3',
    name: 'PETS-3',
    description: '全国英语等级考试常考词汇',
    category: '英语学习',
    url: '/dicts/PETS_3.json',
    length: 1942,
    language: 'en',
  },
  {
    id: 'PTE_junior',
    name: 'PTE 基础词汇',
    description: '',
    category: 'PTE',
    url: '/dicts/PTE_junior.json',
    length: 2651,
    language: 'en',
  },
  {
    id: 'PTE_senior',
    name: 'PTE 高阶词汇',
    description: '',
    category: 'PTE',
    url: '/dicts/PTE_senior.json',
    length: 3170,
    language: 'en',
  },
  {
    id: 'PTE_FIB_R_junior',
    name: '阅读 FIB 基础机经词汇',
    description: '',
    category: 'PTE',
    url: '/dicts/PTE_FIB_R_junior.json',
    length: 941,
    language: 'en',
  },
  {
    id: 'PTE_FIB_R_senior',
    name: '阅读 FIB 高阶机经词汇',
    description: '',
    category: 'PTE',
    url: '/dicts/PTE_FIB_R_senior.json',
    length: 1272,
    language: 'en',
  },
  {
    id: 'PTE_WFD',
    name: 'WFD 机经词汇',
    description: '',
    category: 'PTE',
    url: '/dicts/PTE_WFD.json',
    length: 1212,
    language: 'en',
  },
  {
    id: 'PTE_FIB_L',
    name: '听力 FIB 机经词汇',
    description: '',
    category: 'PTE',
    url: '/dicts/PTE_FIB_L.json',
    length: 646,
    language: 'en',
  },
  {
    id: 'coder',
    name: 'Coder Dict',
    description: '程序员常见单词词库',
    category: '代码练习',
    url: '/dicts/it-words.json',
    length: 1700,
    language: 'code',
  },
  {
    id: 'jsArray',
    name: 'JS: Array',
    description: 'JavaScript API 词典',
    category: '代码练习',
    url: '/dicts/js-array.json',
    length: 36,
    language: 'code',
  },
  {
    id: 'jsDate',
    name: 'JS: Date',
    description: 'JavaScript API 词典',
    category: '代码练习',
    url: '/dicts/js-date.json',
    length: 34,
    language: 'code',
  },
  {
    id: 'jsGlobal',
    name: 'JS: Global',
    description: 'JavaScript API 词典',
    category: '代码练习',
    url: '/dicts/js-global.json',
    length: 9,
    language: 'code',
  },
  {
    id: 'jsMapSet',
    name: 'JS: Map & Set',
    description: 'JavaScript API 词典',
    category: '代码练习',
    url: '/dicts/js-map-set.json',
    length: 16,
    language: 'code',
  },
  {
    id: 'jsMath',
    name: 'JS: Math',
    description: 'JavaScript API 词典',
    category: '代码练习',
    url: '/dicts/js-math.json',
    length: 38,
    language: 'code',
  },
  {
    id: 'jsNumber',
    name: 'JS: Number',
    description: 'JavaScript API 词典',
    category: '代码练习',
    url: '/dicts/js-number.json',
    length: 22,
    language: 'code',
  },
  {
    id: 'jsObject',
    name: 'JS: Object',
    description: 'JavaScript API 词典',
    category: '代码练习',
    url: '/dicts/js-object.json',
    length: 37,
    language: 'code',
  },
  {
    id: 'jsPromise',
    name: 'JS: Promise',
    description: 'JavaScript API 词典',
    category: '代码练习',
    url: '/dicts/js-promise.json',
    length: 9,
    language: 'code',
  },
  {
    id: 'jsString',
    name: 'JS: String',
    description: 'JavaScript API 词典',
    category: '代码练习',
    url: '/dicts/js-string.json',
    length: 32,
    language: 'code',
  },
  {
    id: 'python-builtin',
    name: 'Python: Built-in',
    description: 'Python Built-in API',
    category: '代码练习',
    url: '/dicts/python-builtin.json',
    length: 65,
    language: 'code',
  },
  {
    id: 'python-array',
    name: 'Python: array',
    description: 'Python array API ',
    category: '代码练习',
    url: '/dicts/python-array.json',
    length: 11,
    language: 'code',
  },
  {
    id: 'python-date',
    name: 'Python: date',
    description: 'Python date API ',
    category: '代码练习',
    url: '/dicts/python-date.json',
    length: 39,
    language: 'code',
  },
  {
    id: 'python-file',
    name: 'Python: file',
    description: 'Python file API ',
    category: '代码练习',
    url: '/dicts/python-file.json',
    length: 21,
    language: 'code',
  },
  {
    id: 'python-class',
    name: 'Python: class',
    description: 'Python class API ',
    category: '代码练习',
    url: '/dicts/python-class.json',
    length: 13,
    language: 'code',
  },
  {
    id: 'python-set',
    name: 'Python: set',
    description: 'Python set API ',
    category: '代码练习',
    url: '/dicts/python-set.json',
    length: 29,
    language: 'code',
  },
  {
    id: 'python-math',
    name: 'Python: math',
    description: 'Python math API ',
    category: '代码练习',
    url: '/dicts/python-math.json',
    length: 37,
    language: 'code',
  },
  {
    id: 'python-string',
    name: 'Python: string',
    description: 'Python string API ',
    category: '代码练习',
    url: '/dicts/python-string.json',
    length: 40,
    language: 'code',
  },
  {
    id: 'python-system',
    name: 'Python: system',
    description: 'Python system API ',
    category: '代码练习',
    url: '/dicts/python-sys.json',
    length: 24,
    language: 'code',
  },
  {
    id: 'javeArrayList',
    name: 'Java: ArrayList',
    description: 'JavaScript API 词典',
    category: '代码练习',
    url: '/dicts/java-arraylist.json',
    length: 25,
    language: 'code',
  },
  {
    id: 'javaCharacter',
    name: 'Java: Character',
    description: 'JavaScript API 词典',
    category: '代码练习',
    url: '/dicts/java-character.json',
    length: 8,
    language: 'code',
  },
  {
    id: 'javaHashmap',
    name: 'Java: Hashmap',
    description: 'JavaScript API 词典',
    category: '代码练习',
    url: '/dicts/java-hashmap.json',
    length: 22,
    language: 'code',
  },
  {
    id: 'javaLinkedList',
    name: 'Java: LinkedList',
    description: 'JavaScript API 词典',
    category: '代码练习',
    url: '/dicts/java-linkedlist.json',
    length: 25,
    language: 'code',
  },
  {
    id: 'javaString',
    name: 'Java: String',
    description: 'JavaScript API 词典',
    category: '代码练习',
    url: '/dicts/java-string.json',
    length: 48,
    language: 'code',
  },
  {
    id: 'javaStringBuffer',
    name: 'Java: StringBuffer',
    description: 'JavaScript API 词典',
    category: '代码练习',
    url: '/dicts/java-stringBuffer.json',
    length: 20,
    language: 'code',
  },
  {
    id: 'linuxCommand',
    name: 'Linux',
    description: 'Linux Command',
    category: '代码练习',
    url: '/dicts/linux-command.json',
    length: 575,
    language: 'code',
  },
  {
    id: 'csharpList',
    name: 'C#: List API',
    description: 'C# List API',
    category: '代码练习',
    url: '/dicts/csharp-list.json',
    length: 36,
    language: 'code',
  },
  {
    id: 'sql-lower-case',
    name: 'SQL: 常用语句 lower case',
    description: 'SQL 常用语句 小写',
    category: '代码练习',
    url: '/dicts/SQL_statement_lower-case.json',
    length: 12,
    language: 'code',
  },
  {
    id: 'sql-upper-case',
    name: 'SQL: 常用语句 upper case',
    description: 'SQL 常用语句 大写',
    category: '代码练习',
    url: '/dicts/SQL_statement_upper-case.json',
    length: 12,
    language: 'code',
  },
  {
    id: 'san1',
    name: '三年级上',
    description: '人教版三年级上册',
    category: '人教版英语',
    url: '/dicts/PEPXiaoXue3_1_T.json',
    length: 64,
    language: 'en',
  },
  {
    id: 'san2',
    name: '三年级下',
    description: '人教版三年级下册',
    category: '人教版英语',
    url: '/dicts/PEPXiaoXue3_2_T.json',
    length: 72,
    language: 'en',
  },
  {
    id: 'si1',
    name: '四年级上',
    description: '人教版四年级上册',
    category: '人教版英语',
    url: '/dicts/PEPXiaoXue4_1_T.json',
    length: 84,
    language: 'en',
  },
  {
    id: 'si2',
    name: '四年级下',
    description: '人教版四年级下册',
    category: '人教版英语',
    url: '/dicts/PEPXiaoXue4_2_T.json',
    length: 104,
    language: 'en',
  },
  {
    id: 'wu1',
    name: '五年级上',
    description: '人教版五年级上册',
    category: '人教版英语',
    url: '/dicts/PEPXiaoXue5_1_T.json',
    length: 131,
    language: 'en',
  },
  {
    id: 'wu2',
    name: '五年级下',
    description: '人教版五年级下册',
    category: '人教版英语',
    url: '/dicts/PEPXiaoXue5_2_T.json',
    length: 156,
    language: 'en',
  },
  {
    id: 'liu1',
    name: '六年级上',
    description: '人教版六年级上册',
    category: '人教版英语',
    url: '/dicts/PEPXiaoXue6_1_T.json',
    length: 130,
    language: 'en',
  },
  {
    id: 'liu2',
    name: '六年级下',
    description: '人教版六年级下册',
    category: '人教版英语',
    url: '/dicts/PEPXiaoXue6_2_T.json',
    length: 108,
    language: 'en',
  },
  {
    id: 'qi1',
    name: '七年级上',
    description: '人教版七年级上册',
    category: '人教版英语',
    url: '/dicts/PEPChuZhong7_1_T.json',
    length: 392,
    language: 'en',
  },
  {
    id: 'qi2',
    name: '七年级下',
    description: '人教版七年级下册',
    category: '人教版英语',
    url: '/dicts/PEPChuZhong7_2_T.json',
    length: 492,
    language: 'en',
  },
  {
    id: 'ba1',
    name: '八年级上',
    description: '人教版八年级上册',
    category: '人教版英语',
    url: '/dicts/PEPChuZhong8_1_T.json',
    length: 419,
    language: 'en',
  },
  {
    id: 'ba2',
    name: '八年级下',
    description: '人教版八年级下册',
    category: '人教版英语',
    url: '/dicts/PEPChuZhong8_2_T.json',
    length: 466,
    language: 'en',
  },
  {
    id: 'jiu',
    name: '九年级',
    description: '人教版九年级全册',
    category: '人教版英语',
    url: '/dicts/PEPChuZhong9_1_T.json',
    length: 551,
    language: 'en',
  },
  {
    id: 'renjiaogaozhong1',
    name: '高中必修1',
    description: '人教版高中必修1',
    category: '人教版英语',
    url: '/dicts/PEPGaoZhong_1_T.json',
    length: 311,
    language: 'en',
  },
  {
    id: 'renjiaogaozhong2',
    name: '高中必修2',
    description: '人教版高中必修2',
    category: '人教版英语',
    url: '/dicts/PEPGaoZhong_2_T.json',
    length: 319,
    language: 'en',
  },
  {
    id: 'renjiaogaozhong3',
    name: '高中必修3',
    description: '人教版高中必修3',
    category: '人教版英语',
    url: '/dicts/PEPGaoZhong_3_T.json',
    length: 366,
    language: 'en',
  },
  {
    id: 'renjiaogaozhong4',
    name: '高中必修4',
    description: '人教版高中必修4',
    category: '人教版英语',
    url: '/dicts/PEPGaoZhong_4_T.json',
    length: 307,
    language: 'en',
  },
  {
    id: 'renjiaogaozhong5',
    name: '高中必修5',
    description: '人教版高中必修5',
    category: '人教版英语',
    url: '/dicts/PEPGaoZhong_5_T.json',
    length: 357,
    language: 'en',
  },
  {
    id: 'renjiaogaozhong6',
    name: '高中选修6',
    description: '人教版高中选修6',
    category: '人教版英语',
    url: '/dicts/PEPGaoZhong_6_T.json',
    length: 391,
    language: 'en',
  },
  {
    id: 'renjiaogaozhong7',
    name: '高中选修7',
    description: '人教版高中选修7',
    category: '人教版英语',
    url: '/dicts/PEPGaoZhong_7_T.json',
    length: 384,
    language: 'en',
  },
  {
    id: 'renjiaogaozhong8',
    name: '高中选修8',
    description: '人教版高中选修8',
    category: '人教版英语',
    url: '/dicts/PEPGaoZhong_8_T.json',
    length: 420,
    language: 'en',
  },
  {
    id: 'renjiaogaozhong9',
    name: '高中选修9',
    description: '人教版高中选修9',
    category: '人教版英语',
    url: '/dicts/PEPGaoZhong_9_T.json',
    length: 352,
    language: 'en',
  },
  {
    id: 'renjiaogaozhong10',
    name: '高中选修10',
    description: '人教版高中选修10',
    category: '人教版英语',
    url: '/dicts/PEPGaoZhong_10_T.json',
    length: 361,
    language: 'en',
  },
  {
    id: 'renjiaogaozhong11',
    name: '高中选修11',
    description: '人教版高中选修11',
    category: '人教版英语',
    url: '/dicts/PEPGaoZhong_11_T.json',
    length: 309,
    language: 'en',
  },
  {
    id: 'nce1',
    name: '新概念英语-1',
    description: '新概念英语第一册',
    category: '新概念英语',
    url: '/dicts/NCE_1.json',
    length: 900,
    language: 'en',
  },
  {
    id: 'nce2',
    name: '新概念英语-2',
    description: '新概念英语第二册',
    category: '新概念英语',
    url: '/dicts/NCE_2.json',
    length: 858,
    language: 'en',
  },
  {
    id: 'nce3',
    name: '新概念英语-3',
    description: '新概念英语第三册',
    category: '新概念英语',
    url: '/dicts/NCE_3.json',
    length: 1052,
    language: 'en',
  },
  {
    id: 'nce4',
    name: '新概念英语-4',
    description: '新概念英语第四册',
    category: '新概念英语',
    url: '/dicts/NCE_4.json',
    length: 784,
    language: 'en',
  },
  {
    id: 'waiyan1',
    name: '外研七年级上册',
    description: '外研版七年级上册',
    category: '外研版英语',
    url: '/dicts/WaiYanSheChuZhong_1_T.json',
    length: 629,
    language: 'en',
  },
  {
    id: 'waiyan2',
    name: '外研七年级下册',
    description: '外研版七年级下册',
    category: '外研版英语',
    url: '/dicts/WaiYanSheChuZhong_2_T.json',
    length: 438,
    language: 'en',
  },
  {
    id: 'waiyan3',
    name: '外研八年级上册',
    description: '外研版八年级上册',
    category: '外研版英语',
    url: '/dicts/WaiYanSheChuZhong_3_T.json',
    length: 320,
    language: 'en',
  },
  {
    id: 'waiyan4',
    name: '外研八年级下册',
    description: '外研版八年级下册',
    category: '外研版英语',
    url: '/dicts/WaiYanSheChuZhong_4_T.json',
    length: 266,
    language: 'en',
  },
  {
    id: 'waiyan5',
    name: '外研九年级上册',
    description: '外研版九年级上册',
    category: '外研版英语',
    url: '/dicts/WaiYanSheChuZhong_5_T.json',
    length: 381,
    language: 'en',
  },
  {
    id: 'waiyan6',
    name: '外研九年级下册',
    description: '外研版九年级下册',
    category: '外研版英语',
    url: '/dicts/WaiYanSheChuZhong_6_T.json',
    length: 128,
    language: 'en',
  },
  {
    id: 'beishi1',
    name: '高中必修1',
    description: '北师大版高中必修1',
    category: '北师大版英语',
    url: '/dicts/BeiShiGaoZhong_1_T.json',
    length: 226,
    language: 'en',
  },
  {
    id: 'beishi2',
    name: '高中必修2',
    description: '北师大版高中必修2',
    category: '北师大版英语',
    url: '/dicts/BeiShiGaoZhong_2_T.json',
    length: 244,
    language: 'en',
  },
  {
    id: 'beishi3',
    name: '高中必修3',
    description: '北师大版高中必修3',
    category: '北师大版英语',
    url: '/dicts/BeiShiGaoZhong_3_T.json',
    length: 295,
    language: 'en',
  },
  {
    id: 'beishi4',
    name: '高中必修4',
    description: '北师大版高中必修4',
    category: '北师大版英语',
    url: '/dicts/BeiShiGaoZhong_4_T.json',
    length: 336,
    language: 'en',
  },
  {
    id: 'beishi5',
    name: '高中必修5',
    description: '北师大版高中必修5',
    category: '北师大版英语',
    url: '/dicts/BeiShiGaoZhong_5_T.json',
    length: 327,
    language: 'en',
  },
  {
    id: 'beishi6',
    name: '高中选修6',
    description: '北师大版高中选修6',
    category: '北师大版英语',
    url: '/dicts/BeiShiGaoZhong_6_T.json',
    length: 271,
    language: 'en',
  },
  {
    id: 'beishi7',
    name: '高中选修7',
    description: '北师大版高中选修7',
    category: '北师大版英语',
    url: '/dicts/BeiShiGaoZhong_7_T.json',
    length: 334,
    language: 'en',
  },
  {
    id: 'beishi8',
    name: '高中选修8',
    description: '北师大版高中选修8',
    category: '北师大版英语',
    url: '/dicts/BeiShiGaoZhong_8_T.json',
    length: 364,
    language: 'en',
  },
  {
    id: 'beishi9',
    name: '高中选修9',
    description: '北师大版高中选修9',
    category: '北师大版英语',
    url: '/dicts/BeiShiGaoZhong_9_T.json',
    length: 299,
    language: 'en',
  },
  {
    id: 'beishi10',
    name: '高中选修10',
    description: '北师大版高中选修10',
    category: '北师大版英语',
    url: '/dicts/BeiShiGaoZhong_10_T.json',
    length: 267,
    language: 'en',
  },
  {
    id: 'beishi11',
    name: '高中选修11',
    description: '北师大版高中选修11',
    category: '北师大版英语',
    url: '/dicts/BeiShiGaoZhong_11_T.json',
    length: 330,
    language: 'en',
  },
  {
    id: 'SATen',
    name: 'SAT en-en',
    description: 'SAT英英',
    category: 'en2en',
    url: '/dicts/SATen.json',
    length: 2681,
    language: 'en',
  },
  {
    id: '4000_Essential_English_Words1',
    name: 'Essential Words',
    description: '4000 Essential English Words meaning',
    category: 'en2en',
    url: '/dicts/4000_Essential_English_Words-meaning.json',
    length: 3600,
    language: 'en',
  },
  {
    id: '4000_Essential_English_Words2',
    name: 'Essential Words',
    description: '4000 Essential English Words sentence',
    category: 'en2en',
    url: '/dicts/4000_Essential_English_Words-sentence.json',
    length: 3600,
    language: 'en',
  },
  {
    id: 'suffix word',
    name: 'suffix word',
    description: 'common suffix',
    category: 'en2en',
    url: '/dicts/suffix word.json',
    length: 126,
    language: 'en',
  },
  {
    id: 'word roots1',
    name: 'word roots1',
    description: 'common roots',
    category: 'en2en',
    url: '/dicts/word roots1.json',
    length: 368,
    language: 'en',
  },
  {
    id: 'ieltsWang3',
    name: '雅思王C3',
    description: '雅思听力特别名词语料库',
    category: '雅思王听力语料库',
    url: '/dicts/IELTS_WANG_3.json',
    length: 1135,
    language: 'en',
  },
  {
    id: 'ieltsWang4',
    name: '雅思王C4',
    description: '雅思听力形容词副词语料库',
    category: '雅思王听力语料库',
    url: '/dicts/IELTS_WANG_4.json',
    length: 346,
    language: 'en',
  },
  {
    id: 'ieltsWang5',
    name: '雅思王C5',
    description: '吞音连读混合训练语料库',
    category: '雅思王听力语料库',
    url: '/dicts/IELTS_WANG_5.json',
    length: 1569,
    language: 'en',
  },
  {
    id: 'ieltsWang11',
    name: '雅思王C11',
    description: '综合测试',
    category: '雅思王听力语料库',
    url: '/dicts/IELTS_WANG_11.json',
    length: 1738,
    language: 'en',
  },
  {
    id: 'japanese001',
    name: '日语常见词',
    description: '日语常用单词',
    category: '日语学习',
    url: '/dicts/Japanesebasicword.json',
    length: 100,
    language: 'romaji',
  },
  {
    id: 'japanese006',
    name: 'N1',
    description: '日语N1',
    category: '日语学习',
    url: '/dicts/JapVocabList.N1.json',
    length: 3477,
    language: 'romaji',
  },
  {
    id: 'japanese005',
    name: 'N2',
    description: '日语N2',
    category: '日语学习',
    url: '/dicts/JapVocabList.N2.json',
    length: 1836,
    language: 'romaji',
  },
  {
    id: 'japanese004',
    name: 'N3',
    description: '日语N3',
    category: '日语学习',
    url: '/dicts/JapVocabList.N3.json',
    length: 1830,
    language: 'romaji',
  },
  {
    id: 'japanese003',
    name: 'N4',
    description: '日语N4',
    category: '日语学习',
    url: '/dicts/JapVocabList.N4.json',
    length: 635,
    language: 'romaji',
  },
  {
    id: 'japanese002',
    name: 'N5',
    description: '日语N5',
    category: '日语学习',
    url: '/dicts/JapVocabList.N5.json',
    length: 670,
    language: 'romaji',
  },
]

/**
 * An object-map from dictionary IDs to dictionary themselves.
 */
export const idDictionaryMap: Record<string, DictionaryResource> = Object.fromEntries(dictionaries.map((dict) => [dict.id, dict]))
