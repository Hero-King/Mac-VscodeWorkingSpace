const xlsx = require('xlsx');
const fs = require('fs');

// 读取Excel文件
const workbook = xlsx.readFile('students_info.xlsx');
const sheetName = workbook.SheetNames[0];
const worksheet = workbook.Sheets[sheetName];
const jsonData = xlsx.utils.sheet_to_json(worksheet);

// 创建VCF格式的联系人信息
function createVcf(studentName, fatherName, fatherPhone, motherName, motherPhone) {
  let vcf = [];
  vcf.push('BEGIN:VCARD');
  vcf.push('VERSION:3.0');
  vcf.push(`FN:${studentName}`);
  if (fatherPhone) {
    vcf.push(`TEL;TYPE=${fatherName}:${fatherPhone}`);
  }
  if (motherPhone) {
    vcf.push(`TEL;TYPE=${motherName}:${motherPhone}`);
  }
  vcf.push(`NOTE:Father: ${fatherName}, Mother: ${motherName}`);
  vcf.push('END:VCARD');
  return vcf.join('\n');
}

// 生成VCF文件
const vcfData = jsonData.map(row => {
  return createVcf(row['姓名'], row['监护人1'], row['电话1'], row['监护人2'], row['电话2']);
}).join('\n');

fs.writeFileSync('contacts.vcf', vcfData, 'utf-8');
console.log('VCF文件生成完毕！');
