import { Component, OnInit, Input, Inject, EventEmitter, Output } from '@angular/core';
import { DOCUMENT } from "@angular/common";
import { PreviewDataResponse } from 'src/app/data.model';

@Component({
    selector: 'media-top-menu-bottom',
    templateUrl: './media-top-menu-bottom.component.html',
    styleUrls: ['./media-top-menu-bottom.component.css']
})
export class MediaTopMenuBottomComponent implements OnInit {

    @Input() data: PreviewDataResponse;

    constructor(@Inject(DOCUMENT) private document: any) {
    }

    ngOnInit() {

    }
}
