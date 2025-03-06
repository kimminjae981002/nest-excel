import {
  Controller,
  Post,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import * as XLSX from 'xlsx';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('excel')
export class ExcelController {
  constructor() {}

  @Post()
  @UseInterceptors(FileInterceptor('file'))
  handleExcel(@UploadedFile() file) {
    // xlsx buffer 생성
    const workBook = XLSX.read(file.buffer, { type: 'buffer' });
    // 첫번째 시트 이름 검색
    const sheetName = workBook.SheetNames[0];

    // 첫번째 sheet를 사용
    const sheet = workBook.Sheets[sheetName];

    // sheet의 정보를 json array로 변환한다.
    const rows = XLSX.utils.sheet_to_json(sheet, { defval: null });

    return rows;
  }
}
