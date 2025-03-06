import { Injectable, UploadedFile, UseInterceptors } from '@nestjs/common';
import * as XLSX from 'xlsx';
import { FileInterceptor } from '@nestjs/platform-express';

@Injectable()
export class ExcelService {}
