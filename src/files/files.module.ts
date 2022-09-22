import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { FilesService } from './files.service';
import { FilesController } from './files.controller';

@Module( {
	controllers: [ FilesController ],
	providers: [ FilesService ],
	exports: [ FilesService ],
	imports: [
		ConfigModule
	]
} )
export class FilesModule { }
