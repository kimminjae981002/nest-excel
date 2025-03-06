import { Injectable, UploadedFile, UseInterceptors } from '@nestjs/common';
import { CreateExcelDto } from './dto/create-excel.dto';
import { UpdateExcelDto } from './dto/update-excel.dto';
import * as XLSX from 'xlsx';
import { FileInterceptor } from '@nestjs/platform-express';

@Injectable()
export class ExcelService {
  @UseInterceptors(FileInterceptor('file'))
  handleExcel(@UploadedFile() file) {
    const workBook = XLSX.read(file.buffer, { type: 'buffer' });
  }

  findAll() {
    return `This action returns all excel`;
  }

  findOne(id: number) {
    return `This action returns a #${id} excel`;
  }

  update(id: number, updateExcelDto: UpdateExcelDto) {
    return `This action updates a #${id} excel`;
  }

  remove(id: number) {
    return `This action removes a #${id} excel`;
  }
}
