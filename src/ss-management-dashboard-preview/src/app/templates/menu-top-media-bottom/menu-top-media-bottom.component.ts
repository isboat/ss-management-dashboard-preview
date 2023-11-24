import { Component, OnInit, Input, Inject, EventEmitter, Output } from '@angular/core';
import { DOCUMENT } from "@angular/common";
import { PreviewDataResponse } from 'src/app/data.model';

@Component({
    selector: 'menu-top-media-bottom',
    templateUrl: './menu-top-media-bottom.component.html',
    styleUrls: ['./menu-top-media-bottom.component.css']
})
export class MenuTopMediaBottomComponent implements OnInit {

    @Input() data: PreviewDataResponse;

    constructor(@Inject(DOCUMENT) private document: any) {
    }

    ngOnInit() {

    }
}
