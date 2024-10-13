import { Routes } from '@angular/router';
import { AsciiToTextComponent } from '../tools/client-side/ascii-to-text/ascii-to-text.component';
import { GuidComponent } from '../tools/client-side/guid/guid.component';
import { Base64ConverterComponent } from '../tools/client-side/base64-converter/base64-converter.component';
import { JwtToJsonComponent } from '../tools/client-side/jwt-to-json/jwt-to-json.component';
import { TextToCronComponent } from '../tools/client-side/text-to-cron/text-to-cron.component';
import { DdsToPngComponent } from '../tools/client-side/dds-to-png/dds-to-png.component';
import { ImageConverterComponent } from '../tools/server-side/image-converter/image-converter.component';

export const routes: Routes = [
  {
    path: 'ascii-to-text',
    pathMatch: 'full',
    component: AsciiToTextComponent
  },
  {
    path: 'guid',
    pathMatch: 'full',
    component: GuidComponent
  },
  {
    path: 'base64-converter',
    pathMatch: 'full',
    component: Base64ConverterComponent
  },
  {
    path: 'jwt-decoder',
    pathMatch: 'full',
    component: JwtToJsonComponent
  },
  {
    path: 'text-to-cron',
    pathMatch: 'full',
    component: TextToCronComponent
  },
  {
    path: 'dds-to-png',
    pathMatch: 'full',
    component: DdsToPngComponent
  },
  {
    path: 'image-converter',
    pathMatch: 'full',
    component: ImageConverterComponent
  }
];
