import { Component, OnInit } from '@angular/core';
import { TemplateService } from '../../services/template.service';
import { groupboxType } from '../../enums/enumGroupboxComponent';
import { template } from '../../models/template';

@Component({
  selector: 'app-template-page',
  templateUrl: './template-page.component.html',
  styleUrls: ['./template-page.component.css']
})
export class TemplatePageComponent implements OnInit {
  public groupboxType = groupboxType
  public selectedTemplate:string = ""
  public comboTemplate = [];
  public templates:template[];

  constructor(private _templateService:TemplateService) { }

  ngOnInit(): void 
  {
    this.setTemplates()
  }

  public setTemplates():void
  {
    this._templateService.getTemplates()
    .subscribe( 
      {
        next:(resp:template[])=>
        {
          this.templates = resp
        },
        error:()=>
        {
          
        }
      }
    );

  }

  public onInsertTemplate(templates:template[]):void
  {
    this._templateService.insertTemplates(templates)
    .subscribe( 
      {
        next:(resp:any)=>
        {
          
        },
        error:()=>
        {
          
        }
      }
    );
  }

  onOptionChange(nameTemplate: string) 
  {
    this.selectedTemplate = nameTemplate
    this._templateService.updateSelectionTemplate(nameTemplate)
    .subscribe( 
      {
        next:(resp:any)=>
        {
          
        },
        error:()=>
        {
          
        }
      }
    );
  }

  onDeleteChange(templates:template[]) 
  {
    this._templateService.deleteTemplate(templates).subscribe( 
      {
        next:(resp:any)=>
        {
          
        },
        error:()=>
        {
          
        }
      }
    );
  }

}
