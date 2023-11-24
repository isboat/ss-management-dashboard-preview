import { Component, OnInit, Input, Inject, EventEmitter, Output, ElementRef, ViewChild } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { DOCUMENT } from "@angular/common";
import { PreviewDataResponse } from 'src/app/data.model';

@Component({
    selector: 'media-only',
    templateUrl: './media-only.component.html',
    styleUrls: ['./media-only.component.css'],
    animations: [
        trigger('btnState', [
            state('show', style({
                display: 'block',
                transform: 'scale(1.5)'
            })),
            state('hide', style({
                display: 'none',
            })),
            transition('show => hide', animate('2000ms ease-out')),
            transition('hide => show', animate('2000ms ease-in')),
            transition('* => *', animate('1000ms ease'))
        ]

        )
    ]
})
export class MediaOnlyComponent implements OnInit {

    @ViewChild('mediaEle') mediaEle: ElementRef;

    @Input() data: PreviewDataResponse;
    @Input() showFullscreen: boolean;
    @Input() halfScreen: boolean;

    @Output() navigateButtonEmitter = new EventEmitter();

    elem;

    btnAnimate: string = 'hide';
    public onFullScreen: boolean;
    public hasLayout: boolean;

    constructor(@Inject(DOCUMENT) private document: any) {
        this.elem = document.documentElement;
    }

    ngOnInit() {

    }
    ngAfterViewInit() {
        if(this.halfScreen)
        {        
            this.mediaEle.nativeElement.classList.add('half-screen');
        }
    }

    isVideoMedia(mediaType: number): boolean
    {
        return mediaType === 2; //1 for image, 2 for video
    }

    trimYoutubeUrl(url: string)
    {
        var str = url.replace("watch?v=", "embed/")
        if(str.indexOf("youtube") > -1)
        {
            str = `${str}?autoplay=1`;
        }

        return str;
    }

    openFullscreen() {

        if (this.elem.requestFullscreen) {
            this.elem.requestFullscreen();
        } else if (this.elem.mozRequestFullScreen) {
            /* Firefox */
            this.elem.mozRequestFullScreen();
        } else if (this.elem.webkitRequestFullscreen) {
            /* Chrome, Safari and Opera */
            this.elem.webkitRequestFullscreen();
        } else if (this.elem.msRequestFullscreen) {
            /* IE/Edge */
            this.elem.msRequestFullscreen();
        }
        this.onFullScreen = true;
    }

    /* Close fullscreen */
    closeFullscreen() {
        if (this.document.exitFullscreen) {
            this.document.exitFullscreen();
        } else if (this.document.mozCancelFullScreen) {
            /* Firefox */
            this.document.mozCancelFullScreen();
        } else if (this.document.webkitExitFullscreen) {
            /* Chrome, Safari and Opera */
            this.document.webkitExitFullscreen();
        } else if (this.document.msExitFullscreen) {
            /* IE/Edge */
            this.document.msExitFullscreen();
        }

        this.onFullScreen = false;
    }

    onMouseOver() {
        this.btnAnimate = 'show';
        setTimeout(() => {
            this.btnAnimate = 'hide';
        }, 5000)
    }

    onMouseOut() {
        this.btnAnimate = 'hide';
    }

}
