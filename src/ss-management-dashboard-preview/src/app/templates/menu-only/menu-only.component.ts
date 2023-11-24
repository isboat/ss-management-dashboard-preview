import { Component, OnInit, Input, Inject, ElementRef, ViewChild } from '@angular/core';
import { DOCUMENT } from "@angular/common";
import { PreviewDataResponse } from 'src/app/data.model';

@Component({
    selector: 'menu-only',
    templateUrl: './menu-only.component.html',
    styleUrls: ['./menu-only.component.css']
})
export class MenuOnlyComponent implements OnInit {
    @ViewChild('menuOnly') menuOnlyEle: ElementRef;

    @Input() data: PreviewDataResponse;
    @Input() halfScreen: boolean;

    constructor(@Inject(DOCUMENT) private document: any) {
    }

    ngOnInit() {

    }
    ngAfterViewInit() {
        if(this.halfScreen)
        {        
            this.menuOnlyEle.nativeElement.classList.add('half-screen');
        }
    }
}
