import { Component, OnInit, Input, ElementRef, ViewChild} from '@angular/core';
import { PreviewDataResponse } from 'src/app/data.model';

@Component({
    selector: 'current-datetime',
    templateUrl: './current-datetime.component.html',
    styleUrls: ['./current-datetime.component.css']
})
export class CurrentDateTimeComponent implements OnInit {

    @Input() data: PreviewDataResponse;
    @ViewChild('ele') ele: ElementRef;

    currentDatetimeStr: string =  "No DATETIME DATA";

    constructor() {
    }

    ngAfterViewInit()
    {
        if(this.data.layout.templateProperties)
        {
            var styles = '';
            this.data.layout.templateProperties.forEach(tp => {
                if(tp.key == "textColor")
                {
                    styles += ` color:${tp.value};`
                }
                if(tp.key == "textFont")
                {
                    styles += ` font-size:${tp.value};`
                }
                if(tp.key == "text-align")
                {
                    styles += ` text-align:${tp.value};`
                }
            });
            if(styles)this.ele.nativeElement.setAttribute('style', styles)
        }
    }

    ngOnInit() {
        setInterval(() => { this.format(this.data.layout.subType)}, 1000);
    }

    format(subType: string): void
    {
        const date = new Date();
        const day = date.getDate();
        const monthIndex = date.getMonth() + 1;
        const year = date.getFullYear();
        const minutes = date.getMinutes();
        const hours = date.getHours();
        const seconds = date.getSeconds();
        
        if(!subType) subType = "dd/mm/yyyy tt:mm:ss";

        switch (subType) {
            case "dd/mm/yyyy tt:mm:ss":
                this.currentDatetimeStr = `${day}/${monthIndex}/${year} ${hours}:${minutes}:${seconds}`;
                break;
            case "mm/dd/yyyy tt:mm:ss":
                this.currentDatetimeStr = `${monthIndex}/${day}/${year} ${hours}:${minutes}:${seconds}`;        
                break;
            default:
                break;
        }
        console.log(this.currentDatetimeStr)
    }
}
