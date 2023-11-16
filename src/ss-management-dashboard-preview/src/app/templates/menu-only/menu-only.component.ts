import { Component, OnInit, Input, Inject, EventEmitter, Output } from '@angular/core';
import { DOCUMENT } from "@angular/common";
import { PreviewDataResponse } from 'src/app/data.model';

@Component({
    selector: 'menu-only',
    templateUrl: './menu-only.component.html',
    styleUrls: ['./menu-only.component.css']
})
export class MenuOnlyComponent implements OnInit {

    @Input() data: PreviewDataResponse;

    constructor(@Inject(DOCUMENT) private document: any) {
    }

    ngOnInit() {

    }
}
